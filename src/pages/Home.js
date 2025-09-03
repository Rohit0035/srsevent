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

const Home = () => {
  return (
    <>
      <Header />
      <HomeSlider />
      <HomeFeature/>
      <HomeAbout/>
      <HomeServices/>
      <HomeEvent/>
      <Counter/>
      <WhyChoose/>
      <HomeGallery/>
      <HomeReviews/>
      <FreeQuote/>
      <Footer />
    </>
  );
};

export default Home;