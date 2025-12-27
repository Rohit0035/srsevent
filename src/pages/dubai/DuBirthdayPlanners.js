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
import bannerImg from "../../assets/img/dubaimg/d-bdy-g.png";
import abt1 from "../../assets/img/dubaimg/d-bdy-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-bdy-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-bdy-abt3.jpg";
import Ga1 from "../../assets/img/dubaimg/d-bdy-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-bdy-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-bdy-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-bdy-g4.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-birthday-cake",
    title: "Our Vision",
    description:
      "To be one of the most loved birthday planners in Dubai by creating joyful, creative, and unforgettable birthday celebrations for all ages."
  },
  {
    icon: "fas fa-smile",
    title: "Our Mission",
    description:
      "To deliver stress-free birthday event planning in Dubai with creative themes, premium decor, and flawless execution."
  }
];

// Birthday Services
const eventServices = [
  {
    title: "Kids Birthday Party Planners Dubai",
    desc: "Fun-filled kids birthday parties in Dubai with cartoon themes, balloons, games, mascots, and entertainment.",
    img: Ga1,
    bg: "bg-white text-dark"
  },
  {
    title: "Adult & Surprise Birthday Parties",
    desc: "Stylish adult birthday parties, surprise birthdays, and milestone celebrations with premium decor and entertainment.",
    img: Ga2,
    bg: "bg-white text-dark"
  },
  {
    title: "Luxury & Theme Birthday Parties",
    desc: "Luxury birthday parties in Dubai with customized themes, decor styling, live entertainment, and catering.",
    img: Ga3,
    bg: "bg-light text-dark"
  }
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Dubai Birthday Specialists",
    description:
      "Experienced birthday planners in Dubai for kids, adults, and corporate birthday events."
  },
  {
    number: "2",
    title: "Creative Theme Experts",
    description:
      "Wide range of birthday themes including princess, superhero, balloon, floral, and luxury setups."
  },
  {
    number: "3",
    title: "End-to-End Birthday Planning",
    description:
      "Complete management from planning, decor, entertainment, food, and guest coordination."
  },
  {
    number: "4",
    title: "Premium Vendor Network",
    description:
      "Top entertainers, decorators, bakers, and photographers in Dubai."
  },
  {
    number: "5",
    title: "Customized Birthday Experiences",
    description:
      "Every birthday celebration is uniquely designed based on age, style, and preferences."
  },
  {
    number: "6",
    title: "Stress-Free Celebrations",
    description:
      "Enjoy the party while we handle everything professionally."
  }
];

// FAQ
const faqData = [
  {
    question: "Do you provide birthday party planning services in Dubai?",
    answer:
      "Yes, SRS Events is a professional birthday planner in Dubai offering kids, adult, surprise, and luxury birthday parties."
  },
  {
    question: "Can you organize themed birthday parties in Dubai?",
    answer:
      "Absolutely. We specialize in customized theme birthday parties for all age groups."
  },
  {
    question: "Do you plan surprise birthday parties?",
    answer:
      "Yes, we plan surprise birthday celebrations with complete secrecy and creative execution."
  },
  {
    question: "Why choose SRS Events as birthday planners in Dubai?",
    answer:
      "Our creativity, Dubai expertise, and flawless execution make us a trusted birthday event partner."
  }
];

const DuBirthdayPlanners = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Birthday Planners in Dubai | Kids & Luxury Birthday Parties</title>
        <meta
          name="description"
          content="SRS Events is a trusted birthday planner in Dubai offering kids birthday parties, adult celebrations, surprise birthdays, theme parties, and luxury birthday event management across UAE."
        />
        <meta
          name="keywords"
          content="birthday planners Dubai, birthday party planners Dubai, kids birthday party Dubai, adult birthday party Dubai, surprise birthday planners Dubai, luxury birthday party Dubai, theme birthday planners UAE, birthday event organisers Dubai, best birthday planners Dubai, birthday management company Dubai"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/birthday-planners-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
        subtitle="Birthday Party Planning Services"
        title="Birthday Planners in Dubai"
        description="From kids birthday parties to luxury adult celebrations and surprise birthdays in Dubai — SRS Events creates joyful birthday experiences."
        secondaryBtnText="Plan Your Birthday Party"
        image={bannerImg}
      />

      {/* INTRO + FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Best</span> Birthday Planners in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> offers professional birthday party planning services for kids, adults, and corporate celebrations.
                </p>
                <p>
                  From creative themes to luxury setups, we manage every detail with perfection.
                </p>
                <p className="border rounded-2 p-3">
                  Choose SRS Events Dubai for unforgettable birthday celebrations.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan your birthday celebration in Dubai!
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
        highlight="Birthday Planning Services in Dubai"
        description="SRS Events Dubai is a full-service birthday planning company specializing in creative and luxury birthday celebrations."
        extraText="We handle venue selection, decor, entertainment, cake arrangements, and complete event execution."
        buttonText="Plan Your Birthday Party"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Explore Our"
        highlight="Birthday Party Services in Dubai"
        services={eventServices}
      />

      {/* IMAGE TEXT */}
      <ImageTextBlock
        title={<><span className="text-pink">Creative</span> Birthday Celebrations</>}
        description="Making every birthday celebration special, fun, and memorable."
        points={[
          "Kids birthday party planning",
          "Adult & surprise birthdays",
          "Luxury & theme parties",
          "Entertainment & catering"
        ]}
        image={abt2}
      />

      {/* BENEFITS */}
      <TextImageBlock
        title={<><span className="text-pink">Why</span> Choose SRS Events</>}
        description="Trusted birthday planners in Dubai."
        points={[
          "Experienced Dubai birthday planners",
          "Creative themes & decor",
          "Trusted vendor partnerships",
          "Stress-free event execution"
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Birthday Planning in Dubai"
        items={items}
      />

      {/* WHY US */}
      <WhyChooseUsSection
        title="Why Choose"
        subtitle="SRS Birthday Planners Dubai"
        description="Creating joyful birthday moments that last forever."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Explore Our"
        highlight="Birthday Party Gallery"
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
        title="Looking for Birthday Planners in Dubai?"
        subtitle="Let SRS Events Dubai plan your birthday with creativity and perfection."
        buttonText="Book Birthday Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuBirthdayPlanners;
