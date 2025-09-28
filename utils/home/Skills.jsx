import React from "react";

function Skills() {
  const skills = [
    {
      icon: "fab fa-js",
      name: "JavaScript",
      route: "/technology?stack=html",
      color: "#F7DF1E",
    },
    {
      icon: "fab fa-react",
      name: "React.js",
      route: "/technology?stack=react",
      color: "#61DAFB",
    },
    {
      icon: "fab fa-react",
      name: "Next.js",
      route: "/technology?stack=nextjs",
      color: "#000000",
    },
    {
      icon: "fab fa-node-js",
      name: "Node.js",
      route: "/technology?stack=nodejs",
      color: "#339933",
    },
    {
      icon: "fab fa-php",
      name: "PHP / Laravel",
      route: "/technology?stack=laravel",
      color: "#777BB4",
    },
    {
      icon: "fab fa-react",
      name: "React Native",
      route: "/technology?stack=reactnative",
      color: "#61DAFB",
    },
    {
      icon: "fab fa-wordpress",
      name: "WordPress",
      route: "/technology?stack=wordpress",
      color: "#21759B",
    },
    {
      icon: "fab fa-wordpress",
      name: "WooCommerce",
      route: "/technology?stack=woocommerce",
      color: "#96588A",
    },
    {
      icon: "fas fa-store",
      name: "Shopify",
      route: "/technology?stack=shopify",
      color: "#95BF47",
    },
    {
      icon: "fas fa-database",
      name: "MongoDB",
      route: "/technology?stack=mongodb",
      color: "#47A248",
    },
    {
      icon: "fas fa-database",
      name: "MySQL",
      route: "/technology?stack=mysql",
      color: "#4479A1",
    },
    {
      icon: "fas fa-fire",
      name: "Firebase",
      route: "/technology?stack=firebase",
      color: "#FFCA28",
    },
    {
      icon: "fas fa-database",
      name: "Supabase",
      route: "/technology?stack=supabase",
      color: "#3ECF8E",
    },
    {
      icon: "fas fa-layer-group",
      name: "MERN Stack",
      route: "/technology?stack=mern",
      color: "#000000",
    },
  ];

  return (
    <section className="skills-area pt-100 rpt-70 rel z-1">
      <div className="container container-1590">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <h2>Expertise That Turns your Ideas into Reality</h2>
            </div>
          </div>
        </div>
        <div className="skills-wrap">
          {skills.map((skill, index) => (
            <a
              className="skill-item"
              key={index}
              href={skill.route}
              target="_blank"
            >
              <i
                className={skill.icon}
                style={{
                  color: skill.color,
                  fontSize: 24,
                }}
              ></i>
              <span className="text">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
