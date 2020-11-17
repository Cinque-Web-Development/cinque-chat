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
  const [showEmoji, setEmojiShow] = useState(false);
  const emojiPicker = useRef();

  const onNameChange = (e) => {
    setName(e.target.value);
  }
  
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const onMessageSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("message", {name, message});
      console.log("message and name -->", message, name);
      setMessage("");
      setEmojiShow(false);
    }
  }

  const addEmoji = (e) => {
    let emoji = e.native;
    setMessage(message + emoji);
  };

  const showEmojis = (e) => {
    setEmojiShow(!showEmoji);
  };

  return (
    <div>
      <form onSubmit={onMessageSubmit}>
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
        <button onClick={showEmojis}>Emoji</button>
        {showEmoji ? (
            <span ref={emojiPicker}>
              <Picker onSelect={addEmoji} value={emoji} />
            </span>
          ) : ("")}
    </div>
  );
}
