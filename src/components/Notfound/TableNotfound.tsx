import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function NotFoundTable({}: Props) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"72px"}
      bgcolor={"#DCDCDC"}
    >
      <Typography fontSize={"26px"} fontWeight={700} >
        ไม่พบข้อมูล
      </Typography>
    </Box>
  );
}
