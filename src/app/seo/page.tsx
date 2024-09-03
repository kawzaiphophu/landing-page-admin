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
import CustomInputWithTags from "@/components/Textfield/CustomInputWithTags";

//?================================================================================

type Props = {};

type FormSeo = {
  keyword?: string[];
};

type ErrorState = {
  keyword?: boolean;
};
//?================================================================================

export default function About({}: Props) {
  const theme = useTheme();
  const [images, setImages] = useState<string[]>([]);
  const { CustomAlert } = useSnackbar();
  const [formSeo, setFormSeo] = useState<FormSeo>({ keyword: [] });
  const [err, setErr] = useState<ErrorState>({ keyword: false });
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

  // Step 2: Handle Changes
  const handleChange = (field: keyof FormSeo, value: string[]) => {
    setFormSeo((prev) => ({
      ...prev,
      [field]: value,
    }));
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
          SEO
        </Typography>
      </Box>
      <Grid container mt={5} minHeight={"60vh"} height={"auto"}>
        <Grid item xs={12} md={12}>
          <CustomTextfield label="Meta Author" placeholder="Meta Author" />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomTextfield
            label="Meta Author"
            placeholder="Meta Author"
            minRows={10}
            value={""}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomInputWithTags
            label="Meta keyword"
            placeholder="Meta keyword"
            value={formSeo.keyword || []}
            onChange={(value) => handleChange("keyword", value)}
            options={[]} // Provide options if needed
            error={err.keyword}
          />
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
