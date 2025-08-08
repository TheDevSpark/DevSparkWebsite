import React from "react";

function Advertise() {
  return (
    <section className="advertise-banner-area rel z-1">
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-7 wow fadeInUp delay-0-2s">
            <div
              className="advertise-banner style-one bgc-primary"
              style={{
                backgroundImage: "url(assets/images/banner/add-banner-bg.png)",
              }}
            >
              <div className="image">
                <img src="assets/images/banner/add-banner.png" alt="Banner" />
              </div>
              <div className="content mt-20">
                <span className="number">150+</span>
                <h6>Project Complete</h6>
                <hr />
                <p>Quis autem vel eum reprehe voluptate velit esse quam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 wow fadeInUp delay-0-4s">
            <div
              className="advertise-banner style-two bg-white"
              style={{
                backgroundImage: "url(assets/images/banner/star-vector.png)",
              }}
            >
              <h3>Innovative Web Development Solutions</h3>
              <hr className="mb-35" />
              <div className="authors-text">
                <img src="assets/images/hero/author1.png" alt="Author" />
                <img src="assets/images/hero/author2.png" alt="Author" />
                <img src="assets/images/hero/author3.png" alt="Author" />
                <img src="assets/images/hero/author4.png" alt="Author" />
                <i className="fal fa-plus" />
                <span className="text">
                  We denounce indignatione dislike mende charms
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
