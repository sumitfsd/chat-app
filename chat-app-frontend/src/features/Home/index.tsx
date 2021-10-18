import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./assets/home.scss";

interface propsData {
    socket: any
}

const Home = (props: propsData) => {
    const [userName, setuserName] = useState("");
    const [roomName, setroomName] = useState("");

    const joinRoomHandler = () => {
        if (userName !== "" && roomName !== "") {
            props.socket.emit("joinRoom", { userName, roomName });
        } else {
            alert("username and roomname are require");
            window.location.reload();
        }
    };

    return (
        <div className="homepage">
            <h1>Please enter Username or Room Name</h1>
            <input
                placeholder="Input your user name"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
            ></input>
            <input
                placeholder="Input the room name"
                value={roomName}
                onChange={(e) => setroomName(e.target.value)}
            ></input>
            <Link to={`/chat/${roomName}/${userName}`}>
                <button onClick={joinRoomHandler}>Join</button>
            </Link>
        </div>
    );
}

export default Home;
