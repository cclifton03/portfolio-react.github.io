import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="page-container">
          <NavBar />
          <div className="content-container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Landing />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
