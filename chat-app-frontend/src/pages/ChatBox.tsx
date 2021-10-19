import Chat from '../components/ChatBox';

interface propsData {
  socket: any;
  userName: string;
  roomName: string;
}

const ChatBox = (props: propsData) => {
  const { socket, userName, roomName } = props;
  return (
    <div className="chatBox">
      <div className="right">
        <Chat username={userName} roomname={roomName} socket={socket} />
      </div>
    </div>
  );
};

export default ChatBox;
