import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loader from './components/Loader';
import './assets/css/bootstrap.min.css';
import './assets/css/flaticon.css';
import './assets/css/animate.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/style.css';
import './assets/css/custom.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HelmetProvider } from "react-helmet-async";

const RootApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? <Loader /> :  <HelmetProvider><App /></HelmetProvider>}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootApp />);
