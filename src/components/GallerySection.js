import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GallerySection = ({ title, highlight, images }) => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold text-center mb-4">
          {title} <span className="text-pink">{highlight}</span>
        </h2>

        {/* Gallery Grid */}
        <div className="row g-3">
          {images.map((img, i) => (
            <div key={i} className=" col-6 col-md-3 col-sm-6">
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="img-fluid rounded shadow-sm"
                style={{ cursor: "pointer" }}
                onClick={() => setIndex(i)}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images.map((src) => ({ src }))}
        />
      </div>
    </section>
  );
};

export default GallerySection;
