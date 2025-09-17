import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ScrollAnimation from "react-animate-on-scroll";

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
import { getGallery, getGalleryCategories } from "../services/api";
import API_CONFIG from "../config/apiConfig";

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [gallery, setGallery] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await getGallery();
        if (res.data.success) {
          setGallery(res.data.data); // API returns array of images
          setImages(
            res.data?.data?.map(g => {
              return {
                src: `${API_CONFIG.IMAGE_URL}/${g.image}`,
                category: g?.gallery_category?.name
              };
            }) || []
          );
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  useEffect(() => {
    const fetchGalleryCategories = async () => {
      try {
        const res = await getGalleryCategories();
        if (res.data.success) {
          setCategories(res.data?.data || [] );
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryCategories();
  }, []);

  //   const images = [
  //     { src: ser1, category: "wedding" },
  //     { src: ser2, category: "wedding" },
  //     { src: ser3, category: "birthday" },
  //     { src: ser4, category: "corporate" },
  //     { src: ser5, category: "corporate" },
  //     { src: b1, category: "family" },
  //     { src: b2, category: "annual" },
  //     { src: b3, category: "board" },
  //     { src: b4, category: "birthday" },
  //     { src: b5, category: "wedding" }
  //   ];

  //   const categories = [
  //     { key: "all", label: "All" },
  //     { key: "wedding", label: "Wedding" },
  //     { key: "birthday", label: "Birthday" },
  //     { key: "corporate", label: "All Corporate Parties" },
  //     { key: "annual", label: "Annual Day" },
  //     { key: "family", label: "Family Day" },
  //     { key: "board", label: "Board Meeting" }
  //   ];

  const filteredImages =
    activeTab === "all"
      ? images
      : images.filter(img => {
          if (activeTab === "corporate") {
            return ["corporate", "annual", "family", "board"].includes(
              img.category
            );
          }
          return img.category === activeTab;
        });

  return (
    <div className="container py-4">
      {/* Tabs */}
      <ul className="nav nav-pills justify-content-center mb-5" role="tablist">
        <li className="nav-item">
            <button
              className={`nav-link bg-pink text-pink ${activeTab === 'all'
                ? "active"
                : ""}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
          </li>
        {categories.map(cat =>
          <li className="nav-item" key={cat.id}>
            <button
              className={`nav-link bg-pink text-pink ${activeTab === cat.name
                ? "active"
                : ""}`}
              onClick={() => setActiveTab(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        )}
      </ul>

      {/* Gallery Grid */}
      <div className="row g-3">
        {filteredImages.map((img, index) =>
          <div className="col-6 col-md-2 col-lg-3" key={index}>
            <div className="gallery-item mb-0">
              <img
                src={img.src}
                alt="event"
                className="img-fluid rounded shadow-sm"
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={filteredImages.map(img => ({ src: img.src }))}
      />
    </div>
  );
};

export default GalleryTabs;
