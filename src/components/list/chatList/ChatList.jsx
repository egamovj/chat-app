import React, { useState } from "react";

import "./chatList.css";
import search from "../../../../public/search.png";
import plus from "../../../../public/plus.png";
import minus from "../../../../public/minus.png";
import avatar from "../../../../public/avatar.png";
import AddUser from "../../addUser/AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

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

      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
