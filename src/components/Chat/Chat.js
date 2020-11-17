import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import io from "socket.io-client";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const socket = io.connect();

export default function Chat() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [emoji, setEmoji] = useState();
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiPicker = useRef();

  const onNameChange = (e) => {
    setName(e.target.value);
  }
  
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div>
      <form>
        <h1>&lt; Cinque Chat /&gt;</h1>
        <div className="name-field">
          <input
            onChange={onNameChange}
            className="name-input"
            name="name"
            value={name}
            label="Name"
            ></input>
        </div>
        <div className="message-field">
          <input
            onChange={onMessageChange}
            className="message-input"
            name="message"
            value={message}
            label="Message"
          ></input>
        </div>
        <button className="stlt-btn stlt-std-btn">&gt;&gt; </button>
      </form>
    </div>
  );
}
