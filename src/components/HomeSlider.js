import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import shape6 from "../assets/img/shape/06.png";
import shape11 from "../assets/img/shape/11.png";

const HomeSlider = () => {
  return (
    <div className="hero-section">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        // pagination={{ clickable: true }}
        navigation={true}
        className="hero-slider"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-single slide-1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-9 col-lg-9 mx-auto">
                  <div className="hero-content text-center">
                    <div className="hero-content-shape">
                      <img
                        className="hero-content-shape-1"
                        src={shape6}
                        alt="srsevent"
                      />
                      <img
                        className="hero-content-shape-2"
                        src={shape11}
                        alt="srsevent"
                      />
                    </div>
                    <h6
                      className="hero-sub-title"
                      data-animation="fadeInUp"
                      data-delay=".25s"
                    >
                      Crafting Unforgettable Memories
                    </h6>
                    <h1
                      className="hero-title"
                      data-animation="fadeInUp"
                      data-delay=".50s"
                    >
                      Turning <span>Dreams</span> Into Elegant Celebrations
                    </h1>
                    <p data-animation="fadeInUp" data-delay=".75s">
                      From intimate gatherings to grand weddings, our expert
                      planners bring creativity and precision to make your
                      special day truly remarkable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-single slide-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-9 col-lg-9 mx-auto">
                  <div className="hero-content text-center">
                    <div className="hero-content-shape">
                      <img
                        className="hero-content-shape-1"
                        src={shape6}
                        alt="srsevent"
                      />
                      <img
                        className="hero-content-shape-2"
                        src={shape11}
                        alt="srsevent"
                      />
                    </div>
                    <h6
                      className="hero-sub-title"
                      data-animation="fadeInUp"
                      data-delay=".25s"
                    >
                      Your Vision, Our Passion
                    </h6>
                    <h2
                      className="hero-title"
                      data-animation="fadeInUp"
                      data-delay=".50s"
                    >
                      Wedding &amp; Event Planner For <span>Stylish</span>{" "}
                      Celebrations
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".75s">
                      We handle every detail with love and dedication so you can
                      enjoy stress-free moments, knowing your event is in expert
                      hands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
