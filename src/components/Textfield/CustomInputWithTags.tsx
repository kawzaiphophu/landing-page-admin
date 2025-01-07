import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ClearIcon } from "@mui/x-date-pickers";

interface CustomInputWithTagsProps {
  value?: any;
  options: any[];
  onChange: (newValue: any) => void;
  onInputChange?: (inputValue: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  getOptionLabel?: (option: any | undefined) => string;
  error?: boolean;
  minRows?: number;
  onClear?: () => void;
  require?:boolean
}

const CustomInputWithTags: React.FC<CustomInputWithTagsProps> = ({
  value,
  options,
  onChange,
  onInputChange,
  placeholder,
  label,
  disabled,
  getOptionLabel = (option) => option?.toString() || "",
  error,
  minRows,
  onClear,
  require
}) => {
  const [selectedTags, setSelectedTags] = useState<string>(value);

  useEffect(() => {
    setSelectedTags(value);
  }, []);

  const handleInputChange = (_: any, inputValue: string) => {
    if (onInputChange) {
      onInputChange(inputValue);
    }
  };
  const handleChange = (_: any, value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const handleClearClick = () => {
    if (onClear) {
      onClear();
    }
    setSelectedTags("");
    if (onChange) {
      onChange("");
    }
  };

  const styleAutoComplete = {
    "& .MuiAutocomplete-inputRoot": {
      padding: "0px 9px",
      display: "flex",
    },
    "& .MuiInputBase-input": {
      minHeight: `${minRows || 1 * 44}px`,
      height: "100%",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "end",
        my: 1,
      }}
    >
      {/* <Autocomplete
        sx={styleAutoComplete}
        // multiple
        fullWidth
        id="tags-outlined"
        options={options}
        value={selectedTags}
        // freeSolo
        getOptionLabel={getOptionLabel}
        onChange={handleAutocompleteChange}
        onInputChange={handleInputChange}
        disabled={disabled}
        renderOption={(props, option) => {
          const isSelected = selectedTags?.includes(option);
          return (
            <li
              {...props}
              style={{
                backgroundColor: isSelected ? "primary" : "transparent",
              }}
            >
              {option && getOptionLabel(option)}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            error={error}
            minRows={minRows}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              "& .MuiAutocomplete-tag": {
                backgroundColor: theme.palette.primary.light,
                color: "secondary",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
              },
            }}
          />
        )}
      /> */}
      <Autocomplete
        sx={styleAutoComplete}
        fullWidth
        disablePortal
        options={options}
        onChange={handleChange}
        onInputChange={handleInputChange}
        clearIcon={null}
        disabled={disabled}
        getOptionLabel={(option) =>
          option && typeof option === "object" && Object.keys(option).length
            ? getOptionLabel(option)
            : ""
        }
        isOptionEqualToValue={(option, value) => option.id === value.id} 
        value={value && Object.keys(value).length ? value : null}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={
              !value || Object.keys(value).length === 0 ? placeholder : ""
            }
            error={error}
            multiline
            required={require}
            value={value && Object.keys(value).length ? value : selectedTags}
            minRows={minRows}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              "& .MuiInputBase-root": {
                padding: "2px 8px",
                alignItems: "start",
                overflow: "auto",
              },
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  <IconButton
                    onClick={handleClearClick}
                    disabled={disabled}
                    size="small"
                    sx={{
                      position: "absolute",
                      right: "30px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: "4px",
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />

      {error && (
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
            {`กรุณากรอก${label}`}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CustomInputWithTags;
