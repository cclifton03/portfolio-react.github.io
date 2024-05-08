import React from "react";
import DownloadButton from "./DownloadButton";
function Footer() {
  return (
    <React.Fragment>
      <footer className="footer mt-5">
        <div className="container d-flex align-items-center justify-content-center mt-3">
          <div className="copyright me-5">
            <p className="">
              &copy; Christopher <span className="me-5">Clifton</span> All
              Rights Reserved. 2024
            </p>
          </div>
          <div className="author">
            <p>
              Made by <span>Christopher Clifton</span>
            </p>
          </div>
          <div className="text-center mx-5">
            <DownloadButton></DownloadButton>
            <span className="text-white fs-5">Take a look at my Resume!</span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
