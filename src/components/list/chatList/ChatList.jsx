import React from "react";

import "./chatList.css";
import search from '../../../../public/search.png'
import plus from '../../../../public/plus.png'

const ChatList = () => {
  

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
            <img src={search}  alt="Search icon"/>
            <input type="text" placeholder="Search" />
        </div>
        <img src={plus} alt="plus icon" className="add" />
      </div>
    </div>
  );
};

export default ChatList;
