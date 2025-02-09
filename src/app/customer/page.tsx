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
const CustomTextfield = dynamic(
  () => import("@/components/Textfield/CustomTextfield"),
  { ssr: false }
);
const CustomButton = dynamic(() => import("@/components/Button/CustomButton"), {
  ssr: false,
});
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NotFoundTable from "@/components/Notfound/TableNotfound";
import PaginationControl from "@/components/Pagination/PaginationControl";
import page from "../page";
import BoxWithColor from "@/components/Box/BoxWithColor";
import { useRouter } from "next/navigation";
import CustomerApi from "@/api/customer.api";
import { ICustomer } from "@/types/customer";
import ConfirmSwal from "@/components/Alert/ConfirmSwal";
import AlertSwal from "@/components/Alert/AlertSwal";
import { formatPhoneNumber, getAddress } from "@/utils/formatData";
import { getRole } from "@/utils/app";

//?================================================================================

type Props = {};

//?================================================================================

export default function Customer({}: Props) {
  const { isAdmin, isPM } = getRole();
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageLimit, setPageLimit] = useState<number>(15);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    getAllCustomer(page, pageLimit);
  }, [page, pageLimit]);

  const getAllCustomer = async (
    page: number,
    pageLimit: number,
    searchValue?: string
  ) => {
    const param = {
      page,
      pageLimit,
      sort: "DESC",
      sortBy: "createdAt",
      search: searchValue,
    };
    try {
      const { data, totalItems, totalPages } = await CustomerApi.findAll(param);
      setCustomers(data);
      setTotalPages(totalPages);
      setTotalItems(totalItems);
    } catch (error) {}
  };
  //?==============================================================================

  const gotoCreate = () => {
    router.push(`customer/create`);
  };
  const gotoEdit = (id: number) => {
    router.push(`customer/edit?customerId=${id}`);
  };

  const gotoView = (id: number) => {
    router.push(`customer/view?customerId=${id}`);
  };

  const handleDelete = async (id: number) => {
    const { isConfirmed } = await ConfirmSwal({
      title: "ต้องการลบลูกค้าใช่หรือไม่",
      icon: "info",
    });

    if (isConfirmed) {
      try {
        const { data } = await CustomerApi.delete(id);
        if (data) {
          AlertSwal({ title: "ลบสำเร็จ", icon: "success" });
        }
      } catch (error) {
        AlertSwal({ title: "ลบไม่สำเร็จ", icon: "error" });
      } finally {
        getAllCustomer(page, pageLimit);
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
          Customer
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        pt={2}
      >
        <Box width={"auto"} display={"flex"} gap={2}>
          <CustomTextfield
            type="search"
            label=""
            placeholder="ค้นหาลูกค้า"
            onChange={(v) => setSearchValue(v)}
          />
          <CustomButton
            text="ค้นหา"
            size="medium"
            onClick={() => getAllCustomer(page, pageLimit, searchValue)}
          />
        </Box>
        <Box display={"flex"} justifyContent={"end"}>
          <Button variant="outlined" color="secondary" onClick={gotoCreate}>
            Create Customer
          </Button>
        </Box>
      </Box>
      <Box bgcolor={"#FFF"} p={"1rem"} borderRadius={"8px"}>
        {customers.length ? (
          <>
            <TableContainer
              sx={{ height: "50vh", overflowX: "auto", mt: 2 }}
              component={Paper}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow sx={{ height: "72px", zIndex: 10 }}>
                    <TableCell align="center">ลำดับ</TableCell>
                    <TableCell>ชื่อลูกค้า</TableCell>
                    <TableCell>สาขา</TableCell>
                    {/* <TableCell>เลขประจำตัวผู้เสียภาษี</TableCell> */}
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
                  {customers?.map((customer, index) => (
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
                        {customer?.name || customer?.nameEn || "-"}
                      </TableCell>
                      <TableCell>
                        {customer?.branch === "00000"
                          ? "สำนักงานใหญ่"
                          : customer?.branch || "-"}
                      </TableCell>
                      {/* <TableCell>{customer?.taxNumber || "-"}</TableCell> */}

                      <TableCell align="center">{formatPhoneNumber(customer?.tel) || "-"}</TableCell>

                      <TableCell width={'50%'}>{getAddress(customer)}</TableCell>
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
                            onClick={() => gotoView(customer.id as any)}
                          />
                          <BoxWithColor
                            icon="edit"
                            onClick={() => gotoEdit(customer.id as any)}
                          />
                          {(isAdmin || isPM) && (
                            <BoxWithColor
                              icon="del"
                              color="error"
                              onClick={() => handleDelete(customer.id as any)}
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
