"use client";

import MuiAppBar from "@mui/material/AppBar";

import {
  Box,
  Button,
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
import Image from "next/image";
import logo from "@/assets/logo-red-VqMlSVYQ.png";
//*------------------------------------------------------------------------

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

//*------------------------------------------------------------------------

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    // Clear localStorage
    localStorage.clear();

    const cookies = document.cookie.split(";"); // Get all cookies
    for (let cookie of cookies) {
      const cookieName = cookie.split("=")[0].trim();
      document.cookie = `${cookieName}=; max-age=0; path=/`; // Set cookie expiration to the past
    }

    // Redirect to login page
    window.location.href = "/login"; // Redirect to the login page
  };

  const cleanPath = pathname
    .split("?")[0]
    .replace(/\/$/, "")
    .split("/")
    .filter(Boolean)[0];

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
        width: "auto",
        ml: "2rem",
        mr: "2rem",
        mb: "3rem",
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
            {/* {isMobile && (
              <Button onClick={toggleDrawer(!open)} sx={{ minWidth: 0 }}>
                <MenuIcon color="secondary" />
              </Button>
            )} */}
            {/* <Drawer
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
            </Drawer> */}
            {isMobile && <MobileDrawer />}
            <Box sx={logoStyle}></Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Image src={logo} alt="alt" width={100} />
                {/* <Typography
                  variant="h4"
                  color="primary"
                  fontWeight={600}
                  noWrap
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  Unified Solutions
                </Typography> */}
                {/* <SocialShareButtons/> */}
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

import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LineShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  LineIcon,
  WhatsappIcon,
} from "react-share";
import MobileDrawer from "../SideBar/SideBarMobile";

interface SocialShareButtonsProps {}

const SocialShareButtons: React.FC = () => {
  const url = encodeURIComponent(
    "https://az-uat-akm-cust.allkons.com/shopping/product/925?productVariantId=6415"
  );
  const title = encodeURIComponent("Check out this amazing product!");
  const appId = "1333714707590194"; // Your Facebook App ID

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
          alt="Share on Facebook"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
      </a>

      {/* Messenger Share */}
      <a
        href={`fb-messenger://share/?link=${url}&app_id=${appId}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Messenger_Logo.svg"
          alt="Share on Messenger"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
      </a>

      {/* Line Share */}
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
          alt="Share on Line"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
      </a>

      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send?text=${title}%20${url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="Share on WhatsApp"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
      </a>

      {/* Instagram (Redirect to Profile) */}
      <a
        href="https://www.instagram.com/yourprofile/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Visit Instagram"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
      </a>
    </div>
  );
};
