import React from 'react';

const HomeFeature = () => {
    return (
        <>
            {/* feature area */}
            <div className="feature-area py-5">
                <div className="container">
                    <div className="feature-wrapper">
                        <div className="row">
                            {/* Feature 1 */}
                            <div className="col-6 col-md-6 col-lg-3 mb-3">
                                <div
                                    className="feature-item wow fadeInUp h-100 mb-3"
                                    data-wow-duration="1s"
                                    data-wow-delay=".25s"
                                >
                                    <div className="feature-icon">
                                        <i className="fas fa-smile" />
                                    </div>
                                    <h4 className="feature-title">Satisfaction Guarantee</h4>
                                    <p>
                                        Your happiness is our priority — we ensure every detail exceeds
                                        your expectations.
                                    </p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="col-6 col-md-6 col-lg-3 mb-3">
                                <div
                                    className="feature-item wow fadeInUp h-100 mb-3"
                                    data-wow-duration="1s"
                                    data-wow-delay=".50s"
                                >
                                    <div className="feature-icon">
                                        <i className="fas fa-user-tie" />
                                    </div>
                                    <h4 className="feature-title">Expert Planners</h4>
                                    <p>
                                        Our professional team brings years of expertise to craft
                                        flawless celebrations.
                                    </p>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="col-6 col-md-6 col-lg-3 mb-3">
                                <div
                                    className="feature-item wow fadeInUp h-100 mb-3"
                                    data-wow-duration="1s"
                                    data-wow-delay=".75s"
                                >
                                    <div className="feature-icon">
                                        <i className="fas fa-heart" />
                                    </div>
                                    <h4 className="feature-title">Made With Love</h4>
                                    <p>
                                        Every event is designed with passion, love, and personal care to
                                        reflect your story.
                                    </p>
                                </div>
                            </div>
                            {/* Feature 4 */}
                            <div className="col-6 col-md-6 col-lg-3 mb-3">
                                <div
                                    className="feature-item wow fadeInUp h-100 mb-3"
                                    data-wow-duration="1s"
                                    data-wow-delay="1s"
                                >
                                    <div className="feature-icon">
                                        <i className="fas fa-hand-holding-usd" />
                                    </div>
                                    <h4 className="feature-title">Affordable Pricing</h4>
                                    <p>
                                        We deliver premium event services with flexible packages that
                                        suit every budget.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature area end */}
        </>

    );
};

export default HomeFeature;