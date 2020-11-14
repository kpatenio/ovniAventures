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
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import GamePageSolo from './components/GamePageSolo';
import GamePageMultiPlayer from './components/GamePageMultiplayer';
import LobbyPageMultiplayer from './components/LobbyPageMultiplayer';

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
            <LobbyPageMultiplayer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
