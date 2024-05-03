import React from "react";

import "./detail.css";
import avatar from "../../../public/avatar.png";
import arrowUp from "../../../public/arrowUp.png";
import arrowDown from "../../../public/arrowDown.png";
import download from "../../../public/download.png";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src={avatar} />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor, sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src={arrowUp} alt="arrowUp" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src={arrowUp} alt="arrowUp" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photo</span>
            <img src={arrowDown} alt="arrowUp" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg" />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg" />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg" />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg" />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src={arrowUp} alt="arrowUp" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
};

export default Detail;
