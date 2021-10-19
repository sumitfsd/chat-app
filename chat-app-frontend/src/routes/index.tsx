import { Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Home from '../pages/Home';
import Weather from '../pages/Weather';
import ChatBox from '../pages/ChatBox';
import { HOME, CHAT, WEATHER } from '../constants/urls';

// @ts-ignore
const socket = io.connect('/');

const Routes = () => {
  return (
    <Switch>
      <Route path={HOME} exact={true} render={() => <Home socket={socket} />} />
      <Route
        path={CHAT}
        render={(props) => (
          <ChatBox
            socket={socket}
            userName={props.match.params.username}
            roomName={props.match.params.roomname}
          />
        )}
      />
      <Route path={WEATHER} exact={true} component={Weather} />
    </Switch>
  );
};

export default Routes;
