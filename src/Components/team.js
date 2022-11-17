import React from "react";
import TeamImg from "../Images/team/team.jpg";
import Graph1 from "../Images/graph1.png";
import Graph2 from "../Images/graph2.png";
import Graph3 from "../Images/graph3.png";
function Team() {
  return (
    <div className="team py-4 my-5">
      <div className="container">
        <h2 className="text-center">Our Team</h2>
        <img src={Graph1} className="graph1 img-fluid"/>
        <img src={Graph2} className="graph2 img-fluid"/>
        <img src={Graph3} className="graph3 img-fluid"/>
        <p className="text-center">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. of the printing and typesetting industry. Lorem Ipsum
        </p>
        <div className="team-card p-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-center">
                    <img src={TeamImg} className="team-img img-fluid" />
                  </div>
                  <div className="team-desc py-4">
                    <h5>Yash Mehta</h5>
                    <p style={{ color: "gray", fontSize: "14px" }}>
                      Project Manager
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and .
                    </p>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-center">
                    <img src={TeamImg} className="team-img img-fluid" />
                  </div>
                  <div className="team-desc py-4">
                    <h5>Yash Mehta</h5>
                    <p style={{ color: "gray", fontSize: "14px" }}>
                      Project Manager
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and .
                    </p>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-center">
                    <img src={TeamImg} className="team-img img-fluid" />
                  </div>
                  <div className="team-desc py-4">
                    <h5>Yash Mehta</h5>
                    <p style={{ color: "gray", fontSize: "14px" }}>
                      Project Manager
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and .
                    </p>
                    <div></div>
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

export default Team;
