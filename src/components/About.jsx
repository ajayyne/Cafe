import React from "react";
import products from "./Products";
import { useState } from "react";
import header from "../assets/homebanner.png";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";
import rory from "../assets/rory.jpg";

function About() {
    let [index, setIndex] = useState(0);

    function handleClick() {
      if (index > products.length) {
        [index, setIndex] = useState(0);
      }
      // ensures looping of products when it reaches the last one
      setIndex((index + 1) % products.length);
    }
    let data = products[index];

    return(
      <div>
        <img src={header} className="home-banner"></img>
        <div class="center">
          <div className="about">
          <span className="transparent">.</span>
            <div className="home-heading">
            <ThemeProvider theme={theme}><Typography variant='h1'>Chapters</Typography></ThemeProvider>
            </div>
            <p>Welcome! We are a small cozy cafe located in Edinburgh serving delicious sweet treats and coffee.
              We have a free library in the cafe, so feel free to sip your cup of joe alongside a great book from our selection.
              View our menu to find muffins, cupcakes and even vegan treats. 
            </p>
            <a href='menu'><button  style={{ backgroundColor: theme.palette.custom.button}}>Our Menu</button></a>
          </div>
        </div>


      <div className="home-contact center">
        <div>
          <img src={rory}></img>
        </div>
        <ThemeProvider theme={theme}>
        <div className="home-contact-info" style={{ backgroundColor: theme.palette.custom.background}}>
          <Typography variant="h2">Contact Us</Typography>
          <p>#: 01721 856 385</p>
          <p>@: hello@chapters.co.uk</p>
          <p>123 George Street, Edinburgh</p>
        </div>
        </ThemeProvider>
      </div>

      <div className="home-product">
        <div class='bakery-div'>
          <h6 className="bakery">Our in-store bakery stocks delicious sweet treats...</h6>
          <ThemeProvider theme={theme}><Typography variant='h2' className="home-product-name">{data.name}</Typography></ThemeProvider>
          <div class='home-menu'>
            <img className="home-product-img" src={data.image} alt="Menu item" />
            <div class="home-btn">
          <button onClick={handleClick} className="home-btn"  style={{ backgroundColor: theme.palette.custom.button}}>
            <h2>View More</h2>
          </button>
        </div>
        </div>
        </div>
       
      </div>
      <Footer />
    </div>
    );
}

export default About;