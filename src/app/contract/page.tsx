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

export default function Contract({}: Props) {
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
          Contract Section
        </Typography>
      </Box>
      <Grid container spacing={2} pt={2}>
        <Grid item xs={6}>
          <CustomTextfield
            minRows={4}
            label="ที่อยู่บริษัท"
            placeholder="กรอกที่อยู่บริษัท"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        >
          <Button variant="outlined" color="secondary" onClick={handleAddRow}>
            Add new contract
          </Button>
        </Grid>
      </Grid>

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
                    ช่องทางติดต่อ ที่ {rowIndex + 1}
                  </Typography>
                  <CustomSwitch />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={{ xs: "column", md: "row" }}
                >
                  <Box
                    padding={"16px"}
                    width={{ xs: "auto", sm: "20%" }}
                    minWidth={"150px"}
                    height={"auto"}
                    display={"flex"}
                    flexDirection={{ xs: "row", sm: "column" }}
                    justifyContent={"space-between"}
                  >
                    <CustomImageUpload
                      maxFiles={1}
                      onChange={(e) => console.log(e)}
                      height="100px"
                      width="100px"
                    />
                  </Box>
                  <Box
                    padding={"16px"}
                    width={"100%"}
                    bgcolor={"#FFFFFF"}
                    borderRadius={"8px"}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <CustomTextfield
                          label="ชื่อช่องทางติดต่อ"
                          placeholder="กรอกชื่อช่องทางติดต่อ"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextfield
                          label="ลิงก์ช่องทางติดต่อ"
                          placeholder="ลิงก์ช่องทางติดต่อ"
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
