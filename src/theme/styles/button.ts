import { Theme } from '@mui/material/styles';

export const buttonStyles = (theme: Theme) => ({
    root: { fontWeight: '700' },
    sizeSmall: {
        fontSize: '14px',
        padding: '0 12px',
        borderRadius: '8px',
        maxHeight: '30px',
        minWidth: '30px',
    },
    sizeMedium: {
        fontSize: '16px',
        padding: '12px 30px',
        borderRadius: '12px',
        maxHeight: '48px',
        minWidth: '100px',
    },
    sizeLarge: {
        fontSize: '18px',
        padding: '12px 30px 12px 30px',
        borderRadius: '12px',
        maxHeight: '50px',
        minWidth: '140px',
    },
});


