import { Theme } from "@mui/material";

export const tableStyle = (theme: Theme) => ({
    root: {
        width: '100%',
        '& thead th': {
            whiteSpace: 'nowrap',
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '21.15px',
            color: theme.palette.primary.main
        },
        '& tbody': {
            '& tr:hover': {
                background: '#f7f4f4',
            },
        },

        '& td, & th': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },

    }
})






