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
import bannerImg from "../../assets/img/dubaimg/d-annv-g.png";
import abt1 from "../../assets/img/dubaimg/d-annv-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-annv-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-annv-abt3.jpg";
import Ga1 from "../../assets/img/dubaimg/d-annv-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-annv-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-annv-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-annv-g4.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-heart",
    title: "Our Vision",
    description:
      "To create romantic, elegant, and unforgettable wedding anniversary celebrations in Dubai that honor love and togetherness."
  },
  {
    icon: "fas fa-ring",
    title: "Our Mission",
    description:
      "To deliver flawless anniversary event planning in Dubai with customized themes, premium décor, and memorable experiences."
  }
];

// Anniversary Services
const eventServices = [
  {
    title: "Romantic Wedding Anniversary Planning",
    desc: "Elegant and romantic anniversary celebrations in Dubai with floral décor, candlelight dinners, and themed setups.",
    img: Ga1,
    bg: "bg-white text-dark"
  },
  {
    title: "Silver, Golden & Milestone Anniversaries",
    desc: "Expert planning for 25th, 50th, and milestone wedding anniversaries with luxury styling and entertainment.",
    img: Ga2,
    bg: "bg-white text-dark"
  },
  {
    title: "Luxury & Destination Anniversary Events",
    desc: "Premium wedding anniversary celebrations at luxury hotels, resorts, yachts, and private venues in Dubai.",
    img: Ga3,
    bg: "bg-light text-dark"
  }
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Anniversary Event Specialists",
    description:
      "Experienced wedding anniversary planners in Dubai for intimate and grand celebrations."
  },
  {
    number: "2",
    title: "Romantic & Elegant Themes",
    description:
      "Customized anniversary themes designed to reflect love, memories, and milestones."
  },
  {
    number: "3",
    title: "End-to-End Planning",
    description:
      "From venue selection to décor, entertainment, catering, and coordination."
  },
  {
    number: "4",
    title: "Luxury Vendor Network",
    description:
      "Trusted décor artists, florists, entertainers, and hospitality partners in Dubai."
  },
  {
    number: "5",
    title: "Personalized Experiences",
    description:
      "Every anniversary celebration is tailored to the couple’s story and preferences."
  },
  {
    number: "6",
    title: "Stress-Free Execution",
    description:
      "Relax and celebrate while we handle every detail professionally."
  }
];

// FAQ
const faqData = [
  {
    question: "Do you provide wedding anniversary planning services in Dubai?",
    answer:
      "Yes, SRS Events specializes in planning romantic and luxury wedding anniversary celebrations across Dubai."
  },
  {
    question: "Can you organize milestone anniversaries like Silver or Golden Jubilee?",
    answer:
      "Absolutely. We plan Silver, Golden, and milestone wedding anniversaries with customized themes."
  },
  {
    question: "Do you arrange private and luxury anniversary celebrations?",
    answer:
      "Yes, we offer luxury anniversary planning including yacht parties, private dinners, and resort celebrations."
  },
  {
    question: "Why choose SRS Events for wedding anniversary planning in Dubai?",
    answer:
      "Our creativity, attention to detail, and Dubai event expertise make us a trusted anniversary planner."
  }
];

const DuWeddingAnniversary = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Wedding Anniversary Planners in Dubai | Luxury Anniversary Events</title>
        <meta
          name="description"
          content="SRS Events is a trusted wedding anniversary planner in Dubai offering romantic, luxury, silver jubilee, golden anniversary, and milestone anniversary celebrations across UAE."
        />
        <meta
          name="keywords"
          content="wedding anniversary planners Dubai, anniversary event planners Dubai, wedding anniversary celebration Dubai, silver jubilee anniversary Dubai, golden anniversary planners Dubai, luxury anniversary events Dubai, romantic anniversary dinner Dubai, anniversary party planners UAE, best anniversary planners Dubai, anniversary management company Dubai"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/wedding-anniversary-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
        subtitle="Wedding Anniversary Planning Services"
        title="Wedding Anniversary Planners in Dubai"
        description="Celebrate love, memories, and milestones with elegant and luxury wedding anniversary celebrations in Dubai."
        secondaryBtnText="Plan Your Anniversary"
        image={bannerImg}
      />

      {/* INTRO + FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Best</span> Wedding Anniversary Planners in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> creates unforgettable wedding anniversary celebrations with elegance, romance, and perfection.
                </p>
                <p>
                  Whether it’s an intimate celebration or a grand milestone anniversary, we bring your vision to life.
                </p>
                <p className="border rounded-2 p-3">
                  Celebrate your love story with Dubai’s trusted anniversary planners.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan your wedding anniversary in Dubai!
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
        highlight="Wedding Anniversary Planning Services"
        description="SRS Events Dubai is a full-service wedding anniversary planning company delivering elegant and luxury celebrations."
        extraText="We manage venues, décor, entertainment, catering, surprises, and flawless execution."
        buttonText="Celebrate With Us"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Explore Our"
        highlight="Wedding Anniversary Services in Dubai"
        services={eventServices}
      />

      {/* IMAGE TEXT */}
      <ImageTextBlock
        title={<><span className="text-pink">Romantic</span> Anniversary Celebrations</>}
        description="Turning special moments into lifetime memories."
        points={[
          "Romantic anniversary dinners",
          "Silver & Golden jubilee planning",
          "Luxury décor & styling",
          "Entertainment & photography"
        ]}
        image={abt2}
      />

      {/* BENEFITS */}
      <TextImageBlock
        title={<><span className="text-pink">Why</span> Choose SRS Events</>}
        description="Trusted wedding anniversary planners in Dubai."
        points={[
          "Expert anniversary planners",
          "Customized romantic themes",
          "Premium décor & venues",
          "Stress-free planning experience"
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Wedding Anniversary Events in Dubai"
        items={items}
      />

      {/* WHY US */}
      <WhyChooseUsSection
        title="Why Choose"
        subtitle="SRS Wedding Anniversary Planners Dubai"
        description="Celebrating love with elegance and perfection."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Explore Our"
        highlight="Wedding Anniversary Gallery"
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
        title="Looking for Wedding Anniversary Planners in Dubai?"
        subtitle="Celebrate your special day with elegance and love."
        buttonText="Book Anniversary Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuWeddingAnniversary;
