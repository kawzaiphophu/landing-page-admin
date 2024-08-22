import { Theme } from "@mui/material";

export const tableStyle = (theme: Theme) => ({
    root: {
        width: '100%',
        '& thead': {
            whiteSpace: 'nowrap',
            background: '#75B9C8',
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '21.15px',
            color: '#666666',
            "& .MuiTableCell-root": {
                backgroundColor: '#75B9C8',
            },
            '& .MuiTableCell-head .MuiBox-root': {
                fontSize: '12px',
                backgroundColor: '#9E88EC',
                color: '#FFFFFF',
                borderRadius: '10px',
                maxWidth: '64px',
                height: '20px',
                marginBottom: '4px',
                margin: 'auto',
                textAlign: "center"
            },
        },
        '& tbody': {
            '& tr:nth-of-type(odd)': {
                background: '#FFFFFF',
            },
            '& tr:nth-of-type(even)': {
                background: '#EBF5F4',
            },
        },

        '& td, & th': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
    }
})






