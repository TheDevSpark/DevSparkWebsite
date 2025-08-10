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
                <h2>Web Design Company That You Can Trust</h2>
              </div>
              <div className="row gap-60">
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-2s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>Competitive rates</h5>
                    </div>
                    <p>
                      We use strategic marketing tactics that have been proven
                      programming
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-3s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>Premium Development</h5>
                    </div>
                    <p>
                      Sed perspiciatis unde omnie natue site voluptatem accusan
                      doloremque
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-2s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>No contracts needed</h5>
                    </div>
                    <p>
                      You can increase, pause or stop our services at any time
                      leaving
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-item wow fadeInUp delay-0-3s">
                    <div className="why-choose-header">
                      <i className="far fa-chevron-right" />
                      <h5>Retina Ready &amp; Flexible</h5>
                    </div>
                    <p>
                      Devices show more pixels square inch resulting sharperes
                      images Content
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
              <div className="text-shape">
                <img
                  className="text"
                  src="assets/images/services/web-design-text.svg"
                  alt="Web Design Text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
