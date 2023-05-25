import React from "react";
import "./Body.css";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function Body() {
  return (
    
      <div className="Container">
        <Sidebar />
        <div className="main">

        <Navbar />
        </div>
      </div>
    
  );
}

export default Body;
