"use client";

import React from "react";
import { Box, keyframes, useTheme } from "@mui/material";
import { hexToRgba } from "@/utils/app";

const loadingAnimation = keyframes`
  0% { left: -100%; width: 100%; }
  50% { left: 25%; width: 50%; }
  100% { left: 100%; width: 100%; }
`;

export default function LoadingLine() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "200%",
        height: "4px",
        zIndex: 2000,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          height: "100%",
          width: "100%",
          background: `linear-gradient(
            to bottom, 
            ${hexToRgba(theme.palette.primary.main, 1)}, 
            ${hexToRgba(theme.palette.secondary.main, 1)}
          )`,
          animation: `${loadingAnimation} 5s infinite linear`,
        },
      }}
    />
  );
}
