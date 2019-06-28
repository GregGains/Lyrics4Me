import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/Search">
            Search
          </NavLink>
          <NavLink to="/About">About</NavLink>
        </nav>
      </header>
    </div>
  );
}
