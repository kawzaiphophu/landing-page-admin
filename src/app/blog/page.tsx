"use client";

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import SubLoading from "@/components/Loading/SubLoading";
import CustomSwitch from "@/components/Switch/Switch";
import DropdownMenu from "@/components/Dropdown/DropdownMenu";
import CustomButton from "@/components/Button/CustomButton";
import { useRouter } from "next/navigation";
import CustomTextfield from "@/components/Textfield/CustomTextfield";

type Props = {};

export default function Setting({}: Props) {
  const theme = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageLimit, setPageLimit] = useState<number>(15);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [blogs, setBlog] = useState({});

  const goToCreate = () => {
    router.push("/blog/create", { scroll: false });
  };

  const handleEdit = (id: number) => {
    router.push(`/blog/${id}`, { scroll: false });
  };
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
          bgcolor: theme.palette.primary.dark,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          Blog Section
        </Typography>
        <Box width={"50%"} display={"flex"} gap={2}>
          <CustomTextfield
            type="search"
            buttonText="ค้นหา "
            placeholder="ค้นหาบทความ"
          />
          <CustomButton
            text="เพิ่มบทความ"
            style="contained"
            color="secondary"
            size="small"
            onClick={() => goToCreate()}
          />
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ height: "60vh" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ height: "50px" }}>
              <TableCell align="center">ลำดับ</TableCell>
              <TableCell>ชื่อบทความ</TableCell>
              <TableCell align="center">วันที่สร้าง</TableCell>
              <TableCell align="center">สถานะ</TableCell>
              <TableCell align="center">จัดการ</TableCell>
            </TableRow>
          </TableHead>
          {loading ? (
            <SubLoading />
          ) : (
            <TableBody>
              {[...Array(30)].map((_, index) => (
                <TableRow
                  key={index}
                  sx={{
                    height: "80px",
                  }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell>{"blog name some thing"}</TableCell>
                  <TableCell align="center">{"24/10/2565"}</TableCell>
                  <TableCell align="center">
                    <CustomSwitch checked />
                  </TableCell>
                  <TableCell align="center">
                    <DropdownMenu
                      titles={["แก้ไข", "ลบ"]}
                      actions={[() => handleEdit(1)]}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
        {/* {assets.length < 1 && !loading && (
                <Box
                  width={"100%"}
                  height={"400px"}
                  textAlign={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  py={"14px"}
                >
                  <Box>
                    <Typography variant="body1" color="#666666">
                      {t.notFound("asset")}
                    </Typography>
                    <NoAsset alt="NoAsset Icon" />
                  </Box>
                </Box>
              )} */}
      </TableContainer>
    </Box>
  );
}
