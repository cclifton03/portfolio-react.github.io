import React from "react";
import myImage from "../images/christopher-clifton-photo.JPG";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "./DownloadButton";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Landing() {
  return (
    <React.Fragment>
      <section className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <div className="landing-section-border"></div>
            </div>
            <div className="col-md-7">
              <div className="col-md-11 mb-5">
                <div className="logo">
                  <span className="me-4">Full Stack</span>
                  <span>Developer</span>
                </div>
              </div>
              <div className="col-md-11">
                <div className="developer-info">
                  <h3 className="greeting">
                    Hello, <span>my name is</span>
                  </h3>
                  <h1 className="name">
                    <span>Christopher</span> Clifton
                  </h1>
                  <p
                    className="about"
                    id="about">
                    Dedicated Full Stack Software Engineer with experience in
                    developing responsive, dynamic and scalable web application
                    using React.js, JavaScript, C#, .Net, and SQL. As a US Army
                    Airborne soldier, I gained valuable experience in teamwork,
                    leadership, and problem-solving. I am passionate about
                    building innovative and user-friendly software solutions
                    that can make a positive impact on people&apos;s lives. I am
                    always eager to learn new technologies and tools, and to
                    collaborate with other talented and diverse professionals.
                  </p>
                  <div className="social-media text-center">
                    <a
                      href="https://www.facebook.com/cj.clifton.90/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fa-brands fa-facebook-f social-link">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href="https://github.com/cclifton03/portfolio.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fa-brands fa-github social-link">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/christopher-j-clifton/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fa-brands fa-linkedin social-link">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                  <div className="text-center mt-4 mb-5">
                    <DownloadButton></DownloadButton>
                    <span className="text-white fs-5">
                      Take a look at my Resume!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 align-items-center justify-content-center mt-5">
              <div className="developer-img mt-3">
                <div className="dev-img-wrapper">
                  <img
                    src={myImage}
                    alt="My Image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Landing;
