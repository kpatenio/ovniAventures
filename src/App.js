import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
      <Header/>
        <Switch>
          <Route exact path="/">
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
