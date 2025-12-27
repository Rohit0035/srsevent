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
import bannerImg from "../../assets/img/dubaimg/d-conf-g.png";
import abt1 from "../../assets/img/dubaimg/d-conf-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-conf-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-conf-abt3.jpg";
import CtaBg from "../../assets/img/events/cop-ev-bg.jpg";
import Ga1 from "../../assets/img/dubaimg/d-conf-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-conf-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-conf-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-conf-g4.jpg";
import Commonban from "../../assets/img/common/dubai-n-b.jpg";

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Our Vision",
    description:
      "To become Dubai’s most trusted conference and seminar management company delivering knowledge-driven, impactful business events.",
  },
  {
    icon: "fas fa-handshake",
    title: "Our Mission",
    description:
      "To plan and execute professional conferences and seminars with flawless coordination, advanced technology, and premium experiences.",
  },
];

// Event Services
const eventServices = [
  {
    title: "Corporate Conferences Dubai",
    desc: "End-to-end planning and execution of corporate conferences with premium venues, AV solutions, and delegate management.",
    img: Ga1,
    bg: "bg-white text-dark",
  },
  {
    title: "Business Seminars & Workshops",
    desc: "Professional seminar and workshop management in Dubai for corporate training, education, and leadership events.",
    img: Ga2,
    bg: "bg-white text-dark",
  },
  {
    title: "International Conferences UAE",
    desc: "Complete support for international conferences including speaker management, branding, and technical production.",
    img: Ga3,
    bg: "bg-light text-dark",
  },
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Dubai Conference Experts",
    description: "Deep understanding of Dubai venues, logistics, and business protocols.",
  },
  {
    number: "2",
    title: "Professional Event Planning",
    description: "Structured planning for conferences, seminars, and corporate meetings.",
  },
  {
    number: "3",
    title: "Advanced AV & Technology",
    description: "LED screens, live streaming, microphones, and conference systems.",
  },
  {
    number: "4",
    title: "Speaker & Delegate Management",
    description: "Smooth coordination of speakers, VIPs, and attendees.",
  },
  {
    number: "5",
    title: "Branding & Stage Design",
    description: "Custom conference branding, stage setups, and signage.",
  },
  {
    number: "6",
    title: "Trusted Event Partner in Dubai",
    description: "Proven experience in delivering high-profile corporate events.",
  },
];

// FAQ
const faqData = [
  {
    question: "Do you organize conferences and seminars in Dubai?",
    answer:
      "Yes, SRS Events is a leading conference and seminar management company in Dubai offering complete planning and execution services.",
  },
  {
    question: "Can you manage international conferences?",
    answer:
      "Absolutely. We handle international conferences, speaker coordination, and technical production in Dubai & UAE.",
  },
  {
    question: "Do you provide AV and live streaming services?",
    answer:
      "Yes, we offer advanced AV solutions, live streaming, and conference technology.",
  },
  {
    question: "Why choose SRS Events for conferences in Dubai?",
    answer:
      "We deliver professional planning, premium venues, and seamless execution for successful conferences and seminars.",
  },
];

const DuConference = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Conferences and Seminar Event Dubai | Conference Organisers UAE</title>
        <meta
          name="description"
          content="SRS Events is a professional conference and seminar event management company in Dubai specializing in corporate conferences, business seminars, workshops, and international events across UAE."
        />
        <meta
          name="keywords"
          content="conferences and seminar event Dubai, conference organizers Dubai, seminar management company Dubai, corporate conferences UAE"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/conference-seminar-event-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
        subtitle="Conferences & Seminars"
        title="Professional Conference & Seminar Event Management in Dubai"
        description="From corporate conferences and leadership seminars to international business summits — SRS Events delivers well-organized, technology-driven, and impactful events in Dubai."
        secondaryBtnText="Plan Your Conference"
        image={bannerImg}
      />

      {/* INTRO */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Leading</span> Conference Organizers in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> provides professional conference and seminar management services for corporate, educational, and international clients.
                </p>
                <p>
                  We manage venues, speaker coordination, delegate registration, AV setup, branding, and event logistics.
                </p>
                <p className="border rounded-2 p-3">
                  Choose SRS Events for high-impact conferences and seminars in Dubai.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan Your Conference in Dubai
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
        highlight="Conference & Seminar Services"
        description="SRS Events Dubai is a trusted conference and seminar management company delivering professional, scalable, and results-driven events."
        extraText="We handle planning, technology, branding, and on-ground execution to ensure knowledge-driven success."
        buttonText="Book Your Conference"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Our"
        highlight="Conference & Seminar Services"
        services={eventServices}
      />

      {/* CONTENT BLOCKS */}
      <ImageTextBlock
        title={<><span className="text-pink">Corporate</span> Conferences in Dubai</>}
        description="Professional conference planning for corporate leadership, training, and industry events."
        points={[
          "Venue & delegate management",
          "Speaker coordination",
          "Conference AV & live streaming",
          "Branding & stage design",
        ]}
        image={abt2}
      />

      <TextImageBlock
        title={<><span className="text-pink">Seminars</span> & Workshops</>}
        description="Engaging seminars and workshops designed for knowledge sharing and professional growth."
        points={[
          "Training seminars",
          "Educational workshops",
          "Panel discussions",
          "Interactive sessions",
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Conferences & Seminars in Dubai"
        items={items}
      />

      {/* COMMON BANNER */}
      <section className="py-5">
        <div className="container">
          <img src={Commonban} alt="SRS Events Dubai" className="w-100 rounded" />
        </div>
      </section>

      {/* WHY US */}
      <WhyChooseUsSection
        title="Why Choose"
        subtitle="SRS Events Dubai"
        description="Dubai’s trusted conference and seminar event partner."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Our"
        highlight="Conference & Seminar Gallery"
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
        backgroundImage={CtaBg}
        title="Planning a Conference or Seminar in Dubai?"
        subtitle="Let SRS Events Dubai manage your event with precision and professionalism."
        buttonText="Get Started"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuConference;
