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
                            <div className='col-md-12 mb-5'>
                                <h4 className="footer-widget-title">Locations</h4>
                                <div className="explore-jd-collections">
                                    <strong>Bangalore :</strong>
                                    <span>
                                        <a href="/corporate-event-management-company-bangalore" className='atag'>  Corporate Management Bangalore</a> |
                                        <a href="/inauguration-event-organizers-bangalore" className='atag'>  Inauguration Planners Bangalore</a> |
                                        <a href="/conference-events-management-company-bangalore" className='atag'>  Conferences and Seminar Event Bangalore</a> |
                                        <a href="/award-ceremony-organizers-in-bangalore" className='atag'>  Award Ceremony Bangalore</a> |
                                        <a href="/wedding-planners-bangalore" className='atag'>  Wedding Planners Bangalore</a> |
                                        <a href="/engagement-planners-bangalore" className='atag'> Engagement Planners Bangalore</a> |
                                        <a href="/birthday-party-organiser-bangalore" className='atag'>   Birthday Planners Bangalore</a> |
                                        <a href="/wedding-anniversary-planners-bangalore"  className='atag'>Wedding Anniversary Bangalore</a>
                                    </span>
                                </div>
                                <div className="explore-jd-collections">
                                    <strong>Hyderabad :</strong>
                                    <span>
                                        <a href="/corporate-event-management-company-hyderabad" className='atag'>  Corporate Management Hyderabad</a> |
                                        <a href="/inauguration-event-organizers-hyderabad" className='atag'>  Inauguration Planners Hyderabad</a> |
                                        <a href="/conference-events-management-company-hyderabad" className='atag'>  Conferences and Seminar Event Hyderabad</a> |
                                        <a href="/award-ceremony-organizers-in-hyderabad" className='atag'>  Award Ceremony Hyderabad</a> |
                                        <a href="/wedding-planners-hyderabad" className='atag'>  Wedding Planners Hyderabad</a> |
                                        <a href="/engagement-planners-hyderabad" className='atag'>  Engagement Planners Hyderabad</a> |
                                        <a href="/birthday-party-organiser-hyderabad" className='atag'>  Birthday Planners Hyderabad</a> |
                                        <a href="/wedding-anniversary-planners-hyderabad" className='atag'>  Wedding Anniversary Hyderabad</a>
                                    </span>
                                </div>
                                <div className="explore-jd-collections">
                                    <strong>Chennai :</strong>
                                    <span>
                                        <a href="/corporate-event-management-company-chennai" className='atag'>  Corporate Management Chennai</a> |
                                        <a href="/inauguration-event-organizers-chennai" className='atag'>  Inauguration Planners Chennai</a> |
                                        <a href="/conference-events-management-company-chennai" className='atag'>  Conferences and Seminar Event Chennai</a> |
                                        <a href="/award-ceremony-organizers-in-chennai" className='atag'>  Award Ceremony Chennai</a> |
                                        <a href="/wedding-planners-chennai" className='atag'>  Wedding Planners Chennai</a> |
                                        <a href="/engagement-planners-chennai" className='atag' >Engagement Planners Chennai</a> |
                                        <a href="/birthday-party-organiser-chennai" className='atag'>  Birthday Planners Chennai</a> |
                                        <a href="/wedding-anniversary-planners-chennai" className='atag'>  Wedding Anniversary Chennai</a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="footer-widget-box about-us">
                                    <a href="#" className="footer-logo">
                                        <img src={Logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Quick Links</h4>
                                    <ul className='footer-list'>
                                        <li>
                                            <a href="/">
                                                <i className="fas fa-angle-double-right" /> Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/about">
                                                <i className="fas fa-angle-double-right" /> About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/blog">
                                                <i className="fas fa-angle-double-right" /> Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/gallery">
                                                <i className="fas fa-angle-double-right" /> Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fas fa-angle-double-right" /> Contact Us

                                            </a>
                                        </li>
                                        <li>
                                            <a href="/privacy-policy">
                                                <i className="fas fa-angle-double-right" /> Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/terms-condition">
                                                <i className="fas fa-angle-double-right" /> Terms & Conditions
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
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
                                        <li className='mb-1'>
                                            <i className="fas fa-map-marker-alt" /> <b>DUBAI</b>
                                        </li>
                                        <li className='mb-1'>
                                            <a href="tel:+971504418336">
                                                <i className="fas fa-phone" />
                                                +971 504418336
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

