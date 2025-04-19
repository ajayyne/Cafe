import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";
import contact from "../assets/contact.jpg";
import emailjs from'@emailjs/browser';
import rory from "../assets/rory.jpg";

function Contact() {

  const sendEmail = (e) =>{
    e.preventDefault();
  
  emailjs.sendForm('service_6zogr5i', 'template_6k3rwpp', e.target, 'PmSzXfI2nP65Ahx0K')
    .then((response) => {
      console.log('Success:', response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <ThemeProvider theme={theme}>
    <div className="contact">
      <div className="center contact-flex">
      <div className="contactImg">
          <img src={contact}></img>
        </div>
        <div className="contact-form" style={{ backgroundColor: theme.palette.custom.background}}>
          <Typography variant='h1'>Contact Us</Typography>
          <p>We would love to hear from you.</p>
          <div>
            <form onSubmit={sendEmail}>
              <div className="form-flex">
                <label for="name">Name</label>
                <input name="name" type="text" required></input>
              </div>
              <div className="form-flex">
                <label for="email">Email Address</label>
                <input name="email" type="email" required></input>
              </div>
              <div className="form-flex">
                <label for="message">Message</label>
                <input name="message" type="text" required></input>
              </div>
              <div>
                <input type="submit" value="SEND" class="contact-send"  style={{ backgroundColor: theme.palette.custom.button}}/>
              </div>
            </form>      
          </div>
        </div>
      </div>
      
      <div className="iframe">
        <iframe width="85%" height="200" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=23%20Rose%20Street%20Edinburgh+(Chapters)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">gps drone</a>
        </iframe>
      </div>
      <div className="home-contact center cnt-page">
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
      <Footer></Footer>
    </div>
    </ThemeProvider>
  );
}

export default Contact;