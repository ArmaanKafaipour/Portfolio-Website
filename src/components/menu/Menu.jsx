import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Project Details</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="socials">
        <a href="https://github.com/ArmaanKafaipour" target="_blank">
          <img src="assets/icons8-github-50.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/armaankafaipour/" target="_blank">
          <img src="assets/icons8-linkedin-50.png" alt="" />
        </a>
      </div>
    </div>
  );
}
