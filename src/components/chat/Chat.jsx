import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

import "./chat.css";
import avatar from "../../../public/avatar.png";
import phone from "../../../public/phone.png";
import video from "../../../public/video.png";
import info from "../../../public/info.png";
import emoji from "../../../public/emoji.png";
import img from "../../../public/img.png";
import camera from "../../../public/camera.png";
import mic from "../../../public/mic.png";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={avatar} alt="Avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src={phone} alt="Phone" />
          <img src={video} alt="Video" />
          <img src={info} alt="Info" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="Img" />
          <img src={camera} alt="Camera" />
          <img src={mic} alt="Microphone" />
        </div>
        <input
          type="text"
          placeholder="Type a message ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src={emoji}
            alt="Emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
