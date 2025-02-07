"use client";

import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Link from "next/link";
import { menuItems } from "./SideBar";



export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {!open && (
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.ADMIN.map(({ text, path, icon }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  href={path}
                  onClick={() => setOpen(false)}
                >
                  {icon} {text}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
