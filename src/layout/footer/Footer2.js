import Link from "next/link";

const Footer2 = ({ dark }) => {
  return (
    <footer
      className="main-footer footer-two pt-100 pb-50 rpb-20 rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="row gp-100 pb-20 align-items-start justify-content-between">
          <div className="col-xl-6 col-lg-7">
            <div className="footer-left-title mb-35 wow fadeInLeft delay-0-2s">
              Your Vision, Our Spark — Together We Create
            </div>
          </div>
          {/* Send Us Message */}
          <div className="col-lg-5 col-sm-7 col-6 col-small wow fadeInRight delay-0-2s">
            <div className="footer-right-btn mb-35 text-lg-end">
              <Link legacyBehavior href="/contact">
                <a className="explore-more text-start">
                  <i className="fas fa-arrow-right" />{" "}
                  <span>Send Us Message</span>
                </a>
              </Link>
            </div>
          </div>
          {/* Get In Touch */}
          <div className="col-lg-3 col-md-6 col-6 col-small order-lg-3">
            <div className="footer-widget footer-text wow fadeInUp delay-0-4s">
              <h5 className="footer-title">Get In Touch</h5>
              <div className="text">
                <p>BARTLE HOUSE 9 OXFORD COURT MANCHESTER ENGLAND M2 3WQ</p>
                <a href="mailto:contact@thedevspark.com">
                  contact@thedevspark.com
                </a>
                <br />
                <a href="callto:+92303-2051930">+92303-2051930</a>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="col-lg-3 col-md-6 order-lg-4 col-sm-6">
            <div className="footer-widget footer-links wow fadeInUp delay-0-6s">
              <h5 className="footer-title">Links</h5>
              <div className="footer-widget ">
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.instagram.com/dev_spark_agency?igsh=MTg2eHF6M25saXY0bw=="
                      target="_blank"
                    >
                      <i
                        className="fab fa-instagram"
                        style={{ fontSize: "25px" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/TheDevSpark" target="_blank">
                      <i
                        className="fab fa-twitter"
                        style={{ fontSize: "25px" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/1WQcTihJ69/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-facebook"
                        style={{ fontSize: "25px" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/the-devspark/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-linkedin"
                        style={{ fontSize: "25px" }}
                      />
                    </a>
                  </li>
                </ul>
                {/* <ul className="list-style-two">
                  <li>
                    <Link legacyBehavior href="/about">
                      Setting
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="col-lg-5 me-auto order-lg-2 align-self-center">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-2s">
              <form className="footer-newsletter" action="#">
                <input type="email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
              <p>
                Copyright @2025,{" "}
                <Link legacyBehavior href="/">
                  <a>The DevSpark</a>
                </Link>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
