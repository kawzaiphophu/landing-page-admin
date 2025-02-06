"use client";

import { useEffect, useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
const drawerWidth = 221;

//*------------------------------------------------------------------------
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: "width 0.3s ease-in-out",
  overflowX: "hidden",
  background: `linear-gradient(
    to bottom, 
    ${hexToRgba(theme.palette.primary.main, 1)}, 
    ${hexToRgba(theme.palette.secondary.main, 1)}
  )`,
});

const closedMixin = (theme: Theme): CSSObject => ({
  minWidth: "80px",
  transition: "width 0.3s ease-in-out",
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

function getRoleFromLocalStorage() {
  if (typeof window === "undefined") return { isAdmin: false };
  const role = localStorage?.getItem("role");
  return {
    isAdmin: role === "ADMIN",
  };
}

export default function SideBar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  // Get the role on the client side
  useEffect(() => {
    const roleData = getRoleFromLocalStorage();
    setIsAdmin(roleData.isAdmin);
  }, []);

  // Process pathname to determine the current path
  const cleanPath = pathname
    ?.split("?")[0]
    .replace(/\/$/, "")
    .split("/")
    .filter(Boolean)[0];
  const currentPath = `/${cleanPath || ""}`;

  // Determine the menu items based on the role
  const menu = isAdmin ? menuItems.ADMIN : menuItems.ADMIN.slice(0, -2);

  //*----------------------------------------------------------------

  return (
    <Box
      sx={{ display: "flex", flexGrow: 1 }}
      width={open ? drawerWidth : "80px"}
    >
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: "flex",
          borderRadius: "20px",
          transition: "width 0.3s",
          "&:hover": {
            width: drawerWidth,
            "& .drawer-content": {
              display: "block",
            },
          },
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <List sx={{ pt: "6rem", px: 1 }}>
          {menu.map(({ text, path, icon }) => (
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
                    textWrap: "nowrap",
                    fontWeight: 600,
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

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import { getRole, hexToRgba } from "@/utils/app";
import { usePathname } from "next/navigation";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HistoryIcon from '@mui/icons-material/History';

export const menuItems = {
  ADMIN: [
    {
      text: "Dashboard",
      path: "/dashboard",
      icon: <BarChartIcon />,
    },
    {
      text: "Customer",
      path: "/customer",
      icon: <PersonOutlineIcon />,
    },
    {
      text: "Suppliers",
      path: "/supplier",
      icon: <GroupsOutlinedIcon />,
    },
    {
      text: "Project",
      path: "/project",
      icon: <HandshakeOutlinedIcon />,
    },
    {
      text: "Users",
      path: "/user",
      icon: <ManageAccountsIcon />,
    },
    {
      text: "Logs Activity",
      path: "/log-activity",
      icon: <HistoryIcon />,
    },
  ],
};
