"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IProject } from "@/types/project.type";
import { formatDate } from "@/utils/formatData";
import CustomFileUpload from "@/components/CustomImageUpload/CustomFileUpload";
import CustomSelect from "@/components/Select/CustomSelect";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import {
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import AlertSwal from "@/components/Alert/AlertSwal";
import AppApi from "@/api/app.api";
import CustomButton from "@/components/Button/CustomButton";
import ProjectApi from "@/api/project.api";
import { setErrObject } from "@/utils/app";
import UserApi from "@/api/user.api";
import { IUser } from "@/types/user.type";
import { ROLE } from "@/constants/app";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
  minWidth: "60vw",
};

type Props = {
  userId?: number;
  handleClose: () => void;
  getAllUser: () => void;
};

export default function ActionUserModal({
  userId,
  handleClose,
  getAllUser,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [error, setError] = useState({
    username: false,
    password: false,
    confirmPassword: false,
    role: false,
  });

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    if (userId) {
      const data = await UserApi.findOne(userId);
      setForm({ ...data, password: "", confirmPassword: "" } as any);
    }
  };

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));

    setError((prevErrors: any) => ({
      ...prevErrors,
      [key]: false,
    }));
  };

  const handleSubmit = async () => {
    const newErrors = setErrObject(form, error);
    setError(newErrors);
    const isHasError = Object.values(newErrors).some((error) => error === true);

    if (isHasError) {
      return;
    }

    try {
      if (form.password !== form.confirmPassword) {
        AlertSwal({ title: "รหัสผ่านไม่ตรงกัน", icon: "error" });
        return;
      }
      if (userId) {
        const data = await UserApi.update(userId, form);
        if (data) {
          AlertSwal({ title: "อัปเดตผู้ใช้งานสำเร็จ", icon: "success" });
          getAllUser();
          handleClose();
        }
      } else {
        const data = await UserApi.create(form);
        if (data) {
          AlertSwal({ title: "สร้างผู้ใช้งานสำเร็จ", icon: "success" });
          getAllUser();
          handleClose();
        }
      }
    } catch (error: any) {
      if (error.statusCode === 400) {
        AlertSwal({
          title: "สร้างผู้ใช้งานไม่สำเร็จ",
          text: "ชื่อผู้ใช้งานมีในระบบแล้ว",
          icon: "error",
        });
      } else {
        AlertSwal({ title: "สร้างผู้ใช้งานไม่สำเร็จ", icon: "error" });
      }
    }
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {`${userId ? "แก้ไข" : "สร้าง"}ผู้ใช้งาน`}
          </Typography>
          <Box
            mt={2}
            border={"1px solid #DEDEDE"}
            borderRadius={4}
            p={2}
            display={"flex"}
            gap={4}
          >
            <Grid container spacing={2} p={2}>
              <Grid item xs={12} sm={4}>
                <CustomTextfield
                  label="ชื่อผู้ใช้"
                  value={form.name}
                  onChange={(e) => handleChange("name", e)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextfield
                  label="อีเมล"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextfield
                  label="เบอร์โทร"
                  type="phone"
                  maxLength={10}
                  value={form.tel}
                  onChange={(e) => handleChange("tel", e)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextfield
                  label="User ID"
                  value={form.username}
                  required
                  error={error.username}
                  onChange={(e) => handleChange("username", e)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextfield
                  label="รหัสผ่าน"
                  type="password"
                  value={form.password}
                  required
                  error={error.password}
                  onChange={(e) => handleChange("password", e)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextfield
                  label="ยืนยันรหัสผ่าน"
                  type="password"
                  value={form.confirmPassword}
                  required
                  error={
                    error.confirmPassword ||
                    form.confirmPassword !== form.password
                  }
                  errorMessage={
                    form.confirmPassword
                      ? "รหัสผ่านไม่ตรงกัน"
                      : "กรุณากรอกยืนยันรหัสผ่าน"
                  }
                  onChange={(e) => handleChange("confirmPassword", e)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomSelect
                  label=" ตำแหน่ง"
                  options={ROLE.map((t) => t.value)}
                  getOptionLabel={(o) =>
                    ROLE.find((t) => t.value === o)?.name
                  }
                  value={form.role}
                  error={error.role}
                  onChange={(e) => handleChange("role", e)}
                  required
                />
              </Grid>
            </Grid>
          </Box>

          <Box display={"flex"} justifyContent={"center"} gap={2} mt={4}>
            <CustomButton
              text="ยกเลิก"
              style="outlined"
              onClick={handleClose}
            />
            <CustomButton text="ยืนยัน" onClick={handleSubmit} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
