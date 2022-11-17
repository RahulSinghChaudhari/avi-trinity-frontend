import React from "react";
import Wave from "../Images/wave3.png";
import TeamImg from "../Images/team/team.jpg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";

function Foooter() {
  return (
    <div className="footer">
      <img src={Wave} className="footer-wave" />
      <div className="container">
        <div className="text-center">
          <img src={TeamImg} className="testimonial-img img-fluid" />
        </div>
        <div className="py-4">
          <OwlCarousel items={1} className="owl-theme" loop nav margin={8}>
            <div className="text-center">
              <div className="px-5 mx-5">
              <p className="px-5 mx-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. of the printing and typesetting industry. Lorem Ipsum
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. of the printing and typesetting industry. Lorem Ipsum
              </p>
              <p style={{ color: "gray", fontSize: "14px" }}>Avi Bhede</p>
              </div>
             
            </div>
            <div className="text-center">
              <div className="px-5 mx-5">
              <p className="px-5 mx-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. of the printing and typesetting industry. Lorem Ipsum
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. of the printing and typesetting industry. Lorem Ipsum
              </p>
              <p style={{ color: "gray", fontSize: "14px" }}>Avi Bhede</p>
              </div>
             
            </div>
          </OwlCarousel>
        </div>
        <hr></hr>
        <div className="py-3">
          
          <div className="d-flex justify-content-between">
            <div>
            <h6>Trinity</h6>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <div className="d-flex newsletter">
              <span>Subscribe for Newesletter</span>
              <form style={{position:"relative"}}>
                <input type="text" className="form-control" placeholder="Enter Your Email"/>
                <button className="btn newsletterbtn"> ></button>
              </form>
              </div>
            
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Foooter;
