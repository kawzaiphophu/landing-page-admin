"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import theme from "@/theme/theme";

interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | number | null | undefined;
  onChange?: (value: any, lat?: any, lng?: any) => void;
  disabled?: boolean;
  id?: string;
  error?: boolean;
  errorMessage?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  InputProps?: {
    startAdornment?: React.ReactNode;
  };
  maxLength?: number;
  onBlur?: (value: string) => void;
  helperText?: string;
  onClickButton?: () => void;
  required?: boolean;
  showLength?: boolean;
  minRows?: number;
  endAdornment?: any;
  sx?: any;
  buttonText?: string;
  valueLat?: string;
  valueLng?: string;
}

export default function CustomTextfield({
  name,
  label,
  value = undefined,
  onChange,
  id,
  placeholder,
  error,
  onKeyDown,
  InputProps,
  type = "text",
  maxLength,
  onBlur,
  disabled,
  helperText,
  errorMessage,
  onClickButton,
  required,
  showLength,
  minRows,
  endAdornment,
  sx,
  buttonText,
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [validateError, setValidateError] = useState<string | null>(null);
  const [length, setLength] = useState<number>(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof value === "string") {
      setLength(value.length);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    setLength(inputValue.length);
    if (type === "number") {
      if (maxLength && inputValue.length > maxLength) {
        inputValue = inputValue.slice(0, maxLength);
      }
      onChange && onChange(inputValue);
      return;
    }
    switch (type) {
      case "password":
        onChange && onChange(inputValue);
        if (inputValue.length < 6 || inputValue.length > 15) {
          setValidateError("รหัสผ่านความยาว 6-15 ตัวอักษร");
        } else {
          setValidateError(null);
        }
        break;

      case "float":
        const floatPattern = /^\d*\.?\d{0,2}$/;
        if (floatPattern.test(inputValue)) {
          const floatVal = parseFloat(inputValue);
          if (isNaN(floatVal) || floatVal <= 10.0) {
            onChange && onChange(inputValue);
          }
        }
        break;

      case "phone":
        if (inputValue.length <= 10) {
          onChange && onChange(inputValue);
        }
        break;

      case "email":
        onChange && onChange(inputValue);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(inputValue)) {
          setValidateError(null);
        } else {
          setValidateError("ที่อยู่อีเมลไม่ถูกต้อง");
        }
        break;

      case "textWithoutSymbol":
        const removeSpecialCharacters = (str: string) => {
          return str.replace(/[\^~$|<>.,#;:]/g, "");
        };
        inputValue = removeSpecialCharacters(inputValue);
        onChange && onChange(inputValue);
        break;

      default:
        onChange && onChange(inputValue);
        break;
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    if (type === "float") {
      if (inputValue) {
        let floatVal = parseFloat(inputValue);
        if (isNaN(floatVal)) {
          floatVal = 0.0;
        }
        if (floatVal > 10.0) {
          floatVal = 10.0;
        }
        inputValue = floatVal.toFixed(2);
        onChange && onChange(inputValue);
      }
    }

    onBlur && onBlur(inputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number" || type === "float") {
      const allowedKeys = [
        "Backspace",
        "Tab",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        ".",
      ];
      if (!allowedKeys.includes(event.key) && !/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    }
    onKeyDown && onKeyDown(event);
  };

  const handleMapOpen = () => {
    setOpen(true);
  };

  const handleMapClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
        display: "flex",
        position: "relative",
        flexDirection: "row",
        py: "8px",
      }}
    >
      <TextField
        name={name}
        autoComplete={"off"}
        label={label}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        variant="outlined"
        onChange={handleChange}
        value={value || ""}
        error={error || Boolean(validateError)}
        fullWidth
        inputProps={{
          maxLength: maxLength,
        }}
        InputLabelProps={{
          shrink: true,
          ...InputProps,
        }}
        onKeyDown={handleKeyDown}
        type={showPassword ? "text" : type === "password" ? "password" : type}
        onBlur={handleBlur}
        onWheel={(event) => event.currentTarget.querySelector("input")?.blur()}
        helperText={helperText}
        required={required}
        multiline={!!minRows}
        minRows={minRows}
        size="small"
        InputProps={{
          endAdornment: (
            <>
              {type === "map" ? (
                <InputAdornment position="end">
                  <LocationOnIcon
                    style={{ cursor: "pointer" }}
                    onClick={handleMapOpen}
                  />
                </InputAdornment>
              ) : (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              )}
            </>
          ),
          startAdornment:
            type === "search" ? (
              <InputAdornment position="start">
                <SearchRoundedIcon
                  sx={{ width: "24px", height: "24px", color: "#797979" }}
                />
              </InputAdornment>
            ) : null,
        }}
        sx={
          type === "search"
            ? {
                "& .MuiInputBase-root": {
                  borderRight: "none",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                },
              }
            : {}
        }
      />
      {type === "search" && (
        <>
          <Button
            onClick={onClickButton}
            sx={{
              color: "#FFFFFF",
              backgroundColor: theme.palette.secondary.main,
              height: "44px",
              width: "auto",
              alignSelf: "end",
              borderRadius: "0  8px 8px 0",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
              },
              "&:active": {
                backgroundColor: theme.palette.secondary.light,
              },
            }}
          >
            {buttonText}
          </Button>
        </>
      )}
      {type === "password" && (
        <IconButton
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          sx={{
            position: "absolute",
            right: 0,
            top: "27px",
            "&:hover": { background: "none" },
          }}
        >
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      )}
      {(error || validateError) && (
        <Box
          sx={{
            position: "absolute",
            bottom: "-25px",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14.06px",
            color: "#E20E0E",
          }}
        >
          <ErrorOutlineIcon sx={{ width: "16px", mr: 1 }} />
          <Typography component="span" fontSize={12} fontWeight={400}>
            {validateError || errorMessage || `กรุณากรอก${label}`}
          </Typography>
        </Box>
      )}
      {type === "" && (
        <Box
          sx={{
            position: "absolute",
            bottom: "-25px",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14.06px",
            color: "#E20E0E",
          }}
        >
          <ErrorOutlineIcon sx={{ width: "16px", mr: 1 }} />
          <Typography component="span" fontSize={12} fontWeight={400}>
            {validateError || errorMessage || `กรุณากรอก${label}`}
          </Typography>
        </Box>
      )}
      {showLength && (
        <Box
          sx={{
            position: "absolute",
            bottom: "-20px",
            right: "2px",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14.06px",
            color: "#666666",
          }}
        >
          <Typography component="span" fontSize={12} fontWeight={400}>
            {length + "/" + maxLength}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
