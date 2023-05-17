import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <p style={{ textAlign: "start" }}>Dashboard</p>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sales</a>
          </li>
          <li>
            <a href="">Analytics</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
