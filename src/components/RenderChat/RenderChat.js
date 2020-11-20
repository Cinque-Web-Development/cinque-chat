import React, { useState, useRef } from "react";
import "./RenderChat.css";
import { Picker } from "emoji-mart";

const DisplayChat = ({ chat }) => {
  console.log("running");
  return chat.map(({ name, message }, index) => (
    <div key={index}>
      <h3>
        <span className="render-name">{name}:</span>{" "}
        <div className="render-message">{message}</div>
      </h3>
    </div>
  ));
};

export default function RenderChat({ showEmoji, chat, addEmoji }) {
  const [emoji, setEmoji] = useState();
  const emojiPicker = useRef();

  return (
    <div className="chat-space">
      {showEmoji ? (
        <span className="emoji-btn" ref={emojiPicker}>
          <Picker className="emoji-btn" onSelect={addEmoji} value={emoji} />
        </span>
      ) : (
        <DisplayChat chat={chat} />
      )}
    </div>
  );
}
