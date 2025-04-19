import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>

      <IconButton sx={{ color: "#ffffff" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
        
          <ListItemButton component={NavLink} to="/about" onClick={() => setOpenDrawer(false)}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton component={NavLink} to="/" onClick={() => setOpenDrawer(false)}>
            <ListItemText>Our Team</ListItemText>
          </ListItemButton>
          <ListItemButton component={NavLink} to="/menu" onClick={() => setOpenDrawer(false)}>
            <ListItemText>Menu</ListItemText>
          </ListItemButton>
          <ListItemButton component={NavLink} to="/contact" onClick={() => setOpenDrawer(false)}>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>Login</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
