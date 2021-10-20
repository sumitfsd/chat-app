import { useState } from 'react';

import Header from '../../components/Header';
import history from '../../utils/history';
import staticText from '../../constants/messages.json';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
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
              <Input
                placeholder={staticText.enter_user_name}
                value={userName}
                onChangeHandler={(value) => setUserName(value)}
              />
            </div>
            <div className="formGroup">
              <Input
                placeholder={staticText.enter_room_name}
                value={roomName}
                onChangeHandler={(value) => setRoomName(value)}
              />
            </div>
            <Button
              className="btn btnSubmit"
              onChangedHandler={joinRoomHandler}
              text={staticText.join_create}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
