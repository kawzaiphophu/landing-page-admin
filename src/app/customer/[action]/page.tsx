"use client";
import provinces from "@/assets/provinces.json";
import zipcode from "@/assets/zipcodes.json";
import CustomButton from "@/components/Button/CustomButton";
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import theme from "@/theme/theme";
import { capitalizeFirstChar, setErrObject } from "@/utils/app";
import { Box, Typography, Grid, IconButton } from "@mui/material";
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

type Props = {};

const initailError = {
  name: false,
  nameEn: false,
  email: false,
  tel: false,
  // fax: false,
  address: false,
  province: false,
  district: false,
  subDistrict: false,
  zipcode: false,
  country: false,
  contactPersons: [{ name: false, tel: false, role: false }],
};

export default function CustomerAction({}: Props) {
  const router = useRouter();
  const customerId = Number(useSearchParams().get("customerId"));
  const action = useParams().action;
  const [zipcodeArr, setZipcodeArr] = useState<string[]>();
  const [form, setForm] = useState<ICustomer>({
    name: "",
    nameEn: "",
    branch: "สาขาใหญ่",
    email: "",
    taxNumber: "",
    tel: "",
    fax: "",
    country: "ประเทศไทย",
    address: "",
    province: "",
    district: "",
    subDistrict: "",
    zipcode: "",
    contactPersons: [{ name: "", tel: "", role: "" }],
  });

  const [errors, setErrors] = useState<any>(initailError);

  useEffect(() => {
    if (customerId) {
      getCustomerDetail(customerId);
    }
  }, []);

  const getCustomerDetail = async (cusId: number) => {
    try {
      const { data } = await CustomerApi.findOne(cusId);
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
      let data

      if (customerId) {
        data = await CustomerApi.update(customerId,form);
      }else{
        data = await CustomerApi.create(form);
      }
      
      if (data) {
        AlertSwal({
          icon: "success",
          text: `${
            customerId
            ? "แก้ไขข้อมูลลูกค้าสำเร็จ"
            : "สร้างลูกค้าใหม่สำเร็จ"
          }`,
        });
        router.back();
      } else {
        AlertSwal({
          icon: "error",
          text: `${
            customerId
            ? "แก้ไขข้อมูลลูกค้าไม่สำเร็จ"
            : "สร้างลูกค้าใหม่ไม่สำเร็จ"
          }`,
        });
      }
    } catch (error) {
      AlertSwal({
        icon: "error",
        text: `${customerId ?'แก้ไขข้อมูลลูกค้าไม่สำเร็จ':'สร้างลูกค้าใหม่ไม่สำเร็จ'}`,
      });
    }
  };

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
          {capitalizeFirstChar(action)} Customer
        </Typography>
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Box display="flex" flex={1} height="auto">
          <Grid container spacing={2} p={3} xs={12}>
            <Grid item xs={12} mb={3}>
              <Typography variant="h4" color="initial">
                ข้อมูลลูกค้า
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="ชื่อบริษัท (ภาษาไทย)"
                placeholder="กรุณากรอกชื่อบริษัท"
                value={form?.name}
                onChange={(value) => handleChange("name", value)}
                error={errors?.name}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="ชื่อบริษัท (ภาษาอังกฤษ)"
                placeholder="กรุณากรอกชื่อบริษัท"
                value={form?.nameEn}
                onChange={(value) => handleChange("nameEn", value)}
                error={errors?.nameEn}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="สาขา"
                value={form?.branch}
                onChange={(value) => handleChange("branch", value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="เลขผู้เสียภาษี"
                value={form?.taxNumber}
                type="number"
                onChange={(value) => handleChange("taxNumber", value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="อีเมล"
                placeholder="กรุณากรอกอีเมล"
                value={form?.email}
                type="email"
                onChange={(value) => handleChange("email", value)}
                error={errors?.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="หมายเลขโทรศัพท์"
                type="phone"
                maxLength={10}
                placeholder="กรุณากรอกหมายเลขโทรศัพท์"
                value={form?.tel}
                onChange={(value) => handleChange("tel", value)}
                error={errors?.tel}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="หมายเลขโทรสาร"
                type="phone"
                maxLength={10}
                placeholder="กรุณากรอกหมายเลขโทรสาร"
                value={form?.fax}
                onChange={(value) => handleChange("fax", value)}
                error={errors?.fax}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="ที่อยู่"
                value={form?.address}
                onChange={(value) => handleChange("address", value)}
                error={errors?.address}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextfield
                label="ประเทศ"
                value={form?.country}
                onChange={(value) => handleChange("country", value)}
                error={errors?.country}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                label="จังหวัด"
                required
                options={provinces.map((province) => province.provinceCode)}
                value={form?.province}
                getOptionLabel={(v) => getProvinceNameByCode(v)}
                onChange={(value) => handleChange("province", value)}
                error={errors?.province}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                label="เขต/อำเภอ"
                required
                options={getDistrictCodesByProvinceCode(form?.province)}
                getOptionLabel={(v) => getDistrictNameByCode(v)}
                value={form?.district}
                onChange={(value) => handleChange("district", value)}
                error={errors?.district}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                label="แขวง/ตำบล"
                options={getSubdistrictCodesByDistrictCode(form?.district)}
                getOptionLabel={(v) => getSubdistrictNameByCode(v)}
                required
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

            <Grid item xs={12} sm={6}>
              {zipcodeArr?.length ? (
                <CustomSelect
                  label="รหัสไปรษณีย์"
                  placeholder="รหัสไปรษณีย์"
                  options={zipcodeArr}
                  value={form?.zipcode}
                  onChange={(v) => handleChange("zipcode", v)}
                  error={errors?.zipcode}
                  required
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
        <Box display="flex" flex={1} height="100%" alignItems="flex-start">
          <Grid container spacing={2} p={5} xs={12}>
            <Box display={"flex"} flexDirection={"column"} width={"100%"}>
              <Box display={"flex"} justifyContent={"space-between"} mb={5}>
                <Typography variant="h4" color="initial">
                  ข้อมูลผู้ติดต่อ
                </Typography>

                <CustomButton
                  text="เพิ่มผู้ติดต่อ"
                  style="outlined"
                  size="small"
                  icon={<AddIcon />}
                  onClick={() => handleAddContact()}
                />
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                {[...Array(form?.contactPersons?.length)].map((_, idx) => (
                  <Grid container spacing={2} key={idx}>
                    <Grid item xs={3.6}>
                      <CustomTextfield
                        label="ชื่อผู้ติดต่อ"
                        value={form.contactPersons[idx]?.name}
                        onChange={(value) => handleChange("name", value, idx)}
                        error={errors?.contactPersons?.[idx]?.name}
                        required
                      />
                    </Grid>
                    <Grid item xs={3.6}>
                      <CustomTextfield
                        label="เบอร์โทรศัพท์"
                        maxLength={10}
                        value={form.contactPersons[idx]?.tel}
                        onChange={(value) => handleChange("tel", value, idx)}
                        error={errors?.contactPersons?.[idx]?.tel}
                        required
                      />
                    </Grid>
                    <Grid item xs={3.6}>
                      <CustomTextfield
                        label="หน้าที่รับผิดชอบ"
                        value={form.contactPersons[idx]?.role}
                        onChange={(value) => handleChange("role", value, idx)}
                        error={errors?.contactPersons?.[idx]?.role}
                        required
                      />
                    </Grid>
                    <Grid item xs={1} display={"flex"} alignItems={"center"}>
                      <IconButton
                        aria-label=""
                        onClick={() => handleDeleteContact(idx)}
                      >
                        <DeleteOutlineIcon color="error" />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Box>
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
