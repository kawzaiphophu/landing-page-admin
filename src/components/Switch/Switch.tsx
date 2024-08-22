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
    <Box display={"flex"} alignSelf={"center"}>
      <Switch
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      {label && <label>{label}</label>}
    </Box>
  );
};

export default CustomSwitch;
