import React from "react";

function Advertise() {
  return (
    <section className="advertise-banner-area rel z-1">
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-7 wow fadeInUp delay-0-2s">
            <div
              className="advertise-banner style-one bgc-black"
              style={{
                backgroundImage: "url(assets/images/banner/ad-banner.png)",
              }}
            >
              {/* <div className="image">
                <img src="assets/images/banner/add-banner.png" alt="Banner" />
              </div>
              <div className="content mt-20">
                <span className="number">100+</span>
                <h6>Project Complete</h6>
                <hr />
                <p>Delivering impactful digital solutions</p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-5 wow fadeInUp delay-0-4s">
            <div
              className="advertise-banner style-two bg-white"
              style={{
                backgroundImage: "url(assets/images/banner/star-vector.png)",
              }}
            >
              <h3>All Your Digital Needs, One Creative Hub</h3>
              <hr className="mb-35" />
              <div className="authors-text">
                <img src="assets/images/hero/author1.png" alt="Author" />
                <img src="assets/images/hero/author2.png" alt="Author" />
                <img src="assets/images/hero/author3.png" alt="Author" />
                <img src="assets/images/hero/author4.png" alt="Author" />
                <i className="fal fa-plus" />
                <span className="text">
                  We deliver complete digital solutions that help businesses
                  grow faster
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advertise;
