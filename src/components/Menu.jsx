import React from "react";
import CupcakeList from "./CupcakeList";
import MuffinList from "./MuffinList";
import Favourites from "./Favourites";
import VeganList from "./VeganList";
import pastry from "../assets/pastry.jpg";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";



function Menu() {
  return (
    <div>
    <div class="center">
      <img src={pastry} className="menu-banner"></img>
      <span className="transparent">.</span>
      <ThemeProvider theme={theme}><Typography variant='h1' class='main-heading'>Our Menu</Typography></ThemeProvider>

      <section class="center">

        <Favourites />
      </section>

      <section class="center">
        <ThemeProvider theme={theme}><Typography variant='h2' className="menu-section">Cupcakes</Typography></ThemeProvider>
        <CupcakeList className="grid"/>
      </section>

      <section class="center">
      <ThemeProvider theme={theme}><Typography variant='h2' className="menu-section">Muffins</Typography></ThemeProvider>
        <MuffinList className="grid"/>
      </section>

      <section class="center">
      <ThemeProvider theme={theme}><Typography variant='h2' className="menu-section">Vegan Treats</Typography></ThemeProvider>
        <VeganList className="grid"/>
      </section>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Menu;