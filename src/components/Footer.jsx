import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import theme from '../components/ui/Theme';
import React from "react";

export default function Footer() {
    return (
      <>
      <ThemeProvider theme={theme}>
        <div>
            <div style={{ backgroundColor: theme.palette.footer.background}} className="center footer">
                <div className="center footer-content">
                    <Typography variant='h6'>OUR PHILOSOPHY</Typography>
                    <a href='#'><p>Our Story</p></a>
                    <a href='#'><p>Sustainability</p></a>
                    <a href='#'><p>Modern Slavery Statement</p></a>
                    <a href='#'><p>Chapters Foundation</p></a>
                </div>
                <div className="center footer-content">
                    <Typography variant='h6'>DIETARY INFO</Typography>
                    <a href='#'><p>Nutrition and Allergens</p></a>
                    <a href='#'><p>Store Dietary Information</p></a>
                    <a href='#'><p>Branded Products Information</p></a>
                </div>
                <div className="center footer-content">
                    <Typography variant='h6'>GET IN TOUCH</Typography>
                    <a href='contact'><p>Contact Us</p></a>
                    <a href='#'><p>FAQ's</p></a>
                    <a href='#'><p>Careers</p></a>
                </div>
            </div>
        </div>
        </ThemeProvider>
     </>
    );
  }