import React from "react";

function WhyUs() {
  return (
    <section className="demo-area pt-100 rpt-70 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="why-choose-us-content">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Us</span>
                <h2>
                  Why Choose Dev Spark – Where Innovation Meets Reliability
                </h2>
              </div>
              <div className="row gap-60">
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-2s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>Proven Excellence</h5>
                    </div>
                    <p>
                      Over 100+ projects delivered with precision, innovation,
                      and measurable business results.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-3s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>Masters of the Craft</h5>
                    </div>
                    <p>
                      A handpicked team of developers, designers, and marketers
                      dedicated to turning visions into reality.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-2s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>Solutions That Fit Like a Glove</h5>
                    </div>
                    <p>
                      Every project is uniquely designed around your goals,
                      audience, and growth potential.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-3s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>Quality Without Compromise</h5>
                    </div>
                    <p>
                      We set the bar high—every line of code, every design
                      element, every campaign is perfected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="why-choose-right wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/services/why-choose-right.png"
                alt="Why Choose Right"
              />
              <div className="why-choose-border-shape" />
              {/* <div className="text-shape">
                <img
                  className="text"
                  src="assets/images/services/web-design-text.svg"
                  alt="Web Design Text"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
