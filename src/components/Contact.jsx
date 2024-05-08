import React from "react";

function Contact() {
  return (
    <React.Fragment>
      <section
        className="contact"
        id="contact">
        <div className="container contact-container">
          <div className="row">
            <div className="col-4 d-flex flex-column justify-content-between">
              <div className="contact-section-border border-right"></div>
            </div>

            <div className="col-md-6">
              <h3 className="sub-heading text-center">
                Contact <span>Me</span>
              </h3>

              <form className="text-white fs-2">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="mt-4">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="subject"
                    className="mt-4">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="message"
                    className="mt-4">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Thank you for checking out my portfolio! This section is just for show, but please reach out to me via my email on my RESUME!!!"></textarea>
                </div>

                <button
                  type="button"
                  className=" contact-btn mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
