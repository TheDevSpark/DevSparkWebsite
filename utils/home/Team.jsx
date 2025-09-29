import Link from "next/link";
import React from "react";
import { team } from "@/utils/team/data";
function Team() {
  return (
    <section
      className="team-page-area pt-130 rpt-100 pb-70 rpb-40 rel"
      style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
    >
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">Team Members</span>
              <h2>Meet Our Professionals Team</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          {team.map((team, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="team-member style-two wow fadeInUp delay-0-2s d-flex align-items-center flex-column">
                <div className="image">
                  <img
                    src={`assets/images/team/team-member/${team.image}.jpg`}
                    alt="Team Member"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div className="content d-flex justify-content-between align-items-center w-100 mt-2">
                  <div>
                    <h4>{team.name}</h4>
                    <span>{team.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

export default Team;
