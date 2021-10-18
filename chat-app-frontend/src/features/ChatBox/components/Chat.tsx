import "../assets/chat.scss";
import { to_Decrypt, to_Encrypt } from "../../../aes.js";
import { updateMessage } from "../ChatBoxActions";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface propsData {
  username: string;
  roomname: string;
  socket: any
}

const Chat = (props: propsData) => {
  const { username, roomname, socket } = props
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<{ userId: '', username: '', text: '' }[] | []>([]);
  const dispatch = useDispatch();

  const dispatchProcess = (encrypt: Boolean, msg: string, cipher: string) => {
    dispatch(updateMessage(encrypt, msg, cipher));
  };

  useEffect(() => {
    socket.on("message", (data: any) => {
      //decypt
      const ans = to_Decrypt(data.text, data.username);
      dispatchProcess(false, ans, data.text);
      const temp: { userId: '', username: '', text: '' }[] = messages;
      temp.push({
        userId: data.userId,
        username: data.username,
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== "") {
      //encrypt here
      const ans = to_Encrypt(text);
      socket.emit("chat", ans);
      setText("");
    }
  };
  const messagesEndRef: any = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat">
      <div className="user-name">
        <h2>
          {username} <span style={{ fontSize: "0.7rem" }}>in {roomname}</span>
        </h2>
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
        <input
          placeholder="enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendData();
            }
          }}
        ></input>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  );
}
export default Chat;
