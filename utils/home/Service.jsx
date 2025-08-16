import Link from "next/link";
import React from "react";

function Service() {
  return (
    <section
      className="service-area-four pt-110 rpt-85 pb-100 rpb-70"
      style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>Our Most In-Demand Solutions for Your Business Growth</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInUp delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-development" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>Web Development</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service1.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInDown delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-mobile-development" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>Mobile Application</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service2.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInUp delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-brainstorming" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>Team Agumentation</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service3.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInDown delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-brainstorming" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>Design &amp; Branding</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service4.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInUp delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-abstract" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>React Js Development</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service5.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInDown delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-ux" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>Front-end development</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service6.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInUp delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-optimization" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>Jamstack Development</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service7.jpg" alt="Service" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="service-four-item wow fadeInDown delay-0-2s">
              <div className="content">
                <div className="icon-btn">
                  <i className="flaticon-goal" />
                  <Link legacyBehavior href="/service-details">
                    <a className="more-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                    <a>MVP Development</a>
                  </Link>
                </h5>
              </div>
              <div className="image">
                <img src="assets/images/services/service8.jpg" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
