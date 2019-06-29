import React from "react";
import { NavLink } from "react-router-dom";
export default function Header({ clearState }) {
  return (
    <div className="Header">
    
        <nav>
          <NavLink exact to="/" onClick={() => clearState()}>
            Home
          </NavLink>
          <NavLink exact to="/Search" onClick={() => clearState()}>
            Search
          </NavLink>
          <NavLink to="/About" onClick={() => clearState()}>
            About
          </NavLink>
        </nav>
      
    </div>
  );
}
