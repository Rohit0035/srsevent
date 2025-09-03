import React from 'react';
import divider from "../assets/img/icon/divider.png"
const HomeServices = () => {
    return (
        <>
            <div className="service-area bg py-5">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 mx-auto wow fadeInDown"
                            data-wow-duration="1s"
                            data-wow-delay=".25s"
                        >
                            <div className="site-heading text-center">
                                <span className="site-title-tagline">Our Services</span>
                                <h2 className="site-title">
                                    Our Awesome <span>Services</span>
                                </h2>
                                <div className="header-img-divider">
                                    <img src={divider} alt="srsevent" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="row">
                            {/* Venue Management */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-1"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Venue Management
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Floral Décor */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-2"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Floral Décor
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Photography */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-3"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Photography
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Videography */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-4"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Videography
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Catering */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-5"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">Catering</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Bridal Makeover */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-6"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Bridal Makeover
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Sounds & Lights */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-7"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Sounds &amp; Lights
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Furniture & Fabrications */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-8"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Furniture &amp; Fabrications
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Guest Transportation & Logistics */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-9"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Guest Transportation &amp; Logistics
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Hospitality & Guest Welcome Services */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-10"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Hospitality &amp; Guest Welcome Services
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Wedding Live Streaming */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-11"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Wedding Live Streaming
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Return Gifts & Wedding Favours */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-12"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Return Gifts &amp; Wedding Favours
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Trending Photo Booth Setups */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-13"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Trending Photo Booth Setups
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Cold Pyro, CO₂ Jet, Fog Effect, Confetti & Firecracker Shows */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-14"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Cold Pyro, CO₂ Jet, Fog Effect, Confetti &amp; Firecracker
                                                Shows
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* DJ, Live Band & Musical Arrangements */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-15"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                DJ, Live Band &amp; Musical Arrangements
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Live Canvas Painting, Sketching & Caricature Artists */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-16"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Live Canvas Painting, Sketching &amp; Caricature Artists
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Fun Games & Interactive Activities */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-17"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Fun Games &amp; Interactive Activities
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Ganga Aarti Ceremony */}
                            <div className="col-6 col-md-6 col-lg-2 mb-3 d-flex">
                                <div 
                                    className="card text-white border-0 shadow-lg rounded-3 w-100 sr-18"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 230
                                    }}
                                >
                                    <a href="index.php" className="text-decoration-none h-100">
                                        <div className="card-body d-flex flex-column justify-content-end align-items-start bg-dark bg-opacity-50 rounded-3 h-100">
                                            <h5 className="card-title fw-bold text-white mb-0">
                                                Ganga Aarti Ceremony
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomeServices;