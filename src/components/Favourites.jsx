import React from "react";
import smoothie from "../assets/smoothie.jpg";
import matcha from "../assets/matcha.png";
import croissant from "../assets/croissant.jpg";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import Typography from '@mui/material/Typography';




class Favourites extends React.Component {
  constructor(props) {
    super(props);
    //array of items
    this.items = [
      {
        title: "April Favourites",
        image: croissant,
        description: "Nutella & white chocolate Croissant",
      },
      {
        title: "April Favourites",
        image: matcha,
        description: "Our new Matcha Iced latte.",
      },
      {
        title: "April Favourites",
        image: smoothie,
        description: "Super fruit smoothie topped with berries",
      },
    ];
    // Initial state with the first item
    this.state = {
      currentIndex: 0, // Start with the first item
    };
    // Bind
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // Update and loop back to previous
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.items.length,
    }));
  }

  render() {
    // Get current item (index)
    const currentItem = this.items[this.state.currentIndex];

    return (
      <div>
        <dl className="dictionary">
          <div className="term" class="center favorite">
            <ThemeProvider theme={theme}>
              <dt style={{ backgroundColor: theme.palette.custom.background}} className='fave-title'>


              <span class="spring-fave">{currentItem.title}</span>
              <p>All of your favourites in one place</p>
            
            
            </dt>
            </ThemeProvider>
            <img src={currentItem.image} alt="Menu item" className="favourite" />
            <dd className="fave-desc">{currentItem.description}</dd>
            <button onClick={this.updateState} class="fave-button"  style={{ backgroundColor: theme.palette.custom.button}}>View More Favourites</button>
          </div>
        </dl>
      </div>
    );
  }
}

export default Favourites;