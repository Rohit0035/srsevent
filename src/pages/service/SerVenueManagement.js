import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/s-vn-1.png"


// Import venue images
import vnA from "../../assets/img/common/vn-a.jpg";
import vnB from "../../assets/img/common/vn-b.jpg";
import vnC from "../../assets/img/common/vn-c.jpg";
import vnD from "../../assets/img/common/vn-d.jpg";
import { Helmet } from "react-helmet-async";

const SerVenueManagement = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Venue 1" },
        { src: vnB, alt: "Venue 2" },
        { src: vnC, alt: "Venue 3" },
        { src: vnD, alt: "Venue 4" },
    ];
    return (
        <>
            <Helmet>
                <title>Venue Management - SrsEvent</title>
                <meta
                    name="description"
                    content="Experience flawless Venue Management with SrsEvent. From booking to décor, seating, and arrangements, we ensure your event venue is perfectly managed for weddings, parties, and corporate events."
                />
                <meta
                    name="keywords"
                    content="venue management, event venue setup, wedding venue Bangalore, corporate venue, birthday party venue, SrsEvent services"
                />
                <link rel="canonical" href="https://srsevent.com/venuemanagement" />
            </Helmet>
            <Header />
            <main className="main">
                {/* Venue Management Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/venue-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h1 className="fw-bold site-title">Venue Management</h1>
                                <p className="mt-3">
                                    Finding and managing the perfect venue for your event is our
                                    specialty. From weddings and corporate functions to private parties,
                                    we ensure your venue matches your vision and logistics seamlessly.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Venue
                                        selection tailored to your event needs
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Complete
                                        vendor and facility coordination
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> On-site
                                        management and logistics handling
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-dark">Enquiry Now</h5>
                                        </div>
                                        <div className="quote-content p-2">
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
                                <img
                                    src={svnimg}
                                    alt="Venue Overview"
                                    className="w-100"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold st-2">Perfect Venues, Seamlessly Managed</h2>
                                <p>
                                    From banquet halls and resorts to outdoor spaces and corporate
                                    venues, we handle every detail to ensure your venue is event-ready.
                                    Our expert team takes care of negotiations, arrangements, and
                                    flawless execution.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Venue booking
                                        and negotiations
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Logistics
                                        management and vendor coordination
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Complete
                                        on-site support during the event
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
                                <div className="p-2 bg-white">
                                    <i
                                        className="fas fa-map-marker-alt fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Venue Selection</h5>
                                    <p className="text-muted">
                                        Handpicked venues that fit your style, theme, and budget.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i
                                        className="fas fa-handshake fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Negotiation Support</h5>
                                    <p className="text-muted">
                                        Get the best rates and terms with our expert negotiation services.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i
                                        className="fas fa-cogs fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>On-Site Coordination</h5>
                                    <p className="text-muted">
                                        End-to-end management during the event for a smooth experience.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i
                                        className="fas fa-chair fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Setup &amp; Facilities</h5>
                                    <p className="text-muted">
                                        Complete arrangements for seating, lighting, and décor.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i
                                        className="fas fa-shuttle-van fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Guest Management</h5>
                                    <p className="text-muted">
                                        Parking, transfers, and VIP arrangements done professionally.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white">
                                    <i
                                        className="fas fa-calendar-check fa-2x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Event Scheduling</h5>
                                    <p className="text-muted">
                                        Timely planning and execution for hassle-free events.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Venue Arrangements</h2>
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
                            Why Clients Trust SrsEvent for Venue Management
                        </h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i
                                    className="fas fa-building fa-2x mb-2"
                                    style={{ color: "#9c2356" }}
                                />
                                <h6 className="fw-bold">Exclusive Venue Access</h6>
                                <p className="small text-muted">
                                    Access to premium and unique venues across the city.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-clock fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">On-Time Execution</h6>
                                <p className="small text-muted">
                                    Every detail handled with precision and punctuality.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-users fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Client-Centric Approach</h6>
                                <p className="small text-muted">
                                    Personalized solutions designed to suit your needs.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <i
                                    className="fas fa-shield-alt fa-2x mb-2"
                                    style={{ color: "#9c2356" }}
                                />
                                <h6 className="fw-bold">Safe &amp; Reliable</h6>
                                <p className="small text-muted">
                                    Safety, security, and seamless management guaranteed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Call to Action */}
                <section
                    className="py-5 text-white text-center"
                    style={{ backgroundColor: "#433357" }}
                >
                    <div className="container">
                        <h2 className="fw-bold text-white st-2">
                            Looking for the Perfect Venue?
                        </h2>
                        <p className="mb-4">
                            Let SrsEvent help you find, manage, and execute your dream event at the
                            best venues.
                        </p>
                        <a href="contact.php" className="theme-btn">
                            Book a Free Consultation
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SerVenueManagement;