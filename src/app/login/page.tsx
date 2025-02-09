"use client";

import AppApi from "@/api/app.api";
import CustomButton from "@/components/Button/CustomButton";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import { Grid, Box, Typography, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import bg from "@/assets/bg.jpg";
import Image from "next/image";
import logo from "@/assets/logo-red-VqMlSVYQ.png";
import { useSnackbar } from "@/components/Alert/CustomAlert";

type Props = {};

export default function Login({}: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { CustomAlert } = useSnackbar();

  useEffect(() => {
    // Cookies.remove("auth_token");
    // localStorage.removeItem("auth_token");
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const body = { username: username, password: password };
      const data = await AppApi.signin(body);
      if (data) {
        Cookies.set("auth_token", data.access_token, {
          expires: 1,
          sameSite: "Strict",
        });
        localStorage.setItem("auth_token", data.access_token);
        const decoded: {
          username: string;
          firstName: string;
          lastName: string;
        } = jwtDecode(data.access_token);
        localStorage.setItem("username", decoded.username);
        localStorage.setItem("role", data.role);
        CustomAlert({ color: "success", title: "เข้าสู่ระบบสำเร็จ" });
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        setUsername("");
        setPassword("");
        CustomAlert({
          color: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง",
          text: "",
        });
      }
    } catch (error) {
      setTimeout(() => {
        CustomAlert({
          color: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง",
          text: "",
        });
      }, 500);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };
  const name = process.env.NEXT_PUBLIC_NAME_COMPANY;

  return (
    <Box
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      overflow={"hidden"}
      mt={0}
      justifyContent={"center"}
      position={"relative"}
    >
      {loading && <Loading />}
      <Grid
        xs={7}
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: -1,
        }}
      >
        <Image
          src={bg}
          alt="bg"
          fill
          style={{
            objectFit: "cover",
            filter: "brightness(70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />
      </Grid>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          px={4}
          bgcolor="rgba(255,255,255, 0.96)"
          borderRadius={4}
          py={4}
          minWidth={"30vw"}
        >
          <Image src={logo} alt="logo" width={200} />
          <Typography
            fontSize={50}
            fontWeight={600}
            color="primary"
            pt={"25px"}
            noWrap
          >
            {name}
          </Typography>
          <Typography
            fontSize={20}
            fontWeight={600}
            color="#696969"
            noWrap
            alignSelf={"end"}
          >
            Website Company
          </Typography>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Typography
              fontSize={30}
              fontWeight={500}
              color="primary"
              p={"10px"}
            >
              เข้าสู่ระบบ
            </Typography>
            {/* <FormControl > */}
            <Box
              py={"3rem"}
              px={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              bgcolor={"#FFF"}
              borderRadius={4}
            >
              <CustomTextfield
                label="ชื่อผู้ใช้งาน"
                value={username}
                onChange={(v) => setUsername(v)}
              />
              <CustomTextfield
                label="รหัสผ่าน"
                type="password"
                value={password}
                onChange={(v) => setPassword(v)}
              />
            </Box>
            {/* </FormControl> */}
            <Box display={"flex"} flexDirection={"column"} pt={"20px"} gap={2}>
              <CustomButton text="เข้าสู่ระบบ" onClick={handleLogin} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
