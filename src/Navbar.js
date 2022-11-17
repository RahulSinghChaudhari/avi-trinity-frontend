import React from "react";
import { Link } from "react-router-dom";
import Models from "./Components/models";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            <img src="/assets/images/logo-removebg-preview.png" className="logo_img" alt="trinity" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center ">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" className="nav-link mx-3">
                  Services
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link mx-3">
                  About
                </Link>

              </li>

              {/* <li>
             <Link to="contact" className="nav-link mx-3">
                Contact
              </Link>
             </li> */}

            </ul>
            <button type="button" class="btn px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Register Now
            </button>
          </div>
        </div>
      </nav>
      <Models />
    </>

  );
}

