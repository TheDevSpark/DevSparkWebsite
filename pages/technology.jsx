import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TechnologyStack = () => {
  const searchParams = useSearchParams();
  const stack = searchParams.get("stack");
  const [technology, setTechnology] = useState(null);

  // Icon mapping for tools
  const toolIcons = {
    // FrontEnd
    HTML5: "fab fa-html5",
    CSS3: "fab fa-css3-alt",
    "SASS/SCSS": "fab fa-sass",
    Bootstrap: "fab fa-bootstrap",
    React: "fab fa-react",
    TypeScript: "fab fa-js-square",
    "React Hooks": "fab fa-react",
    "SASS/CSS": "fab fa-sass",

    // BackEnd
    "Node.js": "fab fa-node-js",
    Express: "fas fa-server",
    MongoDB: "fas fa-database",
    Prisma: "fas fa-database",

    // Tooling
    Webpack: "fas fa-cube",
    Babel: "fas fa-code",
    ESLint: "fas fa-check-circle",
    PostCSS: "fab fa-css3-alt",
    Vite: "fas fa-bolt",

    // Testing
    Jest: "fas fa-vial",
    "React Testing Library": "fas fa-flask",
    Cypress: "fas fa-check-double",
    Jasmine: "fas fa-vial",
    "Testing Library": "fas fa-flask",
  };

  // Sample data - in real app, this would come from an API or database
  const techData = {
    html: {
      name: "HTML/CSS",
      logo: "/images/html-css-logo.png",
      description: "The foundation of all web development",
      benefits: [
        "Universal browser support",
        "Easy to learn and implement",
        "Lightweight and fast loading",
        "Excellent SEO capabilities",
      ],
      tools: {
        FrontEnd: ["HTML5", "CSS3", "SASS/SCSS", "Bootstrap"],
        BackEnd: ["Node.js", "Express", "MongoDB", "Prisma"],
        Tooling: ["Webpack", "Babel", "ESLint", "PostCSS"],
        Testing: ["Jest", "React Testing Library", "Cypress", "Jasmine"],
      },
      qualities: [
        "Semantic markup for better accessibility",
        "Clean, maintainable code structure",
        "Cross-browser compatibility",
        "Performance optimization",
      ],
      process: [
        {
          step: "Planning",
          description:
            "We analyze your requirements and create a detailed project plan",
        },
        {
          step: "Design",
          description:
            "Our designers create wireframes and mockups for your approval",
        },
        {
          step: "Development",
          description:
            "We build your application using best practices and modern techniques",
        },
        {
          step: "Testing",
          description:
            "Rigorous testing ensures your application works flawlessly",
        },
        {
          step: "Deployment",
          description: "We deploy your application and provide ongoing support",
        },
      ],
    },
    react: {
      name: "React",
      logo: "/images/react-logo.png",
      description: "A JavaScript library for building user interfaces",
      benefits: [
        "Component-based architecture for reusability",
        "Virtual DOM for improved performance",
        "Strong community support and ecosystem",
        "Excellent for single-page applications",
      ],
      tools: {
        FrontEnd: ["React", "TypeScript", "SASS/CSS", "React Hooks"],
        BackEnd: ["Node.js", "Express", "MongoDB", "Prisma"],
        Tooling: ["Webpack", "Babel", "ESLint", "Vite"],
        Testing: [
          "Jest",
          "React Testing Library",
          "Cypress",
          "Testing Library",
        ],
      },
      qualities: [
        "Custom hooks for logic reuse",
        "Optimized rendering performance",
        "Server-side rendering capabilities",
        "Comprehensive testing approach",
      ],
      process: [
        {
          step: "Component Analysis",
          description: "We break down your UI into reusable components",
        },
        {
          step: "State Planning",
          description: "We design efficient state management strategy",
        },
        {
          step: "Development",
          description: "We build your application with React best practices",
        },
        {
          step: "Optimization",
          description:
            "We optimize performance with code splitting and lazy loading",
        },
        {
          step: "Deployment",
          description: "We deploy with appropriate SSR or SSG strategies",
        },
      ],
    },
  };

  useEffect(() => {
    if (stack) {
      setTechnology(techData[stack] || techData.html);
    }
  }, [stack]);

  // Show loading state while determining the technology
  if (!technology) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh", background: "#02050A" }}
      >
        <div
          className="spinner-border"
          style={{ color: "#55E6A5" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="technology-page"
      style={{ background: "#02050A", color: "rgba(255, 255, 255, 0.75)" }}
    >
      {/* Hero Section */}
      <section
        className="tech-hero"
        style={{
          padding: "120px 0 80px",
          background: "#02050A",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1
                className="tech-title"
                style={{
                  fontSize: "80px",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  color: "#ffffff",
                }}
              >
                {technology.name}{" "}
                <span style={{ color: "#55E6A5" }}>Development</span>
              </h1>
              <p
                className="tech-description"
                style={{
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 0.75)",
                  marginBottom: "2rem",
                  lineHeight: "1.6",
                }}
              >
                {technology.description}
              </p>
              <div className="hero-buttons">
                <button
                  className="btn btn-primary me-3"
                  style={{
                    background: "#55E6A5",
                    border: "none",
                    color: "#02050A",
                    fontWeight: "600",
                    padding: "12px 30px",
                    borderRadius: "4px",
                  }}
                >
                  Start a Project
                </button>
                <button
                  className="btn btn-outline"
                  style={{
                    background: "transparent",
                    border: "1px solid #55E6A5",
                    color: "#55E6A5",
                    fontWeight: "600",
                    padding: "12px 30px",
                    borderRadius: "4px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div
                className="tech-logo-container"
                style={{
                  background: "#16161c",
                  borderRadius: "8px",
                  padding: "40px",
                  display: "inline-block",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <img
                  src={technology.logo}
                  alt={technology.name}
                  className="tech-logo"
                  style={{ maxWidth: "200px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="benefits-section"
        style={{ padding: "100px 0", background: "#02050A" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2
                className="section-title"
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  marginBottom: "3rem",
                  color: "#ffffff",
                }}
              >
                Why Choose{" "}
                <span style={{ color: "#55E6A5" }}>{technology.name}</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {technology.benefits.map((benefit, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div
                  className="benefit-card"
                  style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    height: "100%",
                    background: "#16161c",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(85, 230, 165, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="benefit-icon"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#55E6A5",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "1.5rem",
                      color: "#02050A",
                      fontWeight: "700",
                    }}
                  >
                    {index + 1}
                  </div>
                  <h5
                    style={{
                      fontWeight: "600",
                      marginBottom: "15px",
                      color: "#ffffff",
                    }}
                  >
                    {benefit}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Tools Section */}
      <section
        className="tools-section"
        style={{ padding: "100px 0", background: "#16161c" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2
                className="section-title"
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  marginBottom: "3rem",
                  color: "#ffffff",
                }}
              >
                Technologies We Work With
              </h2>
            </div>
          </div>

          {/* Horizontal Category Cards */}
          {Object.entries(technology.tools).map(([category, tools], index) => (
            <div key={index} className="mb-5">
              <div className="row align-items-center mb-4">
                <div className="col-md-3">
                  <h3
                    style={{
                      color: "#55E6A5",
                      fontWeight: "700",
                      fontSize: "24px",
                      margin: 0,
                    }}
                  >
                    {category}
                  </h3>
                </div>
                <div className="col-md-9">
                  <div
                    style={{
                      height: "2px",
                      background: "rgba(85, 230, 165, 0.3)",
                      width: "100%",
                    }}
                  ></div>
                </div>
              </div>

              <div className="row">
                {tools?.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="col-xl-3 col-lg-4 col-md-6 mb-3"
                  >
                    <div
                      className="tool-item"
                      style={{
                        background: "#02050A",
                        padding: "20px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        height: "100%",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 20px rgba(0, 0, 0, 0.2)";
                        e.currentTarget.style.borderColor =
                          "rgba(85, 230, 165, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "rgba(85, 230, 165, 0.1)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                          color: "#55E6A5",
                          fontSize: "18px",
                          flexShrink: 0,
                        }}
                      >
                        <i className={toolIcons[tool] || "fas fa-code"}></i>
                      </div>
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: "500",
                          fontSize: "16px",
                        }}
                      >
                        {tool}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {index < Object.entries(technology.tools).length - 1 && (
                <div className="row">
                  <div className="col-12">
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(255, 255, 255, 0.05)",
                        width: "100%",
                        margin: "40px 0",
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section
        className="process-section"
        style={{ padding: "100px 0", background: "#02050A" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2
                className="section-title"
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  marginBottom: "3rem",
                  color: "#ffffff",
                }}
              >
                Our Development Process
              </h2>
            </div>
          </div>
          <div className="process-steps">
            {technology.process.map((step, index) => (
              <div
                key={index}
                className="process-step"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "40px",
                  position: "relative",
                }}
              >
                <div
                  className="step-number"
                  style={{
                    background: "#55E6A5",
                    color: "#02050A",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    flexShrink: "0",
                    marginRight: "25px",
                    boxShadow: "0 5px 15px rgba(85, 230, 165, 0.3)",
                  }}
                >
                  {index + 1}
                </div>
                <div className="step-content">
                  <h4
                    style={{
                      fontWeight: "700",
                      marginBottom: "10px",
                      color: "#ffffff",
                    }}
                  >
                    {step.step}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.75)",
                      lineHeight: "1.6",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta-section"
        style={{
          padding: "100px 0",
          background: "#16161c",
          color: "#ffffff",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div
            className="cta-content"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Ready to Build with {technology.name}?
            </h2>
            <p
              style={{ fontSize: "20px", marginBottom: "30px", opacity: "0.9" }}
            >
              Contact us today to discuss your project requirements
            </p>
            <button
              className="btn btn-light"
              style={{
                background: "#55E6A5",
                color: "#02050A",
                border: "none",
                fontWeight: "600",
                padding: "12px 30px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                boxShadow: "0 5px 15px rgba(85, 230, 165, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(85, 230, 165, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(85, 230, 165, 0.3)";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStack;
