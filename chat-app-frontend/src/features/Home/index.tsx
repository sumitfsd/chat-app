import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./assets/home.scss";
import Header from '../Header'
import history from '../../utils/history'

interface propsData {
    socket: any
}

const Home = (props: propsData) => {
    const [userName, setuserName] = useState("");
    const [roomName, setroomName] = useState("");

    const joinRoomHandler = () => {
        history.push(`/chat/${roomName}/${userName}`)
        if (userName !== "" && roomName !== "") {
            props.socket.emit("joinRoom", { userName, roomName });
        } else {
            alert("username and roomname are require");
            window.location.reload();
        }
    };

    return (
        <>
            <Header />

            <div className="main">
                <div className="mainLft"> </div>
                <div className="mainRight">
                    <div className="getway-box">
                        <h1>Please enter Username or Room Name</h1>
                        <div className="formGroup">
                            <input
                                placeholder="Input your user name"
                                value={userName}
                                onChange={(e) => setuserName(e.target.value)}
                            ></input>
                        </div>
                        <div className="formGroup">
                            <input placeholder="Input the room name" value={roomName} onChange={(e) => setroomName(e.target.value)}></input>
                        </div>
                        {/* <Link to={`/chat/${roomName}/${userName}`}> */}
                        <button className="btn btnSubmit" onClick={joinRoomHandler}>Join</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
