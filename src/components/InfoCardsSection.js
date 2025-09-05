import React from "react";

const InfoCardsSection = ({ title, subtitle, items }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">{title}</h2>
          <h4 className="fw-bold text-pink">{subtitle}</h4>
        </div>

        {/* Cards */}
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body d-flex align-items-start">
                  {/* Icon */}
                  <div className="me-3 text-pink fs-2">
                    <i className={item.icon}></i>
                  </div>
                  {/* Text */}
                  <div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="mb-0 text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
