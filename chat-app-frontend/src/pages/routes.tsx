import { Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Home from './Home';
import ChatBox from './ChatBox';
import { HOME, CHAT } from '../constants/urls';

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
    </Switch>
  );
};

export default Routes;
