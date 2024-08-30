"use client";

import CustomButton from "@/components/Button/CustomButton";
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import React from "react";

type Props = {};

export default function Profile({}: Props) {
  const theme = useTheme();

  return (
    <Box p={2} sx={{ border: "1px solid #DEDEDE", borderRadius: "8px" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          border: "1px solid #DEDEDE",
          borderRadius: "8px",
          p: 3,
          bgcolor: theme.palette.primary.dark,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          โปรไฟล์
        </Typography>
      </Box>
      <Grid container spacing={2} mt={5}>
        {/* Logo Section */}
        <Grid item xs={12} sm={3}>
          <Box height={"100%"} px={5}>
            <CustomImageUpload
              label="โลโก้"
              onChange={(e) => console.log(e)}
              maxFiles={1}
              height="160px"
            />
          </Box>
        </Grid>
        {/* Company Information */}
        <Grid container spacing={2} xs={9}>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ชื่อบริษัท (ภาษาไทย)"
              placeholder="กรุณากรอกชื่อบริษัท"
              value={"regis consultant"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ชื่อบริษัท (ภาษาอังกฤษ)"
              placeholder="กรุณากรอกชื่อบริษัท"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextfield
              label="รายละเอียดบริษัท"
              placeholder="กรุณากรอกรายละเอียด"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ชื่อผู้ใช้ Line"
              placeholder="กรุณากรอกชื่อผู้ใช้"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ลิงก์ Line เพิ่มเพื่อน"
              placeholder="กรุณากรอกลิงก์"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ชื่อผู้ใช้ Facebook"
              placeholder="กรุณากรอกชื่อผู้ใช้"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="ลิงก์ Facebook"
              placeholder="กรุณากรอกลิงก์"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield label="อีเมล" placeholder="กรุณากรอกอีเมล" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextfield
              label="หมายเลขโทรศัพท์"
              placeholder="กรุณากรอกหมายเลขโทรศัพท์"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextfield label="ที่อยู่" placeholder="กรุณากรอกที่อยู่" />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomTextfield
            label="ข้อกำหนดและเงื่อนไข"
            placeholder="กรุณากรอกข้อกำหนดและเงื่อนไข"
            minRows={8}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextfield
            label="นโยบายความเป็นส่วนตัว"
            placeholder="กรุณากรอกนโยบายความเป็นส่วนตัว"
            minRows={8}
          />
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        gap={2}
        justifyContent={"center"}
        alignSelf="flex-end"
        pt={1}
      >
        <CustomButton text="ยกเลิก" style="outlined" />
        <CustomButton text="ส่ง" style="contained" />
      </Box>
    </Box>
  );
}
