import { Theme } from "@mui/material/styles";

const textFieldStyles = (theme: Theme) => ({
  root: {
    "& .MuiInputLabel-root": {
      fontSize: "18px",
      transform: "translate(12px, -26px) scale(1)",
      padding: "0",
      background: "none",
      color: theme.palette.text.primary,
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: "16px",
      fontWeight: "500",
      color: theme.palette.text.secondary,
    },
    "& .MuiOutlinedInput-root": {
      border: "1px solid #DEDEDE",
      borderRadius: "8px",
      background: "#FFF",
      fontSize: "18px",
      fontWeight: "400",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.divider,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-error ": {
        borderColor: 'red',
      },
    },
    "& .MuiOutlinedInput-root.Mui-disabled": {
      background: theme.palette.action.disabledBackground,
      color: theme.palette.text.disabled,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.action.disabled,
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});

export default textFieldStyles;
