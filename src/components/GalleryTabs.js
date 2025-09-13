import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ScrollAnimation from 'react-animate-on-scroll';

// Imported images
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

const GalleryTabs = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gallery images with categories
    const images = [
        { src: ser1, category: "wedding" },
        { src: ser2, category: "wedding" },
        { src: ser3, category: "birthday" },
        { src: ser4, category: "corporate" },
        { src: ser5, category: "corporate" },
        { src: b1, category: "family" },
        { src: b2, category: "annual" },
        { src: b3, category: "board" },
        { src: b4, category: "birthday" },
        { src: b5, category: "wedding" },
    ];

    const categories = [
        { key: "all", label: "All" },
        { key: "wedding", label: "Wedding" },
        { key: "birthday", label: "Birthday" },
        { key: "corporate", label: "All Corporate Parties" },
        { key: "annual", label: "Annual Day" },
        { key: "family", label: "Family Day" },
        { key: "board", label: "Board Meeting" },
    ];

    const filteredImages =
        activeTab === "all"
            ? images
            : images.filter((img) => {
                if (activeTab === "corporate") {
                    return ["corporate", "annual", "family", "board"].includes(img.category);
                }
                return img.category === activeTab;
            });

    return (
        <div className="container py-4">
            {/* Tabs */}
            <ul className="nav nav-pills justify-content-center mb-5" role="tablist">
                {categories.map((cat) => (
                    <li className="nav-item" key={cat.key}>
                        <button
                            className={`nav-link bg-pink text-pink ${activeTab === cat.key ? "active" : ""}`}
                            onClick={() => setActiveTab(cat.key)}
                        >
                            {cat.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Gallery Grid */}
            <div className="row g-3">
                {filteredImages.map((img, index) => (
                    <div className="col-6 col-md-2 col-lg-3" key={index}>
                        <div className="gallery-item">
                            <img
                                src={img.src}
                                alt="event"
                                className="img-fluid rounded shadow-sm"
                                style={{
                                    cursor: "pointer",
                                    width: "100%",
                                    height: "220px", // fixed height
                                    objectFit: "cover", // crop to fit
                                }}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setOpen(true);
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={filteredImages.map((img) => ({ src: img.src }))}
            />
        </div>
    );
};

export default GalleryTabs;
