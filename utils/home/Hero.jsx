import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section
      className="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
      style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
    >
      <div className="container">
        <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
          Website
          <span className="arrow">
            <img
              className="wow fadeInLeft delay-0-6s"
              src="assets/images/hero/title-arrow.png"
              alt="Arrow"
            />
          </span>
          Develop Agency
        </h1>
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-3 col-lg-4">
            <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam reme aperiam eaque
                abillo inventore
              </p>
              <img
                className="mt-20"
                src="assets/images/hero/arrow.png"
                alt="Arrow"
              />
              <div className="authors-text mt-45">
                <img src="assets/images/hero/author1.png" alt="Author" />
                <img src="assets/images/hero/author2.png" alt="Author" />
                <img src="assets/images/hero/author3.png" alt="Author" />
                <img src="assets/images/hero/author4.png" alt="Author" />
                <i className="fal fa-plus" />
                <span className="text">100+ Popular Clients</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
              <img src="assets/images/hero/hero-two.jpg" alt="Hero" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/about">
                <a className="explore-more">
                  <i className="fas fa-arrow-right" /> <span>Explore more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
