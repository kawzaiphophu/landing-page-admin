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
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import CustomButton from "@/components/Button/CustomButton";

//?================================================================================

type Props = {};

//?================================================================================

export default function Home({}: Props) {
  const theme = useTheme();
  const [images, setImages] = useState<string[]>([]);

  //?==============================================================================

  const handleImageChange = (files: File[] | string[]) => {
    setImages(files as string[]);
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
          Home Section
        </Typography>
      </Box>
      <Grid container spacing={2} mt={5} minHeight={"60vh"} height={"auto"}>
        <Grid item xs={12} md={6} display="flex" flexDirection="column">
          <Box
            width={"100%"}
            minHeight={"40vh"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            <CustomImageUpload
              label="Upload Images"
              onChange={handleImageChange}
              value={images}
              height="500px"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            height={"100%"}
            p={5}
          >
            <CustomTextfield label="Title" placeholder="Enter title" />
            <CustomTextfield
              label="Subtitle"
              placeholder="Enter subtitle"
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
