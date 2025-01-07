import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Image from "next/image";
import AlertSwal from "../Alert/AlertSwal";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

interface CustomImageUploadProps {
  label: string;
  onChange: (files: any[]) => void;
  value?: any[];
  maxFiles?: number;
  width?: string;
  height?: string;
  buttonRightTop?: boolean;
  disabled?: boolean;
  required?: boolean;
  acceptPDF?: boolean;
}

export default function CustomImageUpload(props: CustomImageUploadProps) {
  const {
    label,
    onChange,
    value = [],
    maxFiles = 20,
    width,
    height,
    buttonRightTop,
    disabled,
    required,
    acceptPDF = true,
  } = props;
  const [selectedFiles, setSelectedFiles] = useState<any[]>(value);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value.length !== previewUrls.length) {
      setPreviewUrls(value);
    }
    setSelectedFiles(value);
  }, [value]);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const validFiles: File[] = [];

      if (selectedFiles.length + filesArray.length > maxFiles) {
        return;
      }

      filesArray.forEach((file) => {
        const fileSizeLimit = 2 * 1024 * 1024; // 2MB in bytes
        const allowedExtensions = [ "pdf", "xls", "xlsx"];
        const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";

        if (
          file.size > fileSizeLimit ||
          !allowedExtensions.includes(fileExtension)
        ) {
          return AlertSwal({
            icon: "error",
            title: "อัปโหลดรูปไม่สำเร็จ",
            text: "เฉพาะไฟล์ .PDF, .xls, .xlsx เท่านั้น",
          });
        }

        validFiles.push(file);
      });

      if (validFiles.length > 0) {
        const updatedFiles = [...selectedFiles, ...validFiles];
        setSelectedFiles(updatedFiles);
        setPreviewUrls(value);
        onChange(updatedFiles);
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    if (
      index < 0 ||
      index >= previewUrls.length ||
      index >= selectedFiles.length
    ) {
      console.error("Index out of range");
      return;
    }
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);

    setPreviewUrls(newPreviewUrls);
    setSelectedFiles(newSelectedFiles);
    onChange(newSelectedFiles);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const filesArray = Array.from(event.dataTransfer.files);
    const validFiles: File[] = [];

    filesArray.forEach((file) => {
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB in bytes
      const allowedExtensions = ["png", "jpg", "jpeg", "pdf", "xls", "xlsx"];
      const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";

      if (
        file.size > fileSizeLimit ||
        !allowedExtensions.includes(fileExtension)
      ) {
        return;
      }

      validFiles.push(file);
    });

    if (validFiles.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);

      const newPreviewUrls = validFiles.map((file) =>
        URL.createObjectURL(file)
      );

      setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
      onChange([...selectedFiles, ...validFiles]);

      // Cleanup
      validFiles.forEach((file) =>
        URL.revokeObjectURL(URL.createObjectURL(file))
      );
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const filePath = process.env.API_URL?.replace("/api", "/uploads");

  return (
    <Box
      sx={{
        ...(buttonRightTop && {
          position: "relative",
        }),
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "600", color: "#626262", m: "8px 0 16px 0" }}
      >
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <Box
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        width={"100%"}
        minHeight={height ? height : "200px"}
        maxHeight={width ? width : "auto"}
        sx={{
          border: "1px solid #dedede",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 6,
        }}
        overflow={"scroll"}
      >
        <Box display={"flex"} gap={2} flexWrap={"wrap"}>
          {!previewUrls.length && (
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={2}
              xs={12}
            >
              <FileUploadOutlinedIcon sx={{fontSize:50,color:'grey'}} />
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#626262",
                }}
              >
                ขนาดไฟล์ : 2 MB
              </Typography>
            </Grid>
          )}
          {!buttonRightTop && (
            <Box position={"absolute"} right={-30} top={-20}>
              <Typography variant="body1" color="#9E9E9E">
                {previewUrls.length} / {maxFiles}
              </Typography>
            </Box>
          )}
          {previewUrls.map((preview, index) => (
            // <Grid
            //   item
            //   key={index}
            //   xs={preview?.endsWith(".pdf") ? 4 : buttonRightTop ? 4 : 1.7}
            //   position={"relative"}
            //   display={"flex"}
            //   justifyContent={"center"}
            // >
              <Box
                sx={{
                  border: "1px solid #DEDEDE",
                  width:'auto',
                  height: height ? height : "100%",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    padding: "8px",
                    justifyContent: "space-between",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    py: 2,
                  }}
                >

                  <Typography variant="body2" noWrap>
                    {preview.replace(filePath || "", "").replace("/", "")}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      window.open(preview.replace('uploads','api/files/download'), "_blank");
                    }}
                    sx={{
                      width: 36,
                      height: 36,
                      alignSelf: "center",
                      bgcolor: "#FFF",
                      border: "1px solid #DEDEDE",
                      borderRadius: "50%",
                    }}
                  >
                    <FileDownloadOutlinedIcon color="success" />
                  </IconButton>
                </Box>

                {preview && (
                  <IconButton
                    sx={{
                      display: disabled ? "none" : "flex",
                      position: "absolute",
                      top: "-1rem",
                      right: "-1rem",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 1)",
                      },
                    }}
                    onClick={() => handleRemoveImage(index)}
                  >
                    <CancelRoundedIcon
                      color={disabled ? "disabled" : "error"}
                    />
                  </IconButton>
                )}
              </Box>
            // </Grid>
          ))}
        </Box>
        {selectedFiles.length < maxFiles && (
          <Button
            variant="outlined"
            sx={{
              ...(buttonRightTop && {
                position: "absolute",
                right: 2,
                top: -80,
              }),
              my: 2,
              bgcolor: "#FFF",
              padding: "16px 24px",
              border: "2px solid primary",
              display: "flex",
              gap: 2,
              alignSelf: "bottom",
              "&:hover": {
                bgcolor: "primary",
              },

            }}
            size="small"
            component="label"
            disabled={disabled}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              color={disabled ? "#DEDEDE" : 'primary'}
            >
              + เลือกไฟล์
            </Typography>
            <input
              type="file"
              hidden
              multiple
              accept={`application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}
              ref={fileInputRef}
              onChange={handleChangeFile}
            />
          </Button>
        )}
      </Box>
    </Box>
  );
}
