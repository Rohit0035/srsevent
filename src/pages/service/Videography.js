import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryFormServices from "../../components/EnquiryFormServices";
import svnimg from "../../assets/img/common/ph-grid.png";
import { Helmet } from "react-helmet-async";

// Import video files
import vnA from "../../assets/img/common/vd-1.mp4";
import vnB from "../../assets/img/common/vd-2.mp4";
import vnC from "../../assets/img/common/vd-3.mp4";
import vnD from "../../assets/img/common/vd-4.mp4";

const Videography = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const media = [
    { type: "video", src: vnA, alt: "Wedding Video 1" },
    { type: "video", src: vnB, alt: "Wedding Video 2" },
    { type: "video", src: vnC, alt: "Wedding Video 3" },
    { type: "video", src: vnD, alt: "Wedding Video 4" },
  ];

  return (
    <>
      <Helmet>
        <title>Professional Videography Services - SrsEvent</title>
        <meta
          name="description"
          content="SrsEvent offers professional videography for weddings, birthdays, conferences, and parties. Capture your big day with cinematic wedding videos, reception highlights, and creative storytelling."
        />
        <meta
          name="keywords"
          content="prom videography, videography conference, birthday videographer, wedding videography, party videographer, wedding night videographer, cinematography wedding video"
        />
        <link rel="canonical" href="https://srsevent.com/videography" />
      </Helmet>

      <Header />
      <main className="main">
        {/* Hero Section */}
        <section
          className="py-5 bg-light st-b"
          style={{
            background:
              'url("assets/img/banner/videography-hero.jpg") center center/cover no-repeat',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 mb-3">
                <h1 className="fw-bold site-title">Wedding & Event Videography</h1>
                <p className="mt-3">
                  Your special day deserves to be remembered in motion. At
                  SrsEvent, our expert videographers create cinematic films that
                  capture the emotions, laughter, and unforgettable moments of
                  your event.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Wedding &
                    reception videography
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Birthday
                    parties & prom videography
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Conference
                    & corporate event coverage
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-6" id="contact">
                <div className="card st-color-card">
                  <div className="card-body">
                    <div className="card-header">
                      <h5 className="text-white">Book Your Videographer</h5>
                    </div>
                    <div
                      className="quote-content p-2"
                      style={{ backgroundColor: "#9c2356" }}
                    >
                      <EnquiryFormServices />
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
                <img src={svnimg} alt="Videography Overview" className="w-100" />
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <h2 className="fw-bold st-2">
                  Cinematic Memories, Perfectly Captured
                </h2>
                <p>
                  Whether it’s a wedding night videography, birthday celebration,
                  or conference, our videographers craft films that tell your
                  unique story. With advanced equipment and creative storytelling,
                  we make sure your event lives forever on screen.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" />{" "}
                    Cinematography wedding videos
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Party &
                    reception highlights
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Corporate
                    & conference videography
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Included Features */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">
              What’s Included in Our Videography Services
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-video fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Wedding Videography</h5>
                  <p className="text-muted">
                    Full coverage of your wedding rituals and celebrations.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-birthday-cake fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Birthday Parties</h5>
                  <p className="text-muted">
                    Fun-filled birthday videography with every happy moment
                    captured.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2 bg-white  h-100">
                  <i
                    className="fas fa-users fa-2x mb-3"
                    style={{ color: "#9c2356" }}
                  />
                  <h5>Corporate Events</h5>
                  <p className="text-muted">
                    Professional coverage of conferences, seminars & launches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">Our Videography Work</h2>
            <div
              className="row popup-gallery"
              data-masonry='{"percentPosition": true }'
            >
              {media.map((item, i) => (
                <div className="col-6 col-md-6 col-lg-3" key={i}>
                  <div className="gallery-item">
                    <div className="gallery-img">
                      <video
                        src={item.src}
                        alt={item.alt}
                        style={{
                          height: 180,
                          width: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-5 st-2">
              Why Choose SrsEvent Videography
            </h2>
            <div className="row g-4">
              <div className="col-md-3">
                <i
                  className="fas fa-award fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Top Videographers</h6>
                <p className="small text-muted">
                  Experienced professionals for weddings & events.
                </p>
              </div>
              <div className="col-md-3">
                <i
                  className="fas fa-film fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Cinematic Quality</h6>
                <p className="small text-muted">
                  Modern cinematography techniques for stunning films.
                </p>
              </div>
              <div className="col-md-3">
                <i
                  className="fas fa-smile fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Client Happiness First</h6>
                <p className="small text-muted">
                  We tailor every video to match your story.
                </p>
              </div>
              <div className="col-md-3">
                <i
                  className="fas fa-shield-alt fa-2x mb-2"
                  style={{ color: "#9c2356" }}
                />
                <h6 className="fw-bold">Reliable & Trusted</h6>
                <p className="small text-muted">
                  Your big day is safe in our hands and lenses.
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
              Ready to Capture Your Event in Motion?
            </h2>
            <p className="mb-4">
              From weddings to conferences, birthdays to parties – SrsEvent
              delivers professional videography tailored for your occasion.
            </p>
            <a href="#contact" className="theme-btn bg-black">
              Book Your Videographer Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Videography;
