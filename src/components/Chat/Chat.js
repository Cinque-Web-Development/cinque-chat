import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import io from "socket.io-client";
import "emoji-mart/css/emoji-mart.css";


import RenderChat from "../RenderChat/RenderChat";

const socket = io.connect();

export default function Chat() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  
  const [showEmoji, setEmojiShow] = useState(false);
 

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

  useEffect(() => {
    socket.on("message", ({name, message}) => {
      setChat([...chat, {name, message}]);
      console.log(chat);
    })
  }, [chat])

  return (
      <form className="messenger" onSubmit={onMessageSubmit}>
        <input
          onChange={onNameChange}
          className="name-input"
          name="name"
          value={name}
          label="Name"
          placeholder="Name..."
          ></input>
        <RenderChat 
          chat={chat}
          showEmoji={showEmoji}
          addEmoji={addEmoji}
        />
        <div className="message-field">
          <input
            onChange={onMessageChange}
            className="message-input"
            name="message"
            value={message}
            label="Message"
            placeholder="Message.."
          ></input>
          <button className="message-btn">&gt;&gt; </button>
          <span role="button" className="emoji-btn" onClick={showEmojis}><i className="emoji far fa-smile-beam fa-2x"></i></span>
        </div>
      </form>
  );
}
