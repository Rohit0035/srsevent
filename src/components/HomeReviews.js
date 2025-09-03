import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import divider from "../assets/img/icon/divider.png"
import shape9 from "../assets/img/shape/09.png"

const HomeReviews = () => {
    return (
        <>
            {/* testimonial-area */}
            <div className="testimonial-area bg py-5">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 mx-auto wow fadeInDown"
                            data-wow-duration="1s"
                            data-wow-delay=".25s"
                        >
                            <div className="site-heading text-center">
                                <span className="site-title-tagline">Testimonials</span>
                                <h2 className="site-title">
                                    What Our Clients <span>Say</span>
                                </h2>
                                <div className="header-img-divider">
                                    <img src={divider} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={2} 
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="testimonial-slider"
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // mobile
                            },
                            768: {
                                slidesPerView: 2, 
                            },
                        }}
                    >
                        {/* Testimonial 1 */}
                        <SwiperSlide>
                            <div className="testimonial-single">
                                <div className="testimonial-shape">
                                    <img src={shape9} alt="" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img text-center">
                                        <i
                                            className="fas fa-user-circle fa-4x"
                                            style={{ color: "#ff69b4" }}
                                        />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Riya Sharma</h4>
                                        <p>Client</p>
                                    </div>
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        The wedding planning team made our big day unforgettable!
                                        Every detail from décor to coordination was perfect.
                                    </p>
                                    <div className="testimonial-quote-icon">
                                        <i className="fas fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 2 */}
                        <SwiperSlide>
                            <div className="testimonial-single">
                                <div className="testimonial-shape">
                                    <img src={shape9} alt="" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img text-center">
                                        <i
                                            className="fas fa-user-circle fa-4x"
                                            style={{ color: "#ff69b4" }}
                                        />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Arjun Mehta</h4>
                                        <p>Client</p>
                                    </div>
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        The photography and videography captured every beautiful
                                        moment. We will cherish these memories forever.
                                    </p>
                                    <div className="testimonial-quote-icon">
                                        <i className="fas fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 3 */}
                        <SwiperSlide>
                            <div className="testimonial-single">
                                <div className="testimonial-shape">
                                    <img src={shape9} alt="" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img text-center">
                                        <i
                                            className="fas fa-user-circle fa-4x"
                                            style={{ color: "#ff69b4" }}
                                        />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>Neha Kapoor</h4>
                                        <p>Client</p>
                                    </div>
                                </div>
                                <div className="testimonial-quote">
                                    <p>
                                        Everything from catering to entertainment was flawless.
                                        Guests are still talking about how wonderful the day was!
                                    </p>
                                    <div className="testimonial-quote-icon">
                                        <i className="fas fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-rate">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* testimonial-area end */}
        </>
    );
};

export default HomeReviews;
