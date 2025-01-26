import React, { useState, useRef, useEffect } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AlertSwal from "../Alert/AlertSwal";

interface CustomFileUploadProps {
  label?: string;
  onChange: (file: File | null) => void;
  value?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  required?: boolean;
}

export default function CustomFileUpload(props: CustomFileUploadProps) {
  const {
    label,
    onChange,
    value = "",
    width,
    height,
    disabled,
    required,
  } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const fileSizeLimit = 2 * 1024 * 1024; // 2MB in bytes
      const allowedExtensions = ["pdf", "xls", "xlsx"];
      const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";

      if (
        file.size > fileSizeLimit ||
        !allowedExtensions.includes(fileExtension)
      ) {
        AlertSwal({
          icon: "error",
          title: "Upload Failed",
          text: "Only .PDF, .XLS, and .XLSX files are allowed under 2MB.",
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      onChange(file);
    }
  };

  const handleRemoveFile = () => {
    onChange(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const filePath = process.env.API_URL?.replace("/api", "/uploads");

  return (
    <Box>
      <Typography variant="subtitle1">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>

      {!value && (
        <Button
          sx={{
            "&:hover": {
              bgcolor: "primary",
            },
          }}
          size="small"
          component="label"
          disabled={disabled}
        >
          <FileUploadOutlinedIcon sx={{ fontSize: 24, color: "grey" }} />
          <input
            type="file"
            hidden
            accept={`application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}
            ref={fileInputRef}
            onChange={handleChangeFile}
          />
        </Button>
      )}

      {value && (
        <Box
          sx={{
            borderRadius: "8px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            noWrap
            onClick={() => {
              window.open(
                value.replace("uploads", "api/files/download"),
                "_blank"
              );
            }}
            sx={{ ":hover": { cursor: "pointer" } }}
          >
            {value
              .toString()
              .replace(filePath || "", "")
              .replace("/", "")}
          </Typography>
          <Box display="flex" gap={1}>
            <IconButton
              onClick={handleRemoveFile}
              sx={{
                width: 24,
                height: 24,
                bgcolor: "#FFF",

                borderRadius: "50%",
              }}
              disabled={disabled}
            >
              <CancelRoundedIcon color="error" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
}
