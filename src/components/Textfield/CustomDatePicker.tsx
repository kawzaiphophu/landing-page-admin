"use client";

import { DateView, LocalizationProvider } from "@mui/x-date-pickers";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { Box, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import newAdapter from "./newAdapter.date";
//*------------------------------------------------------------------------

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  // "& .MuiInputBase-input::placeholder": {
  //   fontWeight: "400",
  //   fontSize: "16px",
  //   lineHight: "18.75px",
  //   color: theme.palette.placeholder,
  // },
  // "& .MuiInputBase-root ": {
  //   cursor: "default",
  // },
  // "& .MuiInputBase-root": {
  //   color: theme.palette.text.primary,
  //   border: `solid 1px ${theme.palette.inputBorder}`,
  //   minHeight: "44px",
  //   paddingRight: "25px",
  //   "& fieldset": {
  //     display: "none",
  //     borderColor: "transparent",
  //   },
  //   "& .MuiInputAdornment-root button": {
  //     position: "absolute",
  //     width: "100%",
  //     height: "100%",
  //     left: "0",
  //     borderRadius: "0",
  //     display: "flex",
  //     justifyContent: "end",
  //     alignItems: "center",
  //     "&:hover": {
  //       backgroundColor: "unset",
  //     },
  //     "& .MuiTouchRipple-root ": { display: "none" },
  //   },
  // },
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
  required?: boolean;
  disabled?: boolean;
  disablePast?: boolean;
  shouldDisableDate?: any;
  errorMessage?: string;
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
  required = false,
  disabled = false,
  disablePast = false,
  shouldDisableDate,
  errorMessage,
}: Props) {
  const handleChange = (e: any) => {
    onChange && onChange(dayjs(e).format("YYYY-MM-DD") || "");
  };

  return (
    <Box sx={{ my: 1 }}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="th"
        // dateFormats={{
        //   year: "BBBB",
        // }}
        localeText={{
          fieldYearPlaceholder: () => "YYYY",
        }}
      >
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
            disablePast={disablePast}
            minDate={minDate || undefined}
            maxDate={maxDate}
            label={label}
            value={dayjs(value).isValid() ? dayjs(value) : undefined}
            format={views && views[0] === "day" ? "DD" : "DD/MM/YYYY"}
            sx={{ minWidth: "20px" }}
            onChange={handleChange}
            disabled={disabled}
            shouldDisableDate={shouldDisableDate}
            slotProps={{
              textField: {
                size: "small",
                placeholder: placeholder,
                required: required,
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
        {error && (
          <Box
            sx={{
              // position: "absolute",
              // bottom: "-25px",
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
              {errorMessage ? errorMessage : `กรุณาเลือก${label}`}
            </Typography>
          </Box>
        )}
      </LocalizationProvider>
    </Box>
  );
}
