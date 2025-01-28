"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IProject } from "@/types/project.type";
import { formatDate } from "@/utils/formatData";
import CustomFileUpload from "@/components/CustomImageUpload/CustomFileUpload";
import CustomSelect from "@/components/Select/CustomSelect";
import CustomTextfield from "@/components/Textfield/CustomTextfield";
import {
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import AlertSwal from "@/components/Alert/AlertSwal";
import AppApi from "@/api/app.api";
import CustomButton from "@/components/Button/CustomButton";
import ProjectApi from "@/api/project.api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
  minWidth: "60vw",
};

type Props = {
  projectDetail: IProject;
  getProjectDetail: any;
  handleClose: () => void;
};

export default function BasicModal({
  projectDetail,
  getProjectDetail,
  handleClose,
}: Props) {
  const [form, setForm] = useState<IProject>();

  useEffect(() => {
    if (!form?.documentsMa?.length) {
      const totalMa =
        Number(projectDetail.projectMa) /
        (projectDetail.projectMa / Number(projectDetail.projectMaPerYear));

      const requiredDocs = Math.max(
        totalMa - (projectDetail?.documentsMa?.length || 0)
      );
      
      setForm((prev: any) => ({
        ...prev,
        documentsMa: [
          ...(projectDetail?.documentsMa || []),
          ...Array.from({
            length: requiredDocs,
          }).map((_, index) => ({
            docPeriod: (projectDetail?.documentsMa?.length || 0) + index + 1,
            docNo: "",
            docType: "เอกสาร MA",
            filePath: "",
          })),
        ],
      }));
    }
  }, [projectDetail]);

  const handleChangeDocuments = (key: string, value: string, index: number) => {
    setForm((prev: any) => {
      const updatedArr = [...prev.documentsMa];
      updatedArr[index] = {
        ...updatedArr[index],
        [key]: value,
      };
      return { ...prev, documentsMa: updatedArr };
    });
  };

  const handleChangeFileProjectUpload = async (files: any, idx: number) => {
    try {
      if (!files) {
        return setForm((prev: any) => {
          const updatedArr = [...prev.documentsMa];
          updatedArr[idx] = {
            ...updatedArr[idx],
            filePath: "",
          };

          return { ...prev, documentsMa: updatedArr };
        });
      }
      const uploadedFiles = await AppApi.uploadFile([files]);

      let combinedFiles = [...uploadedFiles];
      setForm((prev: any) => {
        const updatedArr = [...prev.documentsMa];
        updatedArr[idx] = {
          ...updatedArr[idx],
          filePath: combinedFiles[0].filePath,
        };
        return { ...prev, documentsMa: updatedArr };
      });
    } catch (error) {
      AlertSwal({
        icon: "error",
        title: "อัปโหลดรูปไม่สำเร็จ",
        text: "เฉพาะไฟล์ .XLSX, .XLS, ,PDF เท่านั้น",
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const data = await ProjectApi.updateMaDoc(
        Number(projectDetail.projectId),
        form?.documentsMa as any
      );
      if (data === 200) {
        AlertSwal({ title: "อัพเดตเอกสาร MA สำเร็จ", icon: "success" });
        getProjectDetail(projectDetail.projectId);
        handleClose();
      }
    } catch (error) {
      AlertSwal({ title: "อัพเดตเอกสาร MA ไม่สำเร็จ", icon: "error" });
    }
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            รายละเอียด Ma : {projectDetail.projectName}
          </Typography>
          <Box mt={2} border={"1px solid #DEDEDE"} borderRadius={4} p={2}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  MA ครั้งที่ :
                  <Typography variant="body1" color="initial">
                    {projectDetail.currentMa || "-"}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  ระยะเวลา MA :
                  <Typography variant="body1" color="initial">
                    {projectDetail.projectMa} เดือน (
                    {projectDetail?.projectMaPerYear || "-"} ครั้ง/ปี)
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  วันที่ครบกำหนด MA ครั้งที่ {projectDetail.currentMa || "-"}:
                  <Typography variant="body1" color="initial">
                    {formatDate(projectDetail?.dueMaDate as any) || "-"}
                  </Typography>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  วันที่ :
                  <Typography variant="body1" color="initial">
                    {formatDate(
                      projectDetail?.projectStartWarantyDate as any
                    ) || "-"}{" "}
                    - {formatDate(projectDetail?.expiredDate as any) || "-"}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid item xs={12} mt={4}>
            {projectDetail?.projectStartWarantyDate && (
              <Box>
                <Typography
                  variant="body1"
                  color="initial"
                  fontWeight={500}
                  pb={1}
                >
                  เอกสาร MA ทั้งหมด
                </Typography>
                <TableContainer
                  sx={{
                    border: "1px solid #DEDEDE",
                    borderRadius: 2,
                    p: 2,
                    maxHeight: "400px",
                  }}
                  component={Paper}
                >
                  <Table sx={{ border: "1px solid #DEDEDE" }}>
                    <TableHead>
                      <TableRow sx={{ height: "40px" }}>
                        <TableCell align="center">ครั้งที่</TableCell>
                        <TableCell align="center">เอกสาร</TableCell>
                        <TableCell>เลขที่เอกสาร</TableCell>
                        <TableCell>ประเภทเอกสาร</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {form?.documentsMa?.map((doc, index) => (
                        <TableRow sx={{ height: "20px" }}>
                          <TableCell align="center" width={"1%"}>
                            {index + 1}
                          </TableCell>
                          <TableCell align="center" width={"30%"}>
                            <CustomFileUpload
                              value={form?.documentsMa[index]?.filePath}
                              onChange={(file) =>
                                handleChangeFileProjectUpload(file, index)
                              }
                              disabled={
                                Number(projectDetail.currentMa) !== index + 1
                              }
                            />
                          </TableCell>
                          <TableCell width={"30%"}>
                            <CustomTextfield
                              sx={{
                                ".MuiOutlinedInput-root": {
                                  height: "25px",
                                  fontSize: 16,
                                },
                                ".MuiInputBase-input::placeholder": {
                                  fontSize: 16,
                                },
                              }}
                              placeholder="กรอกเลขที่เอกสาร"
                              value={doc?.docNo}
                              onChange={(v) =>
                                handleChangeDocuments("docNo", v, index)
                              }
                              disabled={
                                Number(projectDetail.currentMa) !== index + 1
                              }
                            />
                          </TableCell>
                          <TableCell width={"10%"}>
                            <CustomTextfield
                              sx={{
                                ".MuiOutlinedInput-root": {
                                  height: "25px",
                                  fontSize: 16,
                                },
                                ".MuiInputBase-input::placeholder": {
                                  fontSize: 16,
                                },
                              }}
                              placeholder="เลือกชนิดเอกสาร"
                              value={doc?.docType}
                              disabled
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Grid>
          <Box display={"flex"} justifyContent={"center"} gap={2} mt={4}>
            <CustomButton
              text="ยกเลิก"
              style="outlined"
              onClick={handleClose}
            />
            <CustomButton text="ยืนยัน" onClick={handleSubmit} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
