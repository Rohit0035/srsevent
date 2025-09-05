import React from "react";

const CTABanner = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section
      className="cta-banner text-white d-flex align-items-center py-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // borderRadius: "12px",
        minHeight: "250px",
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
          <div className="col-md-8">
            <h2 className="fw-bold text-white">{title}</h2>
            {subtitle && <p className="mb-3">{subtitle}</p>}
            {buttonText && (
              <a
                href={buttonLink || "#"}
                className="theme-btn"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
