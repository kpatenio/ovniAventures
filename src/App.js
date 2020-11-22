import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Box
} from '@material-ui/core';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import GamePageSolo from './components/singleplayer/GamePageSolo';
import GamePageMultiPlayer from './components/multiplayer/GamePageMultiplayer';
// import LobbyPageMultiplayer from './components/multiplayer/LobbyPageMultiplayer';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header/>
            <LandingPage/>
          </Route>
          <Route path="/solo">
            <GamePageSolo/>
          </Route>
          <Route path="/multijoueur">
            {/* <LobbyPageMultiplayer/> */}
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
