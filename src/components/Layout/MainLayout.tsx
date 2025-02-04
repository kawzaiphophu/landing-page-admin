"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode, Suspense } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { SnackbarProvider } from "../Alert/CustomAlert";
import Loading from "@/app/loading";

export function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CssBaseline />
        <SnackbarProvider>
          {pathname === "/login" ? (
            <div>{children}</div>
          ) : (
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <SideBar />
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "1rem",
                    width: "90vw",
                    height: "auto",
                    background: "#FFF",
                  }}
                >
                  <NavBar />
                  <div
                    style={{
                      margin: "1rem",
                      minHeight: "auto",
                    }}
                  >
                    {children}
                  </div>
                </div>
              </div>
            </>
          )}
        </SnackbarProvider>
      </Suspense>
    </>
  );
}
