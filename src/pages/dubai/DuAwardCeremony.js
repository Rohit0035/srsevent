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
import bannerImg from "../../assets/img/dubaimg/d-awd-g.png";
import abt1 from "../../assets/img/dubaimg/d-awd-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-awd-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-awd-abt3.jpg";
import CtaBg from "../../assets/img/events/cop-ev-bg.jpg";
import Ga1 from "../../assets/img/dubaimg/d-awd-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-awd-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-awd-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-awd-g4.jpg";
import Commonban from "../../assets/img/common/dubai-n-b.jpg";

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-trophy",
    title: "Our Vision",
    description:
      "To deliver elegant, high-profile award ceremonies in Dubai that celebrate excellence and inspire success.",
  },
  {
    icon: "fas fa-award",
    title: "Our Mission",
    description:
      "To plan and execute premium award ceremonies with creative concepts, flawless production, and unforgettable experiences.",
  },
];

// Event Services
const eventServices = [
  {
    title: "Corporate Award Ceremony Dubai",
    desc: "Professional planning and execution of corporate award ceremonies with stage design, AV, and guest management.",
    img: Ga1,
    bg: "bg-white text-dark",
  },
  {
    title: "Annual Awards & Gala Nights",
    desc: "Elegant gala award nights in Dubai with themed décor, entertainment, and premium hospitality.",
    img: Ga2,
    bg: "bg-white text-dark",
  },
  {
    title: "Industry & Business Awards UAE",
    desc: "Complete management of industry recognition events, trophy presentations, and VIP award nights.",
    img: Ga3,
    bg: "bg-light text-dark",
  },
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Award Event Specialists",
    description: "Specialized expertise in organizing award ceremonies in Dubai.",
  },
  {
    number: "2",
    title: "Creative Stage & Theme Design",
    description: "Custom award themes, stage setups, and lighting designs.",
  },
  {
    number: "3",
    title: "Premium Venues in Dubai",
    description: "Luxury hotels, ballrooms, and convention centers.",
  },
  {
    number: "4",
    title: "Professional AV & Production",
    description: "LED screens, sound, lighting, and live streaming solutions.",
  },
  {
    number: "5",
    title: "Celebrity & Entertainment Management",
    description: "Hosts, performers, and special guests coordination.",
  },
  {
    number: "6",
    title: "Flawless Execution",
    description: "End-to-end planning with on-ground perfection.",
  },
];

// FAQ
const faqData = [
  {
    question: "Do you organize award ceremonies in Dubai?",
    answer:
      "Yes, SRS Events is a professional award ceremony organizer in Dubai offering corporate, business, and industry award events.",
  },
  {
    question: "Can you manage gala award nights and annual awards?",
    answer:
      "Absolutely. We plan and execute gala award nights, annual award ceremonies, and recognition events in Dubai.",
  },
  {
    question: "Do you provide trophies and branding?",
    answer:
      "Yes, we manage award trophies, stage branding, backdrops, and event collateral.",
  },
  {
    question: "Why choose SRS Events for award ceremonies in Dubai?",
    answer:
      "We deliver creative concepts, premium venues, and flawless execution for memorable award ceremonies.",
  },
];

const DuAwardCeremony = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Award Ceremony Dubai | Award Event Organisers UAE</title>
        <meta
          name="description"
          content="SRS Events is a leading award ceremony organizer in Dubai specializing in corporate award ceremonies, gala nights, and business recognition events across UAE."
        />
        <meta
          name="keywords"
          content="award ceremony Dubai, award event organizers Dubai, corporate award ceremony UAE, gala award night Dubai, business award ceremony Dubai, annual award function Dubai, employee recognition event Dubai, luxury award ceremony Dubai, award night event planners UAE, corporate gala dinner Dubai, award ceremony management Dubai, best award event company Dubai, professional award organizers UAE, Dubai award show management, corporate recognition events Dubai"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/award-ceremony-organisers-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
        subtitle="Award Ceremonies"
        title="Professional Award Ceremony Organisers in Dubai"
        description="From corporate recognition events to elegant gala award nights — SRS Events delivers premium award ceremonies in Dubai with creativity and precision."
        secondaryBtnText="Plan Your Award Ceremony"
        image={bannerImg}
      />

      {/* INTRO */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Leading</span> Award Ceremony Organisers in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> specializes in organizing high-profile award ceremonies and recognition events.
                </p>
                <p>
                  We manage creative concepts, stage production, branding, entertainment, and guest experience.
                </p>
                <p className="border rounded-2 p-3">
                  Celebrate success with SRS Events Dubai’s award ceremony expertise.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan Your Award Ceremony in Dubai
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
        highlight="Award Ceremony Services"
        description="SRS Events Dubai is a trusted award ceremony organizer delivering memorable recognition events."
        extraText="We manage trophies, stage design, entertainment, AV, and guest coordination."
        buttonText="Book Award Ceremony"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Our"
        highlight="Award Ceremony Services"
        services={eventServices}
      />

      {/* CONTENT */}
      <ImageTextBlock
        title={<><span className="text-pink">Corporate</span> Award Ceremonies</>}
        description="Professional corporate award ceremonies recognizing excellence and achievements."
        points={[
          "Annual corporate awards",
          "Employee recognition events",
          "Leadership award nights",
          "Custom trophies & branding",
        ]}
        image={abt2}
      />

      <TextImageBlock
        title={<><span className="text-pink">Gala</span> Award Nights</>}
        description="Elegant gala award nights with luxury décor and entertainment."
        points={[
          "Red carpet entry",
          "Celebrity hosts",
          "Live performances",
          "Premium hospitality",
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Award Ceremonies in Dubai"
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
        description="Dubai’s trusted award ceremony partner."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Our"
        highlight="Award Ceremony Gallery"
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
        title="Planning an Award Ceremony in Dubai?"
        subtitle="Let SRS Events Dubai create a memorable award night for your organization."
        buttonText="Get Started"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuAwardCeremony;
