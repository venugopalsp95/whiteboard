import { NavLink } from "react-router-dom";
import menuIcon from "../../assets/menu.png";
import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="nav">
      <h1>Whiteboard</h1>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            <li onClick={() => setIsOpen(!isOpen)}> Home</li>
          </NavLink>
          <NavLink to="/whiteboard">
            <li onClick={() => setIsOpen(!isOpen)}>WhiteBoard</li>
          </NavLink>
          <NavLink to="/about">
            <li onClick={() => setIsOpen(!isOpen)}>About</li>
          </NavLink>
        </ul>
      </div>

      <img className="menu" src={menuIcon} onClick={() => setIsOpen(!isOpen)} />
    </nav>
  );
};

export default Navbar;
