import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <section className="project-timeline-two-area pt-130 rpt-100 rel z-1">
      <div className="container container-1290">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Recent Works Gallery</span>
              <h2>Projects That Turned Ideas into Success Stories</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 text-lg-end">
            <Link legacyBehavior href="/projects">
              <a className="explore-more rmb-50 wow fadeInRight delay-0-2s">
                <i className="fas fa-arrow-right" /> <span>Explore more</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="row gap-90">
          <div className="col-lg-6">
            <div className="project-timeline-two wow fadeInUp delay-0-2s">
              <span className="serial-number">01</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>Business Task Management Dashboard Design</a>
                </Link>
              </h4>
              <div className="image">
                <img
                  src="assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div className="right-btn">
                <a href="#">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-timeline-two wow fadeInUp delay-0-4s">
              <span className="serial-number">02</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>PSD, Figma &amp; XD to HTML Design &amp; Development</a>
                </Link>
              </h4>
              <div className="image">
                <img
                  src="assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div className="right-btn">
                <a href="#">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-timeline-two wow fadeInUp delay-0-2s">
              <span className="serial-number">03</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>Mobile Application Design &amp; Development</a>
                </Link>
              </h4>
              <div className="image">
                <img
                  src="assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div className="right-btn">
                <a href="#">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-timeline-two wow fadeInUp delay-0-4s">
              <span className="serial-number">04</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>Business Development and Marketing Strategy</a>
                </Link>
              </h4>
              <div className="image">
                <img
                  src="assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div className="right-btn">
                <a href="#">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-timeline-two wow fadeInUp delay-0-2s">
              <span className="serial-number">05</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>eCommerce React Website Development</a>
                </Link>
              </h4>
              <div className="image">
                <img
                  src="assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div className="right-btn">
                <a href="#">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-timeline-two wow fadeInUp delay-0-4s">
              <span className="serial-number">06</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>3D Flat UI UX Landing Page Design &amp; Development</a>
                </Link>
              </h4>
              <div className="image">
                <img
                  src="assets/images/projects/project-timeline-two1.jpg"
                  alt="Project TimeLine Image"
                />
              </div>
              <div className="right-btn">
                <a href="#">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
