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

import ConfirmSwal from "@/components/Alert/ConfirmSwal";
import AlertSwal from "@/components/Alert/AlertSwal";
import { formatPrice, getAddress } from "@/utils/formatData";
import { IProject } from "@/types/project.type";
import ProjectApi from "@/api/project.api";
import { STATUS } from "@/constants/app";
import { getRole } from "@/utils/app";

//?================================================================================

type Props = {};

//?================================================================================

export default function Project({}: Props) {
  const { isAdmin, isPM } = getRole();
  const theme = useTheme();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageLimit, setPageLimit] = useState<number>(15);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    getAllProject(page, pageLimit);
  }, [page, pageLimit]);

  const getAllProject = async (
    page: number,
    pageLimit: number,
    search?: string
  ) => {
    const param = { page, pageLimit, search };
    try {
      const { data, totalItems, totalPages } = await ProjectApi.findAll(param);
      setProjects(data);
      setTotalPages(totalPages);
      setTotalItems(totalItems);
    } catch (error) {}
  };
  //?==============================================================================

  const gotoCreate = () => {
    router.push(`project/create`);
  };
  const gotoEdit = (id: number) => {
    router.push(`project/edit?projectId=${id}`);
  };

  const gotoView = (id: number) => {
    router.push(`project/view?projectId=${id}`);
  };

  const handleDelete = async (id: number) => {
    const { isConfirmed } = await ConfirmSwal({
      title: "ต้องการลบProjectใช่หรือไม่",
      icon: "info",
    });

    if (isConfirmed) {
      try {
        const { data } = await ProjectApi.delete(id);
        if (data) {
          AlertSwal({ title: "ลบสำเร็จ", icon: "success" });
        }
      } catch (error) {
        AlertSwal({ title: "ลบไม่สำเร็จ", icon: "error" });
      } finally {
        getAllProject(page, pageLimit);
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
          Project
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
            placeholder="ค้นหาProject"
            onChange={(v) => setSearchValue(v)}
          />
          <CustomButton
            text="ค้นหา"
            size="medium"
            onClick={() => getAllProject(page, pageLimit, searchValue)}
          />
        </Box>
        <Box display={"flex"} justifyContent={"end"}>
          <Button variant="outlined" color="secondary" onClick={gotoCreate}>
            Create Project
          </Button>
        </Box>
      </Box>
      <Box bgcolor={"#FFF"} p={"1rem"} borderRadius={"8px"}>
        {projects.length ? (
          <>
            <TableContainer
              sx={{ height: "50vh", overflowX: "auto", mt: 2 }}
              component={Paper}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow sx={{ height: "72px", zIndex: 10 }}>
                    <TableCell align="center">ลำดับ</TableCell>
                    <TableCell>ชื่อProject</TableCell>
                    <TableCell>สถานะ</TableCell>
                    <TableCell align="center">ประกัน(เดือน)</TableCell>
                    <TableCell align="center">MA (เดือน)</TableCell>
                    <TableCell align="center">MA(ครั้ง)</TableCell>
                    <TableCell align="right">มูลค่า</TableCell>
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
                  {projects?.map((project, index) => (
                    <TableRow
                      sx={{
                        height: "50px",
                      }}
                      key={index}
                    >
                      <TableCell align="center">
                        {pageLimit * (page - 1) + index + 1}
                      </TableCell>
                      <TableCell>{project?.projectName || "-"}</TableCell>
                      <TableCell>
                        {STATUS.find((s) => s.value === project?.projectStatus)
                          ?.name || "-"}
                      </TableCell>

                      <TableCell align="center">
                        {Number(project?.projectWaranty) > 0
                          ? project?.projectWaranty
                          : "-"}
                      </TableCell>
                      <TableCell align="center">
                        {Number(project?.projectMa) > 0
                          ? project?.projectMa
                          : "-"}
                      </TableCell>
                      <TableCell align="center">
                        {Number(project?.projectMaPerYear) > 0
                          ? project?.projectMaPerYear
                          : "-"}
                      </TableCell>
                      <TableCell align="right">
                        {formatPrice(project?.projectPrice)}
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
                        <Box display={"flex"} gap={1} justifyContent={"center"}>
                          <BoxWithColor
                            icon="detail"
                            onClick={() => gotoView(project.projectId as any)}
                          />
                          <BoxWithColor
                            icon="edit"
                            onClick={() => gotoEdit(project.projectId as any)}
                          />
                          {(isAdmin || isPM) && (
                            <BoxWithColor
                              icon="del"
                              color="error"
                              onClick={() =>
                                handleDelete(project.projectId as any)
                              }
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
