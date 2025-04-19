import React from "react";
import team from "./Team";
import TeamList from "./TeamList";
import teambanner from "../assets/teambanner.jpg";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";


function createTeam(team) {
  return (
    <TeamList
      name={team.name}
      image={team.image}
      role={team.role}
    />
  );
}

function Home() {
  return (
    <div>
      <img src={teambanner} className='teambanner'></img>
      <div className="team-cont">
      <span className="transparent">.</span>
      <ThemeProvider theme={theme}><Typography variant='h1' class='main-heading'>Our Team</Typography></ThemeProvider>
        <div class='team'>
        {team.map(createTeam)}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home;
