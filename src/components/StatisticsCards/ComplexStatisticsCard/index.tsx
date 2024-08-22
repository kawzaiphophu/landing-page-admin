import React from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import { Box, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";

interface Percentage {
  color: keyof Theme["palette"];
  amount?: string | number;
  label?: string;
}

interface ComplexStatisticsCardProps {
  color?: keyof Theme["palette"];
  title: string;
  count: string | number;
  percentage: Percentage;
  icon: React.ReactNode;
}

const ComplexStatisticsCard: React.FC<ComplexStatisticsCardProps> = ({
  color = "info",
  title,
  count,
  percentage = {
    color: "success",
    amount: "",
    label: "",
  },
  icon,
}) => {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" pt={1} px={2}>
        <Box
          bgcolor={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </Box>
        <Box textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            {title}
          </Typography>
          <Typography variant="h4">{count}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box pb={2} px={2}>
        <Typography component="p" variant="button" color="text" display="flex">
          <Typography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </Typography>
          &nbsp;{percentage.label}
        </Typography>
      </Box>
    </Card>
  );
};

export default ComplexStatisticsCard;
