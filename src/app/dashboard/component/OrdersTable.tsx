import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Order ID", width: 130 },
  { field: "customer", headerName: "Customer", width: 180 },
  { field: "product", headerName: "Product", width: 180 },
  { field: "amount", headerName: "Amount", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
];

const rows = [
  {
    id: 1,
    customer: "John Doe",
    product: "Product A",
    amount: "$100",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    product: "Product B",
    amount: "$150",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    product: "Product C",
    amount: "$200",
    status: "Processing",
  },
  {
    id: 4,
    customer: "Alice Brown",
    product: "Product D",
    amount: "$120",
    status: "Completed",
  },
  {
    id: 5,
    customer: "Charlie Wilson",
    product: "Product E",
    amount: "$180",
    status: "Pending",
  },
];

export default function OrdersTable() {
  return (
    <Box sx={{ height: 400, p: 2 }}>
      <Typography variant="h6" mb={2}>
        Recent Orders
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
