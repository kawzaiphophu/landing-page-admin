"use client";
import Box from "@mui/material/Box";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import React, { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { extractPlainText } from "@/utils/formatData";
import QuillResizeImage from "quill-resize-image";
import "react-quill-v2.0/dist/quill.snow.css";

interface CustomQuillEditorProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  error?: boolean;
  maxLength?: number;
  minRow?: number;
}

Quill.register("modules/resizeImage", QuillResizeImage);

const Font = Quill.import("formats/font");
Font.whitelist = ["default", "Kanit", "Arial", "Roboto"];
Quill.register(Font, true);

const Editor: React.FC<CustomQuillEditorProps> = ({
  value,
  placeholder,
  onChange,
  error,
  maxLength,
  minRow,
}) => {
  const theme = useTheme();

  const [quillValue, setQuillValue] = useState("");
  const quillRef = useRef<ReactQuill | null>(null);

  const handleEditorChange = (content: string) => {
    const strippedContent = extractPlainText(content);
    if (maxLength && strippedContent.trim().length > maxLength) {
      if (quillRef.current) {
        const currentEditor = quillRef.current.getEditor();
        currentEditor.deleteText(maxLength, strippedContent.length);
      }
      return;
    }
    setQuillValue(content);
    onChange(content);
  };

  const toolbarOptions = [
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
    "formula",
    { header: [1, 2, 3, 4, 5, 6, false] },
    { font: [] },
    { color: [] },
    { background: [] },
    { align: [] },
    { list: "ordered" },
    { list: "bullet" },
    { list: "check" },
    { script: "sub" },
    { script: "super" },
    { indent: "-1" },
    { indent: "+1" },
    "clean",
  ];

  const modules = {
    toolbar: toolbarOptions,
    resizeImage: true,
  };

  return (
    <Box
      sx={{
        marginTop: "8px",
        marginBottom: "8px",
        width: "100%",
        "& .quill .ql-toolbar.ql-snow": {
          border: `solid 1px ${
            theme.palette.mode === "dark" ? "#626060" : "#DEDEDE"
          }`,
          borderRadius: "8px",
          bgcolor: "#FFF",
        },
        "& .ql-snow .ql-stroke": {
          stroke: theme.palette.mode === "dark" ? "#F7F7F7" : "#434242",
        },
        "& .ql-snow .ql-fill": {
          fill: theme.palette.mode === "dark" ? "#F7F7F7" : "#434242",
        },
        "& .quill .ql-container.ql-snow": {
          borderRadius: "5px !important",
          border: `solid 1px ${
            theme.palette.mode === "dark" ? "#626060" : "#DEDEDE"
          }`,
          borderTop: "1px solid #DEDEDE",
          background: "#FFFFFF",
          "&:focus-within": {
            borderColor: `${theme.palette.primary.main}`,
          },
          "& .ql-blank::before": {
            color: theme.palette.mode === "dark" ? "#585656" : "#DEDEDE",
            fontSize: "16px",
          },
          "& .ql-editor": {
            height: "100%",
            minHeight: minRow ? `${minRow * 25}px` : "120px",
          },
        },
        "& .quill.quill-error .ql-container.ql-snow": {
          border: "solid 1px red",
          borderRadius: "5px !important",
        },
        "& .ql-snow .ql-picker.ql-expanded .ql-picker-options": {
          zIndex: "2",
        },
      }}
      className={error ? "quill quill-error" : "quill-editor-container"}
    >
      <ReactQuill
        theme="snow"
        value={quillValue}
        onChange={handleEditorChange}
        modules={modules}
        defaultValue={value}
        placeholder={placeholder}
      />
    </Box>
  );
};

const CustomTextEditor = (props: CustomQuillEditorProps) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Editor {...props} />
    </ThemeProvider>
  );
};

export default CustomTextEditor;
