// src/theme/textFieldStyles.ts

import { Theme } from '@mui/material/styles';


const textFieldStyles = (theme: Theme) => ({
    root: {
        "& .MuiInputLabel-root": {
            fontSize: '18px',
            transform: 'translate(9px, -14px) scale(1)',
            background: '#FFF',
            padding: '0 4px',
            borderRadius: '8px'
        },
        "& .MuiInputBase-input::placeholder": {
            fontSize: '16px',
            color: theme.palette.text.secondary,

        },
        "& .MuiOutlinedInput-root": {
            borderRadius: '8px',
            background: '#FFF',
            fontSize: '18px',
            fontWeight: '250'
        },

    },
});

export default textFieldStyles;
