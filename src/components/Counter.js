import React from 'react';

const Counter = () => {
    return (
        <>
            <>
                {/* counter area */}
                <div
                    className="counter-area counter-wrapper py-5"
                    style={{ background: "#433357" }}
                >
                    <div className="container">
                        <div className="row text-center">
                            {/* Projects Done */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon text-white mb-2">
                                        <i className="fas fa-clipboard-check " />
                                    </div>
                                    <div>
                                        <span
                                            className="counter text-white"
                                            data-count="+"
                                            data-to={1200}
                                            data-speed={3000}
                                        >
                                            1200
                                        </span>
                                        <h6 className="title text-white">+ Projects Done</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Happy Clients */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon text-white mb-2">
                                        <i className="fas fa-smile-beam " />
                                    </div>
                                    <div>
                                        <span
                                            className="counter text-white"
                                            data-count="+"
                                            data-to={500}
                                            data-speed={3000}
                                        >
                                            500
                                        </span>
                                        <h6 className="title text-white">+ Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Expert Planners */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon text-white mb-2">
                                        <i className="fas fa-users-cog" />
                                    </div>
                                    <div>
                                        <span
                                            className="counter text-white"
                                            data-count="+"
                                            data-to={1500}
                                            data-speed={3000}
                                        >
                                            1500
                                        </span>
                                        <h6 className="title text-white">+ Expert Planners</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Event Locations */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="icon text-white mb-2">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div>
                                        <span
                                            className="counter text-white"
                                            data-count="+"
                                            data-to={50}
                                            data-speed={3000}
                                        >
                                            50
                                        </span>
                                        <h6 className="title text-white">+ Event Locations</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* counter area end */}
            </>

        </>
    );
};

export default Counter;