import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../components/EnquiryFormEvent';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact SRS Event | Best Event Planners in Bangalore Near You</title>
                <meta
                    name="description"
                    content="Contact SRS Event for expert event planning in Bangalore — weddings, parties & corporate events made easy. Call +91 9036124720 or message us today!"
                />
                <meta
                    name="keywords"
                    content="contact SrsEvent, event management contact, book event planner, wedding planner Bangalore, corporate event inquiry, birthday party booking, event consultation, celebration planner Bangalore, event services contact, event organizer support"
                />
                <link rel="canonical" href="https://www.srsevent.com/contact" />
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
                                            <li className='mb-1'>
                                                <i className="fas fa-map-marker-alt" /> <b>DUBAI</b>
                                            </li>
                                            <li className='mb-1'>
                                                <a href="tel:+971504418336">
                                                    <i className="fas fa-phone" />
                                                    +97 1504418336
                                                </a>
                                            </li>
                                            <li className='mb-1'>
                                                <a href="mailto:dubai@srsevent.in">
                                                    <i className="fas fa-envelope" />
                                                    <span className="__cf_email__" data-cfemail="">
                                                      dubai@srsevent.in
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul className="footer-contact">
                                            <li className='mb-1'>
                                                <i className="fas fa-map-marker-alt" />
                                                <b>BENGALURU</b>
                                            </li>
                                            <li className='mb-1'>
                                                <a href="tel:+919036124720">
                                                    <i className="fas fa-phone" />
                                                    +91 9036124720
                                                </a>
                                            </li>
                                            <li className='mb-1'>
                                                <a href="mailto:bengaluru@srsevent.com">
                                                    <i className="fas fa-envelope" />
                                                    <span className="__cf_email__" data-cfemail="">
                                                        bengaluru@srsevent.com
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul className="footer-contact">
                                            <li className='mb-1'>
                                                <i className="fas fa-map-marker-alt" />
                                                <b>CHENNAI</b>
                                            </li>
                                            <li className='mb-1'>
                                                <a href="tel:++919036124720">
                                                    <i className="fas fa-phone" />
                                                    +91 9036124720
                                                </a>
                                            </li>
                                            <li className='mb-1'>
                                                <a href="mailto:chennai@srsevent.com">
                                                    <i className="fas fa-envelope" />
                                                    <span className="__cf_email__" data-cfemail="">
                                                       chennai@srsevent.com
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 align-self-center">
                                    <div className="contact-form bg-pink">
                                        <div className="contact-form-header">
                                            <h2 className='text-white'>Get In Touch</h2>
                                            <p className='text-white'>
                                                Have an upcoming event or celebration? We’re here to make it memorable.
                                                Whether it’s a wedding, birthday, or a corporate gathering, our team is ready
                                                to plan, design, and execute every detail with perfection. Connect with us today
                                                and let’s bring your vision to life.
                                            </p>
                                        </div>
                                        <EnquiryFormEvent />
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