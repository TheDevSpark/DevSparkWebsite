import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useRouter } from "next/router";
import servicesData from "@/utils/services/data.json"; // Adjust the path

const ServiceDetails = () => {
  const router = useRouter();
  const { service } = router.query;
  // Find the service that matches the slug in the URL
  const currentService = servicesData.find((s) => s.slug === service);

  // If service not found, show fallback
  if (!currentService) {
    return (
      <Layout footer={2} dark>
        <section
          className="page-banner pt-210 rpt-150 pb-25 rel z-1"
          style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                  Service Not Found
                </h1>
                <div className="text-center">
                  <p>The service you're looking for doesn't exist.</p>
                  <Link legacyBehavior href="/services">
                    <a className="read-more mt-10 color-primary">
                      Back to Services <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Use the service data to populate your page
  const { title, tagline, offer, whatWeDo, faqs, pricing, image } =
    currentService;

  const [active, setActive] = useState("collapse0");

  // Map package names to icons
  const packageIcons = {
    Regular: "flaticon-abstract",
    Silver: "flaticon-liquid",
    Golden: "flaticon-petals",
  };

  return (
    <Layout footer={2} dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                {title}
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}

      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src={image}
                  alt="About"
                  style={{
                    margin: "0 0 20% 0",
                  }}
                />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>{whatWeDo.tagline}</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 ">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>{tagline}</h2>
                </div>
                <div className="content">
                  <p>{whatWeDo.description}</p>
                  <ul className="list-style-three pt-15 pb-25">
                    {offer.slice(0, 3).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}

      {/* How We Works start */}
      <section className="how-we-works-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">How We Works</span>
            <h2>Simple Step Follow to Complete Work</h2>
          </div>
          <div className="row gap-90">
            {whatWeDo.steps.map((step, index) => (
              <div className="col-xl-3 col-sm-6" key={index}>
                <div
                  className={`work-step-item wow fadeInUp delay-0-${
                    2 + index
                  }s`}
                >
                  <span className="step-number">
                    Step {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <h4 className="title">{step.title}</h4>
                  <div className="content">
                    <p>{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How We Works end */}

      {/* Pricing Section - Now Dynamic */}
      <section
        className="pricing-area-three pb-85 rpb-55"
        style={{
          backgroundImage:
            "url(assets/images/background/pricing-bg-dot-shape.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s ">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For {title} Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {pricing.map((plan, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div
                  className={`pricing-plan-item wow fadeInUp delay-0-${
                    (index + 1) * 2
                  }s`}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {plan.package === "Silver" && (
                    <span className="badge">
                      <i className="fas fa-star-of-life" />
                      <i className="fas fa-star-of-life" />
                      popular package
                      <i className="fas fa-star-of-life" />
                      <i className="fas fa-star-of-life" />
                    </span>
                  )}
                  <div className="icon">
                    <i
                      className={
                        packageIcons[plan.package] || "flaticon-abstract"
                      }
                    />
                  </div>
                  <h5>{plan.package} Package</h5>
                  <div style={{ minHeight: "50px", marginBottom: "15px" }}>
                    <p className="package-desc" style={{ margin: 0 }}>
                      {plan.desc}
                    </p>
                  </div>
                  <span className="price-text">
                    <span className="before">$</span>
                    <span className="price">{plan.price}</span>{" "}
                    <span className="after">/one-time</span>
                  </span>
                  <ul className="list-style-one" style={{ flexGrow: 1 }}>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn w-100">
                      Choose Package <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-95 pb-105 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq.png" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {faqs.map((faq, i) => (
                    <YgencyAccordion
                      title={faq.q}
                      key={i}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    >
                      {faq.a}
                    </YgencyAccordion>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}
    </Layout>
  );
};

export default ServiceDetails;
