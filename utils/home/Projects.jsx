import Link from "next/link";
import React, { useState } from "react";
import { projects } from "@/utils/projects/data"; // adjust path

function Projects() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="project-timeline-two-area pt-130 rpt-100 rel z-1">
      <div className="container container-1290">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Recent Works Gallery</span>
              <h2>Projects That Turned Ideas into Success Stories</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 text-lg-end">
            <Link legacyBehavior href="/projects">
              <a className="explore-more rmb-50 wow fadeInRight delay-0-2s">
                <i className="fas fa-arrow-right" /> <span>Explore more</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="row gap-90">
          {currentProjects.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className="project-timeline-two wow fadeInUp delay-0-2s d-flex flex-column align-item-center justify-content-center"
                style={{ height: "150px" }} // 🔹 same height for all cards
              >
                <span className="serial-number">
                  {String(startIndex + index + 1).padStart(2, "0")}
                </span>
                <h4>
                  <Link
                    legacyBehavior
                    href={`/project-details?project=${project.images}`}
                  >
                    <a>{project.title}</a>
                  </Link>
                </h4>
                <div className="image flex-grow-1 d-flex align-items-center justify-content-center">
                  <img
                    src={`assets/images/projects/project-images/${project.images}/main.jpg`}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                <div className="right-btn mt-2">
                  <Link href={`/project-details?image=${project.images}`}>
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                style={{ backgroundColor: "#55e6a5", color: "black" }}
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  style={{
                    backgroundColor: "#55e6a5",
                    color: "black",
                    border: "none",
                  }}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                style={{ backgroundColor: "#55e6a5", color: "black" }}
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Projects;
