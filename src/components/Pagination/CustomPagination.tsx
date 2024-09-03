import Pagination, { PaginationProps } from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

//*------------------------------------------------------------------------

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPagination-ul": {
    gap: "8px",
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    border: "none",
  },
  "& .MuiPaginationItem-icon": {
    color: theme.palette.primary.main,
  },
  "& .MuiPaginationItem-root": {
    backgroundColor: "#FFFFFF",
    color: theme.palette.primary.main,
    border: "none",
    minWidth: "24px",
    height: "24px",
    boxShadow:
      "0px 1px 5px 0px #0000001F, 0px 2px 2px 0px #00000024, 0px 1px 1px 0px #00000033",
  },
}));

//*------------------------------------------------------------------------

interface StyledPaginationProps extends PaginationProps {
  count?: number;
}

//*------------------------------------------------------------------------

export default function CustomPagination({
  count,
  ...otherProps
}: StyledPaginationProps) {
  return <StyledPagination variant="outlined" count={count} {...otherProps} />;
}
//*------------------------------------------------------------------------
