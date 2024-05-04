import React from "react";
import { useUserStore } from "../../../lib/userStore";

import More from "../../../../public/more.png";
import Video from "../../../../public/video.png";
import Edit from "../../../../public/edit.png";
import avatar from "../../../../public/avatar.png";
import "./userInfo.css";

const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img
          src={currentUser.avatar || avatar}
          alt="Avatar"
        />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src={More} alt="More icon" />
        <img src={Video} alt="Video icon" />
        <img src={Edit} alt="Edit icon" />
      </div>
    </div>
  );
};

export default Userinfo;
