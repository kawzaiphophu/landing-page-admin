import theme from "@/theme/theme";
import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000, profit: 5000 },
  { month: "Feb", sales: 3000, profit: 12000 },
  { month: "Mar", sales: 2000, profit: 5000 },
  { month: "Apr", sales: 2780, profit: 6000 },
  { month: "May", sales: 1890, profit: 15000 },
  { month: "Jun", sales: 2390, profit: 18000 },
];

export default function SalesChart() {
  return (
    <Box sx={{ height: 400, p: 2 }}>
      <Typography variant="h6" mb={2}>
        Sales Overview
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke={theme.palette.primary.main}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
