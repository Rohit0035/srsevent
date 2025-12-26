import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/common/logo.png";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      {/* top header */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <div className="header-top-contact-info">
                      <a href="tel:+971563543020">
                        <i className="fas fa-mobile-alt" /> +971563543020
                      </a>
                      ,{" "}
                      <a href="tel:+919036124720">
                        <i className="fas fa-mobile-alt" /> +919036124720
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="header-top-contact-info">
                      <a href="mailto:info@gmail.com">
                        <i className="fas fa-envelope" /> Info@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <span>Follow Us:</span>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="main-navigation">
        <nav
          className={`navbar navbar-expand-lg ${
            isFixed ? "fixed-top shadow-sm" : ""
          }`}
        >
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" className="logo" width="150px" />
            </Link>

            {/* Mobile Toggle */}
            <div className="d-lg-none mobile-menu-right">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNav"
                aria-controls="offcanvasNav"
              >
                <span className="navbar-toggler-btn-icon">
                  <i className="fas fa-bars" />
                </span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div
              className="collapse navbar-collapse d-none d-lg-block"
              id="main_nav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/whyus">
                    Why Choose Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="header-nav-right ms-auto">
                <div className="header-btn">
                  <Link to="/quote" className="theme-btn">
                    Get Quote <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
