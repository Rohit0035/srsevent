import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Sitemap from "./pages/Sitemap";
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
        <Route path="/about-us" element={<About />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/whyus" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* services */}
        <Route
          path="/venue-management-services-in-bangalore"
          element={<SerVenueManagement />}
        />
        <Route
          path="/floral-decor-services-in-bangalore"
          element={<FloralDecor />}
        />
        <Route
          path="/bridal-makeup-makeover-services-in-bangalore"
          element={<BridalMakeover />}
        />
        <Route path="/catering-services-in-bangalore" element={<Catering />} />
        <Route
          path="/event-furniture-stage-fabrications-in-bangalore"
          element={<FurnitureFabrications />}
        />
        <Route
          path="/guest-transportation-logistics-in-bangalore"
          element={<GuestTransportation />}
        />
        <Route
          path="/event-wedding-photography-in-bangalore"
          element={<Photography />}
        />
        <Route
          path="/event-sound-lighting-services-in-bangalore"
          element={<SoundsLights />}
        />
        <Route
          path="/professional-videography-services-in-bangalore"
          element={<Videography />}
        />

        <Route
          path="/hospitality-guest-welcome-services-in-bangalore"
          element={<HospitalityGuest />}
        />
        <Route
          path="/wedding-live-streaming-services-in-bangalore"
          element={<WeddingLive />}
        />
        <Route
          path="/return-gifts-wedding-favours-in-bangalore"
          element={<ReturnGiftsWedding />}
        />
        <Route
          path="/photo-booth-setups-for-events-in-bangalore"
          element={<TrendingPhoto />}
        />
        <Route
          path="/cold-pyro-fog-confetti-firecracker-shows-in-bangalore"
          element={<ColdCyro />}
        />
        <Route
          path="/dj-live-band-musical-arrangements-in-bangalore"
          element={<DjLiveBandMusical />}
        />
        <Route
          path="/live-painting-caricature-artists-in-bangalore"
          element={<LiveCanvasPainting />}
        />
        <Route
          path="/fun-games-interactive-activities-in-bangalore"
          element={<FunGamesInteractive />}
        />
        <Route
          path="/ganga-aarti-ceremony-ritual-setup-in-bangalore"
          element={<GangaAarti />}
        />

        {/* events */}
        <Route path="/wedding" element={<Wedding />} />
        <Route
          path="/corporate-event-management-bangalore"
          element={<CorporateManagement />}
        />
        <Route
          path="/inauguration-event-organisers-bangalore"
          element={<InaugurationPlanners />}
        />
        <Route
          path="/conference-seminar-event-bangalore"
          element={<ConferencesSeminar />}
        />
        <Route
          path="/corporate-outdoor-events-bangalore"
          element={<CorporateOutdoor />}
        />
        <Route
          path="/hospitality-wellness-events-bangalore"
          element={<HospitalityWellness />}
        />
        <Route
          path="/award-ceremony-organisers-bangalore"
          element={<AwardCeremony />}
        />
        <Route
          path="/wedding-planners-bangalore"
          element={<WeddingPlanners />}
        />
        <Route
          path="/destination-wedding-planners-bangalore"
          element={<DestinationWedding />}
        />
        <Route
          path="/engagement-party-planners-bangalore"
          element={<EngagementPlanne />}
        />
        <Route
          path="/birthday-party-organisers-bangalore"
          element={<BirthdayPlanners />}
        />
        <Route
          path="/baby-shower-event-organisers-bangalore"
          element={<BabyShower />}
        />
        <Route
          path="/housewarming-event-planners-bangalore"
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
