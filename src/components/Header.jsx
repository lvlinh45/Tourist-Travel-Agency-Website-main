import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white">
      {/* Spinner Start */}
      {/* <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div> 
      {/* Spinner End */}

      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                02 Nguyễn Đình Chiểu, Thành phố Nha Trang
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                (+84) 865720906 - (+84) 708729462
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://www.facebook.com/ECOGUIDEDULICHXANH/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="/"
              >
                <i className="fab fa-twitter fw-normal" />
              </a>

              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="/"
              >
                <i className="fab fa-instagram fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav
          className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
          style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
        >
          <Link to="/" className="navbar-brand p-0 ">
            <h1 className="text-primary m-0">
              <img src="https://i.ibb.co/93fqzn9X/logo.png" alt="Logo" />
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link nav-link-edit">
                <span style={{ color: "black" }}>Trang chủ</span>
              </Link>
              {/* <Link to="/About" className="nav-item nav-link">
                About
              </Link>
              <Link to="/Services" className="nav-item nav-link">
                Services
              </Link>
              <Link to="/Packages" className="nav-item nav-link">
                Packages
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Destination" className="dropdown-item">
                    Destination
                  </Link>
                  <Link to="/Booking" className="dropdown-item">
                    Booking
                  </Link>
                  <Link to="/Team" className="dropdown-item">
                    Travel Guides
                  </Link>
                  <Link to="/Testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/Error" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Link to="/Contact" className="nav-item nav-link">
                Contact
              </Link> */}
            </div>
            {/* <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">
              Booking
            </Link> */}
            <a
              href="https://eco-guide.netlify.app/"
              className="btn btn-primary rounded-pill py-2 px-4"
              target="_self"
              rel="noopener noreferrer"
            >
              Booking
            </a>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
}

export default Header;
