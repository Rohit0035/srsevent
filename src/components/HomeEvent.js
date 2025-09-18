import React from 'react';
import divider from "../assets/img/icon/divider.png"

const HomeEvent = () => {
    return (
        <>
            <section className="py-5">
                <div className="container text-center">
                    <div className="site-heading text-center mb-3">
                        <h2 className="site-title">Our Events</h2>
                        <div className="header-img-divider">
                            <img src={divider} alt="" />
                        </div>
                    </div>
                    <div className="row g-4 mt-4">
                        {/* Wedding Event Management */}
                        <div className="col-md-4 mb-2">
                            <a href="/wedding-planners-bangalore" className="w-100 h-100">
                                <div className="border rounded-3 p-4 pb-3 h-100 position-relative st-height">
                                    <h5 className="fw-semibold text-pink text-start">Wedding Event </h5>
                                    <p className="text-muted text-start mt-2">
                                        From traditional to modern weddings, we handle every detail with
                                        elegance and perfection.
                                    </p>
                                    <div className="fs-3 text-pink text-end">
                                        <i className="fas fa-ring str-bi" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Engagement Event Management */}
                        <div className="col-md-4 mb-2">
                            <a href="/engagement-planners-bangalore" className="w-100 h-100">
                                <div className="border rounded-3 p-4 pb-3 h-100 position-relative  st-height">
                                    <h5 className="fw-semibold text-pink text-start">
                                        Engagement Event{" "}
                                    </h5>
                                    <p className="text-muted text-start mt-2">
                                        Celebrate your new journey with a beautifully crafted engagement
                                        ceremony.
                                    </p>
                                    <div className="fs-3 text-pink text-end">
                                        <i className="fas fa-heart  str-bi" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Birthday Event Management */}
                        <div className="col-md-4 mb-2">
                            <a href="/birthday-party-organiser-bangalore" className="w-100 h-100">
                                <div className="border rounded-3 p-4 pb-3 h-100 position-relative  st-height">
                                    <h5 className="fw-semibold text-pink text-start">
                                        Birthday Event{" "}
                                    </h5>
                                    <p className="text-muted text-start mt-2">
                                        Fun-filled birthday parties with themes, entertainment, and
                                        unforgettable memories.
                                    </p>
                                    <div className="fs-3 text-pink text-end">
                                        <i className="fas fa-birthday-cake  str-bi" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Anniversary Event Management */}
                        <div className="col-md-4 mb-2">
                            <a href="/wedding-anniversary-planners-bangalore" className="w-100 h-100">
                                <div className="border rounded-3 p-4 pb-3 h-100 position-relative  st-height">
                                    <h5 className="fw-semibold text-pink text-start">
                                        Anniversary Event{" "}
                                    </h5>
                                    <p className="text-muted text-start mt-2">
                                        Celebrate your love milestones with elegant setups and beautiful
                                        memories.
                                    </p>
                                    <div className="fs-3 text-pink text-end">
                                        <i className="fas fa-glass-cheers  str-bi" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Kids' Birthday Party Management */}
                        <div className="col-md-4 mb-2">
                            <a href="/birthday-party-organiser-bangalore" className="w-100 h-100">
                                <div className="border rounded-3 p-4 pb-3 h-100 position-relative  st-height">
                                    <h5 className="fw-semibold text-pink text-start">
                                        Kids' Birthday Party{" "}
                                    </h5>
                                    <p className="text-muted text-start mt-2">
                                        Colorful themes, fun games, and activities designed just for kids.
                                    </p>
                                    <div className="fs-3 text-pink text-end">
                                        <i className="fas fa-child  str-bi" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Corporate Event Management */}
                        <div className="col-md-4 mb-2">
                            <a href="/corporate-event-management-company-bangalore" className="w-100 h-100">
                                <div className="border rounded-3 p-4 pb-3 h-100 position-relative  st-height">
                                    <h5 className="fw-semibold text-pink text-start">
                                        Corporate Event{" "}
                                    </h5>
                                    <p className="text-muted text-start mt-2">
                                        Professional conferences, meetings, and celebrations tailored to
                                        your brand.
                                    </p>
                                    <div className="fs-3 text-pink text-end">
                                        <i className="fas fa-briefcase  str-bi" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HomeEvent;