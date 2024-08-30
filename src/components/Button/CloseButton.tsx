import React from "react";
import { ButtonBase, SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CloseButtonProps {
  text?: string;
  style?: "default" | "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  isDisabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

interface ButtonStyle {
  backgroundColor: string;
  color: string;
  borderColor?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  text = "",
  style = "default",
  size = "large",
  onClick,
  isDisabled = false,
  type = "button",
}) => {
  const getButtonStyles = (): {
    normal: ButtonStyle;
    hover: ButtonStyle;
    focus: ButtonStyle;
    disabled: ButtonStyle;
  } => {
    const styles = {
      default: {
        normal: {
          backgroundColor: "none",
          color: "rgba(255, 255, 255, 1)",
        },
        hover: {
          backgroundColor: "#FFEDDC66",
          color: "rgba(255, 255, 255, 1)",
        },
        focus: {
          backgroundColor: "#FFFAF6",
          color: "rgba(255, 255, 255, 1)",
        },
        disabled: {
          backgroundColor: "none",
          color: "#DEDEDE",
        },
      },
      primary: {
        normal: {
          backgroundColor: "#F7F7F799",
          color: "#F39B49",
          borderColor: "none",
        },
        hover: {
          backgroundColor: "#D32F2F",
          color: "#FFFFFF",
        },
        focus: {
          backgroundColor: "#E53935",
          color: "#FFFFFF",
        },
        disabled: {
          backgroundColor: "#FFCDD2",
          color: "#BDBDBD",
        },
      },
      secondary: {
        normal: {
          backgroundColor: "none",
          color: "#493C96",
          borderColor: "none",
        },
        hover: {
          backgroundColor: "#B9A5F4",
          color: "#493C96",
        },
        focus: {
          backgroundColor: "#B9A5F4",
          color: "#493C96",
        },
        disabled: {
          backgroundColor: "#FFCDD2",
          color: "#BDBDBD",
        },
      },
    };

    return styles[style];
  };

  const buttonStyles = getButtonStyles();
  const { normal, hover, focus, disabled: disabledStyle } = buttonStyles;

  const getButtonSize = (size: string) => {
    switch (size) {
      case "small":
        return 22;
      case "medium":
        return 26;
      default:
        return 36;
    }
  };

  const buttonSize = getButtonSize(size);

  const sx: SxProps = {
    width: `${buttonSize}px`,
    height: `${buttonSize}px`,
    borderRadius: "50%",
    backgroundColor: normal.backgroundColor,
    color: normal.color,
    borderColor: normal.borderColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: hover.backgroundColor,
      color: hover.color,
    },
    "&:focus": {
      backgroundColor: focus.backgroundColor,
      color: focus.color,
    },
    "&:disabled": {
      backgroundColor: disabledStyle.backgroundColor,
      color: disabledStyle.color,
    },
  };

  return (
    <ButtonBase sx={sx} onClick={onClick} disabled={isDisabled} type={type}>
      <CloseIcon fontSize="small" />
      {text && <span>{text}</span>}
    </ButtonBase>
  );
};

export default CloseButton;
