import React, { useEffect, useState } from "react";
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
                      <a href="mailto:info@srsevent.com">
                        <i className="fas fa-envelope" />
                        <span className="__cf_email__">info@srsevent.com</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <span>Follow Us:</span>
                <a href="https://www.facebook.com/profile.php?id=61583675061590&ref=pl_edit_xav_ig_profile_page_web#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.instagram.com/srs.event/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.threads.com/@srs.event">
                  <i className="fab fa-google-wallet" />
                </a>
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <nav
          className={`navbar navbar-expand-lg ${isFixed
            ? "fixed-top shadow-sm"
            : ""}`}
        >
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="logo" className="logo" width="150px" />
            </a>
            {/* Mobile Toggle Button (only shows on small screens) */}
            <div className="d-lg-none mobile-menu-right">
              <button
                className="navbar-toggler bg-pink text-white px-2 py-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNav"
                aria-controls="offcanvasNav"
              >
                <span className="navbar-toggler-btn-icon">
                  <i className="fas fa-bars text-white" />
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
                  <a className="nav-link" href="/about-us">
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
                            href="/venue-management-services-in-bangalore"
                          >
                            Venue Management
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/floral-decor-services-in-bangalore"
                          >
                            Floral Décor
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/event-wedding-photography-in-bangalore"
                          >
                            Photography
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/professional-videography-services-in-bangalore"
                          >
                            Videography
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/catering-services-in-bangalore"
                          >
                            Catering
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/bridal-makeup-makeover-services-in-bangalore"
                          >
                            Bridal Makeover
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/event-sound-lighting-services-in-bangalore"
                          >
                            Sounds &amp; Lights
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/event-furniture-stage-fabrications-in-bangalore"
                          >
                            Furniture &amp; Fabrications
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/guest-transportation-logistics-in-bangalore"
                          >
                            Guest Transportation &amp; Logistics
                          </a>
                        </li>
                      </div>
                      <div className="col-md-6">
                        <li>
                          <a
                            className="dropdown-item"
                            href="/hospitality-guest-welcome-services-in-bangalore"
                          >
                            Hospitality &amp; Guest Welcome Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/wedding-live-streaming-services-in-bangalore"
                          >
                            Wedding Live Streaming
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/return-gifts-wedding-favours-in-bangalore"
                          >
                            Return Gifts &amp; Wedding Favours
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/photo-booth-setups-for-events-in-bangalore"
                          >
                            Trending Photo Booth Setups
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/cold-pyro-fog-confetti-firecracker-shows-in-bangalore"
                          >
                            Cold Pyro, CO₂ Jet, Fog Effect, Confetti &amp;
                            Firecracker Shows
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/dj-live-band-musical-arrangements-in-bangalore"
                          >
                            DJ, Live Band &amp; Musical Arrangements
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/live-painting-caricature-artists-in-bangalore"
                          >
                            Live Canvas Painting, Sketching &amp; Caricature
                            Artists
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/fun-games-interactive-activities-in-bangalore"
                          >
                            Fun Games &amp; Interactive Activities
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/ganga-aarti-ceremony-bangalore"
                          >
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
                  <ul className="dropdown-menu str-mn fade-down">
                    <div className="row">
                      {/* Corporate Events */}
                      <div className="col-md-6 mb-2">
                        <h4 className="mb-0 text-pink p-2">
                          {" "}<i className="fas fa-briefcase " /> Corporate
                          Events
                        </h4>
                        <hr className="mt-2 mb-2" />
                        <li>
                          <a
                            className="dropdown-item"
                            href="/corporate-event-management-bangalore"
                          >
                            Corporate Management
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/inauguration-event-organisers-bangalore"
                          >
                            Inauguration Planners
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/conference-seminar-event-bangalore"
                          >
                            Conferences and Seminar Event
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/corporate-outdoor-events-bangalore"
                          >
                            Corporate Outdoor Events
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/hospitality-wellness-events-bangalore"
                          >
                            Hospitality and Wellness Management
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/award-ceremony-organisers-bangalore"
                          >
                            Award Ceremony
                          </a>
                        </li>
                      </div>

                      {/* Personal Events */}
                      <div className="col-md-6">
                        <h4 className="mb-0 text-pink p-2">
                          {" "}<i className="fas fa-birthday-cake " /> Personal
                          Events
                        </h4>
                        <hr className="mt-2 mb-2" />
                        <li>
                          <a
                            className="dropdown-item"
                            href="/wedding-planners-bangalore"
                          >
                            Wedding Planners
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/destination-wedding-planners-bangalore"
                          >
                            Destination Wedding
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/engagement-party-planners-bangalore"
                          >
                            Engagement Planners
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/birthday-party-organisers-bangalore"
                          >
                            Birthday Planners
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/baby-shower-event-organisers-bangalore"
                          >
                            Baby Shower
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/wedding-anniversary-planners-bangalore"
                          >
                            Wedding Anniversary
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/housewarming-event-planners-bangalore"
                          >
                            Housewarming Event
                          </a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog
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
                  <img src={Logo} alt="logo" className="logo-st" />
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
                    <a className="nav-link" href="/about-us">
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
                          href="/venue-management-services-in-bangalore"
                        >
                          Venue Management
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/floral-decor-services-in-bangalore"
                        >
                          Floral Décor
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/event-wedding-photography-in-bangalore"
                        >
                          Photography
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/professional-videography-services-in-bangalore"
                        >
                          Videography
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/catering-services-in-bangalore"
                        >
                          Catering
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/bridal-makeup-makeover-services-in-bangalore"
                        >
                          Bridal Makeover
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/event-sound-lighting-services-in-bangalore"
                        >
                          Sounds &amp; Lights
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/event-furniture-stage-fabrications-in-bangalore"
                        >
                          Furniture &amp; Fabrications
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/guest-transportation-logistics-in-bangalore"
                        >
                          Guest Transportation &amp; Logistics
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/hospitality-guest-welcome-services-in-bangalore"
                        >
                          Hospitality &amp; Guest Welcome Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/wedding-live-streaming-services-in-bangalore"
                        >
                          Wedding Live Streaming
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/return-gifts-wedding-favours-in-bangalore"
                        >
                          Return Gifts &amp; Wedding Favours
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/photo-booth-setups-for-events-in-bangalore"
                        >
                          Trending Photo Booth Setups
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/cold-pyro-fog-confetti-firecracker-shows-in-bangalore"
                        >
                          Cold Pyro, CO₂ Jet, Fog Effect, Confetti &amp;
                          Firecracker Shows
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dj-live-band-musical-arrangements-in-bangalore"
                        >
                          DJ, Live Band &amp; Musical Arrangements
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/live-painting-caricature-artists-in-bangalore"
                        >
                          Live Canvas Painting, Sketching &amp; Caricature
                          Artists
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/fun-games-interactive-activities-in-bangalore"
                        >
                          Fun Games &amp; Interactive Activities
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/ganga-aarti-ceremony-bangalore"
                        >
                          Ganga Aarti Ceremony
                        </a>
                      </li>
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
                    <ul className="dropdown-menu fade-down border-0">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5 className="mb-0 text-pink">Corporate Events</h5>
                          <hr className="mt-2" />
                          <li>
                            <a
                              className="dropdown-item"
                              href="/corporate-event-management-bangalore"
                            >
                              Corporate Management
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/inauguration-event-organisers-bangalore"
                            >
                              Inauguration Planners
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/conference-seminar-event-bangalore"
                            >
                              Conferences and Seminar Event
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/corporate-outdoor-events-bangalore"
                            >
                              Corporate Outdoor Events
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/hospitality-wellness-events-bangalore"
                            >
                              Hospitality and Wellness Management
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/award-ceremony-organisers-bangalore"
                            >
                              Award Ceremony
                            </a>
                          </li>
                        </div>
                        <div className="col-md-6 mb-3">
                          <h5 className="mb-0 text-pink">Personal Events</h5>
                          <hr className="mt-2" />
                          <li>
                            <a
                              className="dropdown-item"
                              href="/wedding-planners-bangalore"
                            >
                              Wedding Planners
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/destination-wedding-planners-bangalore"
                            >
                              Destination Wedding
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/engagement-party-planners-bangalore"
                            >
                              Engagement Planners
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/birthday-party-organisers-bangalore"
                            >
                              Birthday Planners
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/baby-shower-event-organisers-bangalore"
                            >
                              Baby Shower
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/wedding-anniversary-planners-bangalore"
                            >
                              Wedding Anniversary
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/housewarming-event-planners-bangalore"
                            >
                              Housewarming Event
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blog">
                      Blog
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
