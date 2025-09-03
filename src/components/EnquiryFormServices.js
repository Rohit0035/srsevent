import React from 'react';

const EnquiryFormServices = () => {
    return (
        <>
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
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                </div>
                <button className="theme-btn">
                    Submit Now
                    <i className="fas fa-arrow-right" />
                </button>
            </form>

        </>
    );
};

export default EnquiryFormServices;