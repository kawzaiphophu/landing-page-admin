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
import { getAddress } from "@/utils/formatData";
import UserApi from "@/api/user.api";
import { IUser } from "@/types/user.type";
import ActionUserModal from "./ActionUserModal";
import { ROLE } from "@/constants/app";

//?================================================================================

type Props = {};

//?================================================================================

export default function User({}: Props) {
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageLimit, setPageLimit] = useState<number>(15);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectUserId, setSelectUserId] = useState<number>();

  useEffect(() => {
    getAllUser(page, pageLimit);
  }, [page, pageLimit]);

  const getAllUser = async (
    page: number,
    pageLimit: number,
    search?: string
  ) => {
    const param = {
      page,
      pageLimit,
      sort: "DESC",
      sortBy: "createdAt",
      search,
    };
    try {
      const { data, totalItems, totalPages } = await UserApi.findAll(param);
      setUsers(data);
      setTotalPages(totalPages);
      setTotalItems(totalItems);
    } catch (error) {}
  };
  //?==============================================================================

  const gotoCreate = () => {
    setSelectUserId(undefined);
    handleOpen();
  };
  const gotoEdit = (id: number) => {
    setSelectUserId(id);
    handleOpen();
  };

  const handleDelete = async (id: number) => {
    const { isConfirmed } = await ConfirmSwal({
      title: "ต้องการลบผู้ใช้งานใช่หรือไม่",
      icon: "info",
    });

    if (isConfirmed) {
      try {
        const { data } = await UserApi.delete(id);
        if (data) {
          AlertSwal({ title: "ลบสำเร็จ", icon: "success" });
        }
      } catch (error) {
        AlertSwal({ title: "ลบไม่สำเร็จ", icon: "error" });
      } finally {
        getAllUser(page, pageLimit);
      }
    }
  };

  //?==============================================================================
  const [popupsOpen, setPopupsOpen] = useState<boolean>(false);

  const handleOpen = () => setPopupsOpen(true);
  const handleClose = () => setPopupsOpen(false);

  return (
    <>
      {popupsOpen && (
        <ActionUserModal
          userId={selectUserId}
          handleClose={() => handleClose()}
          getAllUser={() => getAllUser(page, pageLimit)}
        />
      )}
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
            User
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
              placeholder="ค้นหาผู้ใช้งาน"
              onChange={(v) => setSearchValue(v)}
            />
            <CustomButton
              text="ค้นหา"
              size="medium"
              onClick={() => getAllUser(page, pageLimit, searchValue)}
            />
          </Box>
          <Button variant="outlined" color="secondary" onClick={gotoCreate}>
            Create User
          </Button>
        </Box>
        <Box bgcolor={"#FFF"} p={"1rem"} borderRadius={"8px"}>
          {users.length ? (
            <>
              <TableContainer
                sx={{ height: "50vh", overflowX: "auto", mt: 2 }}
                component={Paper}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow sx={{ height: "72px", zIndex: 10 }}>
                      <TableCell align="center">ลำดับ</TableCell>
                      <TableCell align="center">ชื่อ</TableCell>
                      <TableCell align="center">เบอร์โทรศัพท์</TableCell>
                      <TableCell align="center">ชื่อผู้ใช้งาน</TableCell>
                      <TableCell align="center">บทบาท</TableCell>
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
                    {users?.map((user, index) => (
                      <TableRow
                        sx={{
                          height: "72px",
                        }}
                        key={index}
                      >
                        <TableCell align="center">
                          {pageLimit * (page - 1) + index + 1}
                        </TableCell>
                        <TableCell align="center">
                          {user?.name || "-"}
                        </TableCell>
                        <TableCell align="center">{user?.tel || "-"}</TableCell>
                        <TableCell align="center">{user?.username}</TableCell>
                        <TableCell align="center">
                          {ROLE.find((r) => r.value === user?.role)?.name}
                        </TableCell>
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
                          <Box
                            display={"flex"}
                            gap={1}
                            justifyContent={"center"}
                          >
                            <BoxWithColor
                              icon="edit"
                              onClick={() => gotoEdit(user.id as any)}
                            />
                            <BoxWithColor
                              icon="del"
                              color="error"
                              onClick={() => handleDelete(user.id as any)}
                            />
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
    </>
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
