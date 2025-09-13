import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import svnimg from "../../assets/img/common/ser-fun-abt.jpg";

import vnA from "../../assets/img/common/ser-fun-g1.jpg";
import vnB from "../../assets/img/common/ser-fun-g2.jpg";
import vnC from "../../assets/img/common/ser-fun-g3.jpg";
import vnD from "../../assets/img/common/ser-fun-g4.jpg";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";

const FunGamesInteractive = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: vnA, alt: "Fun wedding games and activities" },
    { src: vnB, alt: "Corporate team building games" },
    { src: vnC, alt: "Interactive party activities" },
    { src: vnD, alt: "Birthday fun games and entertainment" },
  ];

  return (
    <>
      <Helmet>
        <title>Fun Games & Interactive Activities - SrsEvent</title>
        <meta
          name="description"
          content="Engage your guests with SrsEvent’s fun games and interactive activities. Perfect for weddings, receptions, birthdays, family gatherings, and corporate events to add laughter, excitement, and unforgettable memories."
        />
        <meta
          name="keywords"
          content="fun games for wedding, interactive activities for events, party games ideas, corporate team building activities, birthday fun activities, wedding entertainment games, kids and family games, icebreaker activities, group interactive games, reception fun ideas, family engagement games, outdoor party games, cultural event activities, indoor fun activities, unique wedding entertainment, team bonding games"
        />
        <link rel="canonical" href="https://srsevent.com/fungamesinteractive" />
      </Helmet>

      <Header />
      <main className="main">
        {/* Hero Section */}
        <section
          className="py-5 bg-light st-b"
          style={{
            background:
              'url("assets/img/banner/fun-games-hero.jpg") center center/cover no-repeat'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-3">
                <h1 className="fw-bold site-title">Fun Games & Interactive Activities</h1>
                <p className="mt-3">
                  Make your celebrations lively and unforgettable with engaging fun games
                  and interactive activities. From icebreakers at weddings to team-building
                  corporate games, we ensure every guest enjoys, laughs, and participates.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Wedding & reception fun games
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Corporate team-building activities
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Birthday & family interactive entertainment
                  </li>
                </ul>
              </div>
              <div className="col-md-6" id="contact">
                <div className="card st-color-card">
                  <div className="card-body">
                    <div className="card-header">
                      <h5 className="text-white">Book Fun Games for Your Event</h5>
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
              <div className="col-md-6 mb-4 mb-md-0">
                <img src={svnimg} alt="Fun and interactive games overview" className="w-100" />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold st-2">Entertainment That Connects Everyone</h2>
                <p>
                  Our curated list of interactive activities and group games is designed
                  to engage every age group. Whether it’s a wedding sangeet, a birthday bash,
                  or a corporate retreat, we make sure guests have fun and bond together.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Icebreaker & group activities
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Fun games for kids, families & couples
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Indoor & outdoor interactive entertainment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">Our Fun Activities in Action</h2>
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
            <h2 className="fw-bold mb-5 st-2">Why Choose Our Fun Games & Activities</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <i className="fas fa-smile-beam fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">Engaging & Entertaining</h6>
                <p className="small text-muted">Fun-filled games that keep everyone smiling.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-users fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">All Age Groups</h6>
                <p className="small text-muted">Activities designed for kids, adults & families.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-handshake fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">Team Bonding</h6>
                <p className="small text-muted">Boost interaction at weddings & corporate events.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-trophy fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">Memorable Moments</h6>
                <p className="small text-muted">Unforgettable experiences guests will talk about.</p>
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
            <h2 className="fw-bold text-white st-2">Bring Laughter & Energy to Your Event</h2>
            <p className="mb-4">
              Book our fun games and interactive activities to add joy, excitement,
              and unforgettable engagement to your celebration.
            </p>
            <a href="#contact" className="theme-btn bg-black">
              Book Fun Activities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FunGamesInteractive;
