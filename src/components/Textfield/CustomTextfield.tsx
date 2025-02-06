"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

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
  maxValue?: number | string;
}

export default function CustomTextfield({
  name,
  label,
  value = undefined,
  onChange,
  id,
  placeholder = `กรุณาระบุข้อมูล${label}`,
  error,
  onKeyDown,
  InputProps,
  type = "text",
  maxLength,
  onBlur,
  disabled,
  helperText,
  errorMessage,
  required,
  showLength,
  minRows,
  endAdornment,
  sx,
  maxValue,
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [validateError, setValidateError] = useState<string | null>(null);
  const [length, setLength] = useState<number>(0);
  const [inputValue, setInputValue] = useState<any>(value);

  useEffect(() => {
    if (typeof value === "string") {
      setLength(value.length);
    }
    setInputValue(value);
  }, [value]);

  const validateInput = (inputValue: string): string | null => {
    let validatedValue = inputValue;

    if (type === "number" || type === "phone" || type === "numberWithComma") {
      const cleanedInputValue = inputValue.replace(/,/g, "");

      if (maxLength && cleanedInputValue.length > maxLength) {
        validatedValue = cleanedInputValue.slice(0, maxLength);
      } else {
        validatedValue = cleanedInputValue;
      }
      if (maxValue && Number(validatedValue) > Number(maxValue)) {
        return String(maxValue);
      }

      validatedValue = validatedValue.replace(/[eE]/g, "");
    }

    switch (type) {
      case "number":
        const cleanedNumberValue = validatedValue
          .replace(/[^0-9.eE]/g, "")
          .replace(/(\..*)\..*/g, "$1")
          .slice(0, maxLength);

        if (cleanedNumberValue === "") {
          return "";
        }

        const numericValue = Number(cleanedNumberValue);

        if (maxValue && numericValue > Number(maxValue)) {
          return String(maxValue);
        }

        return numericValue.toString();

      case "phone":
        const cleanedPhoneValue = validatedValue.replace(/[^0-9+]/g, "");

        if (maxLength && cleanedPhoneValue.length > maxLength) {
          return cleanedPhoneValue.slice(0, maxLength);
        }

        if (cleanedPhoneValue === "") {
          return "";
        }

        if (
          maxValue &&
          Number(cleanedPhoneValue.replace("+", "")) > Number(maxValue)
        ) {
          return String(maxValue);
        }

        return cleanedPhoneValue;
      case "float":
        const floatPattern = /^\d*\.?\d{0,2}$/;

        validatedValue = validatedValue.replace(/[^0-9.]/g, "");

        if (floatPattern.test(validatedValue)) {
          const floatVal = parseFloat(validatedValue);

          if (maxValue && floatVal > Number(maxValue)) {
            return String(maxValue);
          }

          return validatedValue;
        }

        return "";

      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(validatedValue)) {
          setValidateError("ที่อยู่อีเมลไม่ถูกต้อง");
          return validatedValue; // Return current value even if invalid
        }

        setValidateError(null);
        break;

      case "textWithoutSymbol":
        const removeSpecialCharacters = (str: string) => {
          return str.replace(/[\^~$|<>.,#;:]/g, "");
        };
        validatedValue = removeSpecialCharacters(validatedValue);
        break;
      case "numberWithComma":
        const numericinput = (validatedValue);
        if (maxValue && Number(numericinput) > Number(maxValue)) {
          return String(maxValue);
        }
        const cleanedInputValue = inputValue.replace(/,/g, "");
        validatedValue = cleanedInputValue
          .replace(/[^0-9.eE]/g, "")
          .replace(/(\..*)\..*/g, "$1")
          .slice(0, maxLength || undefined);

        if (validatedValue === "") {
          return "";
        }

        if (maxLength && validatedValue.length > maxLength) {
          validatedValue = validatedValue.slice(0, maxLength);
        }

    

        if (!isNaN(Number(numericinput))) {
          validatedValue = numericinput.toLocaleString();
        } else {
          return "";
        }

        return validatedValue;

      default:
        break;
    }

    return validatedValue;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    const validatedValue = validateInput(inputValue);
    if (validatedValue !== null) {
      setLength(validatedValue.length);
      setInputValue(validatedValue);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    if (!inputValue) {
      setValidateError(null);
    }
    onChange && onChange(inputValue.replace(/,/g, ""));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
      "v",
      "c",
      "a",
      '.'
    ];

    if (event.ctrlKey || event.metaKey) {
      if (event.key === "c" || event.key === "v" || event.key === "a") {
        return;
      }
    }

    if (type === "number" || type === "phone" || type === "numberWithComma") {
      const isNumericKey = /^\d$/.test(event.key);
      const isAllowedKey = allowedKeys.includes(event.key);
      if (!isNumericKey && !isAllowedKey) {
        event.preventDefault();
      }
    }

    onKeyDown && onKeyDown(event);
  };

  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        my: 1,
      }}
    >
      <TextField
        name={name}
        autoComplete={"off"}
        label={label}
        disabled={disabled}
        id={id}
        placeholder={type === "number" && !placeholder ? "0.00" : placeholder}
        variant="outlined"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue === "NOT_SPECIFIED" ? "" : inputValue || ""}
        error={error || Boolean(validateError)}
        fullWidth
        inputProps={{
          maxLength: maxLength,
          inputMode: "numeric",
        }}
        InputLabelProps={{
          shrink: true,
          ...InputProps,
        }}
        type={
          type === "number"
            ? "text"
            : showPassword
            ? "text"
            : type === "password"
            ? "password"
            : type
        }
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
              <InputAdornment position="end">
                {endAdornment}
                {type === "password" && (
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                )}
              </InputAdornment>
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
      />

      {(error || validateError) && (
        <Box
          sx={{
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
          }}
        >
          <ErrorOutlineIcon sx={{ width: "16px", mr: 1 }} />
          <Typography
            component="span"
            fontSize={12}
            fontWeight={400}
            color={"red"}
          >
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
