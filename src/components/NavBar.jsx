import React from "react";
import kitten from "../images/kittenwithhat.png";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-container">
        <div className="container d-flex justify-content-center align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <img
                src={kitten}
                alt="Your Logo"
                className="rounded-circle "
                style={{ width: "50px", height: "50px" }}
              />
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link"
                href="#about">
                About
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link"
                href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link"
                href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link"
                href="https://drive.google.com/uc?export=download&id=1Y3xTnw2BMSWVRje71nOzzm5YjPs2BOgV">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
