// app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar/SideBar";
import { Box, Divider, Paper } from "@mui/material";
import NavBar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Website Admin",
  description: "Knacx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <Box sx={{ display: "flex" }}>
            <Box
              width="auto"
              flexGrow={1}
              p={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <SideBar />
            </Box>
            <main>
              <Box
                sx={{
                  height: "auto",
                  position: "relative",
                  minHeight: "92.5vh",
                }}
              >
                <NavBar />
                <Divider />
                <Box p={2} mt={3}>
                  {children}
                </Box>
              </Box>
            </main>
          </Box>
        </body>
      </ThemeProvider>
    </html>
  );
}
