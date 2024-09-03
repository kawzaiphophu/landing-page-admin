import React, { useState, useEffect } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import theme from "@/theme/theme";

interface CustomInputWithTagsProps {
  value?: any[];
  options: any[];
  onChange: (newValue: any[]) => void;
  onInputChange?: (inputValue: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  getOptionLabel?: (option: any | undefined) => string;
  error?: boolean;
  minRows?: number;
}

const CustomInputWithTags: React.FC<CustomInputWithTagsProps> = ({
  value = [],
  options,
  onChange,
  onInputChange,
  placeholder,
  label,
  disabled,
  getOptionLabel = (option) => option?.toString() || "",
  error,
  minRows,
}) => {
  const [selectedTags, setSelectedTags] = useState<any[]>(value);

  useEffect(() => {
    setSelectedTags(value);
  }, [value]);

  const handleAutocompleteChange = (_: any, newTags: any[]) => {
    setSelectedTags(newTags);
    onChange(newTags);
  };

  const handleInputChange = (_: any, inputValue: string) => {
    if (onInputChange) {
      onInputChange(inputValue);
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
        marginY: "16px",
      }}
    >
      <Autocomplete
        sx={styleAutoComplete}
        multiple
        fullWidth
        id="tags-outlined"
        options={options}
        value={selectedTags} // Controlled value
        freeSolo
        getOptionLabel={getOptionLabel}
        onChange={handleAutocompleteChange}
        onInputChange={handleInputChange}
        disabled={disabled}
        renderOption={(props, option) => {
          const isSelected = selectedTags.some(
            (selectedTag) =>
              JSON.stringify(selectedTag) === JSON.stringify(option)
          );
          return (
            <li
              {...props}
              style={{
                backgroundColor: isSelected ? "#EDE4FF" : "transparent",
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
                color: "#FFFFFF",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
              },
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
