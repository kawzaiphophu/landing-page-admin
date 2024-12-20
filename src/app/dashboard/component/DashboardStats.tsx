import { Grid, Paper, Typography, Box } from "@mui/material";

const stats = [
  { title: "Total Sales", value: "$12,345", color: "#4CAF50" },
  { title: "New Orders", value: "48", color: "#2196F3" },
  { title: "Pending Orders", value: "12", color: "#FFC107" },
  { title: "Total Customers", value: "1,234", color: "#9C27B0" },
];

export default function DashboardStats() {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              borderTop: `4px solid ${stat.color}`,
            }}
          >
            <Typography variant="h6" color="textSecondary">
              {stat.title}
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {stat.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
