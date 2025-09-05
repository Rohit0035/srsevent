import React from 'react';
import Logo from '../assets/img/common/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* footer area */}
            <footer className="footer-area">
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-5 pb-5">
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget-box about-us">
                                    <a href="#" className="footer-logo">
                                        <img src={Logo} alt="" />
                                    </a>
                                    <p className="mb-4">
                                        We organize events with meticulous attention to every detail.
                                        From venue selection to décor, catering, and entertainment, we
                                        ensure that your special day is memorable and flawless, leaving
                                        you free to enjoy every moment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Quick Links</h4>
                                    <ul className="footer-list">
                                        <li>
                                            <a href="/">
                                                <i className="fas fa-angle-double-right" />
                                                Home{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/about">
                                                <i className="fas fa-angle-double-right" /> About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/whyus">
                                                <i className="fas fa-angle-double-right" /> Why Choose us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/gallery">
                                                <i className="fas fa-angle-double-right" /> Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-angle-double-right" /> Events
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-angle-double-right" />
                                                <b>Our Events</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Wedding
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Engagement
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Birthday

                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Anniversary

                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Kids' Birthday Party

                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Corporate
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Our Services</h4>
                                    <ul className="footer-list">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <li>
                                                    <a href="/venuemanagement">
                                                        <i className="fas fa-angle-double-right" /> Venue Management
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/floraldecor">
                                                        <i className="fas fa-angle-double-right" /> Floral Décor
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/photography">
                                                        <i className="fas fa-angle-double-right" /> Photography
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/videography">
                                                        <i className="fas fa-angle-double-right" /> Videography
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/catering">
                                                        <i className="fas fa-angle-double-right" /> Catering
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/bridalmakeover">
                                                        <i className="fas fa-angle-double-right" /> Bridal Makeover
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/soundsLights">
                                                        <i className="fas fa-angle-double-right" /> Sounds &amp; Lights
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/furniturefabrications">
                                                        <i className="fas fa-angle-double-right" /> Furniture &amp; Fabrications
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/guesttransportation">
                                                        <i className="fas fa-angle-double-right" /> Guest Transportation &amp; Logistics
                                                    </a>
                                                </li>
                                            </div>

                                            <div className="col-md-6">
                                                <li>
                                                    <a href="/hospitalityguest">
                                                        <i className="fas fa-angle-double-right" /> Hospitality &amp; Guest Welcome Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/weddinglive">
                                                        <i className="fas fa-angle-double-right" /> Wedding Live Streaming
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/returngiftswedding">
                                                        <i className="fas fa-angle-double-right" /> Return Gifts &amp; Wedding Favours
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/trendingphoto">
                                                        <i className="fas fa-angle-double-right" /> Trending Photo Booth Setups
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/coldpyro">
                                                        <i className="fas fa-angle-double-right" /> Cold Pyro, CO₂ Jet, Fog Effect, Confetti &amp; Firecracker Shows
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/djlivebandmusical">
                                                        <i className="fas fa-angle-double-right" /> DJ, Live Band &amp; Musical Arrangements
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/livecanvaspainting">
                                                        <i className="fas fa-angle-double-right" /> Live Canvas Painting, Sketching &amp; Caricature Artists
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/fungamesinteractive">
                                                        <i className="fas fa-angle-double-right" /> Fun Games &amp; Interactive Activities
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/gangaaarti">
                                                        <i className="fas fa-angle-double-right" /> Ganga Aarti Ceremony
                                                    </a>
                                                </li>
                                            </div>

                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Our Location </h4>
                                    <ul className="footer-contact">
                                        <li>
                                            <i className="fas fa-map-marker-alt" /> <b>DUBAI</b>
                                        </li>
                                        <li>
                                            <a href="tel:+971504418336">
                                                <i className="fas fa-phone" />
                                                +971 504418336
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
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <p className="copyright-text">
                                    © Copyright <span id="date" /> <a href="#"> SrsEvent </a> All
                                    Rights Reserved.
                                </p>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <ul className="footer-social">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer area end */}

            <a href="/contact" className="btn request-btn">Request a callback</a>
            <a href="https://wa.me/919876543210" target="_blank" className="whatsapp-float">
                <i className="fab fa-whatsapp"></i>
            </a>
        </>

    );
};

export default Footer;

