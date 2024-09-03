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
import React, { useState } from "react";

//?================================================================================
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import CustomSwitch from "@/components/Switch/Switch";
import { useSnackbar } from "@/components/Alert/CustomAlert";
import CustomTextEditor from "@/components/Editor/CustomTextEditor";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import CustomButton from "@/components/Button/CustomButton";

//?================================================================================

type Props = {};

//?================================================================================

export default function About({}: Props) {
  const theme = useTheme();
  const [images, setImages] = useState<string[]>([]);
  const { CustomAlert } = useSnackbar();
  //?==============================================================================

  const handleImageChange = (files: File[] | string[]) => {
    setImages(files as string[]);
  };

  const handleClick = () => {
    CustomAlert({
      color: "success", // Change to 'error', 'info', 'warning' as needed
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
          bgcolor: theme.palette.primary.dark,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          About Us Section
        </Typography>
      </Box>
      <Grid container mt={5} minHeight={"60vh"} height={"auto"}>
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          justifyContent={"space-between"}
          height={"auto"}
        >
          <CustomImageUpload
            label="อัปโหลดภาพ"
            onChange={handleImageChange}
            value={images}
            maxFiles={3}
            width="32%"
            height="30vh"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box height={"100%"} display={"flex"} flexDirection={"column"}>
            <CustomTextfield label="หัวข้อ" placeholder="กรอกหัวข้อ" />
            <CustomTextfield
              label="รายละเอียด"
              placeholder="กรอกรายละเอียด"
              minRows={10}
              value={""}
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        gap={2}
        justifyContent={"center"}
        alignSelf="flex-end"
      >
        <CustomButton text="Cancel" style="outlined" />
        <CustomButton text="Submit" style="contained" />
      </Box>
    </Box>
  );
}
//?===============================================================================
