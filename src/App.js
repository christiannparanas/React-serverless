import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import Home from "./pages/Home";

// components
import Navbar from "./components/Navbar";

// styled
import Global from './styled/Global';
import { Container } from './styled/Container';
import { Main } from './styled/Main';

function App() {
  return (
    <Router> 
      <Global />
      <Main>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/highscores" component={HighScores} />
            <Route path="/gameover" component={GameOver} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
