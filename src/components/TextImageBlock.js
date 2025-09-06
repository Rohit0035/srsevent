import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TextImageBlock = ({ title, description, points, image }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Left */}
          <div className="col-12 col-md-12 col-lg-6 mb-4 ">
            <h2 className="fw-bold mb-3">{title}</h2>
            <p className="mb-4">{description}</p>
            <ul className="list-unstyled">
              {points.map((point, index) => (
                <li key={index} className="d-flex align-items-start mb-2">
                  <FaCheckCircle className="text-pink fs-5 me-2 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Right */}
          <div className="col-12 col-md-12 col-lg-6">
            <img src={image} alt={title} className="img-fluid rounded w-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageBlock;
