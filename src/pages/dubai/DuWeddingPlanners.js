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
import bannerImg from "../../assets/img/dubaimg/d-wed-g.png";
import abt1 from "../../assets/img/dubaimg/d-wed-abt1.jpg";
import abt2 from "../../assets/img/dubaimg/d-wed-abt2.jpg";
import abt3 from "../../assets/img/dubaimg/d-wed-abt3.jpg";
import Ga1 from "../../assets/img/dubaimg/d-wed-g1.jpg";
import Ga2 from "../../assets/img/dubaimg/d-wed-g2.jpg";
import Ga3 from "../../assets/img/dubaimg/d-wed-g3.jpg";
import Ga4 from "../../assets/img/dubaimg/d-wed-g4.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";

// Gallery
const galleryImages = [Ga1, Ga2, Ga3, Ga4];

// Vision & Mission
const items = [
  {
    icon: "fas fa-heart",
    title: "Our Vision",
    description:
      "To become one of the most trusted luxury wedding planners in Dubai by creating unforgettable, elegant, and culturally rich wedding experiences."
  },
  {
    icon: "fas fa-ring",
    title: "Our Mission",
    description:
      "To deliver flawless wedding planning services in Dubai with personalized designs, premium venues, and stress-free execution."
  }
];

// Wedding Services
const eventServices = [
  {
    title: "Luxury Wedding Planning Dubai",
    desc: "Complete luxury wedding planning in Dubai including venue selection, decor, entertainment, and guest management.",
    img: Ga1,
    bg: "bg-white text-dark"
  },
  {
    title: "Destination & Indian Weddings Dubai",
    desc: "Expert planning for destination weddings, Indian weddings, and multicultural wedding ceremonies across Dubai and UAE.",
    img: Ga2,
    bg: "bg-white text-dark"
  },
  {
    title: "Wedding Decor & Theme Styling",
    desc: "Customized wedding decor themes including royal, beach, floral, and contemporary luxury setups.",
    img: Ga3,
    bg: "bg-light text-dark"
  }
];

// Why Choose Us
const itemsWhyus = [
  {
    number: "1",
    title: "Dubai Wedding Expertise",
    description:
      "Deep understanding of Dubai wedding venues, luxury hotels, beach locations, and legal formalities."
  },
  {
    number: "2",
    title: "Luxury & Destination Specialists",
    description:
      "Specialists in luxury weddings, destination weddings, and grand wedding celebrations."
  },
  {
    number: "3",
    title: "End-to-End Wedding Management",
    description:
      "From planning and design to execution, logistics, and guest hospitality."
  },
  {
    number: "4",
    title: "Trusted Vendor Network",
    description:
      "Top photographers, decorators, caterers, entertainers, and designers in Dubai."
  },
  {
    number: "5",
    title: "Personalized Wedding Concepts",
    description:
      "Every wedding is uniquely designed to reflect your culture, story, and style."
  },
  {
    number: "6",
    title: "Stress-Free Experience",
    description:
      "Enjoy your big day while we manage everything professionally."
  }
];

// FAQ
const faqData = [
  {
    question: "Do you provide luxury wedding planning services in Dubai?",
    answer:
      "Yes, SRS Events is a leading luxury wedding planner in Dubai offering premium venues, decor, and complete wedding management."
  },
  {
    question: "Can you plan Indian and destination weddings in Dubai?",
    answer:
      "Absolutely. We specialize in Indian weddings, destination weddings, and multicultural wedding celebrations in Dubai."
  },
  {
    question: "Do you handle beach and hotel weddings in Dubai?",
    answer:
      "Yes, we plan beach weddings, palace weddings, and luxury hotel weddings across Dubai and UAE."
  },
  {
    question: "Why choose SRS Events as your wedding planner in Dubai?",
    answer:
      "Our Dubai expertise, luxury execution, and personalized planning make us a trusted wedding partner."
  }
];

const DuWeddingPlanners = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Wedding Planners in Dubai | Luxury & Destination Weddings UAE</title>
        <meta
          name="description"
          content="SRS Events is a trusted wedding planner in Dubai offering luxury weddings, destination weddings, Indian weddings, beach weddings, and complete wedding management services across UAE."
        />
        <meta
          name="keywords"
          content="wedding planners Dubai, luxury wedding planners Dubai, destination wedding Dubai, Indian wedding planners Dubai, wedding management company Dubai, wedding organisers UAE, beach wedding planners Dubai, royal wedding planners Dubai, premium wedding planning services Dubai"
        />
        <link
          rel="canonical"
          href="https://srsevent.com/wedding-planners-dubai"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <HeroSectionGrid2
        subtitle="Wedding Planning Services"
        title="Luxury Wedding Planners in Dubai"
        description="From luxury weddings and destination weddings to Indian and beach weddings in Dubai — SRS Events creates magical wedding experiences."
        secondaryBtnText="Plan Your Dream Wedding"
        image={bannerImg}
      />

      {/* INTRO + FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="fw-bold mb-3">
                  <span className="text-pink">Best</span> Wedding Planners in Dubai
                </h2>
                <p>
                  <strong>SRS Events Dubai</strong> offers professional wedding planning services designed to deliver elegant, memorable, and stress-free weddings.
                </p>
                <p>
                  From intimate celebrations to grand luxury weddings, we manage everything with perfection.
                </p>
                <p className="border rounded-2 p-3">
                  Choose SRS Events Dubai for premium wedding planning and flawless execution.
                </p>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5" id="enquirynow">
              <div className="bg-pink py-4 rounded-5 text-center">
                <ScrollAnimation animateIn="fadeInRight">
                  <h2 className="text-white fs-4">
                    Plan your wedding in Dubai!
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
        highlight="Wedding Planning Services in Dubai"
        description="SRS Events Dubai is a full-service wedding planning company specializing in luxury, destination, and cultural weddings."
        extraText="We handle venue sourcing, decor, entertainment, catering, guest management, and coordination."
        buttonText="Plan Your Wedding"
        image={abt1}
        theme="#000"
      />

      {/* SERVICES */}
      <EventServicesSlider
        title="Explore Our"
        highlight="Wedding Services in Dubai"
        services={eventServices}
      />

      {/* IMAGE TEXT */}
      <ImageTextBlock
        title={<><span className="text-pink">Luxury</span> & Destination Weddings</>}
        description="Creating extraordinary wedding celebrations with elegance, creativity, and perfection."
        points={[
          "Luxury hotel weddings",
          "Beach & destination weddings",
          "Indian & multicultural weddings",
          "Premium decor & styling"
        ]}
        image={abt2}
      />

      {/* BENEFITS */}
      <TextImageBlock
        title={<><span className="text-pink">Why</span> Choose SRS Events</>}
        description="Your trusted wedding planners in Dubai."
        points={[
          "Experienced Dubai wedding planners",
          "Luxury & destination expertise",
          "Trusted vendor partnerships",
          "Stress-free wedding execution"
        ]}
        image={abt3}
      />

      {/* VISION */}
      <InfoCardsSection
        title="Our Vision & Mission for"
        subtitle="Wedding Planning in Dubai"
        items={items}
      />

      {/* WHY US */}
      <WhyChooseUsSection
        title="Why Choose"
        subtitle="SRS Wedding Planners Dubai"
        description="Creating timeless wedding memories in Dubai."
        items={itemsWhyus}
      />

      {/* GALLERY */}
      <GallerySection
        title="Explore Our"
        highlight="Wedding Gallery"
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
        title="Looking for Wedding Planners in Dubai?"
        subtitle="Let SRS Events Dubai create your dream wedding with elegance and perfection."
        buttonText="Book Your Wedding Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DuWeddingPlanners;
