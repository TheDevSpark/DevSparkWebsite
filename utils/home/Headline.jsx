import React from "react";

function Headline({
  headlines = [
    {
      title: "Web Design",
    },
    {
      title: "Product Design",
    },
    {
      title: "Web Development",
    },
    {
      title: "SEO Optimization",
    },
    {
      title: "UX/UI Strategy",
    },
    {
      title: "Graphics",
    },
  ],
}) {
  return (
    <div className="headline-area bgc-primary pt-80 pb-65">
      <div className="container-fluid">
        <div className="headline-wrap marquee">
          <span>
            {headlines.map((headline, index) => (
              <span className="marquee-item" key={index}>
                <i className="fas fa-star-of-life" />
                <b>{headline.title}</b>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Headline;
