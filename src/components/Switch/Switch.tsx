import { Box, Switch } from "@mui/material";
import React from "react";

interface CustomSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  checked = false,
  disabled = false,
  label,
  onChange,
  ...props
}) => {
  return (
    <>
      <Switch
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      {label && <label style={{ paddingLeft: "8px" }}>{label}</label>}
    </>
  );
};

export default CustomSwitch;
