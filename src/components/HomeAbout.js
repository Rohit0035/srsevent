import React from 'react';
import homeabt from "../assets/img/common/home-abt.jpg"
import shape4 from "../assets/img/shape/04.png"
import shape5 from "../assets/img/shape/05.png"
import shape1 from "../assets/img/shape/01.svg"

const HomeAbout = () => {
    return (
        <>
            {/* about area */}
            <div className="about-area py-5">
                <div className="about-shape">
                    <img className="about-shape-1" src={shape4} alt="" />
                    <img className="about-shape-2" src={shape5} alt="" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side Image */}
                        <div className="col-lg-6">
                            <div
                                className="about-left wow fadeInLeft"
                                data-wow-duration="1s"
                                data-wow-delay=".25s"
                            >
                                <div className="about-img">
                                    <img
                                        src={homeabt}
                                        alt="Wedding & Event Planner"
                                    />
                                </div>
                                <div className="about-experience">
                                    <h1>
                                        25 <span>+</span>
                                    </h1>
                                    <span className="about-experience-text">Years Of Experience</span>
                                </div>
                                <div className="about-img-shape">
                                    <img src={shape1} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* Right Side Content */}
                        <div className="col-lg-6">
                            <div
                                className="about-right wow fadeInUp"
                                data-wow-duration="1s"
                                data-wow-delay=".25s"
                            >
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline">About Us</span>
                                    <h2 className="site-title">
                                        We Make Your Every <span>Moment</span> Magical
                                    </h2>
                                </div>
                                <p className="about-text">
                                    At <strong>SrsEvent</strong>, we believe every celebration is a
                                    story waiting to be told. With more than two decades of experience
                                    in wedding and event planning, we specialize in creating
                                    unforgettable moments filled with love, elegance, and joy. From
                                    décor to photography, catering to venue consultation, we craft
                                    bespoke experiences that reflect your style and personality.
                                </p>
                                <div className="about-list-wrapper">
                                    <ul className="about-list list-unstyled">
                                        <li>
                                            <div className="about-icon">
                                                <span className="fas fa-check-circle" />
                                            </div>
                                            <div className="about-list-text">
                                                <p>
                                                    Personalized wedding &amp; event planning tailored to your
                                                    vision
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-icon">
                                                <span className="fas fa-check-circle" />
                                            </div>
                                            <div className="about-list-text">
                                                <p>
                                                    Creative décor &amp; styling that brings charm and
                                                    elegance
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-icon">
                                                <span className="fas fa-check-circle" />
                                            </div>
                                            <div className="about-list-text">
                                                <p>
                                                    Dedicated team ensuring stress-free and seamless execution
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="about-bottom">
                                    <a href="/about" className="theme-btn">
                                        Read More <i className="fas fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}
        </>
    );
};

export default HomeAbout;