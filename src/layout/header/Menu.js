import Link from "next/link";
import { Fragment, useState } from "react";

const technologies = [
  { name: "JavaScript", route: "/technology?stack=html" },
  { name: "React.js", route: "/technology?stack=react" },
  { name: "Next.js", route: "/technology?stack=nextjs" },
  { name: "Node.js", route: "/technology?stack=nodejs" },
  { name: "PHP / Laravel", route: "/technology?stack=laravel" },
  { name: "React Native", route: "/technology?stack=reactnative" },
  { name: "Flutter", route: "/technology?stack=flutter" },
  { name: "WordPress", route: "/technology?stack=wordpress" },
  { name: "WooCommerce", route: "/technology?stack=woocommerce" },
  { name: "Shopify", route: "/technology?stack=shopify" },
  { name: "MongoDB", route: "/technology?stack=mongodb" },
  { name: "MySQL", route: "/technology?stack=mysql" },
  { name: "Firebase", route: "/technology?stack=firebase" },
  { name: "Supabase", route: "/technology?stack=supabase" },
  { name: "MERN Stack", route: "/technology?stack=mern" },
];

const services = [
  {
    slug: "/service-details?service=web-development",
    title: "Web Development",
  },
  {
    slug: "/service-details?service=app-development",
    title: "App Development",
  },
  {
    slug: "/service-details?service=mvp-development",
    title: "MVP Development",
  },
  {
    slug: "/service-details?service=saas-development",
    title: "SaaS Development",
  },
  {
    slug: "/service-details?service=digital-marketing",
    title: "Digital Marketing",
  },
  { slug: "/service-details?service=graphic-design", title: "Graphic Design" },
  { slug: "/service-details?service=seo-services", title: "SEO Services" },
  { slug: "/service-details?service=ui-ux-design", title: "UI/UX Design" },
  {
    slug: "/service-details?service=software-development",
    title: "Software Development",
  },
  { slug: "/service-details?service=3d-modeling", title: "3D Modeling" },
];

const projects = [
  {
    title: "Learning Management System",
    route: "/project-details?project=EduProPlus",
    images: "EduProPlus",
  },
  {
    title: "Inventory Management System",
    route: "/project-details?project=InventoryMS",
    images: "InventoryMS",
  },
  {
    title: "Human Resource Management System",
    route: "/project-details?project=HRMS",
    images: "HRMS",
  },
  {
    title: "Hospital Management System",
    route: "/project-details?project=HospitalMS",
    images: "HospitalMS",
  },
  {
    title: "Automobile Management System",
    route: "/project-details?project=AutoMS",
    images: "AutoMS",
  },
  {
    title: "Smart Reservation & Order Management System",
    route: "/project-details?project=RestaurantMS",
    images: "RestaurantMS",
  },
  {
    title: "Real Estate Management Platform",
    route: "/project-details?project=RealEstateMS",
    images: "RealEstateMS",
  },
  {
    title: "Gym Management System",
    route: "/project-details?project=GymMS",
    images: "GymMS",
  },
  {
    title: "FinTech Platform",
    route: "/project-details?project=FintechMS",
    images: "FintechMS",
  },
  {
    title: "Courier Management System",
    route: "/project-details?project=DeliveryMS",
    images: "DeliveryMS",
  },
  {
    title: "Construction Management Tool",
    route: "/project-details?project=ConstructionMS",
    images: "ConstructionMS",
  },
  {
    title: "Travel Booking System",
    route: "/project-details?project=TravelBooking",
    images: "TravelBooking",
  },
  {
    title: "Lawyer Management System",
    route: "/project-details?project=LawyerMS",
    images: "LawyerMS",
  },
  {
    title: "Hotel Management System",
    route: "/project-details?project=HotelMS",
    images: "HotelMS",
  },
];

const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      {/* About Us */}
      <li>
        <Link legacyBehavior href="about">
          About Us
        </Link>
      </li>

      {/* Services */}
      <li className="dropdown">
        <a href="#">Services</a>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <Link legacyBehavior href={service.slug}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-arrow-right hover-arrow-down" />
        </div>
      </li>
      {/* Our Work */}
      <li className="dropdown">
        <a href="#">Our work</a>
        <ul className="tech-dropdown">
          {projects.map((project, index) => (
            <li key={index}>
              <Link legacyBehavior href={project.route}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-arrow-right hover-arrow-down" />
        </div>
      </li>
      {/* Technologies */}
      <li className="dropdown">
        <a href="#">Technologies</a>
        <ul className="tech-dropdown">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Link legacyBehavior href={tech.route}>
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-arrow-right hover-arrow-down" />
        </div>
      </li>
      {/* Contact Us */}
      <li>
        <Link legacyBehavior href="contact">
          Contact us
        </Link>
      </li>
    </ul>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");

  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value);

  const activeLi = (value) =>
    value === activeMenu ? { display: "block" } : { display: "none" };

  const multiMenuSet = (value) =>
    setMultiMenu(multiMenu === value ? "" : value);

  const multiMenuActiveLi = (value) =>
    value === multiMenu ? { display: "block" } : { display: "none" };

  return (
    <ul className="navigation d-block d-lg-none mobile-menu ">
      {/* About Us */}
      <li>
        <Link legacyBehavior href="about">
          About Us
        </Link>
      </li>

      {/* Services Dropdown */}
      <li className="dropdown">
        <a href="#">Services</a>
        <ul style={activeLi("services")}>
          {services.map((service, index) => (
            <li key={index}>
              <Link legacyBehavior href={service.slug}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("services")}>
          <span className="far fa-arrow-right hover-arrow-down" />
        </div>
      </li>

      {/* Technologies Dropdown */}
      <li className="dropdown">
        <a href="#">Technologies</a>
        <ul style={activeLi("technologies")} className="tech-dropdown">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Link legacyBehavior href={tech.route}>
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="dropdown-btn"
          onClick={() => activeMenuSet("technologies")}
        >
          <span className="far fa-arrow-right hover-arrow-down" />
        </div>
      </li>

      {/* Projects Dropdown  */}
      <li className="dropdown">
        <a href="#">Our Work</a>
        <ul style={activeLi("projects")} className="tech-dropdown">
          {projects.map((project, index) => (
            <li key={index}>
              <Link legacyBehavior href={project.route}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("projects")}>
          <span className="far fa-arrow-right hover-arrow-down" />
        </div>
      </li>
      {/* Contact Us */}
      <li>
        <Link legacyBehavior href="contact">
          Contact us
        </Link>
      </li>
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#projects">project</a>
      </li>
      <li>
        <a href="#pricing">pricing</a>
      </li>
      <li>
        <a href="#news">news</a>
      </li>
    </ul>
  );
};
