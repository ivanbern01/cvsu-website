import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Top Green Bar */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <button className="btn btn-warning">Skip to content</button>
        </div>
      </div>

      <header className="header bg-light py-3">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src="cvsu.png"
                alt="University Logo"
                className="logo-inline mr-2"
              />
              <h1 className="display-6 mb-0">CvSU - Bacoor Campus</h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#information">
                    Information
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#programs">
                    School Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#alumni">
                    Alumni
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Rest of your main content */}
      <main>
        <section
          className="hero-section text-white d-flex align-items-center"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/cover.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px 20px",
          }}
        >
          <div className="container text-center">
            <h1 className="display-4">TRUTH · EXCELLENCE · SERVICE</h1>
            <p className="lead">
              The Cavite State University (CvSU) has its humble beginnings in
              1906
            </p>
            <div className="button-group mt-4">
              <button className="btn btn-success mx-2">Faculty Login</button>
              <button className="btn btn-outline-success mx-2">
                Student Page
              </button>
            </div>
          </div>
        </section>

        <section className="info-cards container py-5">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <i className="fas fa-university fa-3x mb-3"></i>
                <p>Admission/Enrollment Page</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <i className="fas fa-globe fa-3x mb-3"></i>
                <p>Website Links</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <i className="fas fa-book fa-3x mb-3"></i>
                <p>SIA (Academic Information System)</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <i className="fas fa-info-circle fa-3x mb-3"></i>
                <p>Admission Information for New Learners</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
