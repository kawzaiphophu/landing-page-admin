import React, { useEffect, useState } from "react";
import {
  BaseSelectProps,
  Box,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface CustomSelectProps extends BaseSelectProps {
  label?: string;
  value: any | null;
  onChange: (value: any) => void;
  placeholder?: string;
  error?: boolean;
  options: any[];
  disabled?: boolean;
  showDefaultValue?: boolean;
  required?: boolean;
  getOptionLabel?: (option: any) => React.ReactNode;
  disabledOption?: (option: any) => boolean;
  errorMessage?: string;
  sx?: any;
  hideFirstOption?: boolean;
}

export default function CustomSelect({
  label,
  value,
  onChange,
  placeholder = `กรุณาระบุข้อมูล${label}`,
  error,
  errorMessage,
  options,
  disabled,
  showDefaultValue,
  required,
  getOptionLabel,
  sx,
  disabledOption,
  hideFirstOption = false,
}: CustomSelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    showDefaultValue ? (options.length ? options[0] : "") : value || ""
  );

  useEffect(() => {
    if (options?.includes(value)) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newValue = event.target.value as string;
    setSelectedValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        my: 1,
      }}
    >
      <TextField
      size="small"
        select
        fullWidth
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        value={options?.includes(value) ? value || selectedValue : ""}
        error={error}
        InputLabelProps={{
          shrink: true,
        }}
        required={required}
        sx={{
          "& .MuiSelect-select span::before": {
            content: `"${placeholder}"`,
            color: "#B7B7B7",
          },
        }}
      >
        {!required && !hideFirstOption && (
          <MenuItem
            value={""}
            sx={{ borderBottom: "1px solid #E5E5E5", height: "44px" }}
          >
            กรุณาเลือก{label}
          </MenuItem>
        )}
        {options?.length > 0 ? (
          options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              disabled={disabledOption ? disabledOption(option) : false}
              sx={{ borderBottom: "1px solid #E5E5E5", height: "44px" }}
            >
              {getOptionLabel ? getOptionLabel(option) : option}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No options available</MenuItem>
        )}
      </TextField>
      {error && (
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
          <Typography component="span" fontSize={12} fontWeight={400} noWrap>
            {errorMessage ? errorMessage : `กรุณาเลือก${label}`}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
