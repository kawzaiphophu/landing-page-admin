'use client';
import { createTheme } from '@mui/material/styles';
import textFieldStyles from './styles/textfield';
import { buttonStyles } from './styles/button';
import { cardStyles } from './styles/card';
import { stepLabelStyles } from './styles/stepper';
import { tableStyle } from './styles/table';
import { tableCellStyle } from './styles/tableCell';
import { switchStyles } from './styles/switch';


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,      // Extra small devices (phones)
            sm: 600,    // Small devices (tablets)
            md: 1000,    // Medium devices (desktops)
            lg: 1280,   // Large devices (desktops)
            xl: 1920,   // Extra large devices (large desktops)
        },
    },
    palette: {

        "primary": {
            "main": "#31BDE4",
            "light": "#62D3F2",
            "dark": "#0092C8",
            "contrastText": "#FFFFFF"
        },
        "secondary": {
            "main": "#4370A0",
            "light": "#6C9ABF",
            "dark": "#004D6C",
            "contrastText": "#FFFFFF"
        },

    },
    typography: {
        fontFamily: ['Kanit', 'Roboto', 'Arial', 'sans-serif'].join(','),
        allVariants: {
            color: '#666'
        },
        h1: {
            fontSize: '30px',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '36px',
            },
        },
        h2: {
            fontSize: '30px',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '2.25rem',
            },
        },
        h3: {
            fontSize: '28px',
            fontWeight: 700,
        },
        h4: {
            fontSize: '20px',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '24px',
            },
        },
        h5: {
            fontSize: '20px',
            fontWeight: 600,
        },
        h6: {
            fontSize: '18px',
            // fontWeight: 600,
        },
        subtitle1: {
            fontSize: '16px',

        },
        subtitle2: {
            fontSize: '14px',
            // fontWeight: 400,
        },
        body1: {
            fontSize: '18px',
            // fontWeight: 500,
        },
        body2: {
            fontSize: '16px',
            // fontWeight: 400,
        },
        caption: {
            fontSize: '12px',
            // fontWeight: 400,
        },
        overline: {
            fontSize: '10px',
            // fontWeight: 400,
        },
    },

    components: {
        MuiTextField: {
            styleOverrides: textFieldStyles(createTheme()),
        },
        MuiButton: {
            styleOverrides: buttonStyles(createTheme())
        },
        MuiCard: {
            styleOverrides: cardStyles(createTheme()),
        },
        MuiStepper: {
            styleOverrides: stepLabelStyles(createTheme()),
        },
        MuiTable: {
            styleOverrides: tableStyle(createTheme()),
        },
        MuiTableCell: {
            styleOverrides: tableCellStyle(createTheme()),
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: " 16px 0",
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                container: {
                    zIndex: 1400,
                },
            },
        },
        MuiSwitch: {
            styleOverrides: switchStyles(createTheme())
        }
    },
});

export default theme;
