import Link from "next/link";
import React from "react";

function Service() {
  const services = [
    {
      slug: "/service-details?service=web-development",
      title: "Web Development",
      icon: "fas fa-code",
      image: "assets/images/services/service-page/web_dev.png",
    },
    {
      slug: "/service-details?service=app-development",
      title: "App Development",
      icon: "fas fa-mobile-alt",
      image: "assets/images/services/service-page/app_dev.png",
    },
    {
      slug: "/service-details?service=mvp-development",
      title: "MVP Development",
      icon: "fas fa-rocket",
      image: "assets/images/services/service-page/mvp_dev.png",
    },
    {
      slug: "/service-details?service=saas-development",
      title: "SaaS Development",
      icon: "fas fa-cloud",
      image: "assets/images/services/service-page/saas_dev.png",
    },
    {
      slug: "/service-details?service=digital-marketing",
      title: "Digital Marketing",
      icon: "fas fa-chart-line",
      image: "assets/images/services/service-page/digital_maketing.png",
    },
    {
      slug: "/service-details?service=graphic-design",
      title: "Graphic Design",
      icon: "fas fa-paint-brush",
      image: "assets/images/services/service-page/graphic_designing.png",
    },
    {
      slug: "/service-details?service=seo-services",
      title: "SEO Services",
      icon: "fas fa-search",
      image: "assets/images/services/service-page/seo_optimization.png",
    },
    {
      slug: "/service-details?service=ui-ux-design",
      title: "UI/UX Design",
      icon: "fas fa-pencil-ruler",
      image: "assets/images/services/service-page/Uiux_designing.png",
    },
    {
      slug: "/service-details?service=software-development",
      title: "Software Development",
      icon: "fas fa-laptop-code",
      image: "assets/images/services/service-page/software_dev.png",
    },
    {
      slug: "/service-details?service=3d-modeling",
      title: "3D Modeling",
      icon: "fas fa-cube",
      image: "assets/images/services/service-page/3d_modeling.png",
    },
  ];

  // Animation classes for alternating effects
  const getAnimationClass = (index) => {
    return index % 2 === 0 ? "fadeInUp" : "fadeInDown";
  };

  return (
    <section
      className="service-area-four pt-110 rpt-85 pb-100 rpb-70"
      style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>Our Most In-Demand Solutions for Your Business Growth</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className={`service-four-item wow ${getAnimationClass(
                  index
                )} delay-0-2s`}
              >
                <div className="content">
                  <div className="icon-btn">
                    <i className={service.icon} />
                    <Link legacyBehavior href={service.slug}>
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href={service.slug}>
                      <a>{service.title}</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
