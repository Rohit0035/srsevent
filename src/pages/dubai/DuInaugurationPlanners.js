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
import ScrollAnimation from "react-animate-on-scroll";
import HeroSectionGrid2 from "../../components/HeroSectionGrid2";

// Images
import bannerImg from "../../assets/img/dubaimg/d-inn-g.png";
import abt1 from "../../assets/img/dubaimg/d-inn-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-inn-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-inn-abt3.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Ga1 from "../../assets/img/dubaimg/d-inn-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-inn-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-inn-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-inn-g4.jpg";
import Commonban from "../../assets/img/common/dubai-n-b.jpg";

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "To be the most preferred inauguration planners in Dubai by delivering elegant, impactful, and memorable launch events for brands and businesses.",
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to create powerful inauguration ceremonies in Dubai through creative concepts, flawless execution, and premium event experiences.",
  },
];

// Services
const eventServices = [
  {
    title: "Corporate Inauguration Events in Dubai",
    desc: "We plan professional corporate inaugurations in Dubai including office openings, business launches, and corporate milestones.",
    img: Ga1,
    bg: "bg-white text-dark",
  },
  {
    title: "Store & Showroom Opening Ceremonies",
    desc: "From ribbon cutting to branding and guest management, we organize stylish showroom and retail inaugurations across Dubai.",
    img: Ga2,
    bg: "bg-white text-dark",
  },
  {
    title: "Brand & Product Launch Inaugurations",
    desc: "We execute high-impact brand and product launch inaugurations that attract media attention and audience engagement.",
    img: Ga3,
    bg: "bg-light text-dark",
  },
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Dubai Launch Event Expertise",
    description:
      "We understand Dubai’s premium event standards, venues, and business culture.",
  },
  {
    number: "2",
    title: "Creative Inauguration Concepts",
    description:
      "Unique themes, stage designs, ribbon-cutting setups, and ceremonial planning.",
  },
  {
    number: "3",
    title: "End-to-End Inauguration Planning",
    description:
      "From permissions to execution, branding, and guest handling.",
  },
  {
    number: "4",
    title: "Professional Guest & VIP Management",
    description:
      "Seamless coordination for dignitaries, executives, and media guests.",
  },
  {
    number: "5",
    title: "Premium AV & Decor Setup",
    description:
      "Modern sound, lighting, LED screens, and elegant décor arrangements.",
  },
  {
    number: "6",
    title: "Trusted Event Partner in Dubai",
    description:
      "Successfully delivered multiple inaugurations across UAE industries.",
  },
];

// FAQ
const faqData = [
  {
    question: "Do you provide inauguration planning services in Dubai?",
    answer:
      "Yes, SRS Events is a trusted inauguration planner in Dubai for corporate, showroom, office, and brand launch events.",
  },
  {
    question: "Do you manage ribbon cutting and ceremonial setups?",
    answer:
      "Absolutely. We handle ribbon cutting, stage décor, lighting, sound, and complete inauguration ceremonies.",
  },
  {
    question: "Can you plan VIP inaugurations in Dubai?",
    answer:
      "Yes, we specialize in VIP and executive inaugurations with professional guest coordination and security planning.",
  },
  {
    question: "Why choose SRS Events for inaugurations in Dubai?",
    answer:
      "We combine creativity, premium execution, and Dubai market expertise for flawless inauguration events.",
  },
];

const DuInaugurationPlanners = () => {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          Inauguration Planners in Dubai | Grand Opening Event Organisers UAE
        </title>
        <meta
          name="description"
          content="SRS Events is a leading inauguration planner in Dubai. We organize office openings, showroom launches, corporate inaugurations, and brand opening ceremonies across UAE."
        />
        <meta
          name="keywords"
          content="inauguration planners Dubai, inauguration event organisers Dubai, grand opening planners Dubai, office inauguration Dubai, showroom opening Dubai, launch event planners UAE"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/inauguration-event-organisers-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
        subtitle="Inauguration Event Planners"
        title="Professional Inauguration Planners in Dubai"
        description="From corporate office openings to showroom launches and grand inaugurations — SRS Events delivers elegant, well-planned inauguration events in Dubai."
        secondaryBtnText="Plan Your Inauguration"
        image={bannerImg}
      />

      {/* INTRO + FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Leading</span> Inauguration Event
                  Organisers in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> specializes in planning
                  memorable inauguration ceremonies that mark successful
                  beginnings for businesses and brands.
                </p>
                <p>
                  Whether it’s a corporate office opening, showroom launch, or
                  brand inauguration, we ensure flawless execution and premium
                  presentation.
                </p>
                <p className="border rounded-2 p-3">
                  Choose SRS Events Dubai for professional inauguration planning
                  that creates lasting impressions.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan your inauguration event in Dubai!
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
        highlight="Inauguration Planning Services in Dubai"
        description="SRS Events Dubai offers complete inauguration event management including décor, AV, stage setup, branding, and guest coordination."
        extraText="We focus on delivering smooth, elegant, and impactful inauguration ceremonies that reflect your brand identity."
        buttonText="Book Your Inauguration Event"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Explore Our"
        highlight="Inauguration Event Services"
        services={eventServices}
      />

      {/* CEREMONIAL */}
      <ImageTextBlock
        title={
          <>
            <span className="text-pink">Ceremonial</span> Inauguration Planning
          </>
        }
        description="Complete inauguration ceremony planning in Dubai with professional execution."
        points={[
          "Ribbon cutting ceremonies",
          "Stage & backdrop setup",
          "Lighting & sound systems",
          "Guest & VIP coordination",
        ]}
        image={abt2}
      />

      {/* BENEFITS */}
      <TextImageBlock
        title={
          <>
            <span className="text-pink">Why</span> SRS Events Dubai
          </>
        }
        description="Dubai-focused inauguration expertise with premium standards."
        points={[
          "Experienced inauguration planners",
          "Creative launch concepts",
          "Premium décor & AV solutions",
          "Trusted UAE event partner",
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Inauguration Events in Dubai"
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
        subtitle="SRS Inauguration Planners Dubai"
        description="Dubai’s trusted partner for professional inauguration events."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Explore Our"
        highlight="Inauguration Event Gallery"
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
        title="Planning an Inauguration Event in Dubai?"
        subtitle="Let SRS Events Dubai deliver a flawless and memorable launch ceremony."
        buttonText="Book Inauguration Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuInaugurationPlanners;
