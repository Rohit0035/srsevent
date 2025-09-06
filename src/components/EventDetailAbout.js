import React from "react";

const EventDetailAbout = ({
    title,
    highlight,
    description,
    extraText,
    buttonText,
    image,
    theme = "danger" // Bootstrap color theme: danger, warning, primary, success...
}) => {
    return (
        <>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Image */}
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img
                                src={image}
                                alt={title}
                                className="img-fluid rounded w-100"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-6">
                            <h2 className="fw-bold">
                                {title} <span className='text-pink'>{highlight}</span>
                            </h2>
                            <p className="mt-3">{description}</p>
                            {extraText && <p className="text-muted">{extraText}</p>}
                            <a href="#enquirynow" className={`theme-btn mt-3`}>
                                {buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetailAbout;
