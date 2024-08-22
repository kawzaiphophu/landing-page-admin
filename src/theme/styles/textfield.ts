// src/theme/textFieldStyles.ts

import { Theme } from '@mui/material/styles';

const textFieldStyles = (theme: Theme) => ({
    root: {
        // "& .MuiInputLabel-root": {
        //     fontWeight: 600,
        //     fontSize: '14px',
        //     lineHeight: '30px',
        //     color: '#2D3648 !important',
        //     transform: "translate(0, -5px) scale(1) !important",
        //     position: "relative !important",
        //     "& .MuiFormLabel-asterisk": {
        //         color: '#CD2525 !important',
        //     },
        // },
        // "& .MuiInputBase-input::placeholder": {
        //     fontWeight: 400,
        //     fontSize: '16px',
        //     lineHeight: '18.75px',
        //     color: theme.palette.text.secondary,

        // },
        // '& .MuiInputBase-multiline': {
        //     padding: '10px 0'
        // },
        // "& .MuiInputBase-input": {
        //     padding: '0 10px',
        //     backgroundColor: 'transparent',
        // },
        "& .MuiOutlinedInput-root": {
            //     color: theme.palette.text.primary,
            //     border: `solid 2px #CBD2E0`,
            //     minHeight: "44px",
            borderRadius: '8px',
            maxHeight: '55px'
            //     fontSize: '16px',
            //     fontWeight: 400,
            //     "& fieldset": {
            //         borderColor: "transparent",
            //     },
            //     "&:hover": {
            //         backgroundColor: theme.palette.action.hover,
            //         color: theme.palette.text.primary,
            //     },
            //     "&.Mui-focused": {
            //         border: `solid 2px #153238`,
            //         "& fieldset": {
            //             borderColor: "transparent",
            //         },
            //     },
        },
        // "& .MuiOutlinedInput-root.Mui-error": {
        //     border: "solid 1px #E20E0E !important",
        // },
        // "& .MuiOutlinedInput-root.Mui-disabled": {
        //     color: '#797979',
        //     border: "1px solid #797979",
        //     backgroundColor: '#F3F3F3 !important',
        //     "&:hover": {
        //         border: "1px solid #797979 !important",
        //         boxShadow: "none",
        //     },
        // },
        // "& .MuiOutlinedInput-notchedOutline": {
        //     border: "none",
        // },
        // "& .MuiOutlinedInput-input": {
        //     backgroundColor: 'transparent',
        //     paddingRight: '0',
        //     "&:-webkit-autofill": {
        //         WebkitBoxShadow: "0 0 0 100px #ffffff inset",
        //         WebkitTextFillColor: "grey",
        //     },
        // },
        // '& input[type=password]': {
        //     fontSize: '20px',
        //     letterSpacing: '0px',
        //     paddingRight: '40px',
        // },
        // '& input[type=search]': {
        //     minWidth: '200px',
        //     '&.MuiOutlinedInput-input': {
        //         padding: '0',
        //     },
        //     '&::-webkit-search-cancel-button': {
        //         WebkitAppearance: 'none',
        //     },
        // },
        // "& input[type=number]": {
        //     MozAppearance: "textfield",
        // },
        // "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
        //     WebkitAppearance: "none",
        //     margin: 0,
        // },
    },
});

export default textFieldStyles;
