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
import ConfirmSwal from "@/components/Alert/ConfirmSwal";
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
import CustomCheckbox from "@/components/CheckBox/CustomCheckBox";
import dayjs from "dayjs";

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
  periods: [{ periodDue: false, paymentDue: false, amount: false }],
};

const initialState: IProject = {
  projectName: "",
  projectScope: "",
  projectStatus: "ORDERED",
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
      orderStatus: "ORDERED",
      orderStatusOther: "",
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
  documents: [],
  documentsMa: [],
  periods: [
    {
      periodDue: "",
      paymentDue: "",
      amount: 0,
      receive: 0,
      detail: "",
      status: "ORDERED",
      statusOther: "",
      documents: [],
      isPaid: false,
    },
  ],
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
  const [tabProject, setTabProject] = useState<any>(0);
  const [popupsOpen, setPopupsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const isDisableAll = action === "view";

  useEffect(() => {
    getAllCustomer(1, 1000);
    getAllSupplier(1, 1000);
    if (projectId) {
      getProjectDetail(projectId);
    }
  }, []);

  useEffect(() => {
    const lastPeriod = form.periods[form.periods.length - 1];
    handleChange("projectDueDate", lastPeriod.periodDue);
  }, [form.periods]);

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

  const handleChangeAutocomplete = async (
    value: ICustomer | ISupplier,
    type: string
  ) => {
    if (type === "customer") {
      setSelectedCustomer(value as ICustomer);
      if (value) {
        handleChange("customerId", value.id);
      }
    } else {
      setSelectedSupplier((prev) => {
        const newArray = [...prev];
        newArray[tab] = value as ISupplier;
        return newArray;
      });
      if (value) {
        handleChange("supplierId", value.id, tab);
      }
    }
  };

  const handleClearAutocomplete = async (type: string) => {
    if (type === "project") {
      setSelectedCustomer(undefined);
      handleChange("customerId", null);
    } else {
      setSelectedSupplier((prev) => {
        const updatedSuppliers = [...prev];
        updatedSuppliers[tab] = undefined as any;
        return updatedSuppliers;
      });
      handleChange("supplierId", null, tab);
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
      setErrors((prev: any) => ({
        ...prev,
        periods:
          data?.periods?.length <= (prev?.periods?.length || 0)
            ? prev?.periods?.slice(0, data?.periods?.length)
            : [
                ...(prev?.periods || []),
                ...Array(
                  Math.max(
                    data?.periods?.length - (prev?.periods?.length || 0),
                    0
                  )
                ).fill({
                  periodDue: false,
                  paymentDue: false,
                  amount: false,
                }),
              ],
      }));
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
    const totalPeriodAmount = form.periods.reduce(
      (sum, period) => sum + period.amount,
      0
    );

    if (totalPeriodAmount != Number(form.projectPrice)) {
      return AlertSwal({
        title: "ยอดเงินที่ต้องชำระไม่ถูกต้อง",
        icon: "warning",
        text: "กรุณาตรวจสอบ ยอดเงินที่ต้องชำระแต่ละงวด",
        timer: 5000,
      });
    }

    let body = form;
    body.projectPrice = Number(form.projectPrice);
    body.projectCost = Number(form.projectCost);
    body.projectProfit = Number(form.projectProfit);
    body.projectMa = Number(form.projectMa);
    body.projectMaPerYear = Number(form.projectMaPerYear);
    body.projectMaPerYear = Number(form.projectMaPerYear);
    body.projectMaPerYear = Number(form.projectMaPerYear);
    body.projectMaPerYear = Number(form.projectMaPerYear);
    body.projectMaPerYear = Number(form.projectMaPerYear);

    body.orders = body.orders = body.orders.map((order) => ({
      ...order,
      orderCost: Number(order.orderCost),
      projectId,
    }));
    body.projectStatus =
      body?.periods[(body?.currentPeriod as number) - 1 || 0]?.status;

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
          text: `${projectId ? "แก้ไขProjectสำเร็จ" : "สร้างProjectสำเร็จ"}`,
        });
        router.back();
      } else {
        AlertSwal({
          icon: "error",
          text: `${
            projectId ? "แก้ไขProjectไม่สำเร็จ" : "สร้างProjectไม่สำเร็จ"
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

  const handleChangeTabProject = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTabProject(newValue);
  };

  const handleChangeNumPeriods = (num: number) => {
    setForm((prev: any) => ({
      ...prev,
      periods:
        num <= (prev?.periods?.length || 0)
          ? prev?.periods?.slice(0, num)
          : [
              ...(prev?.periods || []),
              ...Array(Math.max(num - (prev?.periods?.length || 0), 0)).fill({
                periodDue: "",
                paymentDue: "",
                amount: 0,
                receive: 0,
                detail: "",
                status: "ORDERED",
                documents: [],
                isPaid: false,
              }),
            ],
    }));
    setErrors((prev: any) => ({
      ...prev,
      periods:
        num <= (prev?.periods?.length || 0)
          ? prev?.periods?.slice(0, num)
          : [
              ...(prev?.periods || []),
              ...Array(Math.max(num - (prev?.periods?.length || 0), 0)).fill({
                periodDue: false,
                paymentDue: false,
                amount: false,
              }),
            ],
    }));
    setTabProject(num - 1);
  };

  const handleChangePeriod = (key: string, value: any, index?: number) => {
    if (key === "isPaid" && value === true) {
      setForm((prev: IProject) => {
        const updatedArr = [...prev.periods];
        updatedArr[tabProject] = {
          ...updatedArr[tabProject],
          receive: form.periods[tabProject].amount,
        };
        return { ...prev, periods: updatedArr };
      });
    }
    if (index != undefined) {
      setForm((prev: IProject) => {
        const updatedArr = [...prev.periods];
        const updatedDocuments = [...updatedArr[tabProject].documents];

        updatedDocuments[index] = {
          ...updatedDocuments[index],
          [key]: value,
        };

        updatedArr[tabProject] = {
          ...updatedArr[tabProject],
          documents: updatedDocuments,
        };

        return { ...prev, periods: updatedArr };
      });
    } else {
      setForm((prev: IProject) => {
        const updatedArr = [...prev.periods];
        updatedArr[tabProject] = {
          ...updatedArr[tabProject],
          [key]: value,
        };
        return { ...prev, periods: updatedArr };
      });
      setErrors((prevErrors: any) => {
        const updatedErr = [...prevErrors.periods];
        updatedErr[tabProject] = {
          ...updatedErr[tabProject],
          [key]: false,
        };
        return { ...prevErrors, periods: updatedErr };
      });
    }
  };

  const handleChangeFileProjectUpload = async (files: any, idx: number) => {
    try {
      if (!files) {
        return setForm((prev: IProject) => {
          const updatedArr = [...prev.periods];
          const updatedDocuments = [...updatedArr[tabProject].documents];

          updatedDocuments[idx] = {
            ...updatedDocuments[idx],
            filePath: "",
          };

          updatedArr[tabProject] = {
            ...updatedArr[tabProject],
            documents: updatedDocuments,
          };

          return { ...prev, periods: updatedArr };
        });
      }
      const uploadedFiles = await AppApi.uploadFile([files]);

      let combinedFiles = [...uploadedFiles];

      setForm((prev: IProject) => {
        const updatedArr = [...prev.periods];
        const updatedDocuments = [...updatedArr[tabProject].documents];

        updatedDocuments[idx] = {
          ...updatedDocuments[idx],
          filePath: combinedFiles[0].filePath,
        };

        updatedArr[tabProject] = {
          ...updatedArr[tabProject],
          documents: updatedDocuments,
        };

        return { ...prev, periods: updatedArr };
      });
    } catch (error) {
      AlertSwal({
        icon: "error",
        title: "อัปโหลดรูปไม่สำเร็จ",
        text: "เฉพาะไฟล์ .XLSX, .XLS, ,PDF เท่านั้น",
      });
    }
  };

  const handleChangeNumDocOrder = (num: number) => {
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

  const handleChangeWarantyStatus = async (id: number, isOrder?: boolean) => {
    const { isConfirmed } = await ConfirmSwal({
      title: "ต้องการปรับสถานะเป็นไม่ต่อประกันใช่หรือไม่",
      icon: "info",
    });

    if (isConfirmed) {
      try {
        const { data } = await ProjectApi.updateStatus(
          id,
          isOrder ? "statusOrder" : "status",
          "COMPLETED"
        );
        if (data) {
          AlertSwal({ title: "ปรับสถานะสำเร็จ", icon: "success" });
        }
      } catch (error) {
        AlertSwal({ title: "ปรับสถานะไม่สำเร็จ", icon: "error" });
      } finally {
        getProjectDetail(projectId);
      }
    }
  };

  const handleOpenMA = () => setPopupsOpen(true);
  const handleCloseMA = () => setPopupsOpen(false);

  const handleAddDocProject = () => {
    setForm((prev: IProject) => {
      const updatedPeriods = [...prev.periods];
      const targetPeriod = { ...updatedPeriods[tabProject] };
      const updatedDocuments = [
        ...targetPeriod.documents,
        {
          docPeriod: (tabProject + 1).toString(),
          docNo: "",
          docType: "",
          filePath: "",
        },
      ];

      targetPeriod.documents = updatedDocuments;
      updatedPeriods[tabProject] = targetPeriod;

      return { ...prev, periods: updatedPeriods };
    });
  };

  const totalReceive = form?.periods.reduce(
    (total, period) => total + period.receive,
    0
  );

  return (
    <Box p={2} sx={{ border: "1px solid #DEDEDE", borderRadius: "8px" }}>
      {popupsOpen && (
        <BasicModal
          projectDetail={form}
          getProjectDetail={getProjectDetail}
          handleClose={handleCloseMA}
        />
      )}
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
                Project Detail
              </Typography>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                {form.projectStartWarantyDate && (
                  <>
                    <CustomDropdown
                      icon="arrow"
                      label={"จัดการProject"}
                      titles={["ปรับสถานะกรณีไม่ต่อประกัน", "รายละเอียด MA"]}
                      actions={[
                        () => handleChangeWarantyStatus(projectId),
                        handleOpenMA,
                      ]}
                    />
                  </>
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
                      onClick={() => handleDownloadTemplate("TaxInvoice")}
                    >
                      ใบกำกับภาษี
                    </MenuItem>

                    <MenuItem
                      onClick={(e) => handleDownloadTemplate("Invoice")}
                    >
                      ใบแจ้งหนี้
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => handleDownloadTemplate("BillingNote")}
                    >
                      ใบวางบิล
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => handleDownloadTemplate("Receipt")}
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
              label="ชื่อProject"
              value={form?.projectName}
              onChange={(value) => handleChange("projectName", value)}
              error={errors?.projectName}
              required
              disabled={isDisableAll}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <CustomSelect
              label="ประเภทProject"
              options={TYPE.map((t) => t.value)}
              getOptionLabel={(o) => TYPE.find((t) => t.value === o)?.name}
              value={form.projectType}
              error={errors.projectType}
              onChange={(v) => handleChange("projectType", v)}
              required
              disabled={isDisableAll}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="สถานะProject"
              value={`งวดงานที่ ${form.currentPeriod || 1}`}
              onChange={(v) => null}
              disabled
            />
          </Grid>
          {form.periods[(form.currentPeriod || 1) - 1]?.status === "OTHER" && (
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="สถานะProjectอื่นๆ"
                value={form.periods[(form.currentPeriod || 1) - 1]?.statusOther}
                onChange={(v) => null}
                disabled
              />
            </Grid>
          )}
          <Grid item xs={12} sm={3}>
            <CustomDatePicker
              label="วันที่กำหนดส่ง"
              value={form?.projectDueDate}
              onChange={(value) => handleChange("projectDueDate", value)}
              error={errors?.projectDueDate}
              disabled
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomTextfield
              label="รายละเอียดProject"
              value={form?.projectScope}
              minRows={3}
              onChange={(value) => handleChange("projectScope", value)}
              error={errors?.projectScope}
              required
              disabled={isDisableAll}
            />
          </Grid>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ราคาProject (บาท)"
              type="numberWithComma"
              value={formatPrice(form?.projectPrice)}
              onChange={(value) => handleChange("projectPrice", value)}
              error={errors?.projectPrice}
              required
              disabled={isDisableAll}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ต้นทุนProject (บาท)"
              type="numberWithComma"
              value={formatPrice(form?.projectCost)}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="กำไรProject (บาท)"
              type="numberWithComma"
              value={formatPrice(form?.projectProfit)}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="รับชำระเเล้ว"
              type="numberWithComma"
              value={formatPrice(totalReceive)}
              disabled
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="Project MA (เดือน)"
              type="number"
              value={form?.projectMa}
              onChange={(value) => handleChange("projectMa", value)}
              error={errors?.projectMa}
              disabled={isDisableAll}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomSelect
              label="จำนวน MA ต่อปี (ครั้ง)"
              options={[...Array(12)].map((_, idx) => idx + 1)}
              disabledOption={(opion) => opion > form?.projectMa}
              value={form?.projectMaPerYear}
              onChange={(value) => handleChange("projectMaPerYear", value)}
              error={errors?.projectMaPerYear}
              disabled={isDisableAll}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ระยะเวลาประกัน (เดือน) "
              type="number"
              value={form?.projectWaranty}
              onChange={(value) => handleChange("projectWaranty", value)}
              error={errors?.projectWaranty}
              disabled={isDisableAll}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="initial" className="title">
              รายชื่อลูกค้า
            </Typography>
            <CustomInputWithTags
              options={customers}
              value={selectedCustomer}
              onInputChange={(v) => handleInputChange(v, "customer")}
              onChange={(v) => handleChangeAutocomplete(v, "customer")}
              label=""
              placeholder="ค้นหาโดยชื่อ"
              minRows={1}
              getOptionLabel={(option: ICustomer) =>
                ` ${option?.name} ${option?.branch} | ${option?.tel}`
              }
              onClear={() => {
                handleClearAutocomplete("project");
              }}
              require
              error={errors.customerId}
              disabled={isDisableAll}
            />
            {(selectedCustomer?.contactPersons?.length as number) > 0 && (
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
                        <TableCell>เบอร์โทรศัพท์ท์</TableCell>
                        <TableCell> ตำแหน่ง</TableCell>
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
          <Grid item xs={12} mt={5}>
            <Typography variant="h5" color="initial" className="title">
              จำนวนงวดทั้งหมด
            </Typography>
            <CustomSelect
              label=""
              options={[...Array(10)].map((_, idx) => idx + 1)}
              value={form?.periods?.length}
              onChange={(v) => handleChangeNumPeriods(v)}
              disabled={isDisableAll}
            />

            {form?.periods?.length && (
              <Box mx={2}>
                <Tabs
                  value={tabProject}
                  onChange={handleChangeTabProject}
                  aria-label="basic tabs example"
                  sx={{ mx: 1 }}
                >
                  {form?.periods?.map((_, index) => (
                    <Tab
                      sx={{
                        ml: 0.5,
                        fontSize: 18,
                        bgcolor: "#D3D3D3",
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        "&.Mui-selected": {
                          bgcolor: "#ffdfad",
                        },
                      }}
                      label={`งวดที่ ${index + 1}`}
                    />
                  ))}
                </Tabs>
                <Box
                  component={Paper}
                  sx={{
                    border: "1px solid #DEDEDE",
                    borderRadius: 2,
                    p: 3,
                    maxHeight: "400px",
                  }}
                >
                  <Typography variant="h5" color="initial">
                    รายละเอียดงวด ที่ {tabProject + 1}
                  </Typography>
                  <Grid container mt={1} spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <CustomTextfield
                        label="รายละเอียดงวด"
                        minRows={3}
                        value={form?.periods[tabProject]?.detail}
                        onChange={(value) =>
                          handleChangePeriod("detail", value)
                        }
                        disabled={isDisableAll}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <CustomSelect
                        label="สถานะงวด"
                        options={STATUS.map((t) => t.value)}
                        getOptionLabel={(o) =>
                          STATUS.find((t) => t.value === o)?.name
                        }
                        value={form?.periods[tabProject]?.status}
                        onChange={(value) =>
                          handleChangePeriod("status", value)
                        }
                        disabled={isDisableAll}
                        required
                      />
                    </Grid>
                    {form?.periods[tabProject]?.status === "OTHER" && (
                      <Grid item xs={12} sm={3}>
                        <CustomTextfield
                          label="สถานะงวดอื่นๆ"
                          value={form?.periods[tabProject]?.statusOther}
                          onChange={(v) => handleChangePeriod("statusOther", v)}
                        />
                      </Grid>
                    )}
                    <Grid item xs={12} sm={3}>
                      <CustomDatePicker
                        label="วันที่ครบกำหนดส่งงาน"
                        value={form?.periods[tabProject]?.periodDue}
                        onChange={(value) =>
                          handleChangePeriod("periodDue", value)
                        }
                        minDate={
                          form?.periods[tabProject - 1]?.periodDue
                            ? dayjs(form?.periods[tabProject - 1]?.periodDue)
                            : undefined
                        }
                        maxDate={dayjs(form.projectDueDate)}
                        disablePast={false}
                        disabled={isDisableAll}
                        error={errors.periods[tabProject]?.periodDue}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <CustomDatePicker
                        label="วันที่ครบกำหนดชำระ"
                        value={form?.periods[tabProject]?.paymentDue}
                        onChange={(value) =>
                          handleChangePeriod("paymentDue", value)
                        }
                        disabled={isDisableAll}
                        error={errors.periods[tabProject]?.paymentDue}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <CustomTextfield
                        label="ยอดเงินที่ต้องชำระ"
                        type="numberWithComma"
                        value={form?.periods[tabProject]?.amount}
                        onChange={(value) =>
                          handleChangePeriod("amount", Number(value))
                        }
                        disabled={isDisableAll}
                        error={errors.periods[tabProject]?.amount}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <CustomTextfield
                        label="ยอดเงินที่รับชำระ"
                        type="numberWithComma"
                        placeholder="0.00"
                        value={form?.periods[tabProject]?.receive}
                        onChange={(value) =>
                          handleChangePeriod("receive", Number(value))
                        }
                        disabled={isDisableAll || form?.periods[tabProject]?.isPaid}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} sx={{ display: "flex" }}>
                      <CustomCheckbox
                        label="ชำระทั้งหมดเเล้ว"
                        checked={form?.periods[tabProject]?.isPaid}
                        onChange={() =>
                          handleChangePeriod(
                            "isPaid",
                            !form?.periods[tabProject]?.isPaid
                          )
                        }
                        disabled={isDisableAll}
                      />
                    </Grid>
                  </Grid>
                  <TableContainer>
                    <Table sx={{ border: "1px solid #DEDEDE" }}>
                      <TableHead>
                        <TableRow sx={{ height: "40px" }}>
                          <TableCell align="center">ลำดับ</TableCell>
                          <TableCell>เอกสาร</TableCell>
                          <TableCell>เลขที่เอกสาร</TableCell>
                          <TableCell>ประเภทเอกสาร</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {form?.periods[tabProject]?.documents?.map(
                          (doc, index) => (
                            <TableRow sx={{ height: "20px" }}>
                              <TableCell align="center">{index + 1}</TableCell>
                              <TableCell align="center">
                                <CustomFileUpload
                                  value={
                                    form?.periods[tabProject].documents[index]
                                      ?.filePath
                                  }
                                  onChange={(file) =>
                                    handleChangeFileProjectUpload(file, index)
                                  }
                                  disabled={isDisableAll}
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
                                    handleChangePeriod("docNo", v, index)
                                  }
                                  disabled={isDisableAll}
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
                                    handleChangePeriod("docType", v, index)
                                  }
                                  disabled={isDisableAll}
                                />
                              </TableCell>
                            </TableRow>
                          )
                        )}
                        {form?.periods[tabProject]?.documents?.length < 4 && (
                          <TableRow>
                            <TableCell
                              align="center"
                              colSpan={5}
                              sx={{
                                bgcolor: "#cdcbcb",
                                borderRadius: "4px",
                                m: 1,
                                height: "20px",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                !isDisableAll ? handleAddDocProject() : null
                              }
                            >
                              + เพิ่มเอกสาร
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
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
            ข้อมูลคำสั่งซื้อสินค้า 
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
              label={`รายการที่ ${index + 1}`}
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
                รายการคำสั่งซื้อสินค้า ที่ {tab + 1}
              </Typography>
              {form?.orders[tab]?.orderStartWarantyDate && (
                <>
                  <CustomDropdown
                    icon="arrow"
                    label={"จัดการคำสั่งซื้อ"}
                    titles={["ปรับสถานะกรณีไม่ต่อประกัน"]}
                    actions={[
                      () =>
                        handleChangeWarantyStatus(
                          form?.orders[tab]?.orderId as number,
                          true
                        ),
                    ]}
                  />
                </>
              )}
              {form.orders.length > 1 && (
                <CustomButton
                  text="ลบ ออเดอร์"
                  size="small"
                  onClick={() => handleDeleteOrder(tab)}
                />
              )}
            </Grid>
            <Grid item xs={12} mb={3}>
              <Typography variant="h5" color="initial" className="title">
                ข้อมูลคำสั่งซื้อสินค้า (แยกตามรายการรับประกันสินค้าจากผู้ผลิต)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ชื่อคำสั่งซื้อสินค้า"
                value={form?.orders[tab]?.orderName}
                onChange={(value) => handleChange("orderName", value, tab)}
                error={errors?.orders[tab]?.orderName}
                required
                disabled={isDisableAll}
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
                disabled={isDisableAll}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomSelect
                label="สถานะคำสั่งซื้อสินค้า"
                options={STATUS.map((t) => t.value)}
                getOptionLabel={(o) => STATUS.find((t) => t.value === o)?.name}
                value={form?.orders[tab]?.orderStatus}
                onChange={(value) => handleChange("orderStatus", value, tab)}
                disabled={!form.orders[tab].orderId || isDisableAll}
                error={errors?.orders[tab]?.orderStatus}
                required
              />
            </Grid>
            {form?.orders[tab]?.orderStatus === "OTHER" && (
              <Grid item xs={12} sm={3}>
                <CustomTextfield
                  label="สถานะคำสั่งซื้อสินค้าอื่นๆ"
                  value={form?.orders[tab]?.orderStatusOther}
                  onChange={(v) => handleChange("orderStatusOther", v, tab)}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={3}>
              <CustomDatePicker
                label="วันที่กำหนดส่ง"
                value={form?.orders[tab]?.orderDueDate}
                onChange={(value) => handleChange("orderDueDate", value, tab)}
                error={errors?.orders[tab]?.orderDueDate}
                required
                disabled={isDisableAll}
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
                disabled={isDisableAll}
              />
            </Grid>
            <Grid item xs={12} sm={6}/>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="หมายเหตุ"
                minRows={3}
                value={form?.orders[tab]?.remark}
                onChange={(value) => handleChange("remark", value, tab)}
                disabled={isDisableAll}
              />
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={12}>
              <Typography variant="h5" color="initial" className="title">
                รายชื่อซัพพลายเออร์
              </Typography>
              <CustomInputWithTags
                options={suppliers}
                value={selectedSupplier[tab]}
                onInputChange={(v) => handleInputChange(v, "supplier")}
                onChange={(v) => handleChangeAutocomplete(v, "supplier")}
                label=""
                placeholder="ค้นหาโดยชื่อ"
                minRows={1}
                getOptionLabel={(option: ISupplier) =>
                  ` ${option?.name} | ${option?.tel}`
                }
                error={errors.orders[tab]?.supplierId}
                onClear={() => {
                  handleClearAutocomplete("order");
                }}
                require
                disabled={isDisableAll}
              />
              {selectedSupplier[tab]?.contactPersons?.length > 0 && (
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
                          <TableCell>เบอร์โทรศัพท์</TableCell>
                          <TableCell>อีเมล</TableCell>
                          <TableCell> ตำแหน่ง</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {selectedSupplier[tab]?.contactPersons.map(
                          (person, index) => (
                            <TableRow sx={{ height: "40px" }}>
                              <TableCell align="center">{index + 1}</TableCell>
                              <TableCell>{person.name || "-"}</TableCell>
                              <TableCell>{person.tel || "-"}</TableCell>
                              <TableCell>{person.email || "-"}</TableCell>
                              <TableCell>{person.role || "-"}</TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} mt={5}>
              <Typography variant="h5" color="initial" className="title">
                จำนวนเอกสารทั้งหมด
              </Typography>
              <CustomSelect
                label=""
                options={[...Array(10)].map((_, idx) => idx + 1)}
                value={form?.orders[tab]?.documents?.length}
                onChange={(v) => handleChangeNumDocOrder(v)}
                disabled={isDisableAll}
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
                                disabled={isDisableAll}
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
                                disabled={isDisableAll}
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
                                disabled={isDisableAll}
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
                                disabled={isDisableAll}
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
