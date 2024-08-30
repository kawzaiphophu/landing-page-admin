"use client";
//?================================================================================
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  Divider,
  Grid,
  IconButton,
  styled,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

//?================================================================================
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import CustomSwitch from "@/components/Switch/Switch";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CustomTextEditor from "@/components/Editor/CustomTextEditor";
import CustomButton from "@/components/Button/CustomButton";
//?================================================================================

type Props = {};

//?================================================================================

export default function Service({}: Props) {
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
          Service Section
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"end"} pt={2}>
        <Button variant="outlined" color="secondary" onClick={handleAddRow}>
          Add new service
        </Button>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {[...Array(row)].map((_, rowIndex) => (
            <Grid item xs={12} md={6}>
              <StyledBox key={rowIndex} flexDirection={"column"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  bgcolor={"#DEDEDE"}
                  p={"0.5rem 2rem"}
                  borderRadius={"8px 8px 0 0 "}
                >
                  <Typography variant="h5" fontWeight={700}>
                    {" no. " + " "}
                    {rowIndex + 1}
                  </Typography>
                  <CustomSwitch />
                </Box>
                <Box display={"flex"}>
                  <Box
                    padding={1}
                    width={{ xs: "auto", sm: "40%" }}
                    height={"auto"}
                    display={"flex"}
                    flexDirection={{ xs: "row", sm: "column" }}
                    justifyContent={"space-between"}
                  >
                    <CustomImageUpload
                      maxFiles={1}
                      onChange={(e) => console.log(e)}
                    />
                  </Box>
                  <Box
                    padding={1}
                    width={"100%"}
                    bgcolor={"#FFFFFF"}
                    borderRadius={"8px"}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <CustomTextfield label="title" />
                      </Grid>
                      <Grid item xs={6}>
                        <CustomTextfield label="price" />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextEditor
                          placeholder="Detail package"
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
const StyledBox = styled(Box)(({}) => ({
  marginTop: "1rem",
  borderRadius: "8px",
  border: `1px solid #DEDEDE`,
  minHeight: "192px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));
