import React from "react";
import Owl from "../../photos/owl.png";

import "./nav.style.css";

export default function nav(props) {
  return (
    <div className="container">
      <div className="nav-container">
        <div className="logonText">
          <img className="logo" src={Owl} alt="bird"></img>
          <h3>DesignBetter.Co</h3>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">Workshops</a>
            </li>
          </ul>
        </div>
        <button className="sub">Subscribe</button>
      </div>
    </div>
  );
}
