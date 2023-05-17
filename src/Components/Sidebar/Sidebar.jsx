import React from "react";
import "./Sidebar.css";


import HomeIcon from "../../Icons/icons8-home-32.png"
import SalesIcon from "../../Icons/icons8-total-sales-24.png"
import AnalyticsIcon from "../../Icons/icons8-download-graph-report-80.png"
function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <p style={{ textAlign: "start" }}>Dashboard</p>
        <ul>
          <li>
            <img className="logoImage" src={`${HomeIcon}`} alt="" />
            <a href="">Home</a>
          </li>
          <li>
            <img className="logoImage" src={`${SalesIcon}`} alt="" />
            <a href="">Sales</a>
          </li>
          <li>
            <img className="logoImage" src={`${AnalyticsIcon}`} alt="" />
            <a href="">Analytics</a>
          </li>
        </ul>
      </div>

      <div>
        <p style={{ textAlign: "start" }}>Quick Menu</p>
        <ul>
          <li>
            <a href="">User</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Transactions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
