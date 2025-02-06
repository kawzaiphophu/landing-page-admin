"use client";

//?================================================================================
import {
  Box,
  Typography,
  Button,
  useTheme,
  Grid,
  IconButton,
  styled,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

//?================================================================================
const CustomImageUpload = dynamic(
  () => import("@/components/CustomImageUpload/CustomImageUpload"),
  { ssr: false }
);
const CustomSwitch = dynamic(() => import("@/components/Switch/Switch"), {
  ssr: false,
});
const CustomTextfield = dynamic(
  () => import("@/components/Textfield/CustomTextfield"),
  { ssr: false }
);
const CustomTextEditor = dynamic(
  () => import("@/components/Editor/CustomTextEditor"),
  { ssr: false }
);
const CustomButton = dynamic(() => import("@/components/Button/CustomButton"), {
  ssr: false,
});

import NotFoundTable from "@/components/Notfound/TableNotfound";
import PaginationControl from "@/components/Pagination/PaginationControl";
import page from "../page";
import BoxWithColor from "@/components/Box/BoxWithColor";
import { useRouter } from "next/navigation";
import supplierApi from "@/api/supplier.api";

import ConfirmSwal from "@/components/Alert/ConfirmSwal";
import AlertSwal from "@/components/Alert/AlertSwal";
import { getAddress } from "@/utils/formatData";
import SupplierApi from "@/api/supplier.api";
import { ISupplier } from "@/types/supplier.type";
import { getRole } from "@/utils/app";

//?================================================================================

type Props = {};

//?================================================================================

export default function supplier({}: Props) {
  const { isAdmin, isPM } = getRole();
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageLimit, setPageLimit] = useState<number>(15);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [suppliers, setSuppliers] = useState<ISupplier[]>([]);

  useEffect(() => {
    getAllsupplier(page, pageLimit);
  }, []);

  const getAllsupplier = async (
    page: number,
    pageLimit: number,
    search?: string
  ) => {
    const param = { page, pageLimit, search };
    try {
      const { data, totalItems, totalPages } = await SupplierApi.findAll(param);
      setSuppliers(data);
      setTotalPages(totalPages);
      setTotalItems(totalItems);
    } catch (error) {}
  };
  //?==============================================================================

  const gotoCreate = () => {
    router.push(`supplier/create`);
  };
  const gotoEdit = (id: number) => {
    router.push(`supplier/edit?supplierId=${id}`);
  };

  const gotoView = (id: number) => {
    router.push(`supplier/view?supplierId=${id}`);
  };

  const handleDelete = async (id: number) => {
    const { isConfirmed } = await ConfirmSwal({
      title: "ต้องการลบซัพพลายเออร์ใช่หรือไม่",
      icon: "info",
    });

    if (isConfirmed) {
      try {
        const { data } = await supplierApi.delete(id);
        if (data) {
          AlertSwal({ title: "ลบสำเร็จ", icon: "success" });
        }
      } catch (error) {
        AlertSwal({ title: "ลบไม่สำเร็จ", icon: "error" });
      } finally {
        getAllsupplier(page, pageLimit);
      }
    }
  };
  //?==============================================================================

  return (
    <Box p={2} sx={{ border: "1px solid #DEDEDE", borderRadius: "8px" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          border: "1px solid #DEDEDE",
          borderRadius: "8px",
          p: 3,
          bgcolor: theme.palette.primary.light,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          Supplier
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        pt={2}
        alignItems={"center"}
      >
        <Box width={"50%"} display={"flex"} gap={2}>
          <CustomTextfield
            type="search"
            label=""
            placeholder="ค้นหาซัพพลายเออร์"
            onChange={(v) => setSearchValue(v)}
          />
          <CustomButton
            text="ค้นหา"
            size="medium"
            onClick={() => getAllsupplier(page, pageLimit, searchValue)}
          />
        </Box>
        <Button variant="outlined" color="secondary" onClick={gotoCreate}>
          Create Supplier
        </Button>
      </Box>
      <Box bgcolor={"#FFF"} p={"1rem"} borderRadius={"8px"}>
        {suppliers.length ? (
          <>
            <TableContainer
              sx={{ height: "50vh", overflowX: "auto", mt: 2 }}
              component={Paper}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow sx={{ height: "72px", zIndex: 10 }}>
                    <TableCell align="center">ลำดับ</TableCell>
                    <TableCell>ชื่อซัพพลายเออร์</TableCell>
                    <TableCell>อีเมล</TableCell>
                    <TableCell align="center">เบอร์โทรศัพท์</TableCell>
                    <TableCell>ที่อยู่</TableCell>
                    <TableCell
                      align="center"
                      width={"7%"}
                      sx={{
                        position: "sticky",
                        right: "0",
                        zIndex: 2,
                        bgcolor: "#FFF",
                        boxShadow: "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      จัดการ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ position: "relative" }}>
                  {suppliers?.map((supplier, index) => (
                    <TableRow
                      sx={{
                        height: "50px",
                      }}
                      key={index}
                    >
                      <TableCell align="center">
                        {pageLimit * (page - 1) + index + 1}
                      </TableCell>
                      <TableCell>
                        {supplier?.name || supplier?.nameEn || "-"}
                      </TableCell>
                      <TableCell>{supplier?.email || "-"}</TableCell>
                      <TableCell align="center">
                        {supplier?.tel || "-"}
                      </TableCell>
                      <TableCell>{getAddress(supplier)}</TableCell>
                      <TableCell
                        sx={{
                          position: "sticky",
                          right: "0",
                          zIndex: 1,
                          bgcolor: "#FFF",
                          boxShadow: "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
                        }}
                        align="center"
                      >
                        <Box display={"flex"} gap={1} justifyContent={"center"}>
                          <BoxWithColor
                            icon="detail"
                            onClick={() => gotoView(supplier.id as any)}
                          />
                          <BoxWithColor
                            icon="edit"
                            onClick={() => gotoEdit(supplier.id as any)}
                          />
                          {(isAdmin || isPM) && (
                            <BoxWithColor
                              icon="del"
                              color="error"
                              onClick={() => handleDelete(supplier.id as any)}
                            />
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <PaginationControl
              totalPages={totalPages}
              page={page}
              pageLimit={pageLimit}
              setPage={setPage}
              setPageLimit={setPageLimit}
              setSearchValue={setSearchValue}
              totalItem={totalItems}
            />
          </>
        ) : (
          <NotFoundTable />
        )}
      </Box>
    </Box>
  );
}
//?===============================================================================
const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  borderRadius: "8px",
  border: `1px solid #DEDEDE`,
  minHeight: "192px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));
