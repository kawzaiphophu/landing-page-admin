"use client";

//?================================================================================
import {
  Box,
  Typography,
  Button,
  useTheme,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import dynamic from "next/dynamic";

//?================================================================================
const CustomImageUpload = dynamic(
  () => import("@/components/CustomImageUpload/CustomImageUpload"),
  { ssr: false }
);
const CustomSwitch = dynamic(() => import("@/components/Switch/Switch"), {
  ssr: false,
});
const CustomTextfield = dynamic(
  () => import("@/components/Textfield/CustomTextfield"),
  { ssr: false }
);
const CustomTextEditor = dynamic(
  () => import("@/components/Editor/CustomTextEditor"),
  { ssr: false }
);
const CustomButton = dynamic(() => import("@/components/Button/CustomButton"), {
  ssr: false,
});
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

//?================================================================================

type Props = {};

//?================================================================================

export default function Package({}: Props) {
  const theme = useTheme();
  const [images, setImages] = useState<string[]>([]);
  const [row, setRow] = useState<number>(2);
  //?==============================================================================

  const handleImageChange = (files: File[] | string[]) => {
    setImages(files as string[]);
  };

  const handleAddRow = () => {
    setRow(row + 1);
  };

  const handleDeleteRow = (rowIndex: number) => {
    setRow(row - 1);
  };
  //?==============================================================================

  return (
    <Box p={2} sx={{ border: "1px solid #DEDEDE", borderRadius: "8px" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          border: "1px solid #DEDEDE",
          borderRadius: "8px",
          p: 3,
          bgcolor: theme.palette.primary.dark,
          mt: -5,
        }}
      >
        <Typography variant="h3" color={"#FFF"}>
          Package Section
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"end"} pt={2}>
        <Button variant="outlined" color="secondary" onClick={handleAddRow}>
          Add new Package
        </Button>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {[...Array(row)].map((_, rowIndex) => (
            <Grid item xs={12} md={6} key={rowIndex}>
              <StyledBox key={rowIndex} flexDirection={"column"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  bgcolor={"#DEDEDE"}
                  p={"1rem 2rem"}
                  borderRadius={"8px 8px 0 0 "}
                >
                  <Typography variant="h5" fontWeight={700}>
                    แพ็คเกจที่ {rowIndex + 1}
                  </Typography>
                  <CustomSwitch />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={{ xs: "column", md: "row" }}
                >
                  <Box
                    padding={"16px"}
                    width={{ xs: "auto", sm: "40%" }}
                    minWidth={"150px"}
                    height={"auto"}
                    display={"flex"}
                    flexDirection={{ xs: "row", sm: "column" }}
                    justifyContent={"space-between"}
                  >
                    <CustomImageUpload
                      maxFiles={1}
                      onChange={(e) => console.log(e)}
                      height="200px"
                    />
                  </Box>
                  <Box
                    padding={"16px"}
                    width={"100%"}
                    bgcolor={"#FFFFFF"}
                    borderRadius={"8px"}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <CustomTextfield
                          label="ชื่อแพ็คเกจ"
                          placeholder="กรอกชื่อแพ็คเกจ"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <CustomTextfield
                          label="ราคา"
                          placeholder="กรอกราคาแพ็คเกจ"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextEditor
                          placeholder="รายละเอียดแพ็คเกจ"
                          value={""}
                          onChange={(v) => console.log(v)}
                          minRow={4}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    display={row > 1 ? "flex" : "none"}
                    position={"absolute"}
                    left={"-0.7rem"}
                    top={"-1rem"}
                  >
                    <IconButton
                      onClick={() => handleDeleteRow(rowIndex)}
                      sx={{
                        width: "40px",
                        height: "40px",
                        bgcolor: "red",
                        ":hover": { bgcolor: "#FFF" },
                      }}
                    >
                      <DeleteOutlineIcon
                        sx={{
                          p: "8px",
                          width: "40px",
                          height: "40px",
                          fontSize: "25px",
                          color: "#FFF",
                          ":hover": { color: "red" },
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </StyledBox>
            </Grid>
          ))}
        </Grid>
        <Box
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          alignSelf="flex-end"
          pt={3}
        >
          <CustomButton text="Cancel" style="outlined" />
          <CustomButton text="Submit" style="contained" />
        </Box>
      </Box>
    </Box>
  );
}
//?===============================================================================
const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  borderRadius: "8px",
  border: `1px solid #DEDEDE`,
  minHeight: "192px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));
