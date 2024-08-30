import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ButtonsProps {
  text?: string;
  style?: "contained" | "outlined" | "text" | "tabs";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: any;
  icon?: any;
  component?: string;
}

interface ButtonStyle {
  backgroundColor?: string | null;
  color?: string | null;
  borderColor?: string | null;
  border?: string | null;
}

type StyleType = "contained" | "outlined" | "text" | "tabs";
type ColorType = "primary" | "secondary";

const CustomButton: React.FC<ButtonsProps> = ({
  text = "Button",
  style = "contained",
  size = "large",
  color = "primary",
  onClick,
  disabled = false,
  fullWidth = false,
  type = "",
  icon,
}) => {
  const theme = useTheme();

  const getButtonStyles = (): {
    normal: ButtonStyle;
    hover: ButtonStyle;
    focus: ButtonStyle;
    disabled: ButtonStyle;
  } | null => {
    const colors = theme.palette[color];
    const styles: Record<
      StyleType,
      Record<
        ColorType,
        Record<"normal" | "hover" | "focus" | "disabled", ButtonStyle>
      >
    > = {
      contained: {
        primary: {
          normal: {
            backgroundColor: colors.main,
            color: colors.contrastText,
            borderColor: "none",
          },
          hover: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          focus: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          disabled: {
            backgroundColor: "#F3F3F3",
            color: "#C1C1C1",
          },
        },
        secondary: {
          normal: {
            backgroundColor: colors.main,
            color: colors.contrastText,
            borderColor: "none",
          },
          hover: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          focus: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          disabled: {
            backgroundColor: "#F3F3F3",
            color: "#C1C1C1",
          },
        },
      },
      outlined: {
        primary: {
          normal: {
            // backgroundColor: "#FFFFFF",
            color: colors.main,
            borderColor: `1px solid ${colors.main}`,
          },
          hover: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          focus: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          disabled: {
            backgroundColor: "#FFFFFF",
            color: "#C1C1C1",
            borderColor: `1px solid #C1C1C1`,
          },
        },
        secondary: {
          normal: {
            // backgroundColor: "#FFFFFF",
            color: colors.contrastText,
            borderColor: `1px solid ${colors.contrastText}`,
          },
          hover: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          focus: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          disabled: {
            backgroundColor: "#FFFFFF",
            color: "#C1C1C1",
            borderColor: `1px solid #C1C1C1`,
          },
        },
      },
      text: {
        primary: {
          normal: {
            color: colors.main,
          },
          hover: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          focus: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          disabled: {
            color: "#C1C1C1",
          },
        },
        secondary: {
          normal: {
            color: colors.main,
          },
          hover: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          focus: {
            backgroundColor: colors.light,
            color: colors.dark,
          },
          disabled: {
            color: "#C1C1C1",
          },
        },
      },
      tabs: {
        primary: {
          normal: {
            backgroundColor: colors.main,
            color: colors.contrastText,
          },
          hover: {
            backgroundColor: colors.main,
            color: colors.contrastText,
          },
          focus: {
            backgroundColor: colors.main,
            color: colors.contrastText,
          },
          disabled: {
            backgroundColor: "#F3F3F3",
            color: "#C1C1C1",
          },
        },
        secondary: {
          normal: {
            backgroundColor: colors.main,
            color: colors.contrastText,
          },
          hover: {
            backgroundColor: colors.main,
            color: colors.contrastText,
          },
          focus: {
            backgroundColor: colors.main,
            color: colors.contrastText,
          },
          disabled: {
            backgroundColor: "#F3F3F3",
            color: "#C1C1C1",
          },
        },
      },
    };

    return styles[style][color];
  };

  const buttonStyles = getButtonStyles();
  if (!buttonStyles) {
    return null;
  }
  const { normal, hover, focus, disabled: disabledStyle } = buttonStyles;

  return (
    <Button
      sx={{
        alignSelf: "center",
        backgroundColor: normal.backgroundColor,
        color: normal.color,
        border: normal.borderColor,
        display: "flex",
        "& .icon": {
          marginTop: "8px",
          paddingRight: "8px",
        },
        "&:hover": {
          backgroundColor: hover.backgroundColor,
          color: hover.color,
        },
        "&:active": {
          backgroundColor: focus.backgroundColor,
          color: focus.color,
        },
        "&:disabled": {
          backgroundColor: disabledStyle.backgroundColor,
          color: disabledStyle.color,
          border: disabledStyle.borderColor,
        },
      }}
      className={`btn-${size}`}
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
    >
      <span style={textStyle}>
        {icon && (
          <span
            className="icon"
            style={{
              height: "19px",
              width: "19px",
              margin: "0",
              padding: "0",
              overflow: "hidden",
              display: "inline-block",
              position: "relative",
            }}
          >
            {React.cloneElement(icon, {
              style: {
                height: "100%",
                width: "100%",
                objectFit: "contain",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            })}
          </span>
        )}
        <span>{text}</span>
      </span>
    </Button>
  );
};

export default CustomButton;

const textStyle = {
  width: "auto",
  display: "flex",
  fontWeight: "700",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  whiteSpace: "nowrap",
  gap: 3,
};
