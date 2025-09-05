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
import Wedding from './pages/event/Wedding';
import BridalMakeover from './pages/service/BridalMakeover';
import Catering from './pages/service/Catering';
import FurnitureFabrications from './pages/service/FurnitureFabrications';
import GuestTransportation from './pages/service/GuestTransportation';
import Photography from './pages/service/Photography';
import SoundsLights from './pages/service/SoundsLights';
import Videography from './pages/service/Videography';
import HospitalityGuest from './pages/service/HospitalityGuest';
import WeddingLive from './pages/service/WeddingLive';
import ReturnGiftsWedding from './pages/service/ReturnGiftsWedding';
import TrendingPhoto from './pages/service/TrendingPhoto';
import DjLiveBandMusical from './pages/service/DjLiveBandMusical';
import LiveCanvasPainting from './pages/service/LiveCanvasPainting';
import FunGamesInteractive from './pages/service/FunGamesInteractive';
import GangaAarti from './pages/service/GangaAarti';
import ColdCyro from './pages/service/ColdCyro';
import CorporateManagement from './pages/event/CorporateManagement';
import InaugurationPlanners from './pages/event/InaugurationPlanners';
import ConferencesSeminar from './pages/event/ConferencesSeminar';
import CorporateOutdoor from './pages/event/CorporateOutdoor';
import HospitalityWellness from './pages/event/HospitalityWellness';
import AwardCeremony from './pages/event/AwardCeremony';



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

                {/* services */}
                <Route path="/venuemanagement" element={<SerVenueManagement />} />
                <Route path="/floraldecor" element={<FloralDecor />} />
                <Route path="/bridalmakeover" element={<BridalMakeover />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/furniturefabrications" element={<FurnitureFabrications />} />
                <Route path="/guesttransportation" element={<GuestTransportation />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/soundsLights" element={<SoundsLights />} />
                <Route path="/videography" element={<Videography />} />

                <Route path="/hospitalityguest" element={<HospitalityGuest />} />
                <Route path="/weddinglive" element={<WeddingLive />} />
                <Route path="/returngiftswedding" element={<ReturnGiftsWedding />} />
                <Route path="/trendingphoto" element={<TrendingPhoto />} />
                <Route path="/coldpyro" element={<ColdCyro />} />
                <Route path="/djlivebandmusical" element={<DjLiveBandMusical />} />
                <Route path="/livecanvaspainting" element={<LiveCanvasPainting />} />
                <Route path="/fungamesinteractive" element={<FunGamesInteractive />} />
                <Route path="/gangaaarti" element={<GangaAarti />} />

                {/* events */}
                <Route path="/wedding" element={<Wedding />} />
                <Route path="/corporatemanagement" element={<CorporateManagement />} />
                <Route path="/inaugurationplanners" element={<InaugurationPlanners />} />
                <Route path="/conferencesseminar" element={<ConferencesSeminar />} />
                <Route path="/corporateoutdoor" element={<CorporateOutdoor />} />
                <Route path="/hospitalitywellness" element={<HospitalityWellness />} />
                <Route path="/awardCeremony" element={<AwardCeremony />} />




            </Routes>

            {/* <Footer /> */}
        </Router>
    );
}

export default App;
