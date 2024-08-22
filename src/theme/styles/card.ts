import { Theme } from '@mui/material/styles';

export const cardStyles = (theme: Theme) => ({
    root: {

        borderRadius: '12px',
        boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
        transition: 'all 0.3s ease-in-out',
    },

    small: {
        padding: '12px',
    },
    medium: {
        padding: '16px',
    },
    large: {
        padding: '24px',
    },
});
