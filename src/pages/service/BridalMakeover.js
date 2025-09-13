import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bridalImg from "../../assets/img/common/bdr-grid.png";

// Import bridal makeup images
import bm1 from "../../assets/img/common/bdr-1.jpg";
import bm2 from "../../assets/img/common/bdr-2.jpg";
import bm3 from "../../assets/img/common/bdr-3.jpg";
import bm4 from "../../assets/img/common/bdr-4.jpg";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";


const BridalMakeover = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: bm1, alt: "Bridal Makeup Look 1" },
        { src: bm2, alt: "Bridal Makeup Look 2" },
        { src: bm3, alt: "Bridal Makeup Look 3" },
        { src: bm4, alt: "Bridal Makeup Look 4" },
    ];

    return (
        <>
            <Helmet>
                <title>Best Bridal Makeup Services - SrsEvent</title>
                <meta
                    name="description"
                    content="Get the perfect bridal makeup for your wedding day with SrsEvent’s professional bridal makeup specialists. Explore bridal makeup packages, prices, and services near you."
                />
                <meta
                    name="keywords"
                    content="bridal makeup, bridal makeup price, bridal makeup charges, bridal makeup rates, bridal makeup near me, bridal makeup specialist, bridal makeup hindu wedding, beauty bridal makeup, wedding bridal makeup, best bridal makeup"
                />
                <link rel="canonical" href="https://srsevent.com/bridalmakeup" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/bridal-makeup-hero.jpg") center center/cover no-repeat',
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <h1 className="fw-bold site-title">Bridal Makeup</h1>
                                <p className="mt-3">
                                    Your wedding day is the most special day of your life, and at
                                    SrsEvent, our bridal makeup specialists ensure you look
                                    flawless, radiant, and confident. From traditional Hindu
                                    wedding makeup to modern beauty bridal looks, we deliver the
                                    perfect transformation for every bride.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Bridal
                                        makeup for weddings & receptions
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> HD &
                                        Airbrush makeup techniques
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Bridal
                                        hairstyling & draping included
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Book Your Bridal Makeup</h5>
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
                                    src={bridalImg}
                                    alt="Bridal Makeup Overview"
                                    className="w-100"
                                />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <h2 className="fw-bold st-2">Professional Bridal Makeover</h2>
                                <p>
                                    Whether you want a traditional bridal makeup look or a modern
                                    beauty makeover, our team offers customized bridal makeup
                                    packages at the best rates. We enhance your natural beauty to
                                    make you shine on your big day.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Bridal
                                        makeup price & packages tailored to your needs
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Premium
                                        products for long-lasting results
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Makeup
                                        trials available on request
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Included Features */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">What’s Included in Our Bridal Makeup Services</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i
                                        className="fas fa-magic fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>HD & Airbrush Makeup</h5>
                                    <p className="text-muted">
                                        Flawless finish that lasts throughout your wedding
                                        celebrations.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i
                                        className="fas fa-female fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Bridal Hairstyling</h5>
                                    <p className="text-muted">
                                        Perfect hairstyles to complement your bridal makeup look.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i
                                        className="fas fa-gem fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Draping Services</h5>
                                    <p className="text-muted">
                                        Saree, lehenga, or gown draping with precision for a
                                        complete bridal makeover.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i
                                        className="fas fa-star fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Makeup Trials</h5>
                                    <p className="text-muted">
                                        Try your bridal look before the big day with our trial
                                        sessions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i
                                        className="fas fa-leaf fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Skin-Friendly Products</h5>
                                    <p className="text-muted">
                                        Only premium, dermatologically tested products used.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i
                                        className="fas fa-rupee-sign fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Affordable Rates</h5>
                                    <p className="text-muted">
                                        Bridal makeup charges designed to suit every budget.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Bridal Makeup Work</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Brides Choose SrsEvent Bridal Makeup</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i
                                    className="fas fa-user-tie fa-2x mb-2"
                                    style={{ color: "#9c2356" }}
                                />
                                <h6 className="fw-bold">Expert Specialists</h6>
                                <p className="small text-muted">
                                    Skilled bridal makeup artists with years of experience.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i
                                    className="fas fa-crown fa-2x mb-2"
                                    style={{ color: "#9c2356" }}
                                />
                                <h6 className="fw-bold">Custom Looks</h6>
                                <p className="small text-muted">
                                    Tailored to match your wedding attire & traditions.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i
                                    className="fas fa-smile fa-2x mb-2"
                                    style={{ color: "#9c2356" }}
                                />
                                <h6 className="fw-bold">Client Satisfaction</h6>
                                <p className="small text-muted">
                                    We ensure you feel beautiful and confident on your big day.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i
                                    className="fas fa-award fa-2x mb-2"
                                    style={{ color: "#9c2356" }}
                                />
                                <h6 className="fw-bold">Best Bridal Makeup</h6>
                                <p className="small text-muted">
                                    Recognized for excellence in bridal makeover services.
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
                        <h2 className="fw-bold text-white st-2">Want the Perfect Bridal Makeup?</h2>
                        <p className="mb-4">
                            Let SrsEvent transform your wedding day look with expert bridal
                            makeup services at the best prices.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Your Bridal Makeup Now
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default BridalMakeover;
