import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/ser-wedlive.png";

// Import images (can be thumbnails or behind-the-scenes shots)
import vnA from "../../assets/img/common/ph-1.jpg";
import vnB from "../../assets/img/common/ph-2.jpg";
import vnC from "../../assets/img/common/ph-3.jpg";
import vnD from "../../assets/img/common/ph-4.jpg";
import { Helmet } from "react-helmet-async";

const WeddingLive = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Wedding Live Streaming Service" },
        { src: vnB, alt: "Professional Wedding Videographer" },
        { src: vnC, alt: "Live Stream Wedding Coverage" },
        { src: vnD, alt: "Wedding Virtual Streaming Setup" },
    ];

    return (
        <>
            <Helmet>
                <title>Wedding Live Streaming Services | SrsEvent</title>
                <meta
                    name="description"
                    content="SrsEvent offers professional wedding live streaming services. From harga jasa live streaming wedding to destination wedding live broadcasts, we ensure your special day is shared with loved ones anywhere in the world via Zoom, YouTube, or Facebook."
                />
                <meta
                    name="keywords"
                    content="harga jasa live streaming wedding, live stream videographer, wedding live streaming, livestream wedding live, live stream wedding, live streaming pernikahan, stream wedding on zoom, live stream your wedding free, affordable wedding live stream, best wedding live streaming service, professional wedding videography live, virtual wedding streaming, destination wedding live stream"
                />
                <link rel="canonical" href="https://srsevent.com/weddinglive" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/wedding-live-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h1 className="fw-bold site-title">Wedding Live Streaming</h1>
                                <p className="mt-3">
                                    Can’t have all your loved ones attend your wedding? With{" "}
                                    <strong>SrsEvent’s professional wedding live streaming</strong>,
                                    you can share your big day in real time with friends and family
                                    across the globe. Whether it’s{" "}
                                    <em>live streaming pernikahan, Zoom wedding streaming,</em> or
                                    broadcasting to YouTube & Facebook, we make it seamless and
                                    memorable.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Harga jasa
                                        live streaming wedding yang terjangkau
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Multi-camera
                                        live stream & professional videographer team
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> HD/4K quality
                                        broadcast on Zoom, YouTube & Facebook
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Get Live Stream Package</h5>
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
                                <img src={svnimg} alt="Wedding Live Streaming Setup" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold st-2">Stream Your Wedding Anywhere</h2>
                                <p>
                                    Our <strong>live stream wedding services</strong> are perfect for
                                    couples with guests unable to travel. We provide{" "}
                                    <em>affordable wedding live stream packages</em> with full
                                    professional videography support. From multi-camera setups to
                                    crystal-clear audio, we ensure your virtual guests feel as if
                                    they’re right there with you.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Stream
                                        wedding on Zoom, YouTube, or Facebook Live
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Reliable
                                        internet & backup streaming solutions
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Professional
                                        wedding videographers with live experience
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Why Choose Our Wedding Live Streaming</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-3 bg-white h-100">
                                    <i className="fas fa-video fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>HD & 4K Quality</h5>
                                    <p className="text-muted">
                                        Professional-grade cameras & streaming equipment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 bg-white h-100">
                                    <i className="fas fa-broadcast-tower fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Multi-Platform</h5>
                                    <p className="text-muted">
                                        Live stream your wedding on Zoom, YouTube, or Facebook.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 bg-white h-100">
                                    <i className="fas fa-users fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Virtual Guests</h5>
                                    <p className="text-muted">
                                        Let loved ones from anywhere in the world join your big day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Wedding Live Stream Work</h2>
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

                {/* Call to Action */}
                <section
                    className="py-5 text-white text-center"
                    style={{ backgroundColor: "#9c2356" }}
                >
                    <div className="container">
                        <h2 className="fw-bold text-white st-2">Stream Your Wedding Live with SrsEvent</h2>
                        <p className="mb-4">
                            From <strong>affordable wedding live stream packages</strong> to
                            full <em>professional wedding videography live</em>, we make sure
                            every guest—whether in person or online—feels part of your special
                            celebration.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Your Live Stream
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default WeddingLive;
