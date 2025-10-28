import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";
import abtheroimg from "../assets/img/common/abt-hero.png"
import homeabt from "../assets/img/common/home-abt.jpg"
import shape4 from "../assets/img/shape/04.png"
import shape5 from "../assets/img/shape/05.png"
import shape1 from "../assets/img/shape/01.svg"
const About = () => {
    return (

        <>
            <Helmet>
                <title>About SRS Event | Leading Event Management Company in Bangalore</title>
                <meta
                    name="description"
                    content="Learn about SRS Event — Bangalore’s trusted event management company. Our expert planners create unforgettable weddings, parties & corporate experiences."
                />
                <meta
                    name="keywords"
                    content="SrsEvent, about SrsEvent, event management company, wedding planner, corporate event organizer, birthday party planner, anniversary celebration planner, engagement event management, kids party organizer, event decoration services, Bangalore event management, premium event planner, celebration organizer"
                />
                <link rel="canonical" href="https://www.srsevent.com/about-us" />
                <link rel="icon" type="image/x-icon" href="assets/img/common/favicon.jpg" />
            </Helmet>
            <Header />
            {/* About Page Hero Section */}
            <section
                className="about-hero-section  bg-light"
            >
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 mb-3">
                            <h1 className="site-title">Crafting Moments, Creating Memories</h1>
                            <p className="mt-3">
                                At SrsEvent, we believe every event tells a story. Our mission is to
                                turn your vision into unforgettable experiences through creativity,
                                precision, and passion.
                            </p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-primary me-2" />
                                    Over 100+ successfully executed weddings and events
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-primary me-2" />
                                    Personalized event planning tailored to your vision
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-primary me-2" />
                                    Creative team with a passion for unique experiences
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <img src={abtheroimg} alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
            {/* about section hero */}
            {/* about area */}
            <div className="about-area py-5 mt-5 mb-5">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}
            {/* Mission & Vision Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="site-title">
                            Our <span>Mission &amp; Vision</span>
                        </h2>
                        <p className="text-muted">
                            What drives us at SrsEvent — today and for the future.
                        </p>
                    </div>
                    <div className="row align-items-start">
                        {/* Mission */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="p-4 shadow-sm h-100 border-start border-4 border-danger rounded bg-light">
                                <h4 className="fw-bold">Our Mission</h4>
                                <hr />
                                <p>
                                    To design and deliver flawless, unforgettable events that reflect
                                    the dreams and personalities of our clients, all while ensuring
                                    comfort, clarity, and creativity in every step.
                                </p>
                            </div>
                        </div>
                        {/* Vision */}
                        <div className="col-md-6">
                            <div className="p-4 shadow-sm h-100 border-start border-4 border-danger rounded bg-light">
                                <h4 className="fw-bold">Our Vision</h4>
                                <hr />
                                <p>
                                    To be a nationally recognized event planning brand known for
                                    innovation, elegance, and building lifelong memories through
                                    unique, personalized experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our mission section close */}
            {/* Core Values Section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="site-title">
                            Our <span>Core Values</span>
                        </h2>
                        <p className="text-muted">
                            What defines the heart of SrsEvent and how we serve our clients.
                        </p>
                    </div>
                    <div className="row text-center gy-4">
                        {/* Value 1 */}
                        <div className="col-6 col-md-4 col-lg-2">
                            <i
                                className="fas fa-hands-helping fa-2x mb-2"
                                style={{ color: "#9c2356" }}
                            />
                            <h6 className="fw-bold">Integrity</h6>
                            <p className="small text-muted">
                                We stay honest, transparent, and committed in everything we do.
                            </p>
                        </div>
                        {/* Value 2 */}
                        <div className="col-6 col-md-4 col-lg-2">
                            <i
                                className="fas fa-brain fa-2x  mb-2"
                                style={{ color: "#9c2356" }}
                            />
                            <h6 className="fw-bold">Creativity</h6>
                            <p className="small text-muted">
                                Unique ideas and innovation are at the core of every event we plan.
                            </p>
                        </div>
                        {/* Value 3 */}
                        <div className="col-6 col-md-4 col-lg-2">
                            <i
                                className="fas fa-user-friends fa-2x mb-2"
                                style={{ color: "#9c2356" }}
                            />
                            <h6 className="fw-bold">Teamwork</h6>
                            <p className="small text-muted">
                                We work hand-in-hand with clients, vendors, and each other for
                                success.
                            </p>
                        </div>
                        {/* Value 4 */}
                        <div className="col-6 col-md-4 col-lg-2">
                            <i className="fas fa-star fa-2x  mb-2" style={{ color: "#9c2356" }} />
                            <h6 className="fw-bold">Excellence</h6>
                            <p className="small text-muted">
                                Our goal is to exceed expectations at every stage of the event
                                journey.
                            </p>
                        </div>
                        {/* Value 5 */}
                        <div className="col-6 col-md-4 col-lg-2">
                            <i className="fas fa-heart fa-2x mb-2" style={{ color: "#9c2356" }} />
                            <h6 className="fw-bold">Passion</h6>
                            <p className="small text-muted">
                                We love what we do—and it shows in every detail of our work.
                            </p>
                        </div>
                        {/* Value 6 */}
                        <div className="col-6 col-md-4 col-lg-2">
                            <i
                                className="fas fa-clock fa-2x  mb-2"
                                style={{ color: "#9c2356" }}
                            />
                            <h6 className="fw-bold">Reliability</h6>
                            <p className="small text-muted">
                                On-time, dependable, and consistent—every time, every event.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* section close */}
            <Footer />
        </>

    );
};

export default About;