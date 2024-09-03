"use client";

import MuiAppBar from "@mui/material/AppBar";

import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
//*------------------------------------------------------------------------
import { menuItems } from "../SideBar/SideBar";
import Link from "next/link";
import { hexToRgba } from "@/utils/app";

//*------------------------------------------------------------------------

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

//*------------------------------------------------------------------------

export default function NavBar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width:1000px)");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    const userRole = localStorage.getItem("user_role");
    localStorage.clear();
    if (userRole) {
      localStorage.setItem("user_role", userRole);
    }
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const cleanPath = pathname
    .split("?")[0]
    .replace(/\/$/, "")
    .split("/")
    .filter(Boolean)[0];

  const currentPath = `/${cleanPath}`;

  const DrawerList = (
    <Box
      sx={{
        width: 250,

        height: "100%",
      }}
      role="temporary"
      onClick={toggleDrawer(false)}
    >
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
    </Box>
  );

  //*------------------------------------------------------------------------

  return (
    <AppBar
      sx={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: "1rem",
        height: "80px",
        zIndex: 1100,
        borderRadius: "0.75rem",
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.6)"
          : "rgba(255, 255, 255, 0.6)",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitTransform:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: isScrolled
          ? "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
          : "none",
      }}
    >
      <Box
        sx={{
          py: 0.8,
          px: { xs: "0", sm: "1rem" },
          width: "100%",
          height: "100%",
          backgroundColor: "tranparent",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: { xs: "0", sm: "2" },
            }}
          >
            {isMobile && (
              <Button onClick={toggleDrawer(!open)} sx={{ minWidth: 0 }}>
                <MenuIcon color="secondary" />
              </Button>
            )}
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              sx={{
                "& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper ": {
                  background: `linear-gradient(
                       to bottom, 
                       ${hexToRgba(theme.palette.primary.main, 0.2)}, 
                      ${hexToRgba(theme.palette.secondary.main, 0.5)}
                       )`,
                },
              }}
            >
              {DrawerList}
            </Drawer>
            <Box sx={logoStyle}></Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Typography
                  variant="h4"
                  color="primary"
                  fontWeight={600}
                  noWrap
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  Company Website Admin
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            pr={1}
          >
            <Button
              sx={{
                borderRadius: "8px",
                maxWidth: "127px",
                height: "32px",
                color: "#FFF",
              }}
              variant="contained"
              onClick={handleLogOut}
            >
              Log out
            </Button>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}

const logoStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "transform 1s ease-in-out",
  "&:hover img": {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover": {
    cursor: "pointer",
  },
};
