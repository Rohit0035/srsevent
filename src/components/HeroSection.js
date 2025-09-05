import React from "react";

const HeroSection = ({ 
  backgroundImage, 
  heading, 
  description, 
  buttonText, 
  buttonLink, 
  bottomText 
}) => {
  return (
    <section
      className="hero-section event1-bg text-white d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // minHeight: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay for dark effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {heading && <h1 className="fw-bold text-white mb-3">{heading}</h1>}
            {description && <p className="mb-4">{description}</p>}
            {buttonText && (
              <a
                href={buttonLink || "#"}
                className="theme-btn mb-3"
              >
                {buttonText}
              </a>
            )}
            {bottomText && <p className="small">{bottomText}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
