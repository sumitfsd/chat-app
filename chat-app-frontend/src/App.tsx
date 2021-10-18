import React from 'react';
import { Switch, Route } from "react-router-dom";
import io from "socket.io-client";
import Home from './features/Home'
import ChatBox from './features/ChatBox'
import './App.css';

// @ts-ignore
const socket = io.connect("/");

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact render={props => <Home socket={socket} />} />
        <Route path='/chat/:roomname/:username' render={(props) => <ChatBox socket={socket} userName={props.match.params.username} roomName={props.match.params.roomname} />} />
      </Switch>
    </div>
  );
}

export default App;
