"use client";

//?================================================================================
import {
  Box,
  Typography,
  useTheme,
  styled,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import NotFoundTable from "@/components/Notfound/TableNotfound";
import PaginationControl from "@/components/Pagination/PaginationControl";
import { useRouter } from "next/navigation";
import { ILog } from "@/types/log.type";
import LogApi from "@/api/log.api";
import { formatDateWithTime } from "@/utils/formatData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
  const [logs, setLogs] = useState<ILog[]>([]);

  useEffect(() => {
    getAllLogs(page, pageLimit);
  }, [page, pageLimit]);

  const getAllLogs = async (
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
      const { data, totalItems, totalPages } = await LogApi.findAll(param);
      setLogs(data);
      setTotalPages(totalPages);
      setTotalItems(totalItems);
    } catch (error) {}
  };
  //?==============================================================================

  return (
    <>
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
              placeholder="ค้นหา log"
              onChange={(v) => setSearchValue(v)}
            />
            <CustomButton
              text="ค้นหา"
              size="medium"
              onClick={() => getAllLogs(page, pageLimit, searchValue)}
            />
          </Box>
        </Box>
        <Box bgcolor={"#FFF"} p={"1rem"} borderRadius={"8px"}>
          {logs.length ? (
            <>
              <TableContainer
                sx={{ height: "70vh", overflowX: "auto", mt: 2 }}
                component={Paper}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow sx={{ height: "72px", zIndex: 10 }}>
                      <TableCell align="center">NO</TableCell>
                      <TableCell align="center">table</TableCell>
                      <TableCell align="center">id</TableCell>
                      <TableCell align="center">type</TableCell>
                      <TableCell align="center">data change</TableCell>
                      <TableCell align="center">create At</TableCell>
                      <TableCell align="center">create By</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ position: "relative" }}>
                    {logs?.map((log, index) => (
                      <TableRow
                        sx={{
                          height: "40px",
                        }}
                        key={index}
                      >
                        <TableCell align="center">
                          {pageLimit * (page - 1) + index + 1}
                        </TableCell>
                        <TableCell align="center">
                          {log?.entityType || "-"}
                        </TableCell>
                        <TableCell align="center">
                          {log?.entityId || "-"}
                        </TableCell>
                        <TableCell align="center">{log?.action}</TableCell>

                        <TableCell align="left" width={'50%'}>
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ArrowDownwardIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Typography component="span">
                                จำนวนข้อมูลที่เปลี่ยน {log?.changes?.length}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              {log?.changes?.map((change, index) => (
                                <Typography key={index}>
                                  {` ${change.column} (${JSON.stringify(
                                    change.before
                                  )} -> ${JSON.stringify(
                                    change.after
                                  )}) `}
                                </Typography>
                              ))}
                            </AccordionDetails>
                          </Accordion>
                        </TableCell>
                        <TableCell align="center">
                          {formatDateWithTime(log?.createdAt)}
                        </TableCell>
                        <TableCell align="center">{log?.changedBy}</TableCell>
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
