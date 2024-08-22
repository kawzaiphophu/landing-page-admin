import ComplexStatisticsCard from "@/components/StatisticsCards/ComplexStatisticsCard";
import { Box, Grid } from "@mui/material";
export default function App() {
  return (
    <Box width={"100%"}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              icon="weekend"
              title="Bookings"
              count={281}
              percentage={{
                color: "success",
                amount: "+55%",
                label: "than lask week",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              icon="leaderboard"
              title="Today's Users"
              count="2,300"
              percentage={{
                color: "success",
                amount: "+3%",
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
              count="34k"
              percentage={{
                color: "success",
                amount: "+1%",
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
              count="+91"
              percentage={{
                color: "success",
                amount: "",
                label: "Just updated",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
