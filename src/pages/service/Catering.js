import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import cateringimg from "../../assets/img/common/ser-cating.jpg";
// Import catering images
import ct1 from "../../assets/img/common/ct-1.jpg";
import ct2 from "../../assets/img/common/ct-2.jpg";
import ct3 from "../../assets/img/common/ct-3.jpg";
import ct4 from "../../assets/img/common/ct-4.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";

const Catering = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: ct1, alt: "Wedding Catering Setup" },
    { src: ct2, alt: "Food Party Platters" },
    { src: ct3, alt: "Catering for Birthday Party" },
    { src: ct4, alt: "Corporate Catering Services" },
  ];

  return (
    <>
      <Helmet>
        <title>Catering Services - SrsEvent</title>
        <meta
          name="description"
          content="SrsEvent offers professional catering services for weddings, birthdays, parties, and corporate events. Explore our catering menus, food platters, and personalized stall catering options near you."
        />
        <meta
          name="keywords"
          content="caterers, food caterer, wedding catering, wedding catering services, near catering services, food party platters, home catering services near me, stall catering, marriage catering, catering for events, catering menus, catering for birthday party"
        />
        <link rel="canonical" href="https://srsevent.com/catering" />
      </Helmet>

      <Header />
      <main className="main">
        {/* Catering Hero Section */}
        <section
          className="py-5 bg-light st-b"
          style={{
            background:
              'url("assets/img/banner/catering-hero.jpg") center center/cover no-repeat',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 mb-3">
                <h1 className="fw-bold site-title">Catering Services</h1>
                <p className="mt-3">
                  Good food makes every celebration unforgettable. At SrsEvent,
                  we provide professional catering for weddings, parties,
                  birthdays, and corporate events with delicious menus and
                  exceptional service.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check-circle me-2" style={{ color: "#9c2356" }} />
                    Wedding & Marriage Catering
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle me-2" style={{ color: "#9c2356" }} />
                    Birthday Parties & Home Catering
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle me-2" style={{ color: "#9c2356" }} />
                    Corporate & Stall Catering Services
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-6" id="contact">
                <div className="card st-color-card">
                  <div className="card-body">
                    <div className="card-header">
                      <h5 className="text-white">Enquiry Now</h5>
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
                  src={cateringimg}
                  alt="Catering Overview"
                  className="w-100 rounded shadow"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <h2 className="fw-bold st-2">Delicious Catering for Every Occasion</h2>
                <p>
                  From intimate gatherings to grand celebrations, our catering
                  services offer customizable menus, hygienic food preparation,
                  and professional staff to make your event a culinary success.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>
                    <i className="fas fa-check-circle me-2" style={{ color: "#9c2356" }} />
                    Wedding & Reception Catering
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2" style={{ color: "#9c2356" }} />
                    Party Platters & Live Food Stalls
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2" style={{ color: "#9c2356" }} />
                    Corporate & Conference Catering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">What We Offer</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 bg-white shadow-sm rounded">
                  <i className="fas fa-utensils fa-2x mb-3" style={{ color: "#9c2356" }} />
                  <h5>Wedding Catering</h5>
                  <p className="text-muted">
                    Customized wedding menus with traditional & modern dishes.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white shadow-sm rounded">
                  <i className="fas fa-birthday-cake fa-2x mb-3" style={{ color: "#9c2356" }} />
                  <h5>Birthday & Parties</h5>
                  <p className="text-muted">
                    Fun catering menus and food platters for birthdays & celebrations.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white shadow-sm rounded">
                  <i className="fas fa-briefcase fa-2x mb-3" style={{ color: "#9c2356" }} />
                  <h5>Corporate Events</h5>
                  <p className="text-muted">
                    Professional catering for conferences, seminars, and office events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">Our Catering Work</h2>
            <div className="row popup-gallery" data-masonry='{"percentPosition": true }'>
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

        {/* CTA */}
        <section className="py-5 text-white text-center" style={{ backgroundColor: "#9c2356" }}>
          <div className="container">
            <h2 className="fw-bold text-white st-2">Book Catering for Your Event</h2>
            <p className="mb-4">
              From weddings to birthdays and corporate functions, SrsEvent ensures
              delicious food and flawless service.
            </p>
            <a href="#contact" className="theme-btn bg-black">
              Enquire Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Catering;
