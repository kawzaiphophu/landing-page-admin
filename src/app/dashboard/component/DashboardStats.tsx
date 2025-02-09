"use client";

import DashboardApi from "@/api/dashboard.api";
import { ISummary } from "@/types/dashboard.type";
import { formatPrice } from "@/utils/formatData";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function DashboardStats() {
  const [summary, setSummary] = useState<ISummary>();

  const stats = [
    {
      title: "Active Project",
      value: summary?.totalProjects,
      color: "#4CAF50",
    },
    { title: "Total Price", value: summary?.totalPrice, color: "#2196F3" },
    { title: "Total Cost", value: summary?.totalCost, color: "#FFC107" },
    { title: "Total Profit", value: summary?.totalProfit, color: "#9C27B0" },
  ];
  useEffect(() => {
    getSummary();
  }, []);

  const getSummary = async () => {
    try {
      const param = { dateFrom: "2024-12-01", dateTo: "2024-12-30" };
      const data = await DashboardApi.projectSummary(param);
      setSummary(data);
    } catch (error) {}
  };

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
              {formatPrice(stat.value as number, (stat.title === "Active Project" ? 0 : 2))}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
