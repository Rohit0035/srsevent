import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import floordecor from "../../assets/img/common/floor-decor.jpg"
// Import floral images
import fl1 from "../../assets/img/common/fl-1.jpg";
import fl2 from "../../assets/img/common/fl-2.jpg";
import fl3 from "../../assets/img/common/fl-3.jpg";
import fl4 from "../../assets/img/common/fl-4.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import EnquiryFormServices from "../../components/EnquiryFormServices";

const FloralDecor = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: fl1, alt: "Floral Décor 1" },
        { src: fl2, alt: "Floral Décor 2" },
        { src: fl3, alt: "Floral Décor 3" },
        { src: fl4, alt: "Floral Décor 4" },
    ];

    return (
        <>
            <Helmet>
                <title>Floral Décor - SrsEvent</title>
                <meta
                    name="description"
                    content="Transform your celebrations with stunning floral décor by SrsEvent. From weddings to parties, we create breathtaking floral arrangements, stage backdrops, and thematic flower setups to make your event unforgettable."
                />
                <meta
                    name="keywords"
                    content="floral décor, wedding decoration, flower arrangements, stage decoration, event decoration, SrsEvent floral services"
                />
                <link rel="canonical" href="https://srsevent.com/floraldecor" />
            </Helmet>
            <Header />
            <main className="main">
                {/* Floral Décor Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/floral-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6  mb-3">
                                <h1 className="fw-bold site-title">Floral Décor</h1>
                                <p className="mt-3">
                                    Flowers bring life, color, and freshness to every celebration. At
                                    SrsEvent, we design and execute unique floral décor concepts for
                                    weddings, corporate events, parties, and cultural ceremonies,
                                    ensuring elegance and charm at every corner.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i
                                            className="fas fa-check-circle me-2"
                                            style={{ color: "#9c2356" }}
                                        />{" "}
                                        Customized floral stage and mandap decoration
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            className="fas fa-check-circle me-2"
                                            style={{ color: "#9c2356" }}
                                        />{" "}
                                        Entry archways and thematic installations
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            className="fas fa-check-circle me-2"
                                            style={{ color: "#9c2356" }}
                                        />{" "}
                                        Fresh and premium quality flowers
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Enquiry Now</h5>
                                        </div>
                                        <div className="quote-content p-2" style={{backgroundColor:'#9c2356'}}>
                                            <EnquiryFormServices/>
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
                                    src={floordecor}
                                    alt="Floral Décor Overview"
                                    className="w-100 rounded shadow"
                                />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <h2 className="fw-bold st-2">Elegant Floral Arrangements</h2>
                                <p>
                                    Our floral décor is designed to match your theme and style. From
                                    traditional to modern, minimal to extravagant, our expert team
                                    curates the perfect floral arrangements to elevate the ambiance of
                                    your event.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i
                                            className="fas fa-check-circle me-2"
                                            style={{ color: "#9c2356" }}
                                        />{" "}
                                        Stage, mandap &amp; backdrop decoration
                                    </li>
                                    <li>
                                        <i
                                            className="fas fa-check-circle me-2"
                                            style={{ color: "#9c2356" }}
                                        />{" "}
                                        Entry gates, photo booths &amp; table décor
                                    </li>
                                    <li>
                                        <i
                                            className="fas fa-check-circle me-2"
                                            style={{ color: "#9c2356" }}
                                        />{" "}
                                        Creative flower themes &amp; concepts
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Included Features Section */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">What’s Included</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-3 bg-white shadow-sm rounded">
                                    <i className="fas fa-spa fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Stage &amp; Mandap Décor</h5>
                                    <p className="text-muted">
                                        Breathtaking floral mandaps and stage backdrops to set the tone of
                                        your event.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 bg-white shadow-sm rounded">
                                    <i
                                        className="fas fa-seedling fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Theme Concepts</h5>
                                    <p className="text-muted">
                                        Personalized floral concepts that reflect your theme and
                                        preferences.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 bg-white shadow-sm rounded">
                                    <i
                                        className="fas fa-star fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Premium Flowers</h5>
                                    <p className="text-muted">
                                        We use only the freshest and highest-quality flowers for décor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Floral Décor Gallery</h2>
                        <div
                            className="row popup-gallery wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay=".25s"
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
                            Why Choose SrsEvent for Floral Décor
                        </h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i
                                    className="fas fa-paint-brush fa-2x mb-2"
                                    style={{ color: "#9c2356" }}
                                />
                                <h6 className="fw-bold">Creative Designs</h6>
                                <p className="small text-muted">
                                    Unique floral concepts that wow your guests.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-leaf fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Fresh Flowers</h6>
                                <p className="small text-muted">
                                    We source premium flowers directly from trusted vendors.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-heart fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Personalized Touch</h6>
                                <p className="small text-muted">
                                    Décor tailored to your event’s mood and personality.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-award fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Professional Execution</h6>
                                <p className="small text-muted">
                                    Flawless on-site setup and timely arrangements.
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
                        <h2 className="fw-bold text-white st-2">Want Stunning Floral Décor?</h2>
                        <p className="mb-4">
                            Let SrsEvent design mesmerizing floral arrangements for your big day.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book a Free Consultation
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FloralDecor;