import React from "react";
import muffins from "./Muffins";
import List from "./List";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import Typography from '@mui/material/Typography';


function createItems(muffins) {
  return (
    <List
      title={muffins.name}
      image={muffins.image}
      price={muffins.price}
    />
  );
}

function muffinList() {
  return (
    <div className="grid">
      <ThemeProvider theme={theme}>
      {muffins.map((muffin) => (
        <div className="card" key={muffin.name}>
          <div className="top">
            <img className="productImg" src={muffin.image} alt="muffin" />
            <Typography variant='h2' className="name">{muffin.name}</Typography>
            <p>{muffin.price}</p>
          </div>
        </div>
      ))}
      </ThemeProvider>
    </div>
  );
}

export default muffinList;
