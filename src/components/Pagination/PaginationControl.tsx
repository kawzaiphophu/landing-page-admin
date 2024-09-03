import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import CustomPagination from "./CustomPagination";
import DropdownMenu from "@/components/Dropdown/DropdownMenu";

//*------------------------------------------------------------------------
interface PaginationControlProps {
  totalPages: number;
  page: number;
  pageLimit: number;
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
      justifyContent="end"
      alignItems="center"
      sx={{ py: 2 }}
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
        <Box fontWeight="600">{pageLimit}</Box>
        <DropdownMenu
          icon="arrow"
          id={1}
          titles={title}
          actions={title.map((limit) => () => handlePageLimitChange(limit))}
          menuIcon={[]}
        />
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
