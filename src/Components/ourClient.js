import React from "react";
import Frame from "../Images/Frame.webp";
import wave from "../Images/wave2.png";
export default function ourClient() {
  return (
    <div className="ourClient">
      <div className="wave-div">
        <img src={wave} className="" />
      </div>
      <img src={Frame} className="ourclient-img" />

      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-md-12 ourclient-head">
              <h1 className="text-center ">
                More Than 10 years <br /> of Experiance
              </h1>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6 innercontent">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. of the printing and typesetting industry. Lorem Ipsum
              </p>
              <ul className="py-2">
                <li>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. of t industry.
                </li>
                <li>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting in
                </li>
              </ul>
              <button className="btn px-4 my-2">Our Client</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
