import { useState, useEffect, useRef } from 'react';

import { to_Decrypt, to_Encrypt } from '../../aes.js';
import staticText from '../../constants/messages.json';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import './assets/chat.scss';

interface propsData {
  username: string;
  roomname: string;
  socket: any;
}

const Chat = (props: propsData) => {
  const { username, roomname, socket } = props;
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<
    { userId: ''; username: ''; text: '' }[] | []
  >([]);

  useEffect(() => {
    socket.on(staticText.message, (data: any) => {
      // decypt
      const decrypt = to_Decrypt(data.text, data.username);
      const userMessages: { userId: ''; username: ''; text: '' }[] = messages;
      userMessages.push({
        userId: data.userId,
        username: data.username,
        text: decrypt,
      });
      setMessages([...userMessages]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== '') {
      // encrypt here
      const encrypt = to_Encrypt(text);
      socket.emit(staticText.chat, encrypt);
      setText('');
    }
  };
  const messagesEndRef: any = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat">
      <div className="user-name">
        <h2>{roomname}</h2>
      </div>
      <div className="chat-message">
        {messages.map((i: any) => {
          if (i.username === username) {
            return (
              <div className="message mess-right">
                <p>{i.text} </p>
                <span>{i.username}</span>
              </div>
            );
          } else {
            return (
              <div className="message">
                <p>{i.text}</p>
                <span>{i.username}</span>
              </div>
            );
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="send">
        <Input
          placeholder={staticText.enter_your_message}
          value={text}
          onChangeHandler={(value) => setText(value)}
          onKeyPressHandler={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === staticText.enter) {
              sendData();
            }
          }}
        />
        <Button onChangedHandler={sendData} text={staticText.send} />
      </div>
    </div>
  );
};
export default Chat;
