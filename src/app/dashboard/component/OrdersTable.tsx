"use client";

import DashboardApi from "@/api/dashboard.api";
import BoxWithColor from "@/components/Box/BoxWithColor";
import NotFoundTable from "@/components/Notfound/TableNotfound";
import { STATUS } from "@/constants/app";
import {
  IFileMissing,
  ILateProject,
  IMaProject,
  IOrderMissingFile,
  IOrderWaranty,
  IPeriod,
} from "@/types/dashboard.type";
import { formatDate, formatPrice } from "@/utils/formatData";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
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
  const [latePeriod, setLatePeriod] = useState<IPeriod[]>([]);
  const [latePeriodPayment, setLatePeriodPayment] = useState<IPeriod[]>([]);
  const [projectMa, setProjectMa] = useState<IMaProject[]>([]);
  const [orderWaranty, setOrderWaranty] = useState<IOrderWaranty[]>([]);
  const [projectFileMissing, setProjectFileMissing] = useState<IFileMissing[]>(
    []
  );
  const [orderFileMissing, setOrderFileMissing] = useState<IOrderMissingFile[]>(
    []
  );
  const [tab, setTab] = useState<any>(0);
  const router = useRouter();

  useEffect(() => {
    getProject();
    getOrder();
  }, []);

  const getProject = async () => {
    try {
      const data = await DashboardApi.project();
      setLateProject(data.lateProjects);
      setProjectMa(data.maProjects);
      setLatePeriod(data.latePeriodDue);
      setLatePeriodPayment(data.latePeriodDuePayment);
      setProjectFileMissing(data.fileMissing);
    } catch (error) {}
  };

  const getOrder = async () => {
    try {
      const data = await DashboardApi.order();
      setOrderWaranty(data.orderWaranty);
      setOrderFileMissing(data.orderMissingFile);
    } catch (error) {}
  };

  const gotoEdit = (id: number) => {
    router.push(`project/edit?projectId=${id}`);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  function getColorByDiffDate(diffDate: number) {
    if (diffDate >= 15 && diffDate <= 30) {
      return "transparent";
    } else if (diffDate >= -1 && diffDate <= 14) {
      return "#FFFBDA";
    } else if (diffDate < 0) {
      return "#FFAFAF";
    }
    return "transparent";
  }
  return (
    <Box>
      <Divider sx={{ mb: 5, borderWidth: 3, borderRadius: 2 }} />
      <Tabs
        value={tab}
        onChange={handleChangeTab}
        aria-label="basic tabs example"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto", // Center horizontally
          width: "fit-content",
        }}
      >
        <Tab
          sx={{
            ml: 0.5,
            fontSize: 25,
            bgcolor: "#D3D3D3",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            "&.Mui-selected": {
              bgcolor: "#ffdfad",
            },
            p: 2,
          }}
          label={`Projects`}
        />
        <Tab
          sx={{
            ml: 0.5,
            fontSize: 25,
            bgcolor: "#D3D3D3",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            "&.Mui-selected": {
              bgcolor: "#ffdfad",
            },
          }}
          label={`Orders`}
        />
      </Tabs>
      {tab === 0 && (
        <Grid
         container
         spacing={2}
         mt={2}
        >
          <Grid item xs={12} sm={6}>
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
                        <TableCell>ชื่อProject</TableCell>
                        <TableCell>วันกำหนดส่ง</TableCell>
                        <TableCell>วันคงเหลือ</TableCell>
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
                            backgroundColor: getColorByDiffDate(
                              project.diffDate
                            ),
                          }}
                          key={index}
                        >
                          <TableCell>{project?.projectName || "-"}</TableCell>

                          <TableCell align="center">
                            {formatDate(project?.projectDueDate) || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {project?.diffDate}
                          </TableCell>
                          <TableCell
                            sx={{
                              position: "sticky",
                              right: "0",
                              zIndex: 1,
                              bgcolor: "#FFF",
                              boxShadow:
                                "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
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
                                onClick={() =>
                                  gotoEdit(project.projectId as any)
                                }
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" mb={2}>
              <Box
                borderRadius={8}
                p={1}
                px={2}
                bgcolor={theme.palette.primary.main}
                display="inline-flex"
                color="#FFF"
              >
                MA Project Due Date
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
                        <TableCell>ชื่อProject</TableCell>
                        <TableCell align="center">ระยะเวลา MA</TableCell>
                        <TableCell>วันคงเหลือ</TableCell>
                        <TableCell align="center">วันที่ครบกำหนด MA</TableCell>
                        <TableCell align="center">วันที่</TableCell>
              
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
                            bgcolor: getColorByDiffDate(project.diffDate),
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
                          <TableCell align="center">{project?.diffDate}</TableCell>
                          <TableCell align="center">
                            {formatDate(project?.dueMaDate) || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {formatDate(project?.projectStartWarantyDate) ||
                              "-"}{" "}
                            - {formatDate(project?.expiredDate) || "-"}
                          </TableCell>
                        
                    
                          <TableCell
                            sx={{
                              position: "sticky",
                              right: "0",
                              zIndex: 1,
                              bgcolor: "#FFF",
                              boxShadow:
                                "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
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
                                onClick={() =>
                                  gotoEdit(project.projectId as any)
                                }
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" mb={2}>
              <Box
                borderRadius={8}
                p={1}
                px={2}
                bgcolor={theme.palette.primary.main}
                color="#FFF"
                display="inline-flex"
              >
                งวดงาน
              </Box>
            </Typography>
            {latePeriod?.length ? (
              <>
                <TableContainer
                  sx={{ height: "40vh", overflowX: "auto" }}
                  component={Paper}
                  elevation={5}
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow sx={{ height: "40px", zIndex: 10 }}>
                        <TableCell>ชื่อProject</TableCell>
                        <TableCell align="center">งวดที่</TableCell>
                        <TableCell align="center">วันกำหนดส่ง</TableCell>
                        <TableCell align="center">วันคงเหลือ</TableCell>
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
                      {latePeriod?.map((period, index) => (
                        <TableRow
                          sx={{
                            height: "45px",
                            backgroundColor: getColorByDiffDate(
                              period.diffDate
                            ),
                          }}
                          key={index}
                        >
                          <TableCell>
                            {period?.project?.projectName || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {period?.periodNo || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {formatDate(period?.periodDue) || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {period?.diffDate}
                          </TableCell>
                          <TableCell
                            sx={{
                              position: "sticky",
                              right: "0",
                              zIndex: 1,
                              bgcolor: "#FFF",
                              boxShadow:
                                "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
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
                                onClick={() =>
                                  gotoEdit(period.project.projectId as any)
                                }
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" mb={2}>
              <Box
                borderRadius={8}
                p={1}
                px={2}
                bgcolor={theme.palette.primary.main}
                color="#FFF"
                display="inline-flex"
              >
              งวดชำระ
              </Box>
            </Typography>
            {latePeriodPayment?.length ? (
              <>
                <TableContainer
                  sx={{ height: "40vh", overflowX: "auto" }}
                  component={Paper}
                  elevation={5}
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow sx={{ height: "40px", zIndex: 10 }}>
                        <TableCell>ชื่อProject</TableCell>
                        <TableCell align="center">งวดที่</TableCell>
                        <TableCell align="center">วันกำหนดชำระ</TableCell>
                        <TableCell align="center">วันคงเหลือ</TableCell>
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
                      {latePeriodPayment?.map((period, index) => (
                        <TableRow
                          sx={{
                            height: "45px",
                            backgroundColor: getColorByDiffDate(
                              period.diffDate
                            ),
                          }}
                          key={index}
                        >
                          <TableCell align="center">
                            {period?.project?.projectName || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {period?.periodNo || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {formatDate(period?.paymentDue) || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {period?.diffDate}
                          </TableCell>
                          <TableCell
                            sx={{
                              position: "sticky",
                              right: "0",
                              zIndex: 1,
                              bgcolor: "#FFF",
                              boxShadow:
                                "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
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
                                onClick={() =>
                                  gotoEdit(period.project.projectId as any)
                                }
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
          </Grid>

          <Grid item xs={12} sm={6}>
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
               เอกสารที่ยังไม่เรียบร้อย
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
                        <TableCell>ชื่อProject</TableCell>
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
                            {project?.periodFileMissing
                              .map((doc) => doc)
                              .join(", ")}
                          </TableCell>

                          <TableCell
                            sx={{
                              position: "sticky",
                              right: "0",
                              zIndex: 1,
                              bgcolor: "#FFF",
                              boxShadow:
                                "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
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
                                onClick={() =>
                                  gotoEdit(project.projectId as any)
                                }
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
          </Grid>
        </Grid>
      )}
      {tab === 1 && (
         <Grid
         container
         spacing={2}
         mt={2}
        >
          <Grid item xs={12} sm={6}>
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
                Order Warranty
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
                        <TableCell align="center">ชื่อออเดอร์</TableCell>
                        <TableCell align="center">ติดต่อ</TableCell>
                        <TableCell align="center">วันที่คงเหลือ</TableCell>
                        <TableCell align="center">วันที่ประกัน</TableCell>
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
                          <TableCell >
                            {order?.orderName}
                          </TableCell>
                          <TableCell>{`${order?.supplier.name}`}</TableCell>
                         
                          <TableCell align="center">
                            {order?.remainingWarranty || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {formatDate(order?.orderStartWarantyDate) || "-"} -{" "}
                            {formatDate(order?.endDateWaranty) || "-"}
                          </TableCell>
                          <TableCell
                            sx={{
                              position: "sticky",
                              right: "0",
                              zIndex: 1,
                              bgcolor: "#FFF",
                              boxShadow:
                                "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
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
          </Grid>
          <Grid item xs={12} sm={6}>
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
               เอกสารที่ยังไม่เรียบร้อย
              </Box>
            </Typography>
            {orderFileMissing?.length ? (
              <>
                <TableContainer
                  sx={{ height: "40vh", overflowX: "auto" }}
                  component={Paper}
                  elevation={5}
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow sx={{ height: "40px", zIndex: 10 }}>
                        <TableCell >ชื่อProject</TableCell>
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
                      {orderFileMissing?.map((order, index) => (
                        <TableRow
                          sx={{
                            height: "45px",
                          }}
                          key={index}
                        >
                          <TableCell >
                            {order?.project?.projectName}
                          </TableCell>
                          <TableCell align="center">
                            {formatDate(order?.orderDueDate)}
                          </TableCell>
                          <TableCell align="center">
                            {order?.missingFilePaths
                              .map((doc) => doc)
                              .join(", ")}
                          </TableCell>

                          <TableCell
                            sx={{
                              position: "sticky",
                              right: "0",
                              zIndex: 1,
                              bgcolor: "#FFF",
                              boxShadow:
                                "-4px 0px 10px -2px rgba(0, 0, 0, 0.1)",
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
                                onClick={() =>
                                  gotoEdit(order?.project?.projectId as any)
                                }
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
          </Grid>
        </Grid>
        
      )}
    </Box>
  );
}
