import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/col-grid.jpg";

// Import effect images
import vnA from "../../assets/img/common/col-1.jpg";
import vnB from "../../assets/img/common/col-2.jpg";
import vnC from "../../assets/img/common/col-3.jpg";
import vnD from "../../assets/img/common/col-4.jpg";
import { Helmet } from "react-helmet-async";

const ColdCyro = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Cold Pyro Show at Wedding" },
        { src: vnB, alt: "CO2 Jet Special Effects" },
        { src: vnC, alt: "Fog Effect Event Decoration" },
        { src: vnD, alt: "Confetti & Firecracker Show" },
    ];

    return (
        <>
            <Helmet>
                <title>Cold Pyro, CO₂ Jet, Fog, Confetti & Firecracker Shows - SrsEvent</title>
                <meta
                    name="description"
                    content="Make your wedding or event unforgettable with Cold Pyro, CO₂ Jets, Fog Effects, Confetti Blasts, and Firecracker Shows by SrsEvent. Safe, stunning, and designed for magical moments."
                />
                <meta
                    name="keywords"
                    content="cold pyro, cold pyro rental, CO2 jet effect, CO2 jet rental, fog machine effect, fog effect for wedding, fog effect dance floor, confetti blast rental, confetti shower event, firecracker show, wedding fireworks, event special effects, stage pyro effects, event cold fireworks, indoor fireworks, wedding cold pyro, event effects rental near me"
                />
                <link rel="canonical" href="https://srsevent.com/coldcyro" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/effect-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <h1 className="fw-bold site-title">Cold Pyro & Event Effects</h1>
                                <p className="mt-3">
                                    Create unforgettable experiences with our premium event special effects —
                                    from spectacular <strong>Cold Pyro shows</strong> to stunning
                                    <strong> CO₂ Jets, Fog Machines, Confetti Blasts, and Firecracker Displays</strong>.  
                                    Perfect for weddings, concerts, birthdays, and corporate events.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Cold Pyro indoor & outdoor safe fireworks
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> CO₂ Jets & Fog effects for stage entries
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Confetti & Firecracker shows for celebrations
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Book Your Event Effects</h5>
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
                                <img src={svnimg} alt="Event Effects Overview" className="w-100" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <h2 className="fw-bold st-2">Magical Moments with Special Effects</h2>
                                <p>
                                    Whether it’s a wedding entry, a concert stage, or a birthday celebration,
                                    our event effects make your moments larger than life. With safe, 
                                    professional equipment, we add that “wow factor” to every event.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Cold Pyro for grand entries & cake cuttings
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> CO₂ Jets & Fog Machines for stage effects
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Confetti showers & Firecracker displays
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Special Effects Services</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-fire fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Cold Pyro</h5>
                                    <p className="text-muted">Safe, smokeless fireworks perfect for indoor & outdoor events.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-wind fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>CO₂ Jet Effects</h5>
                                    <p className="text-muted">High-energy stage entrances with CO₂ smoke blasts.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-cloud fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Fog Machine</h5>
                                    <p className="text-muted">Dramatic low-lying fog for dance floors and weddings.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-star fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Confetti Blasts</h5>
                                    <p className="text-muted">Colorful confetti showers for celebrations and concerts.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-bolt fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Firecracker Shows</h5>
                                    <p className="text-muted">Outdoor fireworks for weddings, parties & corporate events.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Event Effects in Action</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Choose SrsEvent Special Effects</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-shield-alt fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Safe & Certified</h6>
                                <p className="small text-muted">All effects are safe, eco-friendly, and venue-approved.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-users fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Professional Team</h6>
                                <p className="small text-muted">Trained experts to handle setup & execution.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-magic fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Unmatched Experience</h6>
                                <p className="small text-muted">Trusted by weddings, concerts, and big brands.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-star fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Memorable Impact</h6>
                                <p className="small text-muted">Guaranteed “wow factor” at every event.</p>
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
                        <h2 className="fw-bold text-white st-2">Ready to Add Spark to Your Event?</h2>
                        <p className="mb-4">
                            Book Cold Pyro, CO₂ Jets, Fog Effects, Confetti Blasts, and Firecracker Shows with SrsEvent to
                            make your wedding or party unforgettable.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Special Effects Now
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ColdCyro;
