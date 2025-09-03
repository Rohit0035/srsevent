import React from 'react';
import hfoot from "../assets/img/common/h-foot.png"
const FreeQuote = () => {
    return (
        <>
            {/* quote area */}
            <div className="quote-area py-5">
                <div className="container">
                    <div className="quote-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="quote-img">
                                    <img src={hfoot} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="quote-content">
                                    <div className="quote-header">
                                        <h6>Get Free Quote</h6>
                                        <h2>Feel Free To Contact With Us</h2>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <select className="form-select" name="service">
                                                        <option value="">Choose Service</option>
                                                        {/* <option value="1">Wedding Rings</option>
                                          <option value="2">Guest List</option>
                                          <option value="3">Photography Event</option>
                                          <option value="4">Wedding Car</option>
                                          <option value="5">Interior Decoration</option>
                                          <option value="6">Wedding Registry</option> */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                placeholder="Type Message"
                                                rows={4}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button className="theme-btn">
                                            Submit Now
                                            <i className="fas-arrow-right" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quote area end */}
        </>
    );
};

export default FreeQuote;
