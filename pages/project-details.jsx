import { useRouter } from "next/router";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { projects } from "@/utils/projects/data"; // adjust path as needed
import { useEffect } from "react";

const ProjectDetails = () => {
  const router = useRouter();
  const { project } = router.query;
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
  useEffect(() => {
    console.log(projects.length);
  });
  // find project data
  const projectData = projects.find((p) => p.images === project);

  if (!projectData) {
    return (
      <Layout footer={2} dark>
        <section className="page-banner pt-210 rpt-150 pb-75 rel z-1">
          <div className="container container-1290">
            <h1 className="hero-title">Project Not Found</h1>
          </div>
        </section>
      </Layout>
    );
  }

  const {
    title,
    intro,
    projectInfo,
    challenges,
    results,
    images,
    solutions,
    testimonial,
    callToAction,
  } = projectData;

  return (
    <Layout footer={2} dark>
      {/* Page Banner */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <h1 className="hero-title style-two mt-65 mb-30">{title}</h1>
          <div className="banner-text">{intro}</div>
        </div>
      </section>

      {/* Project Details Image */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid d-flex justify-content-center">
          <div className="image">
            <img
              src={`assets/images/projects/project-images/${images}/main.jpg`}
              alt={title}
            />
          </div>
        </div>
      </div>

      {/* Project Info */}
      <section className="project-details-area pt-80 rel z-1">
        <div className="container container-1290">
          <div className="row pb-35">
            <div className="col-lg-4">
              <h3 className="title mb-30">Project Information's</h3>
            </div>
            <div className="col-lg-8">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <h5>Client</h5>
                  <p className="sub-title mb-20">{testimonial.user.name}</p>
                </div>
                <div className="col">
                  <h5>Category</h5>
                  <p className="sub-title mb-20">{projectInfo.category}</p>
                </div>
                <div className="col">
                  <h5>Date</h5>
                  <p className="sub-title mb-20">{projectInfo.date}</p>
                </div>
                <div className="col">
                  <h5>Location</h5>
                  <p className="sub-title mb-20">{testimonial.user.country}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* Challenges */}
          <div className="row pt-50 pb-70">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Challenge</h3>
            </div>
            <div className="col-lg-8">
              <ul className="list-disc pl-5">
                {challenges.map((ch, i) => (
                  <li key={i}>{ch}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="row pt-50 pb-70">
            <div className="col-lg-4">
              <h3 className="title mb-30">Solutions Provided</h3>
            </div>
            <div className="col-lg-8">
              <ul className="list-disc pl-5">
                {solutions.map((ch, i) => (
                  <li key={i}>{ch}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Images */}
          <div className="row">
            <div className="col-lg-6">
              <div
                className="image mb-30 d-flex justify-content-center "
                style={{ maxHeight: "375px" }}
              >
                <img
                  src={`assets/images/projects/project-images/${images}/pic-left.jpg`}
                  alt="Left"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="image mb-30 d-flex justify-content-center"
                style={{ maxHeight: "375px" }}
              >
                <img
                  src={`assets/images/projects/project-images/${images}/pic-right.jpg`}
                  alt="Right"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="row pt-40 pb-105 rpb-80">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Results</h3>
            </div>
            <div className="col-lg-8">
              <ul className="list-disc pl-5">
                {results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div className="testimonial-item">
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
                      e.target.src = "assets/images/testimonials/author1.png";
                    }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <div className="author-info">
                    <h4>{testimonial.user.name}</h4>
                  </div>
                  <div className="ratting style-two">
                    {renderStars(testimonial.review.rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>

      {/* Call To Action */}
      <div
        className="d-flex justify-content-center align-items-center text-center text-white"
        style={{
          fontWeight: "500",
          fontSize: "20px",
        }}
      >
        "{callToAction}"
      </div>
      <div className="d-flex justify-content-center w-auto my-10">
        <a
          href="/contact"
          className="p-10"
          style={{
            backgroundColor: "#55E6A5",
            color: "#00000  ",
          }}
        >
          Contact Us
        </a>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
