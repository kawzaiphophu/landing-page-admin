import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import CustomPagination from "./CustomPagination";
import DropdownMenu from "@/components/Dropdown/DropdownMenu";

//*------------------------------------------------------------------------
interface PaginationControlProps {
  totalPages: number;
  page: number;
  pageLimit: number;
  totalItem: number;
  setPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  setSearchValue?: (value: string) => void | undefined;
  title?: number[];
}

//*------------------------------------------------------------------------
const PaginationControl: React.FC<PaginationControlProps> = ({
  totalPages,
  page,
  pageLimit,
  setPage,
  setPageLimit,
  setSearchValue,
  title = [15, 30, 45, 60],
  totalItem,
}) => {
  const handlePageLimitChange = (limit: number) => {
    setPageLimit(limit);
    setPage(1);
    if (setSearchValue) {
      setSearchValue("");
    }
  };

  return (
    <Stack
      display={"flex"}
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: 2 }}
      gap={2}
      flexWrap={"nowrap"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        sx={{ color: "#7D7D7B", fontSize: "14px", fontWeight: "600" }}
        flexWrap={"nowrap"}
      >
        <Typography variant="body2" color="##9E9E9E">
          แสดง
        </Typography>

        <DropdownMenu
          label={pageLimit.toString()}
          icon="arrow"
          id={1}
          titles={title}
          actions={title.map((limit) => () => handlePageLimitChange(limit))}
          menuIcon={[]}
        />
        <Typography variant="body2" color="##9E9E9E">
          {pageLimit * page - pageLimit + 1} -{" "}
          {page * pageLimit > totalItem ? totalItem : page * pageLimit} จาก{" "}
          {totalItem || "0"}
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <CustomPagination
          count={totalPages}
          page={page}
          onChange={(_, newPage) => setPage(newPage)}
        />
      </Box>
    </Stack>
  );
};

export default PaginationControl;
