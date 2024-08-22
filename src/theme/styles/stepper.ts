import { Theme } from '@mui/material/styles';

export const stepLabelStyles = (theme: Theme) => ({
    root: {
        "& .MuiStepIcon-root": {
            color: "#EBF5F4 !important",
            backgroundColor: "#FFFFFF !important",
            borderRadius: "50%",
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiStepIcon-text": {
                fill: "#000 !important",
            },
        },
        "& .Mui-completed ": {
            color: "#153238 !important",
            "& .MuiStepIcon-text": {
                fill: "#FFF !important",
            },
        },
        "& .Mui-active ": {
            color: "#75B9C8 !important",
            "& .MuiStepIcon-text": {
                fill: "#FFF !important",
            },
        },
    }
});