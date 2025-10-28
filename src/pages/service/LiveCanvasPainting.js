import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import svnimg from "../../assets/img/common/ser-art-abt.jpg";

import vnA from "../../assets/img/common/ser-art-g1.jpeg";
import vnB from "../../assets/img/common/ser-art-g2.jpeg";
import vnC from "../../assets/img/common/ser-art-g3.jpeg";
import vnD from "../../assets/img/common/ser-art-g4.jpeg";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";

const LiveCanvasPainting = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Live canvas painting at wedding" },
        { src: vnB, alt: "Caricature artist event performance" },
        { src: vnC, alt: "Sketch artist at party" },
        { src: vnD, alt: "Wedding live sketching artist" },
    ];

    return (
        <>
            <Helmet>
                <title>Live Wedding Artists & Caricature Sketches in Bangalore | SRS Event</title>
                <meta
                    name="description"
                    content="Add a creative touch to your event with live painting & caricature artists by SRS Event — interactive, fun & personalized for guests."
                />
                <meta
                    name="keywords"
                    content="live canvas painting, sketch artist for wedding, caricature artist for events, wedding live painting, birthday caricature, corporate sketch artist, live portrait artist, event caricature drawing, personalized caricature, wedding sketch art, live wedding painter, party caricature artist, live art performance, cultural event sketching, caricature wedding favors, hand-drawn portraits for events"
                />
                <link rel="canonical" href="https://www.srsevent.com/live-painting-caricature-artists-in-bangalore" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/live-art-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h1 className="fw-bold site-title">Live Canvas Painting, Sketching & Caricature Artists</h1>
                                <p className="mt-3">
                                    Make your event unforgettable with professional live canvas painters,
                                    caricature artists, and sketch performers. From capturing wedding moments
                                    on canvas to fun caricatures for guests, we bring art to life in real time.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Live wedding canvas painting
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Caricature artists for parties & receptions
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Quick sketch portraits for guests
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Book Your Live Art Experience</h5>
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
                                <img src={svnimg} alt="Live canvas and caricature overview" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold st-2">Art That Captures Every Emotion</h2>
                                <p>
                                    Our live artists specialize in creating lasting memories through their
                                    brushes and pencils. Whether it’s a grand wedding, an intimate birthday,
                                    or a corporate gala, live painting and caricatures add charm, entertainment,
                                    and a personal touch to your event.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Personalized portraits & guest caricatures
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Canvas painting of wedding ceremonies
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Fun sketching for interactive entertainment
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Live Art Performances</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Choose Our Live Artists</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-paint-brush fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Live Canvas Painters</h6>
                                <p className="small text-muted">Transform your special moments into timeless artwork.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-user-edit fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Caricature Artists</h6>
                                <p className="small text-muted">Fun & engaging caricatures for weddings and parties.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-pencil-alt fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Sketch Artists</h6>
                                <p className="small text-muted">Quick sketches & portraits to delight your guests.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-star fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Memorable Keepsakes</h6>
                                <p className="small text-muted">Unique art gifts your guests will cherish forever.</p>
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
                        <h2 className="fw-bold text-white st-2">Add a Creative Touch to Your Celebration</h2>
                        <p className="mb-4">
                            Book our live painters, caricature, and sketch artists to make your event truly unique
                            and give your guests memories they can take home.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Live Artists
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default LiveCanvasPainting;
