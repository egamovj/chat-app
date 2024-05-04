import React, { useEffect, useState } from "react";

import AddUser from "../../addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

import search from "../../../../public/search.png";
import plus from "../../../../public/plus.png";
import minus from "../../../../public/minus.png";
import avatar from "../../../../public/avatar.png";

import "./chatList.css";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
      setChats(doc.data());
    });
    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src={search} alt="Search icon" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? minus : plus}
          alt="plus icon"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img src={avatar} alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
