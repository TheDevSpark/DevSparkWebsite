import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// Import your JSON data (you might need to adjust the path)
import techStacks from "@/utils/technologies/data.json";
import Layout from "@/src/layout/Layout";

const TechnologyStack = () => {
  const searchParams = useSearchParams();
  const stack = searchParams.get("stack");
  const [technology, setTechnology] = useState(null);

  // Icon mapping for tools
  const toolIcons = {
    // FrontEnd
    HTML: "fab fa-html5",
    HTML5: "fab fa-html5",
    CSS3: "fab fa-css3-alt",
    "SASS/SCSS": "fab fa-sass",
    Bootstrap: "fab fa-bootstrap",
    "Tailwind CSS": "fab fa-css3-alt",
    JavaScript: "fab fa-js-square",
    React: "fab fa-react",
    "React.js": "fab fa-react",
    TypeScript: "fab fa-js-square",
    "Next.js": "fas fa-server",
    "Vue.js": "fab fa-vuejs",
    Angular: "fab fa-angular",
    Svelte: "fas fa-code",
    Expo: "fas fa-mobile",

    // BackEnd
    "Node.js": "fab fa-node-js",
    "Express.js": "fas fa-server",
    Express: "fas fa-server",
    NestJS: "fas fa-server",
    PHP: "fab fa-php",
    Laravel: "fab fa-laravel",
    CodeIgniter: "fas fa-server",
    MySQL: "fas fa-database",
    MariaDB: "fas fa-database",
    PostgreSQL: "fas fa-database",
    MongoDB: "fas fa-database",
    GraphQL: "fas fa-project-diagram",
    Firebase: "fas fa-database",
    Supabase: "fas fa-database",
    "RESTful APIs": "fas fa-server",

    // Tooling
    Webpack: "fas fa-cube",
    Babel: "fas fa-code",
    ESLint: "fas fa-check-circle",
    Vite: "fas fa-bolt",
    "npm & Yarn": "fab fa-npm",
    Composer: "fas fa-code",
    Docker: "fab fa-docker",
    "Git / GitHub": "fab fa-github",
    "Shopify CLI": "fas fa-terminal",
    "Flutter SDK": "fas fa-mobile",
    "Android Studio / Xcode": "fas fa-code",
    Fastlane: "fas fa-tachometer-alt",
    "MongoDB Atlas": "fas fa-database",
    "Mongoose (ODM)": "fas fa-database",
    "MySQL Workbench": "fas fa-database",
    phpMyAdmin: "fas fa-database",
    "Firebase CLI": "fas fa-terminal",
    "Supabase CLI": "fas fa-terminal",
    PM2: "fas fa-server",

    // Testing
    Jest: "fas fa-vial",
    "Mocha & Chai": "fas fa-flask",
    Cypress: "fas fa-check-double",
    Jasmine: "fas fa-vial",
    "React Testing Library": "fas fa-flask",
    Enzyme: "fas fa-flask",
    Playwright: "fas fa-theater-masks",
    PHPUnit: "fas fa-vial",
    Pest: "fas fa-bug",
    Codeception: "fas fa-vial",
    Selenium: "fas fa-vial",
    Detox: "fas fa-mobile",
    Appium: "fas fa-mobile",
    Supertest: "fas fa-vial",
    "Flutter Test": "fas fa-vial",
    Mockito: "fas fa-vial",
    "Integration Test": "fas fa-vial",

    // State Management
    "Redux / Zustand": "fas fa-sitemap",
    "Provider / Riverpod": "fas fa-sitemap",
    "Bloc State Management": "fas fa-sitemap",

    // Default
    Default: "fas fa-code",
  };

  useEffect(() => {
    if (stack && techStacks[stack]) {
      setTechnology(techStacks[stack]);
    } else if (stack) {
      // Fallback to JavaScript if the stack doesn't exist
      setTechnology(techStacks.javascript);
    }
  }, [stack]);

  // Show loading state while determining the technology
  if (!technology) {
    return (
      <div className="loading-container">
        <div className="spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Layout footer={2} dark>
      <div className="technology-page">
        {/* Hero Section */}
        <section className="tech-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="tech-title">
                  {technology.name}{" "}
                  <span className="primary-color">Development</span>
                </h1>
                <p className="tech-description">{technology.description}</p>
                <div className="hero-buttons">
                  <Link href="/contact" className="primary-btn">
                    Hire a developer!
                  </Link>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="tech-logo-container">
                  <div className="tech-logo">
                    <i
                      className={technology.icon}
                      style={{ fontSize: "50px", color: technology.color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-title">
                  Why Choose{" "}
                  <span className="primary-color">{technology.name}</span>
                </h2>
              </div>
            </div>
            <div className="row">
              {technology.benefits.map((benefit, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div
                    className="benefit-card"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(var(--ygency-primary-rgb), 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="benefit-icon">{index + 1}</div>
                    <h5 className="benefit-title">{benefit}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal Tools Section */}
        <section className="tools-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-title">Technologies We Work With</h2>
              </div>
            </div>

            {/* Horizontal Category Cards */}
            {Object.entries(technology.tools).map(
              ([category, tools], index) => (
                <div key={index} className="mb-5">
                  <div className="row align-items-center mb-4">
                    <div className="col-md-3">
                      <h3 className="tools-category">{category}</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="category-divider"></div>
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
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-3px)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 20px rgba(0, 0, 0, 0.2)";
                            e.currentTarget.style.borderColor =
                              "rgba(var(--ygency-primary-rgb), 0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.borderColor =
                              "var(--ygency-border-color)";
                          }}
                        >
                          <div className="tool-icon">
                            <i
                              className={toolIcons[tool] || toolIcons.Default}
                            ></i>
                          </div>
                          <span className="tool-name">{tool}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {index < Object.entries(technology.tools).length - 1 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="section-divider"></div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-title">Our Development Process</h2>
              </div>
            </div>
            <div className="process-steps">
              {technology.process.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.step}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Build with {technology.name}?
              </h2>
              <p className="cta-description">
                Contact us today to discuss your project requirements
              </p>
              <button
                className="cta-button"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(var(--ygency-primary-rgb), 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(var(--ygency-primary-rgb), 0.3)";
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TechnologyStack;
