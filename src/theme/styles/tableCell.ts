import { Theme } from '@mui/material/styles';

export const tableCellStyle = (theme: Theme) => ({
    root: {
        maxWidth: "20rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0 16px",
        alignContent: "center",
    }
})