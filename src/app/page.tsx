"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import ComplexStatisticsCard from "@/components/StatisticsCards/ComplexStatisticsCard";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts";

const generateRandomData = () => {
  const categories = ["Group A", "Group B", "Group C"];
  return categories.map((category) => ({
    category,
    value: Math.floor(Math.random() * 10) + 1,
  }));
};

// Generate random data for each chart
const data1 = generateRandomData();
const data2 = generateRandomData();
const data3 = generateRandomData();

export default function App() {
  return (
    <Box width="100%" p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              icon="weekend"
              title="Bookings"
              count={345}
              percentage={{
                color: "success",
                amount: "+10%",
                label: "than last week",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              icon="leaderboard"
              title="Today's Users"
              count="1,500"
              percentage={{
                color: "success",
                amount: "+5%",
                label: "than last month",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              color="success"
              icon="store"
              title="Revenue"
              count="$29k"
              percentage={{
                color: "success",
                amount: "+8%",
                label: "than yesterday",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              color="primary"
              icon="person_add"
              title="Followers"
              count="+120"
              percentage={{
                color: "success",
                amount: "",
                label: "Just updated",
              }}
            />
          </Box>
        </Grid>

        {/* Graph Section */}
        <Grid item xs={12}>
          <Box
            display={"flex"}
            gap={2}
            p={3}
            border="1px solid #e0e0e0"
            borderRadius="8px"
          >
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [7, 2, 4] },
                { data: [5, 8, 1] },
                { data: [3, 6, 2] },
              ]}
              width={500}
              height={300}
            />
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [6, 4, 8] },
                { data: [2, 9, 5] },
                { data: [7, 3, 6] },
              ]}
              width={500}
              height={300}
            />
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [5, 7, 2] },
                { data: [8, 1, 4] },
                { data: [6, 3, 7] },
              ]}
              width={500}
              height={300}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
