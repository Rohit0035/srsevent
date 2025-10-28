import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import svnimg from "../../assets/img/common/trend-abt.jpg";

// Import booth images
import vnA from "../../assets/img/common/tph-1.jpg";
import vnB from "../../assets/img/common/tph-2.jpg";
import vnC from "../../assets/img/common/tph-3.jpg";
import vnD from "../../assets/img/common/tph-4.jpg";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";

const TrendingPhoto = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: vnA, alt: "360 Photo Booth Rental" },
    { src: vnB, alt: "Mirror Photo Booth" },
    { src: vnC, alt: "Magic Selfie Mirror" },
    { src: vnD, alt: "Event Photo Booth Setup" },
  ];

  return (
    <>
      <Helmet>
        <title>Stylish Photo Booth Setups in Bangalore | SRS Event Ideas</title>
        <meta
          name="description"
          content="Make your party fun & shareable with trendy photo booth setups by SRS Event — perfect for weddings, birthdays & social gatherings."
        />
        <meta
          name="keywords"
          content="photo booth, 360 photo booth, photo booth rental, photobooth, mirror photo booth, photo booth near me, selfie booth, magic mirror photo booth, selfie mirror, women's day photo booth, birthday photo booth, corporate photo booth"
        />
        <link rel="canonical" href="https://www.srsevent.com/photo-booth-setups-for-events-in-bangalore" />
      </Helmet>

      <Header />
      <main className="main">
        {/* Hero Section */}
        <section
          className="py-5 bg-light st-b"
          style={{
            background:
              'url("assets/img/banner/photobooth-hero.jpg") center center/cover no-repeat',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 mb-3">
                <h1 className="fw-bold site-title">Photo Booth Rental</h1>
                <p className="mt-3">
                  Make your celebrations unforgettable with our{" "}
                  <strong>360 photo booth, mirror photo booth, selfie booth</strong>{" "}
                  and <strong>magic mirror booth rentals</strong>. Whether it’s a
                  wedding, birthday, corporate event, or women’s day celebration,
                  SrsEvent brings fun, style, and instant memories for your guests.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> 360 Photo
                    Booth Experiences
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Magic Mirror
                    & Selfie Mirror Booths
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Instant
                    prints & social sharing
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-6" id="contact">
                <div className="card st-color-card">
                  <div className="card-body">
                    <div className="card-header">
                      <h5 className="text-white">Book Your Photo Booth</h5>
                    </div>
                    <div
                      className="quote-content p-2"
                      style={{ backgroundColor: "#9c2356" }}
                    >
                      <EnquiryFormEvent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-6 mb-4">
                <img
                  src={svnimg}
                  alt="Photo Booth Rental Overview"
                  className="w-100"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <h2 className="fw-bold st-2">Unforgettable Photo Booth Fun</h2>
                <p>
                  Our <strong>photo booth rental services</strong> are designed to
                  entertain and create lasting memories. From{" "}
                  <strong>weddings, birthdays, women’s day photo booths</strong> to{" "}
                  <strong>corporate activations</strong>, we provide 360 photo booth
                  setups, selfie booths, and mirror photo booths that guests love.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Interactive
                    360 photo booth experiences
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Magic mirror
                    & selfie booth rentals
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Instant
                    digital sharing & photo prints
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">
              What’s Included in Our Photo Booth Rentals
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-camera-retro fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>360 Photo Booth</h5>
                  <p className="text-muted">
                    Fun and dynamic 360-degree spinning photo booth experiences.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-magic fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Magic Mirror Booth</h5>
                  <p className="text-muted">
                    Stylish, interactive mirror photo booth with animations and
                    prints.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-mobile-alt fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Selfie Booth</h5>
                  <p className="text-muted">
                    Perfect for birthdays and social events with instant digital
                    selfies.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-users fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Event Branding</h5>
                  <p className="text-muted">
                    Customize your booth with logos & event themes.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-gift fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Instant Prints</h5>
                  <p className="text-muted">
                    High-quality photo prints for guests to take home instantly.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-share-alt fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Social Sharing</h5>
                  <p className="text-muted">
                    Share pictures instantly on social media platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">Our Photo Booth Work</h2>
            <div
              className="row popup-gallery"
              data-masonry='{"percentPosition": true }'
            >
              {images.map((img, i) => (
                <div className="col-6 col-md-6 col-lg-3" key={i}>
                  <div className="gallery-item">
                    <div className="gallery-img">
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={{ height: 180, cursor: "pointer" }}
                        onClick={() => {
                          setIndex(i);
                          setOpen(true);
                        }}
                      />
                    </div>
                    <div className="gallery-content">
                      <button
                        className="popup-img gallery-link btn p-0 border-0 bg-transparent"
                        onClick={() => {
                          setIndex(i);
                          setOpen(true);
                        }}
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map((img) => ({ src: img.src }))}
          />
        </section>

        {/* Why Choose Us */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-5 st-2">
              Why Choose SrsEvent for Your Photo Booth Rental
            </h2>
            <div className="row g-4">
              <div className="col-md-3">
                <i
                  className="fas fa-award fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Premium Booths</h6>
                <p className="small text-muted">
                  High-quality 360, mirror & selfie photo booths.
                </p>
              </div>
              <div className="col-md-3">
                <i
                  className="fas fa-smile fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Guest Engagement</h6>
                <p className="small text-muted">
                  Fun, interactive booths that guests love.
                </p>
              </div>
              <div className="col-md-3">
                <i
                  className="fas fa-camera fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Custom Branding</h6>
                <p className="small text-muted">
                  Perfect for weddings, birthdays & corporate events.
                </p>
              </div>
              <div className="col-md-3">
                <i
                  className="fas fa-check-circle fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Affordable Packages</h6>
                <p className="small text-muted">
                  Flexible pricing for every occasion & budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="py-5 text-white text-center"
          style={{ backgroundColor: "#9c2356" }}
        >
          <div className="container">
            <h2 className="fw-bold text-white st-2">
              Ready to Book Your Photo Booth?
            </h2>
            <p className="mb-4">
              From <strong>weddings and birthdays</strong> to{" "}
              <strong>corporate events and women’s day celebrations</strong>, our{" "}
              <strong>photo booth rentals</strong> guarantee unforgettable fun.
            </p>
            <a href="#contact" className="theme-btn bg-black">
              Book Your Photo Booth
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TrendingPhoto;
