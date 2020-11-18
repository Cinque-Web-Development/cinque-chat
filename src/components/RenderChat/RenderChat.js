import React, {useState, useRef} from 'react';
import './RenderChat.css';
import { Picker } from "emoji-mart";

export default function RenderChat({ chat, showEmoji, addEmoji }) {
  const [emoji, setEmoji] = useState();
  const emojiPicker = useRef();

  

    const displayChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>
                    <span className="render-name">{name}:</span> <span className="render-message">{message}</span>
                </h3>
            </div>
        ));
    };

    return (
        <div className="chat-space">
          {showEmoji ? (
    <span className="emoji-btn" ref={emojiPicker}>
      <Picker className="emoji-btn" onSelect={addEmoji} value={emoji} />
    </span>
  ) : (
    displayChat()
  )}
            
        </div>
    )
}
