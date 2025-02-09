"use client";
import DashboardApi from "@/api/dashboard.api";
import theme from "@/theme/theme";
import { ILateYear, ISummaryYear } from "@/types/dashboard.type";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [sumYear, setSumYear] = useState<ISummaryYear[]>();
  const [sumLateYear, setSumLateYear] = useState<ILateYear[]>();

  useEffect(() => {
    getSummary();
    getSummaryLate();
  }, []);

  const getSummary = async () => {
    try {
      const data = await DashboardApi.projectSummaryYear();
      setSumYear(data);
    } catch (error) {}
  };
  const getSummaryLate = async () => {
    try {
      const data = await DashboardApi.lateSummaryYear();
      setSumLateYear(data);
    } catch (error) {}
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Overview
      </Typography>
      <Box
        sx={{
          minHeight: 400,
          p: 2,
          display: "flex",
          flexDirection: { xs: "column", sx: "row" },
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            {" "}
            <ResponsiveContainer height={300} style={{ paddingLeft: 20 }}>
              <LineChart data={sumYear}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  tickFormatter={(value) => {
                    if (value >= 1000000) {
                      return `฿${(value / 1000000).toFixed(1)}M`; // Millions
                    }
                    if (value >= 1000) {
                      return `฿${(value / 1000).toFixed(1)}K`; // Thousands
                    }
                    return new Intl.NumberFormat("th-TH", {
                      style: "currency",
                      currency: "THB",
                    }).format(value);
                  }}
                  style={{ fontSize: 14 }}
                  axisLine={{ stroke: "#ddd" }}
                />
                <Tooltip
                  formatter={(value) => {
                    return new Intl.NumberFormat("th-TH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(value as number);
                  }}
                />

                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  name="ยอดขายปีนี้"
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke={theme.palette.primary.main}
                  activeDot={{ r: 8 }}
                  name="กำไรปีนี้"
                />

                <Line
                  type="monotone"
                  dataKey="salesLastYear"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                  name="ยอดขายปีที่เเล้ว"
                  dot={{ fill: "#82ca9d" }}
                />

                <Line
                  type="monotone"
                  dataKey="profitLastYear"
                  stroke="#ff7300"
                  activeDot={{ r: 8 }}
                  name="กำไรปีที่เเล้ว"
                  dot={{ fill: "#ff7300" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResponsiveContainer
              // width="50%"
              height={300}
              style={{ paddingLeft: 20 }}
            >
              <LineChart data={sumLateYear}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  tickFormatter={(value) => {
                    if (value >= 1000000) {
                      return `฿${(value / 1000000).toFixed(1)}M`; // Millions
                    }
                    if (value >= 1000) {
                      return `฿${(value / 1000).toFixed(1)}K`; // Thousands
                    }
                    return new Intl.NumberFormat("th-TH", {
                      style: "currency",
                      currency: "THB",
                    }).format(value);
                  }}
                  style={{ fontSize: 14 }}
                  axisLine={{ stroke: "#ddd" }}
                />
                <Tooltip
                  formatter={(value) => {
                    return new Intl.NumberFormat("th-TH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(value as number);
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="costProject"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  name="ยอดค้างชำระ Project"
                />
                <Line
                  type="monotone"
                  dataKey="costOrder"
                  stroke={theme.palette.primary.main}
                  activeDot={{ r: 8 }}
                  name="ยอดค้างชำระ Order"
                />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
