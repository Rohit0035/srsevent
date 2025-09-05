import React from "react";

const FAQAccordion = ({ title, highlight, faqs }) => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {/* Section Title */}
                        <h2 className="fw-bold text-center mb-4">
                            {title} <span className="text-pink">{highlight}</span>
                        </h2>

                        {/* Accordion */}
                        <div className="accordion" id="accordionExample">
                            {faqs.map((faq, index) => {
                                const collapseId = `collapse${index}`;
                                const headingId = `heading${index}`;
                                return (
                                    <div className="accordion-item mb-2" key={index}>
                                        <h5 className="accordion-header" id={headingId}>
                                            <button
                                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${collapseId}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={collapseId}
                                            >
                                                <span className="me-2">
                                                    <i className="fas fa-question-circle text-pink"></i>
                                                </span>
                                                {faq.question}
                                            </button>
                                        </h5>
                                        <div
                                            id={collapseId}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                            aria-labelledby={headingId}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
