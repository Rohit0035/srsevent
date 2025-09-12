import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/ser-gag-abt.jpg";

import vnA from "../../assets/img/common/ser-gag-g1.jpg";
import vnB from "../../assets/img/common/ser-gag-g2.jpeg";
import vnC from "../../assets/img/common/ser-gag-g3.jpeg";
import vnD from "../../assets/img/common/ser-gag-g4.jpeg";
import { Helmet } from "react-helmet-async";

const GangaAarti = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: vnA, alt: "Ganga Aarti Ritual" },
    { src: vnB, alt: "Devotees at Ganga Aarti" },
    { src: vnC, alt: "Spiritual Evening Ceremony" },
    { src: vnD, alt: "Ganga Aarti Lamps and Prayers" },
  ];

  return (
    <>
      <Helmet>
        <title>Ganga Aarti Ceremony – Spiritual Evening Ritual on the Ganges</title>
        <meta
          name="description"
          content="Experience the divine Ganga Aarti Ceremony on the banks of the Ganges. A soulful evening ritual with chanting, lamps, and prayers, connecting you to India’s spiritual heritage."
        />
        <meta
          name="keywords"
          content="Ganga Aarti, Varanasi Ganga Aarti, Ganga Aarti Haridwar, spiritual rituals India, evening prayer ceremony, Hindu rituals, Ganga river puja, Indian culture, spiritual travel, sacred river ceremony"
        />
        <link rel="canonical" href="https://srsevent.com/gangaaarti" />
      </Helmet>

      <Header />
      <main className="main">
        {/* Hero Section */}
        <section
          className="py-5 bg-light st-b"
          style={{
            background:
              'url("assets/img/banner/ganga-aarti-hero.jpg") center center/cover no-repeat'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-3">
                <h1 className="fw-bold site-title">Ganga Aarti Ceremony</h1>
                <p className="mt-3">
                  Witness the mesmerizing Ganga Aarti, a spiritual evening ritual
                  performed on the sacred banks of the Ganges. With chants, hymns,
                  fire lamps, and divine energy, it’s an unforgettable cultural
                  and spiritual experience.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Sacred evening ritual on the Ganges
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Spiritual chanting & divine energy
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-pink me-2" /> Popular in Varanasi, Haridwar & Rishikesh
                  </li>
                </ul>
              </div>
              <div className="col-md-6" id="contact">
                <div className="card st-color-card">
                  <div className="card-body">
                    <div className="card-header">
                      <h5 className="text-white">Book Ganga Aarti Experience</h5>
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
              <div className="col-md-6 mb-4 mb-md-0">
                <img src={svnimg} alt="Ganga Aarti overview" className="w-100" />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold st-2">A Divine Cultural Experience</h2>
                <p>
                  The Ganga Aarti is a devotional offering to Goddess Ganga,
                  celebrated with oil lamps, incense, and devotional songs.
                  It brings together locals, pilgrims, and travelers in a
                  spiritual atmosphere of unity and devotion.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Fire lamps & hymns creating divine aura
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> Cultural and spiritual significance
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-pink me-2" /> A must-experience for travelers in India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4 st-2">Ganga Aarti in Pictures</h2>
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
            <h2 className="fw-bold mb-5 st-2">Why Attend Ganga Aarti with Us</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <i className="fas fa-praying-hands fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">Spiritual Connection</h6>
                <p className="small text-muted">Feel divine energy during the ceremony.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-users fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">Cultural Unity</h6>
                <p className="small text-muted">Join pilgrims, locals & travelers together.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-music fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">Devotional Chants</h6>
                <p className="small text-muted">Immerse in soulful mantras & bhajans.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-fire fa-2x mb-2" style={{ color: "#9c2356" }} />
                <h6 className="fw-bold">Sacred Fire Ritual</h6>
                <p className="small text-muted">Experience the glowing diyas & aarti flames.</p>
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
            <h2 className="fw-bold text-white st-2">Be Part of the Divine Ceremony</h2>
            <p className="mb-4">
              Join us at the Ganga Aarti and feel the spiritual essence
              of India’s most sacred river. A life-changing experience awaits you.
            </p>
            <a href="#contact" className="theme-btn bg-black">
              Book Your Ganga Aarti Experience
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GangaAarti;
