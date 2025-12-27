import React from "react";

const HeroSectionGrid2 = ({
  title,
  subtitle,
  description,
  primaryBtnText,
  secondaryBtnText,
  onPrimaryClick,
  onSecondaryClick,
  image,
  imageAlt = "Hero Image",
  reverse = false,
}) => {
  return (
    <section className="st-db-bg">
      <div className="container">
        <div
          className={`row align-items-center ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            {subtitle && (
              <span className="badge bg-pink mb-3 d-inline-block">
                {subtitle}
              </span>
            )}

            <h2 className="fw-bold display-5 mb-1 text-white">{title}</h2>

            {description && (
              <p className=" mb-2 text-white">{description}</p>
            )}

            <div className="d-flex gap-3 flex-wrap">
              {secondaryBtnText && (
                <a
                  href={`#enquirynow`}
                  className="theme-btn"
                >
                  {secondaryBtnText}
                </a>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src={image}
              alt={imageAlt}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionGrid2;
