import React from "react";

function Skills() {
  const skills = [
    { img: "assets/images/skills/skill2.png", name: "HTML" },
    { img: "assets/images/skills/skill3.png", name: "CSS" },
    { img: "assets/images/skills/skill4.png", name: "Javascript" },
    { img: "assets/images/skills/skill5.png", name: "React" },
    { img: "assets/images/skills/skill14.png", name: "Next.js" },
    { img: "assets/images/skills/skill1.png", name: "Bootstrap" },
    { img: "assets/images/skills/skill15.png", name: "Tailwind" },
    { img: "assets/images/skills/skill8.png", name: "Node.js" },
    { img: "assets/images/skills/skill9.png", name: "Sass" },
    { img: "assets/images/skills/skill6.png", name: "WordPress" },
    { img: "assets/images/skills/skill12.png", name: "Elementor" },
    { img: "assets/images/skills/skill7.png", name: "php" },
    { img: "assets/images/skills/skill16.png", name: "Laravel" },
    { img: "assets/images/skills/skill11.png", name: "Shopify" },
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
            <div className="skill-item" key={index}>
              <img src={skill.img} alt={`${skill.name} Icon`} />
              <span className="text">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
