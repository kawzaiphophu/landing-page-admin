import { Theme } from '@mui/material/styles';

export const buttonStyles = (theme: Theme) => ({
    root: { fontWeight: '700' },
    sizeSmall: {
        fontSize: '14px',
        // padding: '6px 12px',
        borderRadius: '8px',
        maxHeight: '40px',
        minWidth: '68px',
    },
    sizeMedium: {
        fontSize: '16px',
        padding: '12px 20px 12px 20px',
        borderRadius: '12px',
        maxHeight: '48px',
        minWidth: '100px',
    },
    sizeLarge: {
        fontSize: '18px',
        padding: '12px 20px 12px 20px',
        borderRadius: '12px',
        maxHeight: '56px',
        minWidth: '120px',
    },
});


