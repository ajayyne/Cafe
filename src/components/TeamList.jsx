//import React from the React module.
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import Typography from '@mui/material/Typography';

//create component Heading
function TeamList(props) {
  return (
    <div class='team'>
      <ThemeProvider theme={theme}>
    <div className="team-card"  style={{ backgroundColor: theme.palette.custom.background}}>
      <div className="top">
        <img className="team-img" src={props.image} />
        <Typography variant='h2' className="team-title">{props.name}</Typography>
      </div>
      <div className="team-card-bottom">
        <p className="team-info">{props.role}</p>
      </div>
    </div>
    </ThemeProvider>
    </div>
  );
}

export default TeamList;