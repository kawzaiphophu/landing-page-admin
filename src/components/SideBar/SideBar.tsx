"use client";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
const drawerWidth = 221;

//*------------------------------------------------------------------------
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: "width 0.1s ease-in-out", // Adjusted duration for smoother transition
  overflowX: "hidden",
  background: `linear-gradient(
    to bottom, 
    ${hexToRgba(theme.palette.primary.main, 1)}, 
    ${hexToRgba(theme.palette.secondary.main, 1)}
  )`,
});

const closedMixin = (theme: Theme): CSSObject => ({
  minWidth: "80px",
  transition: "width 0.1s ease-in-out",
  overflowX: "hidden",
  background: `linear-gradient(
    to bottom, 
    ${hexToRgba(theme.palette.primary.main, 1)}, 
    ${hexToRgba(theme.palette.secondary.main, 1)}
  )`,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.up("sm")]: {
    width: `80px`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  "& .MuiPaper-root": {
    margin: "1rem",
    borderRadius: "20px",
    height: "96vh",
    transition: "width 0.3s ease-in-out",
  },
  "& .MuiDrawer-paper": {
    transition: "width 0.3s ease-in-out",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    ...(open ? openedMixin(theme) : closedMixin(theme)),
  },
}));
//*------------------------------------------------------------------------

export default function SideBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const isMobile = useMediaQuery("(max-width:1000px)");

  const cleanPath = pathname
    .split("?")[0]
    .replace(/\/$/, "")
    .split("/")
    .filter(Boolean)[0];
  const currentPath = `/${cleanPath}`;
  const hideSideBar =
    pathname.includes("/edit") || pathname.includes("/create");

  //*----------------------------------------------------------------

  return (
    <Box
      sx={{ display: "flex", flexGrow: 1 }}
      width={open ? drawerWidth : "80px"}
    >
      <Drawer
        variant="permanent"
        open={open}
        sx={{ display: isMobile ? "none" : "flex", borderRadius: "20px" }}
      >
        <Box pb={5}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              position: "absolute",
              zIndex: 1,
              mt: 1,
              p: 1,
              right: "20px",
              top: "20px",
            }}
          >
            {open ? (
              <KeyboardDoubleArrowLeftIcon sx={{ color: "#FFF" }} />
            ) : (
              <KeyboardDoubleArrowRightIcon sx={{ color: "#FFF" }} />
            )}
          </IconButton>
        </Box>
        <List sx={{ pt: "6rem", px: 1 }}>
          {menuItems.ADMIN.map(({ text, path, icon }) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "flex", pb: "4px" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2,
                  borderRadius: "16px",
                  mx: 1,
                  color: "white",
                  transition: "color 0.3s, background-color 0.3s",
                  backgroundColor: path === currentPath ? "#365486" : "",
                  "&:hover": {
                    backgroundColor: "#EBF4F6",
                    color: theme.palette.secondary.main,
                    "& img": {
                      filter: "invert(1)",
                      transition: "filter 0.3s",
                    },
                  },
                }}
                component={Link}
                href={path}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {icon} {open && text}
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { hexToRgba } from "@/utils/app";
import { usePathname } from "next/navigation";
import { Opacity } from "@mui/icons-material";
export const menuItems = {
  ADMIN: [
    {
      text: "dashboard",
      path: "/",
      icon: <BarChartOutlinedIcon />,
    },
    {
      text: "Home",
      path: "/home",
      icon: <HomeOutlinedIcon />,
    },
    {
      text: "About Us",
      path: "/about",
      icon: <GroupsOutlinedIcon />,
    },
    {
      text: "Service",
      path: "/service",
      icon: <HandshakeOutlinedIcon />,
    },
    {
      text: "Package",
      path: "/package",
      icon: <LocalAtmOutlinedIcon />,
    },
    { text: "setting", path: "/setting", icon: <SettingsOutlinedIcon /> },
  ],
};
