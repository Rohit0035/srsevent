import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import SerVenueManagement from "./pages/service/SerVenueManagement";
import FloralDecor from "./pages/service/FloralDecor";
import Wedding from "./pages/event/WeddingPlanners";
import BridalMakeover from "./pages/service/BridalMakeover";
import Catering from "./pages/service/Catering";
import FurnitureFabrications from "./pages/service/FurnitureFabrications";
import GuestTransportation from "./pages/service/GuestTransportation";
import Photography from "./pages/service/Photography";
import SoundsLights from "./pages/service/SoundsLights";
import Videography from "./pages/service/Videography";
import HospitalityGuest from "./pages/service/HospitalityGuest";
import WeddingLive from "./pages/service/WeddingLive";
import ReturnGiftsWedding from "./pages/service/ReturnGiftsWedding";
import TrendingPhoto from "./pages/service/TrendingPhoto";
import DjLiveBandMusical from "./pages/service/DjLiveBandMusical";
import LiveCanvasPainting from "./pages/service/LiveCanvasPainting";
import FunGamesInteractive from "./pages/service/FunGamesInteractive";
import GangaAarti from "./pages/service/GangaAarti";
import ColdCyro from "./pages/service/ColdCyro";
import CorporateManagement from "./pages/event/CorporateManagement";
import InaugurationPlanners from "./pages/event/InaugurationPlanners";
import ConferencesSeminar from "./pages/event/ConferencesSeminar";
import CorporateOutdoor from "./pages/event/CorporateOutdoor";
import HospitalityWellness from "./pages/event/HospitalityWellness";
import AwardCeremony from "./pages/event/AwardCeremony";
import WeddingPlanners from "./pages/event/WeddingPlanners";
import DestinationWedding from "./pages/event/DestinationWedding";
import EngagementPlanne from "./pages/event/EngagementPlanne";
import BirthdayPlanners from "./pages/event/BirthdayPlanners";
import BabyShower from "./pages/event/BabyShower";
import WeddingAnniversary from "./pages/event/WeddingAnniversary";
import HousewarmingEvent from "./pages/event/HousewarmingEvent";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import HyderabadEvents from "./pages/event/HyderabadEvents";
import HydCorporate from "./pages/hydevent/HydCorporate";
import HydConference from "./pages/hydevent/HydConference";
import HydInauguration from "./pages/hydevent/HydInauguration";
import HydWeddingPlanners from "./pages/hydevent/HydWeddingPlanners";
import HydAwardCeremony from "./pages/hydevent/HydAwardCeremony";
import HydEngagementPlanners from "./pages/hydevent/HydEngagementPlanners";
import HydBirthdayPlanners from "./pages/hydevent/HydBirthdayPlanners";
import HydWeddingAnniversary from "./pages/hydevent/HydWeddingAnniversary";
import CheCorporateManagement from "./pages/chennai/CheCorporateManagement";
import CheConference from "./pages/chennai/CheConference";
import CheInaugurationPlanners from "./pages/chennai/CheInaugurationPlanners";
import CheWeddingPlanners from "./pages/chennai/CheWeddingPlanners";
import CheAwardCeremony from "./pages/chennai/CheAwardCeremony";
import CheBirthdayPlanners from "./pages/chennai/CheBirthdayPlanners";
import CheWeddingAnniversary from "./pages/chennai/CheWeddingAnniversary";
import CheEngagementPlanners from "./pages/chennai/CheEngagementPlanners";

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
        <Route
          path="/furniturefabrications"
          element={<FurnitureFabrications />}
        />
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
        <Route
          path="/corporate-event-management-company-bangalore"
          element={<CorporateManagement />}
        />
        <Route
          path="/inauguration-event-organizers-bangalore"
          element={<InaugurationPlanners />}
        />
        <Route
          path="/conference-events-management-company-bangalore"
          element={<ConferencesSeminar />}
        />
        <Route
          path="/corporate-outdoor-events-company-bangalore"
          element={<CorporateOutdoor />}
        />
        <Route
          path="/hospitality-management-services-bangalore"
          element={<HospitalityWellness />}
        />
        <Route
          path="/award-ceremony-organizers-in-bangalore"
          element={<AwardCeremony />}
        />
        <Route
          path="/wedding-planners-bangalore"
          element={<WeddingPlanners />}
        />
        <Route
          path="/destination-wedding-planner-bangalore"
          element={<DestinationWedding />}
        />
        <Route
          path="/engagement-planners-bangalore"
          element={<EngagementPlanne />}
        />
        <Route
          path="/birthday-party-organiser-bangalore"
          element={<BirthdayPlanners />}
        />
        <Route
          path="/baby-shower-event-organisers-bangalore."
          element={<BabyShower />}
        />
        <Route
          path="/housewarming-event-planner-Bangalore"
          element={<HousewarmingEvent />}
        />
        <Route
          path="/wedding-anniversary-planners-bangalore"
          element={<WeddingAnniversary />}
        />
        <Route path="/blogdetail/:slug" element={<BlogDetail />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/thankyou" element={<ThankYou />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsConditions />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
