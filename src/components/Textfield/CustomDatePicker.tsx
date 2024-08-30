"use client";

import { DateView, LocalizationProvider } from "@mui/x-date-pickers";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

//*------------------------------------------------------------------------
const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "30px",
    color: "#2D3648 !important",
    transform: "translate(0, -5px) scale(1) !important",
    position: "relative !important",
    "& .MuiFormLabel-asterisk": {
      color: "#CD2525 !important",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.primary,
    boxSizing: "none",
  },
  "& .MuiInputBase-input::placeholder": {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18.75px",
    color: theme.palette.placeholder,
  },
  "& .MuiInputBase-root ": {
    cursor: "default",
  },
  "& .MuiInputBase-root": {
    color: theme.palette.text.primary,
    border: `solid 1px ${theme.palette.inputBorder}`,
    minHeight: "44px",
    minWidth: "150px",
    paddingRight: "25px",
    "& fieldset": {
      display: "none",
      borderColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      border: `solid 1px ${theme.palette.inputBorder}`,
    },
    "&.Mui-focused": {
      border: `solid 1px ${theme.palette.primary.main}`, // Use theme for primary color
      "& fieldset": {
        borderColor: "transparent",
      },
    },
    "& .MuiInputAdornment-root button": {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "0",
      borderRadius: "0",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      backgroundColor: "transparent",
      "&:hover": { backgroundColor: "transparent" },
      "& .MuiTouchRipple-root ": { display: "none" },
    },
  },
  "& .MuiOutlinedInput-root.Mui-error": {
    border: `solid 1px ${theme.palette.error.main}`,
  },
  "& .MuiOutlinedInput-root.Mui-disabled": {
    "&:hover": {
      border: "1px solid #909090 !important",
      boxShadow: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiPickersCalendarHeader-root": {
    display: "none", // Hide the calendar header for all views
  },
  "& .MuiPickersDay-root": {
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main, // Highlight selected day
      color: "#fff",
    },
  },
}));

interface Props {
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
  maxDate?: Dayjs;
  minDate?: Dayjs;
  views?: DateView[];
  error?: boolean;
  disableFuture?: boolean;
}

//*------------------------------------------------------------------------

export default function CustomDatePicker({
  label,
  placeholder = "วัน/เดือน/ปี",
  onChange,
  value,
  maxDate,
  minDate,
  views,
  error,
  disableFuture = false,
}: Props) {
  const handleChange = (e: any) => {
    onChange && onChange(e || "");
  };

  return (
    <Box sx={{ marginTop: "8px", marginBottom: "8px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={0.5}
          flex={1}
        >
          <StyledDatePicker
            views={views}
            disableFuture={disableFuture}
            minDate={minDate}
            maxDate={maxDate}
            label={label}
            value={value ? dayjs(value) : null}
            format={views && views[0] === "day" ? "DD" : "DD/MM/YYYY"}
            sx={{ minWidth: "20px" }}
            onChange={handleChange}
            slotProps={{
              textField: {
                size: "small",
                placeholder: placeholder,
                error: error,
                fullWidth: true,
                InputLabelProps: {
                  shrink: true,
                },
                inputProps: {
                  readOnly: true,
                },
              },
              calendarHeader: {
                sx: {
                  display: views && views[0] === "day" ? "none" : "flex",
                },
              },
            }}
          />
        </Box>
      </LocalizationProvider>
    </Box>
  );
}
