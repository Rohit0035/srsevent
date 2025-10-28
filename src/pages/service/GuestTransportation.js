import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import svnimg from "../../assets/img/common/ser-gestt.jpg";

// Import sample transportation images
import vnA from "../../assets/img/common/gu-1.jpg";
import vnB from "../../assets/img/common/gu-2.jpg";
import vnC from "../../assets/img/common/gu-3.jpg";
import vnD from "../../assets/img/common/gu-4.jpg";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";

const GuestTransportation = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Luxury Wedding Guest Transport" },
        { src: vnB, alt: "Shuttle Bus for Wedding Guests" },
        { src: vnC, alt: "Event Transportation Services" },
        { src: vnD, alt: "VIP Guest Logistics for Weddings" },
    ];

    return (
        <>
            <Helmet>
                <title>Event Transportation & Logistics in Bangalore | SRS Event</title>
                <meta
                    name="description"
                    content="Ensure seamless guest transfers with SRS Event’s transport & logistics services across Bangalore. Reliable, coordinated & stress-free."
                />
                <meta
                    name="keywords"
                    content="guest transportation wedding, wedding guest shuttle, event logistics services, wedding transportation services, guest pick up and drop, wedding car rental, guest shuttle service, destination wedding logistics, corporate event transportation, VIP guest logistics, bus rental for wedding guests, airport transfers for events, luxury car hire wedding, wedding transportation planning, event transportation management"
                />
                <link rel="canonical" href="https://www.srsevent.com/guest-transportation-logistics-in-bangalore" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/transportation-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <h1 className="fw-bold site-title">Guest Transportation & Logistics</h1>
                                <p className="mt-3">
                                    At <strong>SrsEvent</strong>, we ensure that your guests arrive comfortably
                                    and on time with our <strong>professional wedding and event transportation
                                    services</strong>. From <strong>luxury cars and shuttle buses</strong> to
                                    <strong> airport pickups and VIP logistics</strong>, we handle every detail
                                    so you can focus on celebrating stress-free.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Luxury cars & premium guest transport
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Shuttle buses & mini coaches for weddings
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Airport transfers & guest pickup/drop services
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Plan Guest Transport</h5>
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
                            <div className="col-12 col-md-12 col-lg-6 mb-4 ">
                                <img src={svnimg} alt="Wedding Guest Transportation" className="w-100" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <h2 className="fw-bold st-2">Seamless Travel for Your Guests</h2>
                                <p>
                                    Whether it’s a <strong>destination wedding</strong>, <strong>corporate event</strong>,
                                    or <strong>family celebration</strong>, our logistics team provides
                                    <strong> safe, reliable, and stylish guest transportation solutions</strong>.
                                    We specialize in <strong>VIP transfers, guest shuttle services, bus rentals,
                                    and complete event logistics</strong> to make your celebration smooth and
                                    memorable.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Shuttle & bus rental for wedding guests
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Luxury cars for bride, groom & family
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> On-time logistics & travel management
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Included Features */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Guest Transportation Services</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-bus fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Shuttle Services</h5>
                                    <p className="text-muted">Comfortable shuttle buses and mini coaches for groups of guests.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-car-side fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Luxury Cars</h5>
                                    <p className="text-muted">Premium cars for the bride, groom, family & VIP guests.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-plane-arrival fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Airport Transfers</h5>
                                    <p className="text-muted">Pick-up and drop-off services for guests arriving by air.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-map-marked-alt fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Destination Wedding Logistics</h5>
                                    <p className="text-muted">End-to-end transport planning for outstation weddings.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-users fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Corporate Event Transport</h5>
                                    <p className="text-muted">Professional transportation services for business events & conferences.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-cogs fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Custom Logistics Planning</h5>
                                    <p className="text-muted">Tailored transport solutions to fit your event needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Guest Transport in Action</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Choose SrsEvent Guest Transportation</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-shield-alt fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Safe & Reliable</h6>
                                <p className="small text-muted">Professional drivers and well-maintained vehicles.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-clock fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">On-Time Service</h6>
                                <p className="small text-muted">Punctual pickups & drops for smooth schedules.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-crown fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Luxury & Comfort</h6>
                                <p className="small text-muted">Stylish cars, buses, and shuttles for every event.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-handshake fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Custom Packages</h6>
                                <p className="small text-muted">Flexible solutions for weddings & corporate events.</p>
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
                        <h2 className="fw-bold text-white st-2">Make Guest Travel Hassle-Free</h2>
                        <p className="mb-4">
                            Let <strong>SrsEvent</strong> handle your <strong>guest transportation &
                            logistics</strong> with luxury, safety, and reliability. From <strong>wedding
                            shuttles to VIP transfers</strong>, we’ve got you covered.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Plan Guest Transport Now
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default GuestTransportation;
