import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface CustomImageUploadProps {
  label: string;
  onChange: (files: File[] | string[]) => void;
  value?: string[];
  maxFiles?: number;
  width?: string;
  height?: string;
}

export default function CustomImageUpload(props: CustomImageUploadProps) {
  const {
    label,
    onChange,
    value,
    maxFiles = 1,
    width = 300,
    height = 300,
  } = props;
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  console.log(selectedFiles.length);

  useEffect(() => {
    if (value) {
      const updatedUrls = value.map((item) =>
        typeof item === "string" ? item : URL.createObjectURL(item)
      );
      setPreviewUrls(updatedUrls);
    }
    return () => {
      previewUrls.forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [value]);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const validFiles: File[] = [];

      if (selectedFiles.length + filesArray.length > maxFiles) {
        return;
      }

      filesArray.forEach((file) => {
        const fileSizeLimit = 5 * 1024 * 1024; // 5MB in bytes
        const allowedExtensions = ["png", "jpg", "jpeg"];
        const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";

        if (
          file.size > fileSizeLimit ||
          !allowedExtensions.includes(fileExtension)
        ) {
          // Display an error or warning about file size or type
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
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImagePreviews = [...previewUrls];
    const newImages = [...selectedFiles];

    newImagePreviews.splice(index, 1);
    newImages.splice(index, 1);

    setPreviewUrls(newImagePreviews);
    setSelectedFiles(newImages);
    onChange(newImages);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const filesArray = Array.from(event.dataTransfer.files);
    const validFiles: File[] = [];

    filesArray.forEach((file) => {
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB in bytes
      const allowedExtensions = ["png", "jpg", "jpeg"];
      const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";

      if (
        file.size > fileSizeLimit ||
        !allowedExtensions.includes(fileExtension)
      ) {
        // Display an error or warning about file size or type
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

  return (
    <Box
      maxWidth={"100%"}
      overflow={"auto"}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Typography
        sx={{ fontSize: "14px", fontWeight: "600", color: "#2D3648" }}
      >
        {label}
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {previewUrls.map((url, index) => (
          <Box
            key={url}
            sx={{
              position: "relative",
              width: width ?? "200px",
              height: height ?? "200px",
              border: "2px dashed #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={url}
              alt={`preview-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                alignSelf: "center",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
              onClick={() => handleRemoveImage(index)}
            >
              <Delete color="error" />
            </IconButton>
          </Box>
        ))}
        {selectedFiles.length < maxFiles && (
          <IconButton
            sx={{
              borderRadius: "12px",
              width: width ?? "200px",
              height: height ?? "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#888",
              border: "2px dashed #ccc",
              backgroundColor: "#f9f9f9",
            }}
            component="label"
          >
            +
            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={handleChangeFile}
            />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
