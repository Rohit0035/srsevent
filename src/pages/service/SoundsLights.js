import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/sl-grid.png";

// Import sound & light images
import vnA from "../../assets/img/common/sl-1.jpg";
import vnB from "../../assets/img/common/sl-2.jpg";
import vnC from "../../assets/img/common/sl-3.jpg";
import vnD from "../../assets/img/common/sl-4.jpg";
import { Helmet } from "react-helmet-async";

const SoundsLights = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "DJ Speakers with Lights" },
        { src: vnB, alt: "Event Sound & Lighting Setup" },
        { src: vnC, alt: "Stage Sound and Disco Lights" },
        { src: vnD, alt: "Night Event Lighting & Audio" },
    ];

    return (
        <>
            <Helmet>
                <title>Sound & Light Services for Events - SrsEvent</title>
                <meta
                    name="description"
                    content="Enhance your events with SrsEvent’s professional sound and light services. From DJ speakers with lights to full-stage lighting and audio setup, we deliver the perfect atmosphere for weddings, parties, and corporate events."
                />
                <meta
                    name="keywords"
                    content="DJ speakers with lights, sound to light disco lights, events sound and light, night sound and light, sounds & lights event, party sound system, wedding lighting setup, stage lights rental, event sound system hire, professional DJ setup, live concert sound and lights, corporate event audio visual, dance floor lights, LED event lighting, sound and light decoration"
                />
                <link rel="canonical" href="https://srsevent.com/sounds-lights" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/sounds-lights-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h1 className="fw-bold site-title">Sound & Light </h1>
                                <p className="mt-3">
                                    Music and lights bring life to every celebration. At SrsEvent,
                                    we provide <strong>high-quality sound systems, DJ speakers with lights,
                                    and dazzling event lighting</strong> to create the perfect atmosphere for weddings,
                                    parties, concerts, and corporate events. Whether it’s a grand stage setup or
                                    intimate night lighting, we’ve got you covered.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> DJ speakers with lights & party sound systems
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Stage lighting & disco lights for events
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Customized sound & light setups for all occasions
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Book Your Sound & Light Setup</h5>
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
                                <img src={svnimg} alt="Sound and Light Setup" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold st-2">Perfect Sound & Lighting for Every Occasion</h2>
                                <p>
                                    Whether it’s a <strong>wedding reception, DJ night, birthday party,
                                    live concert, or corporate event</strong>, our team ensures your
                                    event has the perfect balance of <strong>sound clarity and vibrant lighting</strong>.
                                    From disco lights to stage effects, we create the ultimate event experience.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Professional-grade sound systems
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> LED, disco & ambient lighting
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Customized packages for weddings, parties & events
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Included Features */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Sound & Light Services</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-music fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>DJ Speakers & Sound Systems</h5>
                                    <p className="text-muted">Crystal-clear sound for weddings, parties, and events.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-lightbulb fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Event Lighting</h5>
                                    <p className="text-muted">LED, disco, stage & mood lighting to set the tone.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-headphones fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Customized Packages</h5>
                                    <p className="text-muted">Tailored sound & lighting solutions for every event size.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Sound & Light Event Work</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Choose SrsEvent for Sound & Lights?</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-volume-up fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">High-Quality Sound</h6>
                                <p className="small text-muted">Crystal clear audio for any crowd size.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-lightbulb fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Dynamic Lighting</h6>
                                <p className="small text-muted">From disco vibes to elegant wedding lighting.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-users fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Experienced Team</h6>
                                <p className="small text-muted">Expert setup and live event support.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-star fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Custom Packages</h6>
                                <p className="small text-muted">Affordable solutions for every budget.</p>
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
                        <h2 className="fw-bold text-white st-2">Make Your Event Shine with Sound & Lights</h2>
                        <p className="mb-4">
                            Transform your event with <strong>professional sound systems and
                            stunning lighting effects</strong> by SrsEvent. Let’s create an unforgettable experience together.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Sound & Light Setup
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SoundsLights;
