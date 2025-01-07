"use client";
//?================================================================================
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  Divider,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";

//?================================================================================
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import { useSnackbar } from "@/components/Alert/CustomAlert";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import CustomButton from "@/components/Button/CustomButton";
import DashboardStats from "./component/DashboardStats";
import OrdersTable from "./component/OrdersTable";
import SalesChart from "./component/SalesChart";
import DashboardApi from "@/api/dashboard.api";
import { ISummary } from "@/types/dashboard.type";

//?================================================================================

type Props = {};

//?================================================================================

export default function Dashboard({}: Props) {
  const theme = useTheme();
  const [images, setImages] = useState<string[]>([]);
  const { CustomAlert } = useSnackbar();

  const dateForm = new Date();
  dateForm.setDate(dateForm.getDate() - 30);
  const dateTo = new Date();

  //?==============================================================================

  const handleImageChange = (files: File[] | string[]) => {
    setImages(files as string[]);
  };

  const handleClick = () => {
    CustomAlert({
      color: "error", // Change to 'error', 'info', 'warning' as needed
      title: "Operation Successful",
      text: "Your operation was completed successfully.",
    });
  };

  //?==============================================================================

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
          bgcolor: theme.palette.primary.light,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        <DashboardStats  />

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <SalesChart />
          </Box>
        
        </Box>
        <Box sx={{ flex: 1 }}>
            <OrdersTable />
          </Box>
      </Box>
    </Box>
  );
}
//?===============================================================================
