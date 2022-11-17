import React from "react";
import HeroImg from "../Images/hero.webp";
import Blob from "../Images/blob1.webp";
import business from "../Images/icon/consultation.webp";
import { Link } from "react-router-dom";

function Heros() {
  return (
    <div className="hero">
      <img src={HeroImg} className="img-fluid hand-img" />
      <img src={Blob} className="img-fluid blob1-img" />

      <div className="container">
        <div className="hero-heading">
          <h1 className="">
            Our Analysis is your
            <br />
            Financial result
          </h1>
          <p className="py-2" style={{ maxWidth: "20rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. of the printing and typesetting industry.
          </p>
          <Link to="services" className="btn">
            Request Services
          </Link>

          <div className="services ">
            <div className="row">
              <div className="col-md-3">
                <h3>
                  How we can
                  <br /> help you
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                {/* <button className="btn"> Services</button> */}
                <Link to="services" className="btn">
                  Services
                </Link>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-3">
                    <div
                      className="service-icon p-5"
                      style={{ borderColor: "blue" }}
                    >
                      <img src={business} className="img-fluid " />
                    </div>
                    <h6 className="text-center">
                      Analysis of financial documents
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <div className="service-icon p-5">
                      <img src={business} className="img-fluid " />
                    </div>
                    <h6 className="text-center">
                      Analysis of financial documents
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <div className="service-icon p-5">
                      <img src={business} className="img-fluid " />
                    </div>
                    <h6 className="text-center">
                      Analysis of financial documents
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <div className="service-icon p-5 ">
                      <img src={business} className="img-fluid " />
                    </div>
                    <h6 className="text-center">
                      Analysis of financial documents
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;
