import React from 'react';
import Chat from './components/Chat'

interface propsData {
  socket: any;
  userName: string;
  roomName: string;
}

const ChatBox = (props: propsData) => {
  const { socket, userName, roomName } = props
  return (
    <div className='right'>
      <Chat
        username={userName}
        roomname={roomName}
        socket={socket}
      />
    </div>
  );
}

export default ChatBox;
