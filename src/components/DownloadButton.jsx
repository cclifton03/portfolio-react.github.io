import React from "react";
import "../App.css";

function downloadCV() {
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1Jzn1DMmF6Gs44OL4IvFq6MfLOwp_5GS-";
}

function DownloadButton() {
  return (
    <React.Fragment>
      <button
        className="btn cv-btn"
        onClick={downloadCV}>
        Download CV
      </button>
    </React.Fragment>
  );
}

export default DownloadButton;
