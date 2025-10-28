import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import svnimg from "../../assets/img/common/ser-djlight-abt.jpg";

import vnA from "../../assets/img/common/ser-djl-g1.jpeg";
import vnB from "../../assets/img/common/ser-djl-g2.jpeg";
import vnC from "../../assets/img/common/ser-djl-g3.jpg";
import vnD from "../../assets/img/common/ser-djlg4.jpg";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";

const DjLiveBandMusical = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "DJ Live Band Wedding Performance" },
        { src: vnB, alt: "Musical Arrangement for Reception" },
        { src: vnC, alt: "DJ and Band Celebration Night" },
        { src: vnD, alt: "Live Band Music Wedding Party" },
    ];

    return (
        <>
            <Helmet>
                <title>Top DJs & Live Bands in Bangalore | SRS Event Entertainment</title>
                <meta
                    name="description"
                    content="Book live bands & DJs from SRS Event — unmatched music, sound & energy for weddings, parties & corporate celebrations in Bangalore."
                />
                <meta
                    name="keywords"
                    content="DJ services, live band wedding, musical arrangements, wedding DJ, reception music, celebration DJ, choral arrangements, first night DJ, rendezvous music, zombie choir arrangement, see you again choral arrangement, silent night harp sheet music, simple gifts choral arrangement, singin in the rain mark hayes, acapella arrangement, wedding live music, party DJ, event music, corporate DJ, orchestra, traditional wedding music, cultural music shows"
                />
                <link rel="canonical" href="https://www.srsevent.com/dj-live-band-musical-arrangements-in-bangalore" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/dj-live-band-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h1 className="fw-bold site-title">DJ, Live Band & Musical Arrangements</h1>
                                <p className="mt-3">
                                    From high-energy DJ nights to soulful live band performances, SrsEvent
                                    ensures your wedding or celebration is filled with music that moves hearts.
                                    We provide customized musical arrangements for weddings, receptions,
                                    cocktail nights, and cultural events.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Professional DJs for weddings & parties
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Live bands with versatile genres
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Choral & acapella arrangements
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Book Your DJ / Band</h5>
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
                                <img src={svnimg} alt="DJ and Band Overview" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold st-2">Music that Defines Moments</h2>
                                <p>
                                    Whether you want an energetic DJ mixing the latest hits or a soothing band
                                    performing timeless classics, we tailor the music to match your event’s mood.
                                    Our arrangements include everything from wedding anthems to unique choral
                                    and acapella performances.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Customized playlists & music themes
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Orchestra, cultural, and fusion music
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Professional sound & lighting setup
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Musical Arrangements</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Choose Our Musical Services</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-music fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Professional DJs</h6>
                                <p className="small text-muted">Experienced DJs for weddings & parties.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-guitar fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Live Bands</h6>
                                <p className="small text-muted">Performing jazz, pop, rock, and classical tunes.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-users fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Choral & Acapella</h6>
                                <p className="small text-muted">Special arrangements for emotional moments.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-volume-up fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Complete Setup</h6>
                                <p className="small text-muted">Full sound, light & stage arrangements.</p>
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
                        <h2 className="fw-bold text-white st-2">Ready to Groove on Your Big Day?</h2>
                        <p className="mb-4">
                            Book our DJs, live bands, or special musical performances and make your wedding or celebration unforgettable.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Your Music Experience
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default DjLiveBandMusical;
