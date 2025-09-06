import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const EventServicesSlider = ({ title, highlight, services }) => {
    return (
        <>
            <section className="py-5 bg-white d-none d-sm-block">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4">
                        {title} <span className="text-pink">{highlight}</span>
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1200: { slidesPerView: 2 },
                        }}
                        className="pb-5"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`d-flex align-items-center shadow border-0  p-4 h-100 ${service.bg}`}
                                    style={{ minHeight: "220px", borderRadius: '100px' }}
                                >
                                    {/* Image Section */}
                                    <div className="me-4 flex-shrink-0">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="rounded-circle img-fluid shadow"
                                            style={{
                                                width: "200px",
                                                height: "200px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <div className="flex-grow-1">
                                        <h4 className="fw-bold">{service.title}</h4>
                                        <hr className="border-2 border-warning w-25" />
                                        <p className="mb-0">{service.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="py-5 bg-white d-block d-sm-none">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4">
                        {title} <span className="text-pink">{highlight}</span>
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1200: { slidesPerView: 2 },
                        }}
                        className="pb-5"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`shadow border-0 p-4 h-100 ${service.bg}`}
                                    style={{ borderRadius: '20px' }}
                                >
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <div className="me-4 flex-shrink-0">
                                                <img
                                                    src={service.img}
                                                    alt={service.title}
                                                    className="rounded-circle img-fluid shadow mb-3"
                                                    style={{
                                                        width: "200px",
                                                        height: "200px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Text Section */}
                                            <div className="flex-grow-1">
                                                <h4 className="fw-bold">{service.title}</h4>
                                                <hr className="border-2 border-warning w-25" />
                                                <p className="mb-0">{service.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Section */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default EventServicesSlider;
