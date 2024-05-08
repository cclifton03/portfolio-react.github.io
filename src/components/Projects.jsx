import React, { useState } from "react";
import form from "../images/form.png";
import table from "../images/table.png";
import venuesCSS from "../images/venuesCSS.png";
import comments from "../images/comments.png";

function Projects() {
  const [showMessage, setShowMessage] = useState([false, false, false, false]);

  function onSeeProjectClicked(index) {
    setShowMessage((prevShowMessage) => {
      const updatedShowMessage = [...prevShowMessage];
      updatedShowMessage[index] = !updatedShowMessage[index];
      return updatedShowMessage;
    });
  }

  return (
    <React.Fragment>
      <section
        className="projects"
        id="projects">
        <div
          className="container projects-container"
          id="projects-container">
          <div className="row text-center">
            <div className="col-1 mb-5">
              <div className="projects-section-border"></div>
            </div>
            <div className="col-md-11 text-center projects-heading">
              <h3 className="sub-heading text-center mb-5">
                My <span>Projects</span>
              </h3>

              <div className="row">
                <div className="card project-img col-5">
                  <img
                    src={form}
                    className="card-img-top"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="proj-card-title card-title fs-1">Form</h5>
                    <p className="card-text text-white fs-4">
                      Worked in collaboration to build a form for adding a new
                      venue. Implemented multiple skills and incorporated
                      multiple React components.
                    </p>
                    <button
                      type="button"
                      className="project-btn"
                      onClick={() => onSeeProjectClicked(0)}>
                      See Project <i className="fas fa-arrow-right"></i>
                    </button>
                    {showMessage[0] && (
                      <div className="mt-3 text-white fs-3">Coming Soon!</div>
                    )}
                  </div>
                </div>

                <div className="card project-img col-5">
                  <img
                    src={table}
                    className="card-img-top"
                    alt="Project 2"
                  />
                  <div className="card-body">
                    <h5 className="proj-card-title card-title fs-1">
                      Paginated Table
                    </h5>
                    <p className="card-text text-white fs-4">
                      What you see is a front end image of the paginated table.
                      What you do not see is the work in the database to set up
                      relational tables and the middle tier connection!
                    </p>
                    <button
                      type="button"
                      className="project-btn"
                      onClick={() => onSeeProjectClicked(1)}>
                      See Project <i className="fas fa-arrow-right"></i>
                    </button>
                    {showMessage[1] && (
                      <div className="mt-3 text-white fs-3">Coming Soon!</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card project-img col-md-5">
                  <img
                    src={venuesCSS}
                    className="card-img-top"
                    alt="Project 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title proj-card-title fs-1">
                      CSS & JSX
                    </h5>
                    <p className="card-text text-white fs-4">
                      Worked in collaboration to build a page showing a
                      paginated list of data from the database in a nice set of
                      bootstrap cards. Most of my work here involved CSS and
                      JSX.
                    </p>
                    <button
                      type="button"
                      className="project-btn"
                      onClick={() => onSeeProjectClicked(2)}>
                      See Project <i className="fas fa-arrow-right"></i>
                    </button>
                    {showMessage[2] && (
                      <div className="mt-3 text-white fs-3">Coming Soon!</div>
                    )}
                  </div>
                </div>

                <div className="card project-img col-md-5">
                  <img
                    src={comments}
                    className="card-img-top"
                    alt="Project 4"
                  />
                  <div className="card-body">
                    <h5 className="proj-card-title card-title fs-1">
                      Comments
                    </h5>
                    <p className="card-text text-white fs-4">
                      Implemented dynamic React components to be reusable.
                      Initiated a way to add comments to the database that
                      render immediately on the DOM!
                    </p>
                    <button
                      type="button"
                      className="project-btn"
                      onClick={() => onSeeProjectClicked(3)}>
                      See Project <i className="fas fa-arrow-right"></i>
                    </button>
                    {showMessage[3] && (
                      <div className="mt-3 text-white fs-3">Coming Soon!</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
