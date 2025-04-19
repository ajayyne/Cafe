import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BE9B7B",
    },
    secondary: {
      main: "#3d261ebc",
    },
    custom: {
      background: "rgb(240, 223, 202)",
      button: "rgb(222, 204, 181)",
    },
    footer: {
      background: "rgba(62, 43, 30, 0.792)",
    }
  },
  typography: {
    h1: {
      fontSize: "35px",
      fontFamily: "Bodoni",
      fontStyle: "italic",
      fontWeight: 600,
      color: "#6F4436",
      marginBottom: "2rem", 
    },
    h2: {
      fontFamily: "Bodoni",
      fontSize: "25px",
      color: "#6F4436",
    },
    h6: {
      fontFamily: "sans-serif",
      fontSize: "15px",
      color: "#fce5de",
      fontWeight: "bold",
    }
  },
});

export default theme; 
