import { sliderProps } from "@/src/sliderProps";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

function Testimonial() {
  return (
    <section className="testimonial-section pt-130 rpt-90 mb-110">
      <div className="container container-1210">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
              <img
                src="assets/images/testimonials/testimonials-four.jpg"
                alt="Testimonial Left Image"
              />
              <div className="bottom-border" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-one-right-part">
              <Swiper
                {...sliderProps.testimonialsActiveSwiper}
                className="testimonials-active wow fadeInUp delay-0-2s"
              >
                <SwiperSlide className="testimonial-item">
                  <div className="author-speech">
                    <p>
                      <span className="quote">“</span> On the other hand we
                      denounce with see righteous indignation and dislike men
                      who are beguiled and demoralized by the charms offset
                      pleasure moments line desire that they cannot foresee pain
                      and trouble that are bound ensue and equal blame belongs
                      their duty <span className="quote right-quote">“</span>
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img
                          src="assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-info">
                        <h4>James N. Johnson</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="testimonial-item">
                  <div className="author-speech">
                    <p>
                      <span className="quote">“</span> On the other hand we
                      denounce with see righteous indignation and dislike men
                      who are beguiled and demoralized by the charms offset
                      pleasure moments line desire that they cannot foresee pain
                      and trouble that are bound ensue and equal blame belongs
                      their duty <span className="quote right-quote">“</span>
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img
                          src="assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-info">
                        <h4>James N. Johnson</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="testimonial-item">
                  <div className="author-speech">
                    <p>
                      <span className="quote">“</span> On the other hand we
                      denounce with see righteous indignation and dislike men
                      who are beguiled and demoralized by the charms offset
                      pleasure moments line desire that they cannot foresee pain
                      and trouble that are bound ensue and equal blame belongs
                      their duty <span className="quote right-quote">“</span>
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img
                          src="assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-info">
                        <h4>James N. Johnson</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="testimonial-item">
                  <div className="author-speech">
                    <p>
                      <span className="quote">“</span> On the other hand we
                      denounce with see righteous indignation and dislike men
                      who are beguiled and demoralized by the charms offset
                      pleasure moments line desire that they cannot foresee pain
                      and trouble that are bound ensue and equal blame belongs
                      their duty <span className="quote right-quote">“</span>
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img
                          src="assets/images/testimonials/author1.png"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-info">
                        <h4>James N. Johnson</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s">
                <button className="testimonial-prev slick-arrow">
                  <i className="far fa-chevron-left" />
                </button>
                <div className="testimonial-dots">
                  <div className="slick-dots"></div>
                </div>
                <button className="testimonial-next slick-arrow">
                  <i className="far fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
