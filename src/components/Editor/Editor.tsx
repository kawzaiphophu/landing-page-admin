"use client";
import Box from "@mui/material/Box";
import "react-quill-v2.0/dist/quill.snow.css";
import { extractPlainText } from "@/utils/formatData";
import { useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Ensure you import the Quill CSS

interface CustomQuillEditorProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  error?: boolean;
  maxLength?: number; // Optional prop for maxLength
}

const CustomTextEditor: React.FC<CustomQuillEditorProps> = ({
  value,
  placeholder,
  onChange,
  error,
  maxLength,
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
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  return (
    <Box
      sx={{
        width: "100%",
        "& .quill .ql-toolbar.ql-snow": {
          border: `solid 1px ${
            theme.palette.mode === "dark" ? "#626060" : "#DEDEDE"
          }`,
          borderRadius: "8px",
        },
        "& .ql-snow .ql-stroke": {
          stroke: theme.palette.mode === "dark" ? "#F7F7F7" : "#434242",
        },
        "& .ql-snow .ql-fill": {
          fill: theme.palette.mode === "dark" ? "#F7F7F7" : "#434242",
        },
        "& .quill .ql-container.ql-snow": {
          minHeight: "6.852rem",
          borderRadius: "5px !important",
          border: `solid 1px ${
            theme.palette.mode === "dark" ? "#626060" : "#DEDEDE"
          }`,
          background: theme.palette.mode === "dark" ? "#242424" : "#FFFFFF",
          marginTop: "5px",
          "& .ql-blank::before": {
            color: theme.palette.mode === "dark" ? "#585656" : "#DEDEDE",
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
        modules={{ toolbar: toolbarOptions }}
        defaultValue={value}
      />
    </Box>
  );
};

export default CustomTextEditor;
