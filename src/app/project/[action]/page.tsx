"use client";

import CustomButton from "@/components/Button/CustomButton";
import theme from "@/theme/theme";
import { capitalizeFirstChar, setErrObject } from "@/utils/app";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Divider,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Tab,
  Tabs,
  Button,
  Popover,
  Menu,
  MenuItem,
} from "@mui/material";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AlertSwal from "@/components/Alert/AlertSwal";
import { IProject } from "@/types/project.type";
import ProjectApi from "@/api/project.api";
import CustomerApi from "@/api/customer.api";
import { ICustomer } from "@/types/customer";
import CustomInputWithTags from "@/components/Textfield/CustomInputWithTags";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import CustomDatePicker from "@/components/Textfield/CustomDatePicker";
import SupplierApi from "@/api/supplier.api";
import { ISupplier } from "@/types/supplier.type";
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import AppApi from "@/api/app.api";
import CustomSelect from "@/components/Select/CustomSelect";
import { STATUS, TYPE } from "@/constants/app";
import CustomFileUpload from "@/components/CustomImageUpload/CustomFileUpload";
import { formatPrice } from "@/utils/formatData";
import BasicModal from "./Modal";

type Props = {};

const initailError = {
  projectName: false,
  projectScope: false,
  projectDueDate: false,
  projectPrice: false,
  projectType: false,
  customerId: false,
  projectStatus: false,
  orders: [
    {
      supplierId: false,
      orderName: false,
      orderDueDate: false,
      orderCost: false,
      orderStatus: false,
      orderWaranty: false,
    },
  ],
};

const initialState: IProject = {
  projectName: "",
  projectScope: "",
  projectStatus: "TYPE_1",
  projectWaranty: "",
  projectMa: 0,
  projectMaPerYear: 0,
  projectDueDate: "",
  projectType: "",
  projectPrice: 0,
  projectCost: 0,
  projectProfit: 0,
  orders: [
    {
      supplierId: null,
      orderName: "",
      orderStatus: "",
      orderDueDate: "",
      remark: "",
      orderCost: 0,
      orderWaranty: "",
      documents: [
        {
          docPeriod: "",
          docNo: "",
          docType: "",
          filePath: "",
        },
      ],
    },
  ],
  documents: [
    {
      docPeriod: "",
      docNo: "",
      docType: "",
      filePath: "",
    },
  ],
  documentsMa: [],
};

export default function ProjectAction({}: Props) {
  const router = useRouter();
  const projectId = Number(useSearchParams().get("projectId"));
  const action = useParams().action;
  const [form, setForm] = useState<IProject>(initialState);
  const [errors, setErrors] = useState<any>(initailError);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [suppliers, setSuppliers] = useState<ISupplier[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();
  const [selectedSupplier, setSelectedSupplier] = useState<ISupplier[]>([]);
  const [tab, setTab] = useState<any>(0);
  const [popupsOpen, setPopupsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  useEffect(() => {
    getAllCustomer(1, 1000);
    getAllSupplier(1, 1000);
    if (projectId) {
      getProjectDetail(projectId);
    }
  }, []);

  useEffect(() => {
    const totalCost = form.orders.reduce(
      (sum, order) => sum + Number(order.orderCost),
      0
    );
    handleChange("projectCost", Number(totalCost));
    handleChange(
      "projectProfit",
      Number(form.projectPrice) - Number(totalCost)
    );
  }, [form.orders, form.projectPrice]);

  const getAllCustomer = async (
    page: number,
    pageLimit: number,
    search?: string
  ) => {
    try {
      const { data } = await CustomerApi.findAll({ page, pageLimit, search });
      setCustomers(data);
    } catch (error) {}
  };

  const getAllSupplier = async (
    page: number,
    pageLimit: number,
    search?: string
  ) => {
    try {
      const { data } = await SupplierApi.findAll({ page, pageLimit, search });
      setSuppliers(data);
    } catch (error) {}
  };

  const getCustomerDetail = async (cusId: number) => {
    try {
      const { data } = await CustomerApi.findOne(cusId);
      setSelectedCustomer(data);
    } catch (error) {}
  };

  const getSupplierDetail = async (supId: number) => {
    try {
      const { data } = await SupplierApi.findOne(supId);
      return data;
    } catch (error) {}
  };

  const handleInputChange = async (inputValue: string, type: string) => {
    if (type === "customer") {
      getAllCustomer(1, 100, inputValue);
    } else {
      getAllSupplier(1, 1000);
    }
  };

  const handleChangeAutocomplete = async (value: ICustomer, type: string) => {
    if (type === "customer") {
      setSelectedCustomer(value);
      if (value) {
        handleChange("customerId", value.id);
      }
    } else {
      setSelectedSupplier((prev) => {
        const newArray = [...prev];
        newArray[tab] = value;
        return newArray;
      });
      if (value) {
        handleChange("supplierId", value.id, tab);
      }
    }
  };

  const handleClearAutocomplete = async () => {
    try {
      setSelectedCustomer(undefined);
      handleChange("customerId", null);
    } catch (error) {
      throw error;
    } finally {
    }
  };

  const getProjectDetail = async (cusId: number) => {
    try {
      const { data } = await ProjectApi.findOne(cusId);
      setForm(data);

      if (data.customerId) {
        await getCustomerDetail(data.customerId);
      }
      if (data.orders.length) {
        for (const [index, order] of data.orders.entries()) {
          if (order.supplierId) {
            const supplierData = await getSupplierDetail(order.supplierId);
            setSelectedSupplier((prev) => {
              const newArray = [...prev];
              newArray[index] = supplierData as ISupplier;
              return newArray;
            });
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (key: string, value: any, idx?: number) => {
    if (idx !== undefined) {
      setForm((prev: any) => {
        const updatedArr = [...prev.orders];
        updatedArr[idx] = {
          ...updatedArr[idx],
          [key]: value,
        };
        return { ...prev, orders: updatedArr };
      });

      setErrors((prevErrors: any) => {
        const updatedErr = [...prevErrors.orders];
        updatedErr[idx] = {
          ...updatedErr[idx],
          [key]: false,
        };
        return { ...prevErrors, orders: updatedErr };
      });
    } else {
      setForm((prev: any) => ({ ...prev, [key]: value }));

      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [key]: false,
      }));
    }
  };

  const handleAddOrder = () => {
    setForm((prev: any) => ({
      ...prev,
      orders: [
        ...prev.orders,
        {
          supplierId: null,
          orderName: "",
          orderStatus: "TYPE_1",
          orderDueDate: "",
          remark: "",
          orderCost: 0,
          files: [],
        },
      ],
    }));
    setErrors((prev: any) => ({
      ...prev,
      orders: [
        ...prev.orders,
        {
          supplierId: false,
          orderName: false,
          orderDueDate: false,
          orderStatus: false,
          orderCost: false,
          orderWaranty: false,
        },
      ],
    }));
    setTab(form?.orders?.length);
  };

  const handleDeleteOrder = (index: number) => {
    if (index >= 1) {
      setTab(index - 1);
    }
    setForm((prev: any) => ({
      ...prev,
      orders: prev.orders.filter((_: any, idx: number) => idx !== index),
    }));
    setErrors((prev: any) => ({
      ...prev,
      orders: prev.orders.filter((_: any, idx: number) => idx !== index),
    }));
    setSelectedSupplier((prev: any) =>
      prev.filter((_: any, idx: number) => idx !== index)
    );
  };

  const handleSubmit = async () => {
    const newErrors = setErrObject(form, errors);

    newErrors.customerId === !form.customerId;
    delete newErrors.projectProfit;
    setErrors(newErrors);
    console.log(newErrors);

    const isHasError =
      Object.values(newErrors).some((error) => error === true) || // Check main object
      newErrors.orders.some(
        (
          order: any // Check nested orders array
        ) => Object.values(order).some((error) => error === true) // Check each order's fields
      );

    if (isHasError) {
      return;
    }

    let body = form;
    body.projectPrice = Number(form.projectPrice);
    body.projectCost = Number(form.projectCost);
    body.projectProfit = Number(form.projectProfit);
    body.projectMa = Number(form.projectMa);
    body.projectMaPerYear = Number(form.projectMaPerYear);
    body.orders = body.orders = body.orders.map((order) => ({
      ...order,
      orderCost: Number(order.orderCost),
      projectId,
    }));

    try {
      let data;
      if (projectId) {
        data = await ProjectApi.update(projectId, body);
      } else {
        data = await ProjectApi.create(body);
      }

      if (data) {
        AlertSwal({
          icon: "success",
          text: `${
            projectId ? "แก้ไขข้อมูลลูกค้าสำเร็จ" : "สร้างลูกค้าใหม่สำเร็จ"
          }`,
        });
        router.back();
      } else {
        AlertSwal({
          icon: "error",
          text: `${
            projectId
              ? "แก้ไขข้อมูลลูกค้าไม่สำเร็จ"
              : "สร้างลูกค้าใหม่ไม่สำเร็จ"
          }`,
        });
      }
    } catch (error: any) {
      if (
        error?.message?.some(
          (msg: string) =>
            msg.includes(
              "supplierId must be a number conforming to the specified constraints"
            ) || msg === "orderDueDate must be a valid ISO 8601 date string"
        )
      ) {
        AlertSwal({
          icon: "error",
          text: "กรุณากรอกข้อมูล ออเดอร์ ให้ครบถ้วน",
        });
      } else {
        AlertSwal({
          icon: "error",
          text: `${
            projectId
              ? "แก้ไขข้อมูลลูกค้าไม่สำเร็จ"
              : "สร้างลูกค้าใหม่ไม่สำเร็จ"
          }`,
        });
      }
    }
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleChangeNumDocuments = (num: number) => {
    setForm((prev: any) => ({
      ...prev,
      documents:
        num <= (prev?.documents?.length || 0)
          ? prev?.documents?.slice(0, num) // Truncate the array
          : [
              ...(prev?.documents || []),
              ...Array(Math.max(num - (prev?.documents?.length || 0), 0)).fill({
                docPeriod: "",
                docNo: "",
                docType: "",
                filePath: "",
              }),
            ],
    }));
  };

  const handleChangeDocuments = (key: string, value: string, index: number) => {
    setForm((prev: any) => {
      const updatedArr = [...prev.documents];
      updatedArr[index] = {
        ...updatedArr[index],
        [key]: value,
      };

      return { ...prev, documents: updatedArr };
    });
  };

  const handleChangeFileProjectUpload = async (files: any, idx: number) => {
    try {
      const uploadedFiles = await AppApi.uploadFile([files]);

      let combinedFiles = [...uploadedFiles];
      setForm((prev: any) => {
        const updatedArr = [...prev.documents];
        updatedArr[idx] = {
          ...updatedArr[idx],
          filePath: combinedFiles[0].filePath,
        };
        return { ...prev, documents: updatedArr };
      });
    } catch (error) {
      AlertSwal({
        icon: "error",
        title: "อัปโหลดรูปไม่สำเร็จ",
        text: "เฉพาะไฟล์ .XLSX, .XLS, ,PDF เท่านั้น",
      });
    }
  };

  const handleChangeNumDocumentsOrder = (num: number) => {
    setForm((prev: any) => {
      const updatedOrders = [...prev.orders];

      const targetOrder = { ...updatedOrders[tab] };

      const currentLength = targetOrder.documents?.length || 0;

      if (num <= currentLength) {
        targetOrder.documents = targetOrder.documents.slice(0, num);
      } else {
        const additionalDocuments = Array.from(
          { length: num - currentLength },
          () => ({
            docPeriod: "",
            docNo: "",
            docType: "",
            filePath: "",
          })
        );

        targetOrder.documents = [
          ...(targetOrder.documents || []),
          ...additionalDocuments,
        ];
      }

      updatedOrders[tab] = targetOrder;
      return { ...prev, orders: updatedOrders };
    });
  };

  const handleChangeDocumentsOrder = (
    key: string,
    value: string,
    index: number,
    subIndex: number
  ) => {
    setForm((prev: any) => {
      const updatedOrders = [...prev.orders];
      const targetOrder = { ...updatedOrders[index] };
      const updatedDocuments = [...targetOrder.documents];
      updatedDocuments[subIndex] = {
        ...updatedDocuments[subIndex],
        [key]: value,
      };
      targetOrder.documents = updatedDocuments;
      updatedOrders[index] = targetOrder;
      return { ...prev, orders: updatedOrders };
    });
  };

  const handleChangeFileOrderUpload = async (
    files: any,
    idx: number,
    subIdx: number
  ) => {
    try {
      const uploadedFiles = await AppApi.uploadFile([files]);

      let combinedFiles = [...uploadedFiles];
      setForm((prev: any) => {
        const updatedOrders = [...prev.orders];
        const targetOrder = { ...updatedOrders[idx] };
        const updatedDocuments = [...targetOrder.documents];
        updatedDocuments[subIdx] = {
          ...updatedDocuments[subIdx],
          filePath: combinedFiles[0].filePath,
        };
        targetOrder.documents = updatedDocuments;
        updatedOrders[idx] = targetOrder;
        return { ...prev, orders: updatedOrders };
      });
    } catch (error) {
      AlertSwal({
        icon: "error",
        title: "อัปโหลดรูปไม่สำเร็จ",
        text: "เฉพาะไฟล์ .XLSX, .XLS, ,PDF เท่านั้น",
      });
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownloadTemplate = async (type: string) => {
    try {
      if (type) {
        const data = await ProjectApi.excelTemplate(projectId, type);
      }
    } catch (error) {
      console.error("Error downloading template:", error);
    }
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box p={2} sx={{ border: "1px solid #DEDEDE", borderRadius: "8px" }}>
      <Box
        display={"flex"}
        sx={{
          border: "1px solid #DEDEDE",
          borderRadius: "8px",
          p: 3,
          bgcolor: theme.palette.primary.light,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          {capitalizeFirstChar(action)} Project
        </Typography>
      </Box>
      {/*//!-------------------- project secction --------------------*/}
      <Box display="flex" alignItems="flex-start" p={3}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={12} mb={2}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h4" color="initial">
                ข้อมูลโปรเจ็ค
              </Typography>
              <Box display={"flex"} gap={2}>
                {form.projectStartWarantyDate && (
                  <BasicModal
                    projectDetail={form}
                    getProjectDetail={getProjectDetail}
                  />
                )}
                <Button
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  ดาวน์โหลดแบบฟอร์ม
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={() => handleDownloadTemplate("ใบกำกับภาษี")}
                    >
                      ใบกำกับภาษี
                    </MenuItem>

                    <MenuItem
                      onClick={(e) => handleDownloadTemplate("ใบแจ้งหนี้")}
                    >
                      ใบแจ้งหนี้
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => handleDownloadTemplate("ใบวางบิล")}
                    >
                      ใบวางบิล
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => handleDownloadTemplate("ใบเสร็จรับเงิน")}
                    >
                      ใบเสร็จรับเงิน
                    </MenuItem>
                  </Menu>
                </Popover>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ชื่อโปรเจ็ค"
              value={form?.projectName}
              onChange={(value) => handleChange("projectName", value)}
              error={errors?.projectName}
              required
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <CustomSelect
              label="ประเภทโปรเจ็ค"
              options={TYPE.map((t) => t.value)}
              getOptionLabel={(o) => TYPE.find((t) => t.value === o)?.name}
              value={form.projectType}
              error={errors.projectType}
              onChange={(v) => handleChange("projectType", v)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomSelect
              label="สถานะโปรเจ็ค"
              options={STATUS.map((t) => t.value)}
              getOptionLabel={(o) => STATUS.find((t) => t.value === o)?.name}
              value={form.projectStatus}
              onChange={(v) => handleChange("projectStatus", v)}
              disabled={!form.projectId}
              error={errors?.projectStatus}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="รายละเอียดโปรเจ็ค"
              value={form?.projectScope}
              onChange={(value) => handleChange("projectScope", value)}
              error={errors?.projectScope}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ราคาโปรเจ็ค (บาท)"
              type="numberWithComma"
              value={formatPrice(form?.projectPrice)}
              onChange={(value) => handleChange("projectPrice", value)}
              error={errors?.projectPrice}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ต้นทุนโปรเจ็ค (บาท)"
              type="numberWithComma"
              value={formatPrice(form?.projectCost)}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="กำไรโปรเจ็ค (บาท)"
              type="numberWithComma"
              value={formatPrice(form?.projectProfit)}
              disabled
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <CustomDatePicker
              label="วันที่กำหนดส่ง"
              value={form?.projectDueDate}
              onChange={(value) => handleChange("projectDueDate", value)}
              error={errors?.projectDueDate}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="โปรเจ็ค MA (เดือน)"
              type="number"
              value={form?.projectMa}
              onChange={(value) => handleChange("projectMa", value)}
              error={errors?.projectMa}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomSelect
              label="จำนวน MA ต่อปี (ครั้ง)"
              options={[...Array(12)].map((_, idx) => idx + 1)}
              value={form?.projectMaPerYear}
              onChange={(value) => handleChange("projectMaPerYear", value)}
              error={errors?.projectMaPerYear}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ระยะเวลาประกัน (เดือน) "
              type="number"
              value={form?.projectWaranty}
              onChange={(value) => handleChange("projectWaranty", value)}
              error={errors?.projectWaranty}
            />
          </Grid>

          <Grid item xs={6} />
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <CustomInputWithTags
              options={customers}
              value={selectedCustomer}
              onInputChange={(v) => handleInputChange(v, "customer")}
              onChange={(v) => handleChangeAutocomplete(v, "customer")}
              label="รายชื่อลูกค้า"
              placeholder="ค้นหาโดยชื่อ"
              minRows={1}
              getOptionLabel={(option: ICustomer) =>
                ` ${option?.name} ${option?.branch} | ${option?.tel}`
              }
              onClear={() => {
                handleClearAutocomplete();
              }}
              require
              error={errors.customerId}
            />
            {selectedCustomer?.contactPersons?.length && (
              <Box>
                <Typography
                  variant="body1"
                  color="initial"
                  fontWeight={500}
                  pb={1}
                >
                  รายชื่อผู้ติดต่อ (ลูกค้า)
                </Typography>
                <TableContainer
                  sx={{
                    border: "1px solid #DEDEDE",
                    borderRadius: 2,
                    p: 2,
                    maxHeight: "400px",
                  }}
                  component={Paper}
                >
                  <Table sx={{ border: "1px solid #DEDEDE" }}>
                    <TableHead>
                      <TableRow sx={{ height: "40px" }}>
                        <TableCell align="center">ลำดับ</TableCell>
                        <TableCell>ชื่อผู้ติดต่อ</TableCell>
                        <TableCell>เบอร์โทรศัพท์</TableCell>
                        <TableCell>บทบาท</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedCustomer?.contactPersons.map((person, index) => (
                        <TableRow sx={{ height: "40px" }}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell>{person.name}</TableCell>
                          <TableCell>{person.tel}</TableCell>
                          <TableCell>{person.role}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              label="จำนวนเอกสารทั้งหมด"
              options={[...Array(10)].map((_, idx) => idx + 1)}
              value={form?.documents?.length}
              onChange={(v) => handleChangeNumDocuments(v)}
            />
            {form?.documents?.length && (
              <Box>
                <Typography
                  variant="body1"
                  color="initial"
                  fontWeight={500}
                  pb={1}
                >
                  เอกสารทั้งหมด
                </Typography>
                <TableContainer
                  sx={{
                    border: "1px solid #DEDEDE",
                    borderRadius: 2,
                    p: 2,
                    maxHeight: "400px",
                  }}
                  component={Paper}
                >
                  <Table sx={{ border: "1px solid #DEDEDE" }}>
                    <TableHead>
                      <TableRow sx={{ height: "40px" }}>
                        <TableCell align="center">ลำดับ</TableCell>
                        <TableCell>งวดที่</TableCell>
                        <TableCell>เอกสาร</TableCell>
                        <TableCell>เลขที่เอกสาร</TableCell>
                        <TableCell>ประเภทเอกสาร</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {form?.documents?.map((doc, index) => (
                        <TableRow sx={{ height: "20px" }}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell width={"1%"}>
                            <CustomSelect
                              sx={{
                                ".MuiOutlinedInput-root": {
                                  height: "25px",
                                  width: "90px",
                                  fontSize: 16,
                                },
                                ".MuiInputBase-input::placeholder": {
                                  fontSize: 16,
                                },
                              }}
                              placeholder="งวดที่"
                              value={doc?.docPeriod}
                              options={[...Array(10)].map((_, idx) =>
                                (idx + 1).toString()
                              )}
                              onChange={(v) =>
                                handleChangeDocuments("docPeriod", v, index)
                              }
                            />
                          </TableCell>
                          <TableCell align="center">
                            <CustomFileUpload
                              value={form?.documents[index]?.filePath}
                              onChange={(file) =>
                                handleChangeFileProjectUpload(file, index)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <CustomTextfield
                              sx={{
                                ".MuiOutlinedInput-root": {
                                  height: "25px",
                                  fontSize: 16,
                                },
                                ".MuiInputBase-input::placeholder": {
                                  fontSize: 16,
                                },
                              }}
                              placeholder="กรอกเลขที่เอกสาร"
                              value={doc?.docNo}
                              onChange={(v) =>
                                handleChangeDocuments("docNo", v, index)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <CustomSelect
                              sx={{
                                ".MuiOutlinedInput-root": {
                                  height: "25px",
                                  fontSize: 16,
                                },
                                ".MuiInputBase-input::placeholder": {
                                  fontSize: 16,
                                },
                              }}
                              placeholder="เลือกชนิดเอกสาร"
                              value={doc?.docType}
                              options={["ใบเสร็จ", "ใบกำกับ", "อื่นๆ"]}
                              onChange={(v) =>
                                handleChangeDocuments("docType", v, index)
                              }
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider
        sx={{ borderWidth: 4, borderRadius: 4, borderColor: "#898989" }}
      />
      {/*//!-------------------- order secction --------------------*/}
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="flex-start"
        px={3}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          mb={2}
        >
          <Typography variant="h4" color="initial">
            ข้อมูลออเดอร์
          </Typography>
          <CustomButton
            style={"outlined"}
            text="เพิ่ม ออเดอร์"
            size="small"
            onClick={() => handleAddOrder()}
          />
        </Box>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
          sx={{ ml: 3 }}
        >
          {form?.orders?.map((_, index) => (
            <Tab
              sx={{
                ml: 0.5,
                fontSize: 20,
                bgcolor: "#D3D3D3",
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                "&.Mui-selected": {
                  bgcolor: "#ffdfad",
                },
              }}
              label={`ออเดอร์ ที่ ${index + 1}`}
            />
          ))}
        </Tabs>
        <Box
          component={Paper}
          elevation={1}
          border={"1px solid #DEDEDE"}
          borderRadius={4}
        >
          <Grid container spacing={2} xs={12} p={2}>
            <Grid
              item
              xs={12}
              mb={2}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant="h4" color="initial">
                รายละเอียดออเดอร์ ที่ {tab + 1}
              </Typography>
              {form.orders.length > 1 && (
                <CustomButton
                  text="ลบ ออเดอร์"
                  size="small"
                  onClick={() => handleDeleteOrder(tab)}
                />
              )}
            </Grid>

            <Grid item xs={12} mb={2}>
              <Typography variant="h4" color="initial">
                ข้อมูลออเดอร์
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ชื่อออเดอร์"
                value={form?.orders[tab]?.orderName}
                onChange={(value) => handleChange("orderName", value, tab)}
                error={errors?.orders[tab]?.orderName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ราคา (บาท)"
                type="numberWithComma"
                value={formatPrice(form?.orders[tab]?.orderCost)}
                onChange={(value) => handleChange("orderCost", value, tab)}
                error={errors?.orders[tab]?.orderCost}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomSelect
                label="สถานะออเดอร์"
                options={STATUS.map((t) => t.value)}
                getOptionLabel={(o) => STATUS.find((t) => t.value === o)?.name}
                value={form?.orders[tab]?.orderStatus}
                onChange={(value) => handleChange("orderStatus", value, tab)}
                disabled={!form.orders[tab].orderId}
                error={errors?.orders[tab]?.orderStatus}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomDatePicker
                label="วันที่กำหนดส่ง"
                value={form?.orders[tab]?.orderDueDate}
                onChange={(value) => handleChange("orderDueDate", value, tab)}
                error={errors?.orders[tab]?.orderDueDate}
                required
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ระยะเวลาประกัน (เดือน) "
                type="number"
                value={form?.orders[tab]?.orderWaranty}
                onChange={(value) => handleChange("orderWaranty", value, tab)}
                error={errors?.orders[tab]?.orderWaranty}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="หมายเหตุ"
                value={form?.orders[tab]?.remark}
                onChange={(value) => handleChange("remark", value, tab)}
              />
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={6}>
              <CustomInputWithTags
                options={suppliers}
                value={selectedSupplier[tab]}
                onInputChange={(v) => handleInputChange(v, "supplier")}
                onChange={(v) => handleChangeAutocomplete(v, "supplier")}
                label="รายชื่อซัพพลายเออร์"
                placeholder="ค้นหาโดยชื่อ"
                minRows={1}
                getOptionLabel={(option: ISupplier) =>
                  ` ${option?.name} | ${option?.tel}`
                }
                onClear={() => {
                  handleClearAutocomplete();
                }}
                require
              />
              {selectedSupplier[tab]?.contactPersons.length > 0 && (
                <Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    fontWeight={500}
                    pb={1}
                  >
                    รายชื่อผู้ติดต่อ (ซัพพลายเออร์)
                  </Typography>
                  <TableContainer
                    sx={{
                      border: "1px solid #DEDEDE",
                      borderRadius: 2,
                      p: 2,
                    }}
                    component={Paper}
                  >
                    <Table sx={{ border: "1px solid #DEDEDE" }}>
                      <TableHead>
                        <TableRow sx={{ height: "40px" }}>
                          <TableCell align="center">ลำดับ</TableCell>
                          <TableCell>ชื่อผู้ติดต่อ</TableCell>
                          <TableCell>เบอร์โทรศัพ</TableCell>
                          <TableCell>บทบาท</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {selectedSupplier[tab]?.contactPersons.map(
                          (person, index) => (
                            <TableRow sx={{ height: "40px" }}>
                              <TableCell align="center">{index + 1}</TableCell>
                              <TableCell>{person.name}</TableCell>
                              <TableCell>{person.tel}</TableCell>
                              <TableCell>{person.role}</TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Grid>
            <Grid item xs={6}>
              <CustomSelect
                label="จำนวนเอกสารทั้งหมด"
                options={[...Array(10)].map((_, idx) => idx + 1)}
                value={form?.orders[tab]?.documents?.length}
                onChange={(v) => handleChangeNumDocumentsOrder(v)}
              />
              {form?.orders[tab]?.documents?.length > 0 && (
                <Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    fontWeight={500}
                    pb={1}
                  >
                    เอกสารทั้งหมด
                  </Typography>
                  <TableContainer
                    sx={{
                      border: "1px solid #DEDEDE",
                      borderRadius: 2,
                      p: 2,
                      maxHeight: "400px",
                    }}
                    component={Paper}
                  >
                    <Table sx={{ border: "1px solid #DEDEDE" }}>
                      <TableHead>
                        <TableRow sx={{ height: "40px" }}>
                          <TableCell align="center">ลำดับ</TableCell>
                          <TableCell>งวดที่</TableCell>
                          <TableCell>เอกสาร</TableCell>
                          <TableCell>เลขที่เอกสาร</TableCell>
                          <TableCell>ประเภทเอกสาร</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {form?.orders[tab].documents?.map((doc, index) => (
                          <TableRow sx={{ height: "20px" }}>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell width={"1%"}>
                              <CustomSelect
                                sx={{
                                  ".MuiOutlinedInput-root": {
                                    height: "25px",
                                    width: "90px",
                                    fontSize: 16,
                                  },
                                  ".MuiInputBase-input::placeholder": {
                                    fontSize: 16,
                                  },
                                }}
                                placeholder="งวดที่"
                                value={doc?.docPeriod}
                                options={[...Array(10)].map((_, idx) =>
                                  (idx + 1).toString()
                                )}
                                onChange={(v) =>
                                  handleChangeDocumentsOrder(
                                    "docPeriod",
                                    v,
                                    tab,
                                    index
                                  )
                                }
                              />
                            </TableCell>
                            <TableCell align="center">
                              <CustomFileUpload
                                value={
                                  form?.orders[tab]?.documents[index]?.filePath
                                }
                                onChange={(file) =>
                                  handleChangeFileOrderUpload(file, tab, index)
                                }
                              />
                            </TableCell>
                            <TableCell>
                              <CustomTextfield
                                sx={{
                                  ".MuiOutlinedInput-root": {
                                    height: "25px",
                                    fontSize: 16,
                                  },
                                  ".MuiInputBase-input::placeholder": {
                                    fontSize: 16,
                                  },
                                }}
                                placeholder="กรอกเลขที่เอกสาร"
                                value={doc?.docNo}
                                onChange={(v) =>
                                  handleChangeDocumentsOrder(
                                    "docNo",
                                    v,
                                    tab,
                                    index
                                  )
                                }
                              />
                            </TableCell>
                            <TableCell>
                              <CustomSelect
                                sx={{
                                  ".MuiOutlinedInput-root": {
                                    height: "25px",
                                    fontSize: 16,
                                  },
                                  ".MuiInputBase-input::placeholder": {
                                    fontSize: 16,
                                  },
                                }}
                                placeholder="เลือกชนิดเอกสาร"
                                value={doc?.docType}
                                options={["ใบเสร็จ", "ใบกำกับ", "อื่นๆ"]}
                                onChange={(v) =>
                                  handleChangeDocumentsOrder(
                                    "docType",
                                    v,
                                    tab,
                                    index
                                  )
                                }
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={2}
        justifyContent={"center"}
        alignSelf="flex-end"
        pt={1}
      >
        <CustomButton text="Cancel" style="outlined" />
        <CustomButton
          text="Submit"
          style="contained"
          onClick={handleSubmit} // Call handleSubmit when submitting the form
        />
      </Box>
    </Box>
  );
}
