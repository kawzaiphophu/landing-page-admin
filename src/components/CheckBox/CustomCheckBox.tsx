import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

//*------------------------------------------------------------------------

interface ICheckBox {
  checked: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  disabled?: boolean;
  name?: string;
  label?: string;
}

//*------------------------------------------------------------------------

const CustomCheckbox = styled(
  ({ label, checked, onChange, ...other }: ICheckBox) => (
    <FormControlLabel
      label={label}
      sx={{
        margin: "0",
        color: "#666665",
        fontSize: "16px",
        fontWeight: "800",
        alignItems: "center",
        zIndex: 10,
        whiteSpace: "nowrap",
    
      }}
      control={
        <Checkbox
          checked={checked}
          onChange={(event) => {
            event.stopPropagation();
            if (onChange) {
              onChange(event, event.target.checked);
            }
          }}
          {...other}
        />
      }
    />
  )
)(({}) => ({
  width: "3rem",
  height: "3rem",
  marginBottom: "-0.4rem",
  marginTop: "-0.4rem",

  "& .MuiSvgIcon-root": {
    width: "100%",
    height: "100%",
    padding: 1,
    borderRadius: "50%",
  },
  "& .PrivateSwitchBase-input": {
    backgroudColor: "red !important",
  },
  "&.Mui-checked .MuiSvgIcon-root": {
    color: "#0CBB98",
  },
  "&:hover .MuiSvgIcon-root": {
    backgroundColor: "rgba(0, 0, 0, 0.06)",
  },
  "&.Mui-disabled .MuiSvgIcon-root": {
    color: "#A1A19F",
  },
  "&.Mui-checked.Mui-disabled .MuiSvgIcon-root": {
    color: "rgba(0, 0, 0, 0.38)",
  },
  "&.Mui-disabled:hover .MuiSvgIcon-root": {
    color: "#A1A19F",
  },
}));

export default CustomCheckbox;
