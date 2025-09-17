import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import shape2 from "../assets/img/shape/02.png";
import shape3 from "../assets/img/shape/03.png";
import divider from "../assets/img/icon/divider.png";
// import GalleryTabs from "../components/GalleryTabs";

import { getGallery } from "../services/api";
import GalleryTabs from "../components/GalleryTabs";
import API_CONFIG from "../config/apiConfig";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await getGallery();
        if (res.data.success) {
          setGallery(res.data.data); // API returns array of images
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // ✅ Corrected Lightbox slides URL
  const slides = gallery.map((g) => ({
    src: `${API_CONFIG.IMAGE_URL}/${g.image}`,
  }));

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
        <link rel="canonical" href={`${API_CONFIG.WEBSITE_URL}/gallery`} />
      </Helmet>

      <Header />
      <main className="main">
        {/* breadcrumb */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
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
              <GalleryTabs/>
            </div>
          </div>

          {/* API Images */}
          <div className="bg-light py-5 mt-5">
            <h2 className="site-title text-center">
              Our Captured <span>Moments</span>
            </h2>

            {loading ? (
              <p className="text-center">Loading gallery...</p>
            ) : (
              <>
                {/* Top marquee */}
                <div className="overflow-hidden mb-2 mt-4">
                  <div className="d-inline-flex gap-3 animate-marquee">
                    {gallery.slice(0, 10).map((g, i) => (
                      <img
                        key={g.id}
                        src={`${API_CONFIG.IMAGE_URL}/${g.image}`}
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
                    {gallery.slice(10).map((g, i) => (
                      <img
                        key={g.id}
                        src={`${API_CONFIG.IMAGE_URL}/${g.image}`}
                        className="rounded shadow gal-i"
                        alt=""
                        style={{ cursor: "pointer" }}
                        onClick={() => handleOpen(i + 10)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
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
