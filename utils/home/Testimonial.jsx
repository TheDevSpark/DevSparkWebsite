import { sliderProps } from "@/src/sliderProps";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import data from "@/utils/testimonials/data.json";

function Testimonial() {
  const formatStars = (rating) => {
    if (!rating) return { full: 0, half: 0, empty: 0 };

    // Round to nearest 0.5
    const roundedRating = Math.round(rating * 2) / 2;

    const full = Math.floor(roundedRating);
    const half = roundedRating % 1 !== 0 ? 1 : 0;
    const empty = 5 - full - half;

    return { full, half, empty };
  };

  const renderStars = (rating) => {
    const { full, half, empty } = formatStars(rating);

    const stars = [];

    // Full stars
    for (let i = 0; i < full; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star" />);
    }

    // Half star
    if (half) {
      stars.push(<i key="half" className="fas fa-star-half-alt" />);
    }

    // Empty stars
    for (let i = 0; i < empty; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star" />);
    }

    return stars;
  };

  return (
    <section className="testimonial-section pt-130 rpt-90 mb-110">
      <div className="container container-1210">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
              <img
                src="assets/images/testimonials/testimonials-four.png"
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
                {data.map((testimonial, index) => (
                  <SwiperSlide key={index} className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">"</span>
                        {testimonial.review.text}
                        <span className="quote right-quote">"</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src={testimonial.user.dp}
                            alt={testimonial.user.name}
                            onError={(e) => {
                              e.target.src =
                                "assets/images/testimonials/author1.png";
                            }}
                          />
                        </div>
                        <div className="author-info">
                          <h4>{testimonial.user.name}</h4>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        {renderStars(testimonial.review.rating)}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
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
