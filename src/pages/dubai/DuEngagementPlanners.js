import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from "../../components/EnquiryFormEvent";
import EventDetailAbout from "../../components/EventDetailAbout";
import EventServicesSlider from "../../components/EventServicesSlider";
import ImageTextBlock from "../../components/ImageTextBlock";
import TextImageBlock from "../../components/TextImageBlock";
import InfoCardsSection from "../../components/InfoCardsSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import CTABanner from "../../components/CTABanner";
import GallerySection from "../../components/GallerySection";
import FAQAccordion from "../../components/FAQAccordion";
import HeroSectionGrid2 from "../../components/HeroSectionGrid2";
import ScrollAnimation from "react-animate-on-scroll";

// Images
import bannerImg from "../../assets/img/dubaimg/d-eng-g.png";
import abt1 from "../../assets/img/dubaimg/d-eng-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-eng-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-eng-abt3.jpg";
import Ga1 from "../../assets/img/dubaimg/d-eng-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-eng-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-eng-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-eng-g4.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-gem",
    title: "Our Vision",
    description:
      "To become one of the most preferred engagement planners in Dubai by delivering elegant, stylish, and unforgettable engagement celebrations."
  },
  {
    icon: "fas fa-heart",
    title: "Our Mission",
    description:
      "To create personalized engagement ceremonies in Dubai with creative decor, flawless coordination, and premium experiences."
  }
];

// Engagement Services
const eventServices = [
  {
    title: "Luxury Engagement Planning Dubai",
    desc: "Complete engagement planning in Dubai including venue selection, decor themes, entertainment, and guest coordination.",
    img: Ga1,
    bg: "bg-white text-dark"
  },
  {
    title: "Ring Ceremony & Engagement Decor",
    desc: "Elegant ring ceremony setups, floral decor, stage styling, and customized engagement themes.",
    img: Ga2,
    bg: "bg-white text-dark"
  },
  {
    title: "Private & Destination Engagements",
    desc: "Intimate engagement parties, luxury hotel engagements, and destination engagement planning across Dubai and UAE.",
    img: Ga3,
    bg: "bg-light text-dark"
  }
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Dubai Engagement Specialists",
    description:
      "Extensive experience in planning engagement ceremonies across Dubai’s premium venues."
  },
  {
    number: "2",
    title: "Luxury & Cultural Expertise",
    description:
      "Specialists in Indian, Arabic, multicultural, and modern engagement celebrations."
  },
  {
    number: "3",
    title: "End-to-End Engagement Planning",
    description:
      "From concept creation to execution, decor, entertainment, and guest management."
  },
  {
    number: "4",
    title: "Premium Vendor Network",
    description:
      "Top decorators, photographers, makeup artists, and entertainers in Dubai."
  },
  {
    number: "5",
    title: "Customized Engagement Themes",
    description:
      "Every engagement ceremony is designed uniquely to reflect your love story."
  },
  {
    number: "6",
    title: "Stress-Free Celebration",
    description:
      "Relax and enjoy your special moment while we handle everything."
  }
];

// FAQ
const faqData = [
  {
    question: "Do you provide engagement planning services in Dubai?",
    answer:
      "Yes, SRS Events is a professional engagement planner in Dubai offering luxury engagement ceremonies, ring ceremonies, and themed engagement events."
  },
  {
    question: "Can you organize ring ceremony events in Dubai?",
    answer:
      "Absolutely. We specialize in ring ceremonies with customized decor, stage setups, and entertainment."
  },
  {
    question: "Do you plan private and hotel engagement parties?",
    answer:
      "Yes, we organize private home engagements, hotel engagements, and luxury venue-based ceremonies in Dubai."
  },
  {
    question: "Why choose SRS Events for engagement planning in Dubai?",
    answer:
      "Our Dubai expertise, creative designs, and flawless execution make us a trusted engagement planning partner."
  }
];

const DuEngagementPlanners = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Engagement Planners in Dubai | Ring Ceremony & Engagement Events</title>
        <meta
          name="description"
          content="SRS Events is a trusted engagement planner in Dubai offering ring ceremonies, luxury engagement parties, themed decor, and complete engagement event management across UAE."
        />
        <meta
          name="keywords"
          content="engagement planners Dubai, ring ceremony planners Dubai, engagement event organisers Dubai, luxury engagement Dubai, engagement party planners UAE, Indian engagement planners Dubai, engagement decor Dubai, engagement management company Dubai, best engagement planners Dubai, engagement ceremony Dubai"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/engagement-party-planners-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
        subtitle="Engagement Planning Services"
        title="Engagement Planners in Dubai"
        description="From elegant ring ceremonies to luxury engagement celebrations in Dubai — SRS Events creates magical engagement moments."
        secondaryBtnText="Plan Your Engagement"
        image={bannerImg}
      />

      {/* INTRO + FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Best</span> Engagement Planners in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> offers professional engagement planning services designed to create elegant and memorable celebrations.
                </p>
                <p>
                  Whether it’s a grand engagement party or an intimate ring ceremony, we deliver perfection.
                </p>
                <p className="border rounded-2 p-3">
                  Choose SRS Events Dubai for premium engagement planning and flawless execution.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan your engagement in Dubai!
                  </h2>
                  <hr style={{ borderColor: "#fff" }} />
                  <div className="quote-content pt-0" style={{ backgroundColor: "#9c2356" }}>
                    <EnquiryFormEvent />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <EventDetailAbout
        title="About Our"
        highlight="Engagement Planning Services in Dubai"
        description="SRS Events Dubai is a full-service engagement planning company specializing in ring ceremonies, luxury engagement parties, and themed celebrations."
        extraText="We manage venues, decor, entertainment, guest coordination, and complete event execution."
        buttonText="Plan Your Engagement"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Explore Our"
        highlight="Engagement Services in Dubai"
        services={eventServices}
      />

      {/* IMAGE TEXT */}
      <ImageTextBlock
        title={<><span className="text-pink">Luxury</span> Engagement Celebrations</>}
        description="Creating stylish, elegant, and unforgettable engagement ceremonies in Dubai."
        points={[
          "Ring ceremony planning",
          "Luxury hotel engagements",
          "Private & destination engagements",
          "Custom decor & themes"
        ]}
        image={abt2}
      />

      {/* BENEFITS */}
      <TextImageBlock
        title={<><span className="text-pink">Why</span> Choose SRS Events</>}
        description="Trusted engagement planners in Dubai."
        points={[
          "Experienced Dubai engagement planners",
          "Creative decor & themes",
          "Premium vendor partnerships",
          "Stress-free engagement events"
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Engagement Planning in Dubai"
        items={items}
      />

      {/* WHY US */}
      <WhyChooseUsSection
        title="Why Choose"
        subtitle="SRS Engagement Planners Dubai"
        description="Turning engagement moments into lifelong memories."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Explore Our"
        highlight="Engagement Gallery"
        images={galleryImages}
      />

      {/* FAQ */}
      <FAQAccordion
        title="Frequently"
        highlight="Asked Questions"
        faqs={faqData}
      />

      {/* CTA */}
      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Looking for Engagement Planners in Dubai?"
        subtitle="Let SRS Events Dubai plan your engagement with elegance and perfection."
        buttonText="Book Engagement Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuEngagementPlanners;
