import { useState } from 'react';

import Header from '../Header';
import history from '../../utils/history';
import staticText from '../../constants/messages.json';

import './assets/home.scss';

interface propsData {
  socket: any;
}

const Home = (props: propsData) => {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const joinRoomHandler = () => {
    if (userName !== '' && roomName !== '') {
      props.socket.emit(staticText.join_room, {
        username: userName,
        roomname: roomName,
      });
      history.push(`/chat/${roomName}/${userName}`);
    } else {
      alert(staticText.user_and_room_require);
    }
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="mainLft" />
        <div className="mainRight">
          <div className="getway-box">
            <h1>{staticText.please_enter_user_name}</h1>
            <div className="formGroup">
              <input
                placeholder={staticText.enter_user_name}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <input
                placeholder={staticText.enter_room_name}
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <button className="btn btnSubmit" onClick={joinRoomHandler}>
              {staticText.join_create}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
