import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import io from "socket.io-client";
import Home from './features/Home'
import ChatBox from './features/ChatBox'
import './App.css';

// @ts-ignore
const socket = io.connect("/");

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact>
              <Home socket={socket} />
            </Route>
            <Route path='/chat/:roomname/:username' component={ChatBox} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
