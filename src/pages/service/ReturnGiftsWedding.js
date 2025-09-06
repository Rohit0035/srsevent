import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EnquiryFormServices from '../../components/EnquiryFormServices';
import svnimg from "../../assets/img/common/rg-abt.jpg";

// Import gift images
import vnA from "../../assets/img/common/rg-1.jpg";
import vnB from "../../assets/img/common/rg-2.jpg";
import vnC from "../../assets/img/common/rg-3.jpg";
import vnD from "../../assets/img/common/rg-4.jpg";
import { Helmet } from "react-helmet-async";

const ReturnGiftsWedding = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: vnA, alt: "Unique Wedding Return Gift" },
        { src: vnB, alt: "Birthday Party Return Gift" },
        { src: vnC, alt: "Housewarming Return Gift Idea" },
        { src: vnD, alt: "Affordable Return Gift" },
    ];

    return (
        <>
            <Helmet>
                <title>Return Gift Ideas for Wedding, Birthday & Housewarming | SrsEvent</title>
                <meta
                    name="description"
                    content="Discover the best return gift ideas for weddings, birthday parties, and housewarming. From affordable return gifts under 50 rs to unique and elegant return gifts for adults and kids."
                />
                <meta
                    name="keywords"
                    content="return gift, return gift ideas, return gifts for birthday party, birthday return gift ideas, return gifts for birthday, wedding return gifts, return gifts for housewarming, return gift ideas for adults, birthday return gift ideas for 50 rs, return gift ideas for housewarming, unique return gift ideas for birthday, written gifts, best return gifts online, affordable return gifts, creative return gift ideas"
                />
                <link rel="canonical" href="https://srsevent.com/returngiftswedding" />
            </Helmet>

            <Header />
            <main className="main">
                {/* Hero Section */}
                <section
                    className="py-5 bg-light st-b"
                    style={{
                        background:
                            'url("assets/img/banner/return-gift-hero.jpg") center center/cover no-repeat'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <h1 className="fw-bold site-title">Unique Return Gift Ideas</h1>
                                <p className="mt-3">
                                    At SrsEvent, we make your celebrations memorable with thoughtfully curated{" "}
                                    <strong>wedding return gifts, birthday return gift ideas, and housewarming return gifts</strong>.  
                                    From affordable gifts under 50 rs to premium keepsakes, we offer unique and creative options for every occasion.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li><i className="fas fa-check-circle text-pink me-2" /> Return gifts for birthday parties</li>
                                    <li><i className="fas fa-check-circle text-pink me-2" /> Elegant wedding return gifts</li>
                                    <li><i className="fas fa-check-circle text-pink me-2" /> Creative return gifts for housewarming</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6" id="contact">
                                <div className="card st-color-card">
                                    <div className="card-body">
                                        <div className="card-header">
                                            <h5 className="text-white">Enquire for Return Gifts</h5>
                                        </div>
                                        <div className="quote-content p-2" style={{ backgroundColor: "#9c2356" }}>
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
                            <div className="col-12 col-md-12 col-lg-6 mb-4 ">
                                <img src={svnimg} alt="Return Gift Collection" className="w-100" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <h2 className="fw-bold st-2">Affordable & Memorable Return Gifts</h2>
                                <p>
                                    Whether you are planning a birthday party, a wedding, or a housewarming,
                                    SrsEvent helps you choose <strong>unique return gifts</strong> that suit your budget and style.  
                                    From <em>birthday return gift ideas under 50 rs</em> to premium wedding souvenirs,
                                    we make gifting easy and thoughtful.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li><i className="fas fa-check-circle text-pink me-2" /> Return gift ideas for adults & kids</li>
                                    <li><i className="fas fa-check-circle text-pink me-2" /> Budget-friendly & premium options</li>
                                    <li><i className="fas fa-check-circle text-pink me-2" /> Creative packaging & customization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Included Features */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Types of Return Gifts We Offer</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-birthday-cake fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Birthday Return Gifts</h5>
                                    <p className="text-muted">Unique ideas for kids & adults – from toys to thoughtful keepsakes.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-ring fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Wedding Return Gifts</h5>
                                    <p className="text-muted">Elegant souvenirs for guests to cherish your big day.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-home fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Housewarming Return Gifts</h5>
                                    <p className="text-muted">Memorable & practical gifts to thank your guests for joining.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-gift fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Budget Gifts Under 50 Rs</h5>
                                    <p className="text-muted">Affordable yet meaningful gifts that fit any celebration.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2 bg-white  h-100">
                                    <i className="fas fa-lightbulb fa-2x mb-3" style={{ color: "#9c2356" }} />
                                    <h5>Unique Gift Ideas</h5>
                                    <p className="text-muted">Creative, customized, and trendy return gift ideas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4 st-2">Our Return Gift Collection</h2>
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
                        <h2 className="fw-bold mb-5 st-2">Why Choose SrsEvent for Return Gifts</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="fas fa-hand-holding-heart fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Thoughtful Gifts</h6>
                                <p className="small text-muted">Curated with care to leave lasting impressions.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-rupee-sign fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Fits Every Budget</h6>
                                <p className="small text-muted">From return gifts under 50 rs to premium keepsakes.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-gem fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Unique & Stylish</h6>
                                <p className="small text-muted">Modern, creative, and customized gift solutions.</p>
                            </div>
                            <div className="col-md-3">
                                <i className="fas fa-thumbs-up fa-2x mb-2" style={{ color: "#9c2356" }} />
                                <h6 className="fw-bold">Trusted by Families</h6>
                                <p className="small text-muted">Reliable partner for weddings, birthdays & housewarmings.</p>
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
                        <h2 className="fw-bold text-white st-2">Looking for Perfect Return Gifts?</h2>
                        <p className="mb-4">
                            Let SrsEvent help you choose <strong>unique, affordable, and creative return gift ideas</strong> that your guests will remember forever.
                        </p>
                        <a href="#contact" className="theme-btn bg-black">
                            Book Return Gifts Now
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ReturnGiftsWedding;
