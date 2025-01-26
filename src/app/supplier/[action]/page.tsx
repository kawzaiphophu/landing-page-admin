"use client";
import provinces from "@/assets/provinces.json";
import zipcode from "@/assets/zipcodes.json";
import CustomButton from "@/components/Button/CustomButton";
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import theme from "@/theme/theme";
import { capitalizeFirstChar, setErrObject } from "@/utils/app";
import { Box, Typography, Grid, IconButton, Divider } from "@mui/material";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  getProvinceNameByCode,
  getDistrictCodesByProvinceCode,
  getDistrictNameByCode,
  getSubdistrictCodesByDistrictCode,
  getSubdistrictNameByCode,
} from "@/utils/app";
import CustomSelect from "@/components/Select/CustomSelect";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CustomerApi from "@/api/customer.api";
import AlertSwal from "@/components/Alert/AlertSwal";
import { ICustomer } from "@/types/customer";
import { ISupplier } from "@/types/supplier.type";
import SupplierApi from "@/api/supplier.api";

type Props = {};

const initailError = {
  name: false,
  branch: false,
  address: false,
  province: false,
  district: false,
  subDistrict: false,
  zipcode: false,
  country: false,
  taxNumber: false,
  contactPersons: [{ name: false, tel: false, role: false, email: false }],
};

export default function SupplierAction({}: Props) {
  const router = useRouter();
  const supplierId = Number(useSearchParams().get("supplierId"));
  const action = useParams().action;
  const [zipcodeArr, setZipcodeArr] = useState<string[]>();
  const [form, setForm] = useState<ISupplier>({
    name: "",
    nameEn: "",
    email: "",
    branch: "สำนักงานใหญ่",
    tel: "",
    country: "ประเทศไทย",
    address: "",
    province: "",
    district: "",
    subDistrict: "",
    zipcode: "",
    taxNumber: "",
    contactPersons: [{ name: "", tel: "", role: "", email: "" }],
  });

  const [errors, setErrors] = useState<any>(initailError);

  useEffect(() => {
    if (supplierId) {
      getSupplierDetail(supplierId);
    }
  }, []);

  const getSupplierDetail = async (cusId: number) => {
    try {
      const { data } = await SupplierApi.findOne(cusId);
      setForm(data);
    } catch (error) {}
  };

  const handleChange = (key: string, value: any, idx?: number) => {
    if (idx !== undefined) {
      setForm((prev: any) => {
        const updatedcontactPersons = [...prev.contactPersons];
        updatedcontactPersons[idx] = {
          ...updatedcontactPersons[idx],
          [key]: value,
        };
        return { ...prev, contactPersons: updatedcontactPersons };
      });

      setErrors((prevErrors: any) => {
        const updatedContractErrors = [...(prevErrors.contactPersons || [])];
        updatedContractErrors[idx] = {
          ...updatedContractErrors[idx],
          [key]: false,
        };
        return { ...prevErrors, contactPersons: updatedContractErrors };
      });
    } else {
      setForm((prev: any) => ({ ...prev, [key]: value }));

      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [key]: false,
      }));
    }
  };

  const handleAddContact = () => {
    setForm((prev: any) => ({
      ...prev,
      contactPersons: [...prev.contactPersons, { name: "", tel: "", role: "" }],
    }));
    setErrors((prev: any) => ({
      ...prev,
      contactPersons: [
        ...prev.contactPersons,
        { name: false, tel: false, role: false },
      ],
    }));
  };

  const handleDeleteContact = (index: number) => {
    setForm((prev: any) => ({
      ...prev,
      contactPersons: prev.contactPersons.filter(
        (_: any, idx: number) => idx !== index
      ),
    }));
    setErrors((prev: any) => ({
      ...prev,
      contactPersons: prev.contactPersons.filter(
        (_: any, idx: number) => idx !== index
      ),
    }));
  };

  const handleSubmit = async () => {
    const newErrors = setErrObject(form, initailError);

    setErrors(newErrors);

    const isHasError = Object.values(newErrors).some((error) => error === true);

    if (isHasError) {
      return;
    }

    try {
      let data;

      if (supplierId) {
        data = await SupplierApi.update(supplierId, form);
      } else {
        data = await SupplierApi.create(form);
      }

      if (data) {
        AlertSwal({
          icon: "success",
          text: `${
            supplierId ? "แก้ไขข้อมูลลูกค้าสำเร็จ" : "สร้างลูกค้าใหม่สำเร็จ"
          }`,
        });
        router.back();
      } else {
        AlertSwal({
          icon: "error",
          text: `${
            supplierId
              ? "แก้ไขข้อมูลลูกค้าไม่สำเร็จ"
              : "สร้างลูกค้าใหม่ไม่สำเร็จ"
          }`,
        });
      }
    } catch (error) {
      AlertSwal({
        icon: "error",
        text: `${
          supplierId ? "แก้ไขข้อมูลลูกค้าไม่สำเร็จ" : "สร้างลูกค้าใหม่ไม่สำเร็จ"
        }`,
      });
    }
  };

  const handleBack = () => {
    router.back();
  };

  const isDisableAll = action === "view";

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
          {capitalizeFirstChar(action)} Supplier
        </Typography>
      </Box>
      <Box display="flex" flexDirection={"column"}>
        <Box p={3}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={12} mb={3}>
              <Typography variant="h4" color="initial">
                ข้อมูลลูกค้า
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ชื่อบริษัท (ภาษาไทย)"
                placeholder="กรุณากรอกชื่อบริษัท"
                value={form?.name}
                onChange={(value) => handleChange("name", value)}
                error={errors?.name}
                disabled={isDisableAll}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ชื่อบริษัท (ภาษาอังกฤษ)"
                placeholder="กรุณากรอกชื่อบริษัท"
                value={form?.nameEn}
                onChange={(value) => handleChange("nameEn", value)}
                error={errors?.nameEn}
                disabled={isDisableAll}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="สาขา"
                type="phone"
                maxLength={5}
                value={form?.branch}
                disabled={isDisableAll}
                onChange={(value) => handleChange("branch", value)}
                error={errors?.branch}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="เลขประจำตัวผู้เสียภาษี"
                type="phone"
                value={form?.taxNumber}
                disabled={isDisableAll}
                onChange={(value) => handleChange("taxNumber", value)}
                error={errors?.taxNumber}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="อีเมล"
                placeholder="กรุณากรอกอีเมล"
                value={form?.email}
                type="email"
                disabled={isDisableAll}
                onChange={(value) => handleChange("email", value)}
                error={errors?.email}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="หมายเลขโทรศัพท์"
                type="phone"
                maxLength={10}
                disabled={isDisableAll}
                placeholder="กรุณากรอกหมายเลขโทรศัพท์"
                value={form?.tel}
                onChange={(value) => handleChange("tel", value)}
                error={errors?.tel}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ที่อยู่"
                value={form?.address}
                disabled={isDisableAll}
                onChange={(value) => handleChange("address", value)}
                error={errors?.address}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextfield
                label="ประเทศ"
                value={form?.country}
                disabled={isDisableAll}
                onChange={(value) => handleChange("country", value)}
                error={errors?.country}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomSelect
                label="จังหวัด"
                required
                disabled={isDisableAll}
                options={provinces.map((province) => province.provinceCode)}
                value={form?.province}
                getOptionLabel={(v) => getProvinceNameByCode(v)}
                onChange={(value) => handleChange("province", value)}
                error={errors?.province}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomSelect
                label="เขต/อำเภอ"
                required
                disabled={isDisableAll}
                options={getDistrictCodesByProvinceCode(form?.province)}
                getOptionLabel={(v) => getDistrictNameByCode(v)}
                value={form?.district}
                onChange={(value) => handleChange("district", value)}
                error={errors?.district}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomSelect
                label="แขวง/ตำบล"
                options={getSubdistrictCodesByDistrictCode(form?.district)}
                getOptionLabel={(v) => getSubdistrictNameByCode(v)}
                required
                disabled={isDisableAll}
                onChange={(value) => {
                  handleChange("subDistrict", value);
                  zipcode
                    .filter((zipCode) => zipCode?.subDistrictCode === value)
                    .map((zipCode) => zipCode?.zipcode)
                    .flat().length > 1
                    ? setZipcodeArr(
                        zipcode
                          .filter(
                            (zipCode) => zipCode?.subDistrictCode === value
                          )
                          .map((zipCode) => zipCode?.zipcode)
                          .flat()
                      )
                    : (handleChange(
                        "zipcode",
                        zipcode
                          .filter(
                            (zipCode) => zipCode?.subDistrictCode === value
                          )
                          .map((zipCode) => zipCode?.zipcode)[0]
                      ),
                      setZipcodeArr([]));
                }}
                value={form?.subDistrict}
                error={errors?.subDistrict}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              {zipcodeArr?.length ? (
                <CustomSelect
                  label="รหัสไปรษณีย์"
                  placeholder="รหัสไปรษณีย์"
                  options={zipcodeArr}
                  value={form?.zipcode}
                  onChange={(v) => handleChange("zipcode", v)}
                  error={errors?.zipcode}
                  required
                  disabled={isDisableAll}
                />
              ) : (
                <CustomTextfield
                  label="รหัสไปรษณีย์"
                  placeholder="รหัสไปรษณีย์"
                  disabled
                  value={form?.zipcode}
                  error={errors?.zipcode}
                  required
                />
              )}
            </Grid>
          </Grid>
        </Box>
        <Divider
            sx={{ borderWidth: 4, borderRadius: 4, borderColor: "#898989" }}
          />
        <Box p={3}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h4" color="initial">
              ข้อมูลผู้ติดต่อ
            </Typography>

            <CustomButton
              text="เพิ่มผู้ติดต่อ"
              style="outlined"
              size="small"
              icon={<AddIcon />}
              onClick={() => handleAddContact()}
              disabled={isDisableAll}
            />
          </Box>
         
          <Box mt={3}>
            {[...Array(form?.contactPersons?.length)].map((_, idx) => (
              <Grid container spacing={2} key={idx} mb={2}>
                <Grid item xs={3}>
                  <CustomTextfield
                    label="ชื่อผู้ติดต่อ"
                    value={form.contactPersons[idx]?.name}
                    onChange={(value) => handleChange("name", value, idx)}
                    error={errors?.contactPersons?.[idx]?.name}
                    required
                    disabled={isDisableAll}
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomTextfield
                    label="เบอร์โทรศัพท์"
                    maxLength={10}
                    value={form.contactPersons[idx]?.tel}
                    onChange={(value) => handleChange("tel", value, idx)}
                    error={errors?.contactPersons?.[idx]?.tel}
                    required
                    disabled={isDisableAll}
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomTextfield
                    label="หน้าที่รับผิดชอบ"
                    value={form.contactPersons[idx]?.role}
                    onChange={(value) => handleChange("role", value, idx)}
                    error={errors?.contactPersons?.[idx]?.role}
                    required
                    disabled={isDisableAll}
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <CustomTextfield
                    label="อีเมล"
                    type="email"
                    value={form.contactPersons[idx]?.email}
                    onChange={(value) => handleChange("email", value, idx)}
                    error={errors?.contactPersons?.[idx]?.email}
                    required
                    disabled={isDisableAll}
                  />
                </Grid>
                <Grid item xs={0.5} display={"flex"} alignItems={"center"}>
                  <IconButton
                    aria-label=""
                    onClick={() => handleDeleteContact(idx)}
                    disabled={isDisableAll}
                  >
                    <DeleteOutlineIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={2}
        justifyContent={"center"}
        alignSelf="flex-end"
        pt={1}
      >
        <CustomButton text="Cancel" style="outlined" onClick={handleBack} />
        <CustomButton
          text="Submit"
          style="contained"
          disabled={isDisableAll}
          onClick={handleSubmit} // Call handleSubmit when submitting the form
        />
      </Box>
    </Box>
  );
}
