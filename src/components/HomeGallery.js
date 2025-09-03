import React, { useState } from "react";
import shape2 from "../assets/img/shape/02.png"
import shape3 from "../assets/img/shape/03.png"
import divider from "../assets/img/icon/divider.png"
import ser1 from "../assets/img/common/ser-1.jpg"
import ser2 from "../assets/img/common/ser-2.jpg"
import ser3 from "../assets/img/common/ser-3.jpg"
import ser4 from "../assets/img/common/ser-4.jpg"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const HomeGallery = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Lightbox images
    const slides = [
        { src: ser1 },
        { src: ser2 },
        { src: ser3 },
        { src: ser4 },
    ];

    const handleOpen = (i) => {
        setIndex(i);
        setOpen(true);
    };
    return (
        <>
            {/* gallery-area */}
            <div className="gallery-area py-5">
                <div className="gallery-shape">
                    <img className="gallery-shape-1" src={shape2} alt="" />
                    <img className="gallery-shape-2" src={shape3} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 mx-auto wow fadeInDown"
                            data-wow-duration="1s"
                            data-wow-delay=".25s"
                        >
                            <div className="site-heading text-center">
                                <span className="site-title-tagline">Our Gallery</span>
                                <h2 className="site-title">
                                    Our Captured <span>Moments</span>
                                </h2>
                                <div className="header-img-divider">
                                    <img src={divider} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row popup-gallery wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".25s"
                        data-masonry='{"percentPosition": true }'
                    >
                        <div className="col-md-3">
                            <div className="gallery-item mb-3">
                                <div
                                    className="gallery-img"
                                    onClick={() => handleOpen(0)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={ser1} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="gallery-item mb-3">
                                <div
                                    className="gallery-img"
                                    onClick={() => handleOpen(1)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={ser2} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="gallery-item mb-3">
                                <div
                                    className="gallery-img"
                                    onClick={() => handleOpen(2)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={ser3} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="gallery-item mb-3">
                                <div
                                    className="gallery-img"
                                    onClick={() => handleOpen(3)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={ser4} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lightbox */}
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        index={index}
                        slides={slides}
                    />
                </div>
            </div>
            {/* gallery-area end */}
        </>
    );
};

export default HomeGallery;