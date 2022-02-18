import React from "react";
import "./topbar.scss";
import { Person, Mail, GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Armaan Kafaipour
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 949 677 1449</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>armaankafaipour1@gmail.com</span>
          </div>

          <div className="itemContainer">
            <a href="https://github.com/ArmaanKafaipour" target="_blank">
              <GitHub className="icon" />
            </a>
          </div>

          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/armaankafaipour"
              target="_blank"
            >
              <LinkedIn className="icon" style={{ fontSize: "26" }} />
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
