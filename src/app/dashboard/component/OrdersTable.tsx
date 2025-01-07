"use client";

import DashboardApi from "@/api/dashboard.api";
import BoxWithColor from "@/components/Box/BoxWithColor";
import NotFoundTable from "@/components/Notfound/TableNotfound";
import { STATUS } from "@/constants/app";
import {
  ILateProject,
  IMaProject,
  IOrderWaranty,
} from "@/types/dashboard.type";
import { formatDate, formatPrice } from "@/utils/formatData";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import page from "../page";
import { useRouter } from "next/navigation";
import theme from "@/theme/theme";
import { IProject } from "@/types/project.type";

export default function OrdersTable() {
  const [lateProject, setLateProject] = useState<ILateProject[]>([]);
  const [projectMa, setProjectMa] = useState<IMaProject[]>([]);
  const [orderWaranty, setOrderWaranty] = useState<IOrderWaranty[]>([]);
  const [projectFileMissing, setProjectFileMissing] = useState<IProject[]>([]);
  const router = useRouter();

  useEffect(() => {
    getLateProject();
    getProjectMa();
    getOrderWaranty();
    getProjectFileMissing();
  }, []);

  const getLateProject = async () => {
    try {
      const data = await DashboardApi.projectLate();
      setLateProject(data);
    } catch (error) {}
  };

  const getProjectMa = async () => {
    try {
      const data = await DashboardApi.projectMa();
      setProjectMa(data);
    } catch (error) {}
  };

  const getOrderWaranty = async () => {
    try {
      const data = await DashboardApi.orderWaranty();
      setOrderWaranty(data);
    } catch (error) {}
  };

  const getProjectFileMissing = async () => {
    try {
      const data = await DashboardApi.projectFileInComplete();
      setProjectFileMissing(data);
    } catch (error) {}
  };

  const gotoEdit = (id: number) => {
    router.push(`project/edit?projectId=${id}`);
  };

  return (
    <Box>
      <Box bgcolor={"#FFF"} display={"flex"} borderRadius={"8px"} p={1} gap={2}>
        <Box width={"50%"}>
          <Typography variant="h4" mb={2}>
            <Box
              borderRadius={8}
              p={1}
              px={2}
              bgcolor={theme.palette.primary.main}
              color="#FFF"
              display="inline-flex"
            >
              Project in progress
            </Box>
          </Typography>
          {lateProject?.length ? (
            <>
              <TableContainer
                sx={{ height: "40vh", overflowX: "auto" }}
                component={Paper}
                elevation={5}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow sx={{ height: "40px", zIndex: 10 }}>
                      <TableCell>ชื่อโปรเจ็ค</TableCell>
                      <TableCell>วันกำหนดส่ง</TableCell>
                      <TableCell>ล่าช้า (วัน)</TableCell>
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
                    {lateProject?.map((project, index) => (
                      <TableRow
                        sx={{
                          height: "45px",
                          backgroundColor:
                            project.diffDate >= -15 && project.diffDate <= -1
                              ? "#FFFBDA"
                              : project.diffDate < -15
                              ? "#ffafaf"
                              : "transparent",
                        }}
                        key={index}
                      >
                        <TableCell>{project?.projectName || "-"}</TableCell>

                        <TableCell align="center">
                          {formatDate(project?.projectDueDate) || "-"}
                        </TableCell>
                        <TableCell align="center">
                          {project?.diffDate < 0
                            ? Math.abs(Math.ceil(project?.diffDate))
                            : "-"}
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
                              icon="detail"
                              onClick={() => gotoEdit(project.projectId as any)}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <NotFoundTable />
          )}
        </Box>
        <Box width={"50%"}>
          <Typography variant="h4" mb={2}>
            <Box
              borderRadius={8}
              p={1}
              px={2}
              bgcolor={theme.palette.primary.main}
              display="inline-flex"
              color="#FFF"
            >
              MA project due date
            </Box>
          </Typography>
          {projectMa?.length ? (
            <>
              <TableContainer
                sx={{ height: "40vh", overflowX: "auto" }}
                component={Paper}
                elevation={5}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow sx={{ height: "40px", zIndex: 10 }}>
                      <TableCell align="center">ครั้งที่</TableCell>
                      <TableCell>ชื่อโปรเจ็ค</TableCell>
                      <TableCell align="center">ระยะเวลา MA</TableCell>

                      <TableCell align="center">วันที่</TableCell>

                      <TableCell align="center">วันที่ครบกำหนด MA</TableCell>
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
                    {projectMa?.map((project, index) => (
                      <TableRow
                        sx={{
                          height: "45px",
                          bgcolor:
                            project.diffDate >= -15 && project.diffDate <= -1
                              ? "#FFFBDA"
                              : project.diffDate > -15
                              ? "#ffafaf"
                              : " transparent",
                        }}
                        key={index}
                      >
                        <TableCell align="center">
                          {project?.currentMa}
                        </TableCell>
                        <TableCell>{project?.projectName}</TableCell>

                        <TableCell align="center">
                          {`${project.projectMa}  (${
                            project?.projectMaPerYear || "-"
                          } ครั้ง/ปี)` || "-"}
                        </TableCell>
                        <TableCell align="center">
                          {formatDate(project?.projectStartWarantyDate) || "-"}{" "}
                          - {formatDate(project?.expiredDate) || "-"}
                        </TableCell>
                        <TableCell align="center">
                          {formatDate(project?.dueMaDate) || "-"}
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
                              icon="detail"
                              onClick={() => gotoEdit(project.projectId as any)}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <NotFoundTable />
          )}
        </Box>
      </Box>
      <Box display={"flex"} gap={2}>
        <Box width={"50%"}>
          <Typography variant="h4" mb={2}>
            <Box
              borderRadius={8}
              p={1}
              px={2}
              bgcolor={theme.palette.primary.main}
              display="inline-flex"
              color="#FFF"
              mt={3}
            >
              Order Waranty due date
            </Box>
          </Typography>
          {orderWaranty?.length ? (
            <>
              <TableContainer
                sx={{ height: "40vh", overflowX: "auto" }}
                component={Paper}
                elevation={5}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow sx={{ height: "40px", zIndex: 10 }}>
                      <TableCell>ชื่อออเดอร์</TableCell>
                      <TableCell align="center">ติดต่อ</TableCell>
                      <TableCell align="center">วันที่ประกัน</TableCell>
                      <TableCell align="center">วันที่คงเหลือ</TableCell>
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
                    {orderWaranty?.map((order, index) => (
                      <TableRow
                        sx={{
                          height: "45px",
                          bgcolor:
                            order.remainingWarranty <= -10
                              ? "#ffafaf"
                              : order.remainingWarranty > -10
                              ? "#FFFBDA"
                              : " transparent",
                        }}
                        key={index}
                      >
                        <TableCell align="center">{order?.orderName}</TableCell>
                        <TableCell>{`${order?.supplier.name} | ${order?.supplier.tel} `}</TableCell>
                        <TableCell align="center">
                          {formatDate(order?.orderStartWarantyDate) || "-"} -{" "}
                          {formatDate(order?.endDateWaranty) || "-"}
                        </TableCell>
                        <TableCell align="center">
                          {order?.remainingWarranty || "-"}
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
                              icon="detail"
                              onClick={() => gotoEdit(order.projectId as any)}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <NotFoundTable />
          )}
        </Box>
        <Box width={"50%"}>
          <Typography variant="h4" mb={2}>
            <Box
              borderRadius={8}
              p={1}
              px={2}
              bgcolor={theme.palette.primary.main}
              display="inline-flex"
              color="#FFF"
              mt={3}
            >
              File upload is incomplete
            </Box>
          </Typography>
          {projectFileMissing?.length ? (
            <>
              <TableContainer
                sx={{ height: "40vh", overflowX: "auto" }}
                component={Paper}
                elevation={5}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow sx={{ height: "40px", zIndex: 10 }}>
                      <TableCell>ชื่อโปรเจ็ค</TableCell>
                      <TableCell align="center">วันกำหนดส่ง</TableCell>
                      <TableCell align="center">งวดที่ไม่มีเอกสาร</TableCell>
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
                    {projectFileMissing?.map((project, index) => (
                      <TableRow
                        sx={{
                          height: "45px",
                        }}
                        key={index}
                      >
                        <TableCell align="center">
                          {project?.projectName}
                        </TableCell>
                        <TableCell align="center">
                          {formatDate(project?.projectDueDate)}
                        </TableCell>
                        <TableCell align="center">
                          {project?.documents
                            .map((doc) => doc.docPeriod)
                            .join(", ")}
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
                              icon="detail"
                              onClick={() => gotoEdit(project.projectId as any)}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <NotFoundTable />
          )}
        </Box>
      </Box>
    </Box>
  );
}
