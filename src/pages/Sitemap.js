import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - SrsEvent</title>
        <meta
          name="description"
          content="Explore the SrsEvent sitemap to easily navigate through our pages including Home, About Us, Services, Gallery, and Contact."
        />
        <meta
          name="keywords"
          content="SrsEvent sitemap, website navigation, SrsEvent pages, SrsEvent site structure"
        />
        <link rel="canonical" href="https://srsevent.com/sitemap" />
      </Helmet>

      <Header />

      <main className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="site-title mb-3">Sitemap</h1>
          <p className="text-muted mb-5">Navigate our website easily:</p>

          <section className="text-start mx-auto" style={{ maxWidth: "600px" }}>
            <h2 className="mb-3 text-primary">Key Pages</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://srsevent.com/" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="https://srsevent.com/about" className="text-decoration-none text-dark">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="https://srsevent.com/services" className="text-decoration-none text-dark">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="https://srsevent.com/gallery" className="text-decoration-none text-dark">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="https://srsevent.com/contact" className="text-decoration-none text-dark">
                  Contact Us
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Sitemap;
