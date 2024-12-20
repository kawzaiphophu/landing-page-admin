import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
} from "@mui/material";
import trash_icon from "@/assets/icon/Button_Remove function.png";
import Image from "next/image";
import CustomTextfield from "@/components/Textfield/CustomTextfield";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: (value: string) => void;
};

export default function ConFirmDelete({ open, onClose, onConfirm }: Props) {
  const [value, setValue] = useState<string>("");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "605px",
          height: "486px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="center">
          <Image src={trash_icon} alt="exit" width={195} />
        </Box>
      </DialogTitle>
      <DialogContent sx={{ width: "100%" }}>
        <Typography
          align="center"
          color="#CA3A39"
          fontWeight={500}
          fontSize={20}
        >
          ต้องการยกเลิกสัญญาย่อย ใช่หรือไม่
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="body1"
            fontWeight={"500"}
            color="#626262"
            display={"flex"}
          >
            สาเหตุของการยกเลิก
            <Typography variant="body1" color="red" ml={0.5}>
              {"  *"}
            </Typography>
          </Typography>
          <CustomTextfield
            minRows={3}
            placeholder="กรุณาระบุสาเหตุที่ยกเลิกสัญญา"
            onChange={(v) => setValue(v)}
          />
        </Box>
        <DialogActions sx={{ justifyContent: "center", mt: 1 }}>
          <Button
            onClick={onClose}
            variant="outlined"
            color="error"
            sx={{
              borderRadius: "8px",
              padding: "8px 16px",
              border: "2px solid #CA3A39",
              bgcolor: "#FFFFFF",
            }}
          >
            ยกเลิก
          </Button>
          <Button
            onClick={() => onConfirm(value)}
            variant="contained"
            color="error"
            sx={{
              backgroundColor: "#CA3A39",
              color: "#fff",
              borderRadius: "8px",
              padding: "8px 16px",
            }}
          >
            ยืนยัน
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
