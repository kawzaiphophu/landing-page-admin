"use client";

import BackButton from "@/components/Button/BackButton";
import CustomButton from "@/components/Button/CustomButton";
import CustomImageUpload from "@/components/CustomImageUpload/CustomImageUpload";
import CustomTextEditor from "@/components/Editor/CustomTextEditor";
import CustomTextfield from "@/components/Textfield/CustomTextfield";

import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { useState, ChangeEvent } from "react";

type BlogDetailProps = {
  params: {
    blogID: string;
  };
};

export default function BlogDetail({ params }: BlogDetailProps) {
  const { blogID } = params;
  const theme = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    featureImage: null,
    content: "",
    images: [],
    focusKeywords: "",
    link: "",
    shareTitle: "",
    shareDescription: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    // if (event.target.files) {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     featureImage: event.target.files[0],
    //   }));
    // }
  };

  const handleAddImage = (event: ChangeEvent<HTMLInputElement>) => {
    // if (event.target.files) {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     images: [...prevData.images, ...Array.from(event.target.files)],
    //   }));
    // }
  };

  const handleDeleteImage = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleEditorChange = (content: string) => {
    setFormData((prevData) => ({
      ...prevData,
      content,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
    // Handle form submission
  };
  return (
    <Box p={2} sx={{ border: "1px solid #DEDEDE", borderRadius: "8px" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          border: "1px solid #DEDEDE",
          borderRadius: "8px",
          p: 3,
          bgcolor: theme.palette.primary.dark,
          mt: -5,
        }}
      >
        <BackButton path="/blog" />
        <Typography variant="h3" color={"#FFF"}>
          บทความ : {blogID}
        </Typography>
      </Box>

      <Grid container spacing={2} pt={5}>
        <Grid item xs={12} sm={4}>
          <CustomImageUpload onChange={(e) => console.log(e)} height="300px" />
        </Grid>

        <Grid item container spacing={2} xs={12} sm={8}>
          <Grid item xs={12} sm={6}>
            <CustomTextfield
              label="ชื่อบทความ"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextfield
              label="โฟกัสคีย์เวิร์ด (ไม่บังคับ)"
              name="focusKeywords"
              value={formData.focusKeywords}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextfield
              label="ลิงค์บทความ (ไม่บังคับ)"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextfield
              label="ชื่อบทความแบบย่อ (ไม่บังคับ)"
              name="shareTitle"
              value={formData.shareTitle}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextfield
              label="รายละเอียดบทความแบบย่อ (ไม่บังคับ)"
              name="shareDescription"
              value={formData.shareDescription}
              onChange={handleInputChange}
              minRows={4}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTextEditor
            value={formData.content}
            placeholder="รายละเอียดบทความ"
            onChange={handleEditorChange}
            minRow={10}
          />
        </Grid>
      </Grid>

      <Box
        display={"flex"}
        gap={2}
        justifyContent={"center"}
        alignSelf="flex-end"
      >
        <CustomButton text="ยกเลิก" style="outlined" />
        <CustomButton text="ยืนยัน" style="contained" />
      </Box>
    </Box>
  );
}
