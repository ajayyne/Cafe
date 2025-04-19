import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";
import DrawerComp from "./Drawer";
import { theme } from "./ui/Theme.js";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function Nav() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="logo" width="80px" />

        {isMatch ? (
          <DrawerComp />
        ) : (
          <>
            <Tabs>
            <NavLink to="/about">
                <Tab label="Home" sx={{ color: theme.palette.secondary.main || "#FFFFFF" }} />
              </NavLink>
            <NavLink to="/">
                <Tab label="Our Team" sx={{ color: theme.palette.secondary.main || "#FFFFFF" }} />
              </NavLink>
              <NavLink to="/menu">
                <Tab label="Menu" sx={{ color: theme.palette.secondary.main || "#FFFFFF" }} />
              </NavLink>
              <NavLink to="/contact">
                <Tab label="Contact" sx={{ color: theme.palette.secondary.main || "#FFFFFF" }} />
              </NavLink>
            </Tabs>

            <Button sx={{ marginLeft: "auto" }} variant="contained">
              <AccountCircleIcon /> Log in
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
