// src/theme/textFieldStyles.ts

import { Theme } from '@mui/material/styles';


const textFieldStyles = (theme: Theme) => ({
    root: {
        "& .MuiInputLabel-root": {
            fontSize: '18px',
            transform: 'translate(9px, -20px) scale(1)',
            background: '#FFF',
            padding: '0 8px',
            borderRadius: '3px',
        },
        "& .MuiInputBase-input::placeholder": {
            fontSize: '16px',
            fontWeight:'500',
            color: theme.palette.text.secondary,

        },
        "& .MuiOutlinedInput-root": {
            borderRadius: '8px',
            background: '#FFF',
            fontSize: '18px',
            fontWeight: '400'
        },

    },
});

export default textFieldStyles;
