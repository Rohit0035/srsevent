import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/ph-grid.png";

// Import photography images
import vnA from "../../assets/img/common/ph-1.jpg";
import vnB from "../../assets/img/common/ph-2.jpg";
import vnC from "../../assets/img/common/ph-3.jpg";
import vnD from "../../assets/img/common/ph-4.jpg";
import { Helmet } from "react-helmet-async";

const DjLiveBandMusical = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Wedding Photography 1" },
        { src: vnB, alt: "Wedding Photography 2" },
        { src: vnC, alt: "Wedding Photography 3" },
        { src: vnD, alt: "Wedding Photography 4" },
    ];

    return (
        <>
            <Helmet>
                <title>Wedding Photography - SrsEvent</title>
                <meta
                    name="description"
                    content="Capture your most cherished memories with SrsEvent’s professional wedding photography services. From pre-wedding shoots to reception coverage, we deliver timeless photos that tell your love story."
                />
                <meta
                    name="keywords"
                    content="photography event, wedding photos, photography wedding packages, wedding shoot, top wedding photographers, wedding villa photos, wedding event photos, reception wedding photos"
                />
                <link rel="canonical" href="https://srsevent.com/photography" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/photography-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h1 className="fw-bold site-title">Wedding Photography</h1>
                                <p className="mt-3">
                                    At SrsEvent, we believe every smile, every tear, and every moment deserves to be
                                    captured beautifully. Our professional photographers bring creativity,
                                    precision, and passion to ensure your wedding memories last forever.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Pre-wedding & candid photoshoots
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Complete wedding & reception coverage
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Professional editing & premium albums
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Book Your Photographer</h5>
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
                                <img src={svnimg} alt="Wedding Photography Overview" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold st-2">Timeless Wedding Memories</h2>
                                <p>
                                    From intimate wedding villa photos to grand reception shoots, our team
                                    ensures no moment goes unnoticed. We specialize in candid, cinematic,
                                    and traditional wedding photography with packages tailored to your needs.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Customized photography wedding packages
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Expert team of top wedding photographers
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> High-quality albums & digital delivery
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Included Features */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">What’s Included in Our Photography Services</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-camera-retro fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Pre-Wedding Shoots</h5>
                                    <p className="text-muted">Stylish and romantic photo sessions before your big day.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-heart fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Candid Moments</h5>
                                    <p className="text-muted">Natural, emotion-filled captures you’ll cherish forever.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-users fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Full Wedding Coverage</h5>
                                    <p className="text-muted">From rituals to reception, we cover every special moment.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-gift fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Reception Highlights</h5>
                                    <p className="text-muted">Memorable photos of your celebration & loved ones.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-photo-video fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Album & Editing</h5>
                                    <p className="text-muted">Premium retouching & handcrafted wedding albums.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i className="fas fa-cloud-download-alt fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Digital Delivery</h5>
                                    <p className="text-muted">Fast delivery of wedding photos in digital format.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Wedding Photography Work</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Couples Choose SrsEvent Photography</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-award fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Top Wedding Photographers</h6>
                                <p className="small text-muted">Experienced professionals with a creative eye.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-camera fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Candid & Cinematic Style</h6>
                                <p className="small text-muted">Modern techniques for stunning wedding photos.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-smile fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Client Happiness First</h6>
                                <p className="small text-muted">Personalized service to match your vision.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-shield-alt fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Reliable & Trusted</h6>
                                <p className="small text-muted">We ensure every moment is captured beautifully.</p>
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
                        <h2 className="fw-bold text-white st-2">Ready to Capture Your Big Day?</h2>
                        <p className="mb-4">
                            Let SrsEvent make your wedding unforgettable with professional photography packages
                            tailored just for you.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Your Wedding Shoot
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default DjLiveBandMusical;
