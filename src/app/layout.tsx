// app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import { SnackbarProvider } from "@/components/Alert/CustomAlert";
import { MainLayout } from "@/components/Layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Website Admin",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
        <body className={inter.className}>
          <MainLayout>{children}</MainLayout>
        </body>
        </SnackbarProvider>
      </ThemeProvider>
    </html>
  );
}
