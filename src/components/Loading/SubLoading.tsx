import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

export default function SubLoading() {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    minHeight: "60vh",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 99999,
  };

  const backgroundStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={backgroundStyles} />
      <Box>
        <CircularProgress />
      </Box>
    </Box>
  );
}
