import React, { useState } from "react";

import "./chatList.css";
import search from "../../../../public/search.png";
import plus from "../../../../public/plus.png";
import minus from "../../../../public/minus.png";

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
    </div>
  );
};

export default ChatList;
