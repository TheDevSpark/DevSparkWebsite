import { useRouter } from "next/router";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { projects } from "@/utils/projects/data"; // adjust path as needed
import { useEffect } from "react";

const ProjectDetails = () => {
  const router = useRouter();
  const { project } = router.query;

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

  const { title, intro, projectInfo, challenges, results, images } =
    projectData;

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
                  <p className="sub-title mb-20">{projectInfo.client}</p>
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
                  <p className="sub-title mb-20">{projectInfo.location}</p>
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
          <hr />
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetails;
