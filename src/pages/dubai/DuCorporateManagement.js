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
import HeroSection from "../../components/HeroSection";
import ScrollAnimation from "react-animate-on-scroll";

// Images
import bannerImg from "../../assets/img/common/d-cop-g.png";
import abt1 from "../../assets/img/dubaimg/d-cop-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-cop-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-cop-abt3.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Ga1 from "../../assets/img/dubaimg/d-cop-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-cop-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-cop-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-cop-g4.jpg";
import HeroSectionGrid2 from "../../components/HeroSectionGrid2";
import Commonban from  "../../assets/img/common/dubai-n-b.jpg"

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "To become the most trusted corporate event management company in Dubai by delivering innovative, high-impact, and globally aligned event solutions.",
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to provide world-class corporate event planning in Dubai with precision execution, premium experiences, and client-focused service.",
  },
];

// Event Services
const eventServices = [
  {
    title: "Corporate Conferences in Dubai",
    desc: "We organize professional corporate conferences in Dubai with premium venues, AV solutions, and seamless coordination.",
    img: Ga1,
    bg: "bg-white text-dark",
  },
  {
    title: "MICE Events & Corporate Retreats UAE",
    desc: "From incentive trips to executive retreats, we manage MICE events across Dubai and UAE with luxury experiences.",
    img: Ga2,
    bg: "bg-white text-dark",
  },
  {
    title: "Product Launches & Exhibitions Dubai",
    desc: "We deliver high-impact product launches, trade shows, and exhibitions that boost brand visibility in Dubai’s competitive market.",
    img: Ga3,
    bg: "bg-light text-dark",
  },
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Dubai Market Expertise",
    description:
      "We understand Dubai’s corporate culture, venues, and international business standards.",
  },
  {
    number: "2",
    title: "Trusted Corporate Event Organisers",
    description:
      "We manage conferences, exhibitions, MICE events, and corporate launches across UAE.",
  },
  {
    number: "3",
    title: "Proven Corporate Experience",
    description:
      "500+ successful corporate events executed in Dubai and international markets.",
  },
  {
    number: "4",
    title: "End-to-End Event Management",
    description:
      "From planning to execution, branding, logistics, and guest management — all under one roof.",
  },
  {
    number: "5",
    title: "Professional Crowd & Guest Management",
    description:
      "Smooth event flow for high-profile and large-scale corporate gatherings.",
  },
  {
    number: "6",
    title: "Creative & Tech-Driven Events",
    description:
      "Advanced AV solutions, modern staging, and innovative event concepts.",
  },
];

// FAQ
const faqData = [
  {
    question: "Do you provide corporate event management services in Dubai?",
    answer:
      "Yes, SRS Events is a leading corporate event management company in Dubai offering conferences, exhibitions, MICE events, and business launches.",
  },
  {
    question: "Do you organize MICE events in UAE?",
    answer:
      "Absolutely. We manage Meetings, Incentives, Conferences, and Exhibitions across Dubai and UAE.",
  },
  {
    question: "Can you handle international corporate clients in Dubai?",
    answer:
      "Yes, we specialize in managing international corporate events with global standards.",
  },
  {
    question: "Why choose SRS Events Dubai?",
    answer:
      "We combine Dubai market expertise, premium venues, and flawless execution for corporate success.",
  },
];

const DuCorporateManagement = () => {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          Corporate Event Management Company in Dubai | SRS Events UAE
        </title>
        <meta
          name="description"
          content="SRS Events is a leading corporate event management company in Dubai. We specialize in conferences, product launches, exhibitions, MICE events, and corporate retreats across UAE."
        />
        <meta
          name="keywords"
          content="corporate event management Dubai, event organisers Dubai, corporate events UAE, conference organisers Dubai, product launch events Dubai, MICE events Dubai"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/corporate-event-management-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
      subtitle="Corporate Event Management"
      title="Corporate Event Management Company in Dubai"
      description="From corporate conferences and product launches to MICE events and exhibitions in Dubai — SRS Events delivers world-class planning and flawless execution."
      secondaryBtnText="Plan Your Dubai Event"
      image={bannerImg}
    />

      {/* INTRO + FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Leading</span> Corporate Event
                  Organisers in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> provides end-to-end corporate
                  event management services across Dubai and the UAE.
                </p>
                <p>
                  From luxury hotels to convention centers, we deliver seamless,
                  professional, and globally aligned business events.
                </p>
                <p className="border rounded-2 p-3">
                  Choose SRS Events Dubai for premium corporate event planning
                  and flawless execution.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan your corporate event in Dubai!
                  </h2>
                  <hr style={{ borderColor: "#fff" }} />
                  <div
                    className="quote-content pt-0"
                    style={{ backgroundColor: "#9c2356" }}
                  >
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
        highlight="Corporate Event Management in Dubai"
        description="SRS Events Dubai is a trusted corporate event management company offering conferences, exhibitions, product launches, and MICE events."
        extraText="We manage venue sourcing, branding, logistics, AV solutions, and guest management — ensuring stress-free events."
        buttonText="Plan Your Dubai Corporate Event"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Explore Our Corporate"
        highlight="Event Services in Dubai"
        services={eventServices}
      />

      {/* MICE */}
      <ImageTextBlock
        title={
          <>
            <span className="text-pink">MICE</span> Event Solutions in Dubai
          </>
        }
        description="Comprehensive Meetings, Incentives, Conferences, and Exhibitions services across Dubai and UAE."
        points={[
          "Corporate conferences & summits",
          "Incentive travel & retreats",
          "Trade shows & exhibitions",
          "Advanced AV & event technology",
        ]}
        image={abt2}
      />

      {/* BENEFITS */}
      <TextImageBlock
        title={
          <>
            <span className="text-pink">Benefits</span> of Choosing SRS Dubai
          </>
        }
        description="Dubai expertise combined with international event standards."
        points={[
          "Strong Dubai vendor network",
          "Premium venues & hotels",
          "Experienced UAE event team",
          "Global-standard execution",
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Corporate Events in Dubai"
        items={items}
      />


      {/* common banner */}
      <section className="py-5">
        <div className="container">
             <div className="row">
                  <div className="col-12">
                      <img src={Commonban}  alt="srs events" className="w-100 rounded"  />
                  </div>
             </div>
        </div>
      </section>

      {/* WHY US */}
      <WhyChooseUsSection
        title="Why Choose"
        subtitle="SRS Events Dubai"
        description="Dubai’s trusted corporate event management partner."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Explore Our"
        highlight="Corporate Event Gallery"
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
        title="Looking for Corporate Event Management in Dubai?"
        subtitle="Let SRS Events Dubai plan your next business event with precision and creativity."
        buttonText="Book Your Dubai Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuCorporateManagement;
