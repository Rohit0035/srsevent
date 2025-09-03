import React from 'react';
import divider from "../assets/img/icon/divider.png"
import Cop1 from "../assets/img/common/cop-1.png"

const WhyChoose = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="site-heading text-center">
                    <h2 className="site-title">Why choose us?</h2>
                    <div className="header-img-divider">
                            <img src={divider} alt="" />
                    </div>
                </div>
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-md-6">
                        <div className="d-flex mb-4">
                            <div className="me-3 fs-3 text-pink">
                                <i className="fas fa-gem" />
                            </div>
                            <div>
                                <h5 className="fw-semibold text-pink">Unmatched Expertise</h5>
                                <p className="text-muted mb-0">
                                    From intimate gatherings to grand weddings, our 2500+ successful
                                    events prove our excellence in making your dreams a reality.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="me-3 fs-3 text-pink">
                                <i className="fas fa-heart" />
                            </div>
                            <div>
                                <h5 className="fw-semibold text-pink">Personalized Care</h5>
                                <p className="text-muted mb-0">
                                    Every celebration is unique—our dedicated planners ensure your
                                    event reflects your personality, style, and emotions perfectly.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="me-3 fs-3 text-pink">
                                <i className="fas fa-magic" />
                            </div>
                            <div>
                                <h5 className="fw-semibold text-pink">Seamless Execution</h5>
                                <p className="text-muted mb-0">
                                    With creative designs, modern technology, and flawless planning,
                                    we turn your special day into a timeless memory.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src={Cop1}
                            className="img-fluid rounded-3 shadow"
                            alt="Why Choose SrsEvent"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhyChoose;