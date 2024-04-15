'use client';
import { Roboto, Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: 'swap'
});

const theme = createTheme({
    typography: {
        fontFamily: poppins.style.fontFamily,
    },
});

export default theme;
