import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import EditIcon from "@mui/icons-material/Edit";
import Fade from "@mui/material/Fade";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type LoanStatus = {
  text: string;
  value: string;
  color: "success" | "error" | "primary" | "warning";
};

const LOAN_STATUS: LoanStatus[] = [
  { text: "อนุมัติ", value: "APPROVED", color: "success" },
  { text: "เปิดสัญญา", value: "USING", color: "success" },
  { text: "แบบร่าง", value: "DRAFT", color: "primary" },
  { text: "รออนุมัติ", value: "PENDING", color: "warning" },
  { text: "ยกเลิก", value: "CANCELLED", color: "error" },
  { text: "ปกติ", value: "NORMAL", color: "success" },
  { text: "ค้างชำระ", value: "OVERDUE", color: "error" },
  { text: "ปิดสัญญา", value: "CLOSE_ACCOUNT", color: "warning" },
];

type Props = {
  icon?:
    | "edit"
    | "del"
    | "screenShot"
    | "importExcel"
    | "detail"
    | "eye"
    | "money"
    | "upload";
  text?: string;
  color?: "success" | "error" | "primary" | "warning";
  onClick?: (e: any) => void;
  status?: string;
  disabled?: boolean;
};

export default function BoxWithColor({
  icon,
  text,
  color = "primary",
  onClick,
  status,
  disabled,
}: Props) {
  const styles = {
    success: { backgroundColor: "#C0F5E5", textColor: "#0AA086" },
    error: { backgroundColor: "#F9E3E4", textColor: "#DB4848" },
    primary: { backgroundColor: "#E1ECF9", textColor: "#4874D5" },
    warning: { backgroundColor: "#FCECD8", textColor: "#CD5F2F" },
    disabled: { backgroundColor: "#E0E0E0", textColor: "#A0A0A0" },
  };

  const imageSrc = (icon: string) => {
    let iconSrc;
    let tooltip;

    switch (icon) {
      case "edit":
        iconSrc = <EditIcon />;
        tooltip = "แก้ไข";
        break;
        case "del":
          iconSrc = <DeleteOutlineIcon color="error"/>
          tooltip = "ลบ";
        break;
      //   case "screenShot":
      //     iconSrc = screenShot;
      //     tooltip = "Screenshot";
      //     break;
      //   case "importExcel":
      //     iconSrc = importExcel;
      //     tooltip = "ส่งออกเอกสาร";
      //     break;
      //   case "detail":
      //     iconSrc = detail;
      //     tooltip = "รายละเอียด";
      //     break;
      //   case "eye":
      //     iconSrc = eye_icon;
      //     tooltip = "View";
      //     break;
      //   case "money":
      //     iconSrc = money_icon;
      //     tooltip = "รายละเอียดกำหนดชำระ";
      //     break;
      //   case "upload":
      //     iconSrc = file_upload;
      //     tooltip = "แนบสลิป";
      //     break;
      default:
        iconSrc = "";
        tooltip = "";
    }
    return { iconSrc, tooltip };
  };

  const statusDetails = LOAN_STATUS.find((s) => s.value === status);

  return (
    <Tooltip title={imageSrc(icon as string).tooltip} arrow>
      <Box
        display="flex"
        bgcolor={
          disabled
            ? styles.disabled.backgroundColor
            : statusDetails
            ? styles[statusDetails.color].backgroundColor
            : color
            ? styles[color].backgroundColor
            : "primary"
        }
        justifyContent="center"
        alignItems="center"
        borderRadius="8px"
        p={1}
        px={2}
        gap={1}
        width={icon ? "40px" : "auto"}
        height={icon ? "40px" : "auto"}
        sx={{
          maxWidth: "140px",
          cursor: disabled ? "not-allowed" : onClick ? "pointer" : "default",
          ":hover": {
            scale: !disabled && onClick ? "1.1" : undefined,
          },
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
        onClick={disabled ? undefined : onClick}
      >
        {icon && <>{imageSrc(icon).iconSrc}</>}
        {(statusDetails || text) && (
          <Typography
            color={
              disabled
                ? styles.disabled.textColor
                : statusDetails
                ? styles[statusDetails.color].textColor
                : color
                ? styles[color].textColor
                : "primary"
            }
            fontSize={"18px"}
            fontWeight="400"
            noWrap
          >
            {statusDetails ? statusDetails.text : text}
          </Typography>
        )}
      </Box>
    </Tooltip>
  );
}
