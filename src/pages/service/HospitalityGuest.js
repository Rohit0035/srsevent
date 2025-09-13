import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import svnimg from "../../assets/img/common/ser-gestwel.jpg";
import vnA from "../../assets/img/common/hoges-1.jpg";
import vnB from "../../assets/img/common/hoges-2.jpg";
import vnC from "../../assets/img/common/hoges-3.jpg";
import vnD from "../../assets/img/common/hoges-4.jpg";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";

const HospitalityGuest = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: vnA, alt: "Hospitality and Event Management Training" },
    { src: vnB, alt: "Tourism and Event Management Program" },
    { src: vnC, alt: "Event Planning and Hospitality Course" },
    { src: vnD, alt: "Hospitality & Event Management Career" },
  ];

  return (
    <>
      <Helmet>
        <title>
          Hospitality and Event Management Course | SrsEvent 
        </title>
        <meta
          name="description"
          content="Join SrsEvent’s professional Hospitality and Event Management program. Learn tourism, hotel operations, event planning, and global hospitality skills. Build your career in hospitality & event management."
        />
        <meta
          name="keywords"
          content="hospitality and event management, hospitality & event management, event management and hospitality, tourism hospitality and event management, opleiding hospitality en evenementen management, hospitality management course, event management training, hospitality career opportunities, event planning degree, hotel and tourism management, best hospitality colleges, international hospitality program"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/hospitalityguest"
        />
      </Helmet>

      <Header />
      <main className="main">
        {/* Hero Section */}
        <section
          className="py-5 bg-light st-b"
          style={{
            background:
              'url("assets/img/banner/hospitality-hero.jpg") center center/cover no-repeat',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 mb-3">
                <h1 className="fw-bold site-title">
                  Hospitality & Event Management
                </h1>
                <p className="mt-3">
                  Step into a global career with our{" "}
                  <strong>Hospitality and Event Management course</strong>. From
                  tourism and hotel operations to event planning and management,
                  SrsEvent provides world-class training to prepare you for
                  opportunities in hotels, resorts, conventions, and the tourism
                  industry.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Complete
                    training in hospitality & event management
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Tourism,
                    hotel operations & event planning modules
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Career
                    support & placement assistance worldwide
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-6" id="contact">
                <div className="card st-color-card">
                  <div className="card-body">
                    <div className="card-header">
                      <h5 className="text-white">Get Course Details</h5>
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
                  alt="Hospitality and Event Management Overview"
                  className="w-100"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <h2 className="fw-bold st-2">
                  Build a Career in Hospitality & Event Management
                </h2>
                <p>
                  The <strong>hospitality and event management program</strong>{" "}
                  at SrsEvent is designed for students passionate about tourism,
                  event planning, and hotel services. Learn skills in guest
                  relations, event coordination, customer service, and tourism
                  management. Gain practical knowledge and open doors to a
                  global career.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Expert
                    trainers from hospitality & tourism industry
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Practical
                    projects in event planning and hospitality
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Globally
                    recognized certification in hospitality management
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
              Why Choose Hospitality & Event Management
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 bg-white h-100">
                  <i
                    className="fas fa-hotel fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Hotel & Tourism Industry</h5>
                  <p className="text-muted">
                    Learn hotel operations, tourism management & guest
                    experience skills.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white h-100">
                  <i
                    className="fas fa-calendar-check fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Event Planning</h5>
                  <p className="text-muted">
                    Master corporate events, weddings, conferences & global
                    functions.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white h-100">
                  <i
                    className="fas fa-globe fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>International Careers</h5>
                  <p className="text-muted">
                    Open global opportunities in hospitality and event
                    management worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">
              Our Hospitality & Event Management Training
            </h2>
            <div className="row">
              {images.map((img, i) => (
                <div className="col-6 col-md-6 col-lg-3 mb-3" key={i}>
                  <div
                    className="gallery-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-100"
                      style={{ height: 180, objectFit: "cover" }}
                    />
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

        {/* Call to Action */}
        <section
          className="py-5 text-white text-center"
          style={{ backgroundColor: "#9c2356" }}
        >
          <div className="container">
            <h2 className="fw-bold text-white st-2">
              Start Your Career in Hospitality & Event Management
            </h2>
            <p className="mb-4">
              Enroll today in our{" "}
              <strong>hospitality and event management program</strong> and take
              your first step towards a successful global career in hotel,
              tourism, and events.
            </p>
            <a href="#contact" className="theme-btn bg-black">
              Apply Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HospitalityGuest;
