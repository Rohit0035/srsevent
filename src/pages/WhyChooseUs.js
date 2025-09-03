import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";

const WhyChooseUs = () => {
    return (
        <>
            <Helmet>
                <title>Why Choose Us - SrsEvent</title>
                <meta
                    name="description"
                    content="Discover why SrsEvent is the preferred event management partner in Bangalore. From personalized wedding planning to flawless corporate events and celebrations, we bring creativity, professionalism, and perfection to every occasion."
                />
                <meta
                    name="keywords"
                    content="why choose SrsEvent, event management company, wedding planner Bangalore, corporate event organizer, birthday party planner, anniversary event planner, engagement event management, kids party organizer, event decoration services, premium event planner, trusted event company, celebration organizer"
                />
                <link rel="canonical" href="https://srsevent.com/whyus" />
            </Helmet>
            <Header />
            <main className="main">
                {/* breadcrumb */}
                <div className="site-breadcrumb">
                    <div className="container">
                        <h2 className="breadcrumb-title">Why Choose Us</h2>
                    </div>
                </div>
                {/* Why Choose SrsEvent Zig-Zag Section */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="site-title">
                                Why Choose <span>SrsEvent</span>
                            </h2>
                            <p className="text-muted">
                                We don't just plan events — we craft unforgettable experiences with
                                passion and precision.
                            </p>
                        </div>
                        <div className="story-timeline">
                            <div className="story-circle-start" />
                            {/* Reason 1 */}
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="story-left-content">
                                        <span className="story-icon">
                                            <i className="fas fa-lightbulb text-white fa-1x" />
                                        </span>
                                        <div className="story-content">
                                            <h3>Creative Ideas</h3>
                                            <p>
                                                Every event is a blank canvas. Our design team ensures your
                                                theme is fresh, fun, and fabulous.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <i className="fas fa-palette fa-3x " style={{ color: "#9c2356" }} />
                                </div>
                            </div>
                            {/* Reason 2 */}
                            <div className="row">
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <i
                                        className="fas fa-user-tie fa-3x "
                                        style={{ color: "#9c2356" }}
                                    />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="story-right-content">
                                        <span className="story-icon">
                                            <i className="fas fa-users-cog text-white fa-1x" />
                                        </span>
                                        <div className="story-content">
                                            <h3>Expert Team</h3>
                                            <p>
                                                With years of industry experience, our professionals manage
                                                everything down to the last detail.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Reason 3 */}
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="story-left-content">
                                        <span className="story-icon">
                                            <i className="fas fa-clock text-white fa-1x" />
                                        </span>
                                        <div className="story-content">
                                            <h3>Timely Execution</h3>
                                            <p>
                                                Your time is valuable. We work with precision timelines to
                                                ensure everything runs smoothly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <i
                                        className="fas fa-calendar-check fa-3x"
                                        style={{ color: "#9c2356" }}
                                    />
                                </div>
                            </div>
                            {/* Reason 4 */}
                            <div className="row">
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <i className="fas fa-heart fa-3x" style={{ color: "#9c2356" }} />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="story-right-content">
                                        <span className="story-icon">
                                            <i className="fas fa-smile-beam text-white fa-1x" />
                                        </span>
                                        <div className="story-content">
                                            <h3>Client Happiness</h3>
                                            <p>
                                                We go the extra mile to deliver joy—our success is measured by
                                                your smile and satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Reason 5 */}
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="story-left-content">
                                        <span className="story-icon">
                                            <i className="fas fa-globe text-white fa-1x" />
                                        </span>
                                        <div className="story-content">
                                            <h3>Global Reach</h3>
                                            <p>
                                                Planning a destination event? We’ve got the tools and network
                                                to make it happen flawlessly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <i
                                        className="fas fa-map-marked-alt fa-3x"
                                        style={{ color: "#9c2356" }}
                                    />
                                </div>
                            </div>
                            {/* Reason 6 */}
                            <div className="row">
                                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                                    <i
                                        className="fas fa-hand-holding-heart fa-3x"
                                        style={{ color: "#9c2356" }}
                                    />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="story-right-content">
                                        <span className="story-icon">
                                            <i className="fas fa-gift text-white fa-1x" />
                                        </span>
                                        <div className="story-content">
                                            <h3>Tailored Experiences</h3>
                                            <p>
                                                No cookie-cutter events here. We tailor every detail to match
                                                your personality and purpose.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* What Sets Us Apart */}
                <section className="py-5">
                    <div className="container">
                        <div className="row text-center mb-4">
                            <h3 className="site-title">
                                What Sets <span>Us Apart</span>
                            </h3>
                            <p className="text-muted">
                                Here’s why hundreds of clients trust SrsEvent for their most important
                                occasions:
                            </p>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3 text-center">
                                <div className="mb-3  shadow-sm p-2">
                                    <i
                                        className="fas fa-palette fa-3x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Creative Themes</h5>
                                    <p>
                                        From rustic chic to royal glam, we bring your vision to life with
                                        tailored design concepts.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="mb-3  shadow-sm p-2">
                                    <i
                                        className="fas fa-stopwatch fa-3x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Timely Execution</h5>
                                    <p>
                                        Punctuality is our promise. Your event will be flawlessly executed
                                        on schedule—every time.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="mb-3  shadow-sm p-2">
                                    <i
                                        className="fas fa-smile fa-3x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Client Delight</h5>
                                    <p>
                                        We don’t just meet expectations; we exceed them. Our clients love
                                        us—and it shows.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="mb-3  shadow-sm p-2">
                                    <i
                                        className="fas fa-globe fa-3x mb-3"
                                        style={{ color: "#9c2356" }}
                                    />
                                    <h5>Global Reach</h5>
                                    <p>
                                        Destination weddings? No problem. Our team can handle events
                                        anywhere in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default WhyChooseUs;