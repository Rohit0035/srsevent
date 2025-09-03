import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import SerVenueManagement from './pages/service/SerVenueManagement';
import FloralDecor from './pages/service/FloralDecor';



function App() {
    return (
        <Router>
            {/* <Header /> */}

            <Routes>
                {/* Main pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/whyus" element={<WhyChooseUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />

                <Route path="/venuemanagement" element={<SerVenueManagement />} />
                <Route path="/floraldecor" element={<FloralDecor />} />



            </Routes>

            {/* <Footer /> */}
        </Router>
    );
}

export default App;
