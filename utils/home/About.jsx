import Counter from "@/src/components/Counter";
import React from "react";

function About() {
  return (
    <section className="about-area pt-100 rpt-70 rel z-1">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">About Company</span>
                <h2>Trusted Experts Delivering Excellence in Every Project</h2>
              </div>
              <div className="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                <p>
                  At Dev Spark, we believe quality speaks louder than promises.
                  With 100+ successful projects, we’ve earned the trust of
                  businesses worldwide. Our team blends innovation, skill, and
                  dedication to craft solutions that exceed expectations. From
                  the first idea to the final launch, excellence is our
                  standard.
                </p>
              </div>
              <div className="about-counter">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                      <Counter end={100} extraClass={"percent"} />
                      <span className="counter-title">
                        Clients Satisfactions
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                      <Counter end={93} extraClass={"percent"} />
                      <span className="counter-title">Success Rating</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                      <Counter end={35} extraClass={"percent"} />
                      <span className="counter-title">Project Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="image-border-shape wow fadeInRight delay-0-2s">
              <img
                src="assets/images/about/about-image-shape.png"
                alt="About Image Shape"
              />
              <div className="bottom-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
