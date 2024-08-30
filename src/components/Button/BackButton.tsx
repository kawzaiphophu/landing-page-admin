import { Box } from "@mui/system";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";
type Props = {
  path?: string;
};

export default function BackButton({ path }: Props) {
  const router = useRouter();
  const theme = useTheme();
  const goBack = () => {
    router.push(path as string);
  };

  return (
    <Box
      sx={{
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        pl: 1,
        mr: 1,
        ":hover": {
          transform: "scale(1.2)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
      onClick={goBack}
    >
      <ArrowBackIosIcon
        sx={{ color: theme.palette.primary.contrastText, alignSelf: "center" }}
      />
    </Box>
  );
}
