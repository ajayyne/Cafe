import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Nav from "./Nav";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import Menu from "./Menu"; 


export default function App(props) {
  return (
    // <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Nav />
        </ThemeProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />}/>
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}
