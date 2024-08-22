import { Theme } from '@mui/material/styles';

export const switchStyles = (theme: Theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "30ms", // Duration for the transition effect
            "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                    backgroundColor: "#365486", // Background color when checked
                    opacity: 1,
                    border: 0,
                },
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5, // Opacity when disabled

            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#33cf4d",
                border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
                color: theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
            },

        },
        "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
                duration: 500,
            }),
        },
    },
});
