import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import HomeFeature from '../components/HomeFeature';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import HomeEvent from '../components/HomeEvent';
import Counter from '../components/Counter';
import WhyChoose from '../components/WhyChoose';
import HomeGallery from '../components/HomeGallery';
import HomeReviews from '../components/HomeReviews';
import FreeQuote from '../components/FreeQuote';
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>

      <Helmet>
        <title>Top Event Planners & Organisers in Bangalore | SRS Event</title>
        <meta
          name="description"
          content="Discover the best event planners in Bangalore with SRS Event — expert organisers for weddings, parties & corporate functions. Book your dream event today!"
        />
        <meta
          name="keywords"
          content="event planner, wedding, birthday, Bangalore events"
        />
        <link rel="canonical" href="https://www.srsevent.com/" />
      </Helmet>

      <Header />
      <HomeSlider />
      <HomeFeature />
      <HomeAbout />
      <HomeServices />
      <HomeEvent />
      <Counter />
      <WhyChoose />
      <HomeGallery />
      <HomeReviews />
      <FreeQuote />
      <Footer />
    </>
  );
};

export default Home;