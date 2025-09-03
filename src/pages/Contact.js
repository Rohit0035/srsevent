import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - SrsEvent</title>
                <meta
                    name="description"
                    content="Get in touch with SrsEvent for wedding planning, corporate events, birthdays, and celebration management in Bangalore. Reach out today to discuss your event requirements and book a free consultation."
                />
                <meta
                    name="keywords"
                    content="contact SrsEvent, event management contact, book event planner, wedding planner Bangalore, corporate event inquiry, birthday party booking, event consultation, celebration planner Bangalore, event services contact, event organizer support"
                />
                <link rel="canonical" href="https://srsevent.com/contact" />
                <link rel="icon" type="image/x-icon" href="assets/img/common/favicon.jpg" />

            </Helmet>
            <Header />
            <main className="main">
                {/* breadcrumb */}
                <div className="site-breadcrumb">
                    <div className="container">
                        <h2 className="breadcrumb-title">Contact Us</h2>
                    </div>
                </div>
                {/* contact area */}
                <div className="contact-area py-5">
                    <div className="container">
                        <div className="contact-wrapper">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-content">
                                        <h3 className="mb-3">Our Locations</h3>
                                        <hr />
                                        <ul className="footer-contact">
                                            <li>
                                                <i className="fas fa-map-marker-alt" /> <b>DUBAI</b>
                                            </li>
                                            <li>
                                                <a href="tel:+971504418336">
                                                    <i className="fas fa-phone" />
                                                    +97 1504418336
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="fas fa-envelope" />
                                                    <span className="__cf_email__" data-cfemail="">
                                                        info@gmail.com
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul className="footer-contact">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                <b>BENGALURU</b>
                                            </li>
                                            <li>
                                                <a href="tel:+919036124720">
                                                    <i className="fas fa-phone" />
                                                    +91 9036124720
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="fas fa-envelope" />
                                                    <span className="__cf_email__" data-cfemail="">
                                                        info@gmail.com
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul className="footer-contact">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                <b>CHENNAI</b>
                                            </li>
                                            <li>
                                                <a href="tel:++919036124720">
                                                    <i className="fas fa-phone" />
                                                    +91 9036124720
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="fas fa-envelope" />
                                                    <span className="__cf_email__" data-cfemail="">
                                                        info@gmail.com
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 align-self-center">
                                    <div className="contact-form">
                                        <div className="contact-form-header">
                                            <h2>Get In Touch</h2>
                                            <p>
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page randomised words which don't
                                                look even slightly when looking at its layout.{" "}
                                            </p>
                                        </div>
                                        <form
                                            method="post"
                                            action="https://live.themewild.com/loveo/assets/php/contact.php"
                                            id="contact-form"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Your Name"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Your Email"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="phone"
                                                    placeholder="Phone number"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="subject"
                                                    placeholder="Your Subject"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    cols={30}
                                                    rows={5}
                                                    className="form-control"
                                                    placeholder="Write Your Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <button type="submit" className="theme-btn">
                                                Send Message <i className="fas-paper-plane" />
                                            </button>
                                            <div className="col-md-12 mt-3">
                                                <div className="form-messege text-success" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end contact area */}
            </main>
            <Footer />
        </>
    );
};
export default Contact;