import Link from "next/link";
import React from "react";

function Pricing() {
  return (
    <section
      className="pricing-area-three pt-75 rpt-100 pb-85 rpb-55"
      style={{
        backgroundImage:
          "url(assets/images/background/pricing-bg-dot-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">Pricing Package</span>
              <h2>Transparent Pricing. Exceptional Value</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="pricing-plan-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-abstract" />
              </div>
              <h5>Regular Package</h5>
              <span className="price-text">
                <span className="before">$</span>
                <span className="price">18.3</span>{" "}
                <span className="after">/per month</span>
              </span>
              <ul className="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <Link legacyBehavior href="/pricing">
                <a className="theme-btn w-100">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="pricing-plan-item wow fadeInUp delay-0-4s">
              <span className="badge">
                <i className="fas fa-star-of-life" />
                <i className="fas fa-star-of-life" />
                popular package
                <i className="fas fa-star-of-life" />
                <i className="fas fa-star-of-life" />
              </span>
              <div className="icon">
                <i className="flaticon-liquid" />
              </div>
              <h5>Silver Package</h5>
              <span className="price-text">
                <span className="before">$</span>
                <span className="price">49.3</span>{" "}
                <span className="after">/per month</span>
              </span>
              <ul className="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <Link legacyBehavior href="/pricing">
                <a className="theme-btn w-100">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="pricing-plan-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon-petals" />
              </div>
              <h5>Golden Package</h5>
              <span className="price-text">
                <span className="before">$</span>
                <span className="price">98.3</span>{" "}
                <span className="after">/per month</span>
              </span>
              <ul className="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <Link legacyBehavior href="/pricing">
                <a className="theme-btn w-100">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
