"use client";
import React, { createContext, useState, useContext, useCallback } from "react";
import { Snackbar, Alert as MuiAlert, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

// Define types for the Snackbar options
interface SnackbarOptions {
  color: "success" | "error" | "info" | "warning";
  title: string;
  text?: string;
}

// Styled component for the Alert
const StyledAlert = styled(MuiAlert)<{ color: string }>(({ theme, color }) => ({
  backgroundColor: theme.palette[color]?.main ?? theme.palette.info.main,
  color: theme.palette[color]?.contrastText ?? theme.palette.info.contrastText,
}));

// Define the context type
interface SnackbarContextType {
  CustomAlert: (options: SnackbarOptions) => void;
}

// Create the context
const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

// Snackbar Provider Component
export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [snackbarOptions, setSnackbarOptions] =
    useState<SnackbarOptions | null>(null);

  // Method to trigger the snackbar
  const CustomAlert = useCallback((options: SnackbarOptions) => {
    setSnackbarOptions(options);
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ CustomAlert }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionComponent={Fade}
        action={
          <IconButton size="small" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {snackbarOptions ? (
          <StyledAlert
            onClose={handleClose}
            severity={snackbarOptions.color}
            color={snackbarOptions.color}
            variant="filled"
          >
            <strong>{snackbarOptions.title}</strong>
            <div>{snackbarOptions.text}</div>
          </StyledAlert>
        ) : (
          <></>
        )}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
