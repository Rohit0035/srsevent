import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/wed-hero.png";

// Import sample images
import vnA from "../../assets/img/common/fl-1.jpg";
import vnB from "../../assets/img/common/fl-2.jpg";
import vnC from "../../assets/img/common/fl-3.jpg";
import vnD from "../../assets/img/common/fl-4.jpg";
import { Helmet } from "react-helmet-async";

const FurnitureFabrications = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Velvet Tablecloth Wedding Setup" },
        { src: vnB, alt: "Elegant Round Table Cloth" },
        { src: vnC, alt: "Event Furniture & Fabrication" },
        { src: vnD, alt: "White Round Table Linens" },
    ];

    return (
        <>
            <Helmet>
                <title>Furniture & Fabrication for Events - SrsEvent</title>
                <meta
                    name="description"
                    content="Transform your wedding or party with premium furniture & fabrication services. From velvet tablecloths for weddings, round table linens, and wholesale party tablecloths to elegant event setups, SrsEvent has everything you need."
                />
                <meta
                    name="keywords"
                    content="velvet tablecloth wedding, round table cloth for sale, party table linens wholesale, linens for 72 inch round table, cheap round table cloth, elegant round table cloth, round table linens bulk, round table linens cheap, white round table linens for sale, furniture & fabrication for event, event furniture setup, wedding table linens, party table cloth rental"
                />
                <link rel="canonical" href="https://srsevent.com/furniture-fabrication" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/furniture-fabrication-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <h1 className="fw-bold site-title">Furniture & Fabrication</h1>
                                <p className="mt-3">
                                    At <strong>SrsEvent</strong>, we bring elegance and functionality together with our 
                                    <strong> premium furniture & event fabrication services</strong>. Whether you’re planning 
                                    a grand wedding, corporate party, or private celebration, our wide range of 
                                    <strong> velvet wedding tablecloths, elegant round table cloths, and bulk party linens</strong> 
                                    will give your venue a stunning and professional look.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Velvet tablecloths for weddings & receptions
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Elegant round table cloths for sale & rental
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-pink me-2" /> Wholesale linens for 72-inch round tables
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Get Your Event Setup</h5>
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
                                <img src={svnimg} alt="Event Furniture & Fabrication" className="w-100" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <h2 className="fw-bold st-2">Stylish Furniture & Elegant Fabrics</h2>
                                <p>
                                    From <strong>cheap round table cloths</strong> for budget-friendly setups to 
                                    <strong> elegant white round table linens</strong> for a luxury wedding décor, 
                                    our services are designed to fit all event styles. We provide 
                                    <strong> bulk round table linens, wedding party tablecloths,</strong> and customized 
                                    event furniture solutions to create memorable settings.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Elegant & durable table linens
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Bulk & wholesale round table cloths
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-pink me-2" /> Full furniture & event fabrication setup
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Furniture & Linen Work</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Choose SrsEvent Furniture & Fabrication</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-couch fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Premium Event Furniture</h6>
                                <p className="small text-muted">High-quality chairs, tables & décor items.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-table fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Luxury Table Linens</h6>
                                <p className="small text-muted">Velvet, satin & elegant cloths for weddings.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-box fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Bulk & Wholesale Options</h6>
                                <p className="small text-muted">Affordable linens & tablecloths in bulk.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-star fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Elegant Event Setup</h6>
                                <p className="small text-muted">Stylish designs tailored for your celebration.</p>
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
                        <h2 className="fw-bold text-white st-2">Plan Your Perfect Event Setup</h2>
                        <p className="mb-4">
                            Choose from <strong>velvet tablecloths, elegant round linens,</strong> and a wide 
                            selection of <strong>event furniture & fabrication</strong> options to make your 
                            special day unforgettable.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Your Event Setup
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FurnitureFabrications;
