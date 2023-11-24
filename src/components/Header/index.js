import React, { useState } from "react";
import "./Header.css";
import Weather from "../Weather";

function Header() {
    const apiKey = '14388801c34d91c91b38f54085317897'; 
  return (
    <div className="header">
      <div className="logo">Justin Windham</div>
      <div className="menu">
        <div className="web-menu">
        <Weather apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
}

export default Header;