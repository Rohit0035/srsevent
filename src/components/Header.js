import React, { useEffect, useState } from "react";
import Logo from "../assets/img/common/logo.png"

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
                      <a href="tel:+971504418336">
                        <i className="fas fa-mobile-alt" /> +971504418336
                      </a>
                      ,
                      <a href="tel:+9190361 24720">
                        <i className="fas fa-mobile-alt" />
                        +9190361 24720
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="header-top-contact-info">
                      <a href="">
                        <i className="fas-envelope" />
                        <span className="__cf_email__">Info@gmail.com</span>
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
      <div className="main-navigation">
        <nav
          className={`navbar navbar-expand-lg ${isFixed ? "fixed-top shadow-sm" : ""
            }`}
        >
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="logo" className="logo" width="150px" />
            </a>
            {/* Mobile Toggle Button (only shows on small screens) */}
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
            {/* Desktop Menu (hidden on small screens) */}
            <div
              className="collapse navbar-collapse d-none d-lg-block"
              id="main_nav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu str-mn fade-down">
                    <div className="row">
                      <div className="col-md-6">
                        <li>
                          <a
                            className="dropdown-item"
                            href="/venuemanagement"
                          >
                            Venue Management
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/floraldecor">
                            Floral Décor
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-photography.php">
                            Photography
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-videography.php">
                            Videography
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-catering.php">
                            Catering
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="ser-bridal-makeover.php"
                          >
                            Bridal Makeover
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-sound-light.php">
                            Sounds &amp; Lights
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="ser-furniture-fabrication.php"
                          >
                            Furniture &amp; Fabrications
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="ser-transport-logistics.php"
                          >
                            Guest Transportation &amp; Logistics
                          </a>
                        </li>
                      </div>
                      <div className="col-md-6">
                        <li>
                          <a className="dropdown-item" href="ser-hospitality.php">
                            Hospitality &amp; Guest Welcome Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="ser-live-streaming.php"
                          >
                            Wedding Live Streaming
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-return-gifts.php">
                            Return Gifts &amp; Wedding Favours
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-photo-booth.php">
                            Trending Photo Booth Setups
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="ser-special-effects.php"
                          >
                            Cold Pyro, CO₂ Jet, Fog Effect, Confetti &amp;
                            Firecracker Shows
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-dj-band.php">
                            DJ, Live Band &amp; Musical Arrangements
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-artists.php">
                            Live Canvas Painting, Sketching &amp; Caricature Artists
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-fun-games.php">
                            Fun Games &amp; Interactive Activities
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="ser-ganga-aarti.php">
                            Ganga Aarti Ceremony
                          </a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Events
                  </a>
                  <ul className="dropdown-menu  fade-down">
                    <li>
                      <a
                        className="dropdown-item"
                        href="ser_venue-management.php"
                      >
                        Wedding 
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="ser_venue-management.php"
                      >

                        Engagement 
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="ser_venue-management.php"
                      >
                        Birthday 
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="ser_venue-management.php"
                      >
                        Anniversary 
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="ser_venue-management.php"
                      >
                        Kids' Birthday Party
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="ser_venue-management.php"
                      >
                        Corporate 

                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/whyus">
                    Why Choose us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="header-nav-right ms-auto">
                <div className="header-btn">
                  <a href="#" className="theme-btn">
                    Get Quote <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Offcanvas for Mobile */}
            <div
              className="offcanvas offcanvas-end d-lg-none"
              tabIndex={-1}
              id="offcanvasNav"
              aria-labelledby="offcanvasNavLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavLabel">
                  <img
                    src={Logo}
                    alt="logo"
                    className="logo-st"
                  />
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu fade-down border-0">
                      <li>
                        <a
                          className="dropdown-item"
                          href="ser-venue-management.php"
                        >
                          Venue Management
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-floral-decor.php">
                          Floral Décor
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-photography.php">
                          Photography
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-videography.php">
                          Videography
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-catering.php">
                          Catering
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-bridal-makeover.php">
                          Bridal Makeover
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-sound-light.php">
                          Sounds &amp; Lights
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="ser-furniture-fabrication.php"
                        >
                          Furniture &amp; Fabrications
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="ser-transport-logistics.php"
                        >
                          Guest Transportation &amp; Logistics
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-hospitality.php">
                          Hospitality &amp; Guest Welcome Services
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-live-streaming.php">
                          Wedding Live Streaming
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-return-gifts.php">
                          Return Gifts &amp; Wedding Favours
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-photo-booth.php">
                          Trending Photo Booth Setups
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-special-effects.php">
                          Cold Pyro, CO₂ Jet, Fog Effect, Confetti &amp; Firecracker
                          Shows
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-dj-band.php">
                          DJ, Live Band &amp; Musical Arrangements
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-artists.php">
                          Live Canvas Painting, Sketching &amp; Caricature Artists
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-fun-games.php">
                          Fun Games &amp; Interactive Activities
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="ser-ganga-aarti.php">
                          Ganga Aarti Ceremony
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/whyus">
                      Why Choose us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/gallery">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="header-btn mt-3">
                  <a href="#" className="theme-btn w-100">
                    Get Quote <i className="fas fa-arrow-right" />
                  </a>
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
