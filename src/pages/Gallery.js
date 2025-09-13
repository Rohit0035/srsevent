import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import shape2 from "../assets/img/shape/02.png";
import shape3 from "../assets/img/shape/03.png";

// top marquee images
import ser1 from "../assets/img/common/ser-1.jpg";
import ser2 from "../assets/img/common/ser-2.jpg";
import ser3 from "../assets/img/common/ser-3.jpg";
import ser4 from "../assets/img/common/ser-4.jpg";
import ser5 from "../assets/img/common/ser-5.jpg";
import b1 from "../assets/img/common/b-1.jpg";
import b2 from "../assets/img/common/b-2.jpg";
import b3 from "../assets/img/common/b-3.webp";
import b4 from "../assets/img/common/b-4.jpg";
import b5 from "../assets/img/common/b-5.webp";

// bottom marquee images
import cn1 from "../assets/img/common/cn-1.jpg";
import cn2 from "../assets/img/common/cn-2.jpg";
import cn3 from "../assets/img/common/cn-3.jpeg";
import cn4 from "../assets/img/common/cn-4.jpeg";
import cn5 from "../assets/img/common/cn-5.jpg";
import ev1 from "../assets/img/common/ev-1.jpg";
import ev2 from "../assets/img/common/ev-2.jpg";
import ev3 from "../assets/img/common/ev-3.jpg";
import ev4 from "../assets/img/common/ev-4.jpg";
import ev5 from "../assets/img/common/ev-5.jpg";
import divider from "../assets/img/icon/divider.png"
import GalleryTabs from "../components/GalleryTabs";

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Collect all images for lightbox
    const allImages = [
        ser1, ser2, ser3, ser4, ser5,
        b1, b2, b3, b4, b5,
        cn1, cn2, cn3, cn4, cn5,
        ev1, ev2, ev3, ev4, ev5,
    ];

    const slides = allImages.map((img) => ({ src: img }));

    const handleOpen = (i) => {
        setIndex(i);
        setOpen(true);
    };

    return (
        <>
            <Helmet>
                <title>Gallery - SrsEvent</title>
                <meta
                    name="description"
                    content="Explore the SrsEvent Gallery and relive the beautiful weddings, birthdays, corporate events, and celebrations we have organized. See how we turn moments into lasting memories."
                />
                <meta
                    name="keywords"
                    content="SrsEvent gallery, event gallery, wedding gallery, birthday party gallery, corporate event photos, anniversary celebration images, event decoration gallery, event highlights, Bangalore event gallery"
                />
                <link rel="canonical" href="https://srsevent.com/gallery" />
            </Helmet>

            <Header />
            <main className="main">
                {/* breadcrumb */}
                <div
                    className="site-breadcrumb"
                    style={{ background: "url(assets/img/breadcrumb/01.html)" }}
                >
                    <div className="container">
                        <h2 className="breadcrumb-title">Gallery</h2>
                    </div>
                </div>

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
                                <div className="site-heading text-center mb-3">
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
                    </div>

                    {/* gallery tabs */}

                    <GalleryTabs />

                    {/* gallery tabs close */}


                    <div className="bg-light py-5 mt-5 ">
                        <h2 className="site-title text-center">
                            Our Captured <span>Moments</span>
                        </h2>
                        {/* Top marquee */}
                        <div className="overflow-hidden mb-2  mt-4">
                            <div className="d-inline-flex gap-3 animate-marquee">
                                {allImages.slice(0, 10).map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        className="rounded shadow gal-i"
                                        alt=""
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleOpen(i)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Bottom marquee */}
                        <div className="overflow-hidden">
                            <div className="d-inline-flex gap-3 animate-marquee-reverse">
                                {allImages.slice(10).map((img, i) => (
                                    <img
                                        key={i + 10}
                                        src={img}
                                        className="rounded shadow gal-i"
                                        alt=""
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleOpen(i + 10)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
                {/* gallery-area end */}
            </main>

            <Footer />

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
            />
        </>
    );
};

export default Gallery;
