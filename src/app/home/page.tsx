"use client";

import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import CustomSwitch from "@/components/Switch/Switch";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";

type Props = {};

export default function Home({}: Props) {
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (files: File[] | string[]) => {
    // Handle the updated images here
    setImages(files as string[]);
  };
  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
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
          bgcolor: theme.palette.primary.main,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          Home Section / Hero Section
        </Typography>
        <CustomSwitch checked />
      </Box>
      <Box my={2} height={"65vh"} display={"flex"}>
        <Box
          flex={1}
          p={2}
          display="flex"
          gap={3}
          flexDirection={"column"}
          alignItems="center"
        >
          {/* <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"60%"}
            onClick={handleBoxClick} // Handle click to open file dialog
            sx={{
              cursor: "pointer",
              border: "1px solid #dadada",
              width: "100%",
              borderRadius: "8px",
            }}
          >
            {imageSrc ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={imageSrc as string}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ) : (
              <>
                <Typography>Image Drag-and-Drop Input</Typography>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </>
            )}
          </Box> */}
          <Box p={1}>
            <CustomImageUpload
              label="Upload Images"
              onChange={handleImageChange}
              value={images}
            />
          </Box>
          <TextField
            fullWidth
            label="Main Title"
            variant="outlined"
            placeholder="Enter main title"
          />
          <TextField
            fullWidth
            label="Subtitle"
            variant="outlined"
            placeholder="Enter subtitle"
          />
          <Box display={"flex"} gap={2}>
            <Button variant="outlined">cancle</Button>
            <Button variant="contained">submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
