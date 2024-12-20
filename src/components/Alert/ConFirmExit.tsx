import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import Exit from "@/assets/icon/Exit.png";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConFirmExit({ open, onClose, onConfirm }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "600px",
          height: "450px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#EFFEFA",
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="center" my={2} mt={4}>
          <Image src={Exit} alt="exit" width={200} />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography
          align="center"
          color="#00A77E"
          fontWeight={500}
          fontSize={20}
        >
          คุณต้องการที่จะออกจากหน้านี้ ใช่หรือไม่
        </Typography>
        <DialogActions sx={{ justifyContent: "center", mt: 5 }}>
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
            onClick={onConfirm}
            variant="contained"
            sx={{
              backgroundColor: "#00A77E",
              color: "#fff",
              borderRadius: "8px",
              padding: "8px 16px",
            }}
          >
            ตกลง
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
