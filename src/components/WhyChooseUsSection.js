import React from "react";

const WhyChooseUsSection = ({ title, subtitle, description, items }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">{title}</h2>
          <h4 className="fw-bold text-pink">{subtitle}</h4>
          {description && <p className="text-muted mt-2">{description}</p>}
        </div>

        {/* Items */}
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  {/* Number */}
                  <div className="d-flex align-items-center mb-3">
                    <span className="rounded-circle bg-pink p-3 text-white fw-bold me-3 d-flex justify-content-center align-items-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {item.number}
                    </span>
                    <h5 className="fw-bold mb-0">{item.title}</h5>
                  </div>
                  {/* Description */}
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
