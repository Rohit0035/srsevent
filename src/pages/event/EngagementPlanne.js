import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/ever-ev-abt1.jpg";
import bannerImg from "../../assets/img/events/ever-ev-bg.jpg";
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/ever-ev-abt2.jpg";
import CopEventTwo from "../../assets/img/events/ever-ev-abt3.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/ever-ev-g1.jpg";
import Gal2 from "../../assets/img/events/ever-ev-g2.jpg";
import Gal3 from "../../assets/img/events/ever-ev-g3.jpg";
import Gal4 from "../../assets/img/events/ever-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-heart",
    title: "Vision",
    description:
      "We envision redefining engagement planning in India and abroad by delivering world-class engagement parties, proposal events, and unforgettable celebrations."
  },
  {
    icon: "fas fa-gem",
    title: "Mission",
    description:
      "Our mission is to be the most trusted engagement planners, offering personalized engagement packages, proposal planning, wardrobe styling, and day-of event coordination."
  }
];

const eventServices = [
  {
    title: "Complete Engagement Planning",
    desc: "From proposal planning to engagement parties, we manage everything — venue booking, décor, catering, wardrobe styling, and guest management.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Day-of Engagement Coordinator",
    desc: "Our coordinators ensure your engagement or proposal event runs smoothly — managing vendors, timelines, and on-the-spot troubleshooting.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Engagement Event Packages & Styling",
    desc: "Expert planning for engagement ceremonies, proposal events, luxury engagement parties, and personalized wardrobe styling for couple and family.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Certified & Trusted Engagement Planners",
    description:
      "Recognized for excellence, we specialize in engagement parties, proposal events, and luxury celebration planning."
  },
  {
    number: "2",
    title: "Personalized Engagement Packages",
    description:
      "We offer tailored services including wardrobe styling, theme décor, and detailed day-of event coordination."
  },
  {
    number: "3",
    title: "10+ Years of Engagement Planning Experience",
    description:
      "With 1000+ events managed, including engagement parties and marriage proposals, our expertise ensures perfection."
  },
  {
    number: "4",
    title: "Luxury Venues & Party Decor",
    description:
      "From intimate proposals to grand engagement celebrations, we plan and decorate venues to match your style."
  },
  {
    number: "5",
    title: "Creative & Trendy Décor",
    description:
      "We design innovative engagement themes, floral décor, and stage setups for memorable events."
  },
  {
    number: "6",
    title: "Complete Guest Management",
    description:
      "Seamless travel, stay, and hospitality for guests at engagement parties and proposal events."
  },
  {
    number: "7",
    title: "Transparent Event Pricing",
    description:
      "Affordable engagement packages with no hidden charges, fully customized for your event."
  },
  {
    number: "8",
    title: "Wardrobe & Styling Assistance",
    description:
      "From couple styling to family wardrobes, our experts ensure everyone looks their best."
  },
];

const faqData = [
  {
    question: "Do you plan complete engagement parties?",
    answer:
      "Yes, we handle everything including proposal events, engagement party venues, décor, catering, and guest management."
  },
  {
    question: "Do you provide day-of engagement coordination?",
    answer:
      "Absolutely. Our coordinators manage vendors, schedules, and ensure smooth execution for engagement and proposal events."
  },
  {
    question: "Can you plan engagement proposals?",
    answer:
      "Yes, we specialize in engagement proposal planning including creative concepts, venue booking, and luxury arrangements."
  },
  {
    question: "Do you assist with wardrobe styling for engagement events?",
    answer:
      "Yes, we offer personalized wardrobe planning and styling for the couple and family for engagement parties and proposals."
  },
  {
    question: "How do I find engagement planners near me?",
    answer:
      "SRS Weddings offers expert engagement planning services across India. Contact us to connect with the best engagement planners near you."
  }
];

const EngagementPlanne = () => {
  return (
    <>
      <Helmet>
        <title>Engagement Party Planners in Bangalore | SRS Event</title>
        <meta
          name="description"
          content="Host a memorable engagement party in Bangalore with SRS Event — professional planners for décor, coordination & celebration perfection."
        />
        <meta
          name="keywords"
          content="engagement planners, engagement party planner, engagement event planner, engagement planner near me, engagement proposal planner, wedding engagement planner, marriage proposal agency, engagement wedding planner, engagement event organizer, marriage proposal services, engagement proposal ideas, engagement party organizer, proposal event planner, engagement celebration packages, proposal event organizer, engagement event management"
        />
        <link rel="canonical" href="https://www.srsevent.com/engagement-party-planners-bangalore" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Plan Your Perfect Engagement & Proposal Event"
        description="From intimate proposals to grand engagement parties, SRS Weddings delivers seamless celebrations with personalized packages and expert planning."
        buttonText="Get Engagement Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful Engagements & Proposal Events Across India & Abroad"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Expert</span> Engagement Planners
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Weddings</strong>, we specialize in <em>engagement parties, proposal events, and wedding engagement planning</em>. From intimate gatherings to grand celebrations, we create unforgettable experiences.
                  </p>
                  <p className='mt-3'>
                    Whether you’re looking for a private proposal setup, a luxury engagement party, or creative engagement event ideas, our planners manage every detail.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Weddings</strong> for seamless planning, transparent pricing, and personalized engagement packages tailored to your celebration.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Engagement Planner!</h2>
                  <hr style={{ borderColor: '#fff' }} />
                  <div className="quote-content pt-0" style={{ backgroundColor: '#9c2356' }}>
                    <EnquiryFormEvent />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventDetailAbout
          title="About Our"
          highlight="Engagement Planning Services"
          description="SRS Weddings offers end-to-end engagement planning in India & abroad. From proposal events to luxury engagement parties, we provide wardrobe styling, décor, and seamless coordination."
          extraText="Our engagement packages include creative proposals, party organization, and memorable celebrations."
          buttonText="Explore Engagement Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Engagement Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Memorable Engagements & Proposals</span></>}
          description="We combine engagement planning with personalized services — from wardrobe styling to guest hospitality and venue selection."
          points={[
            "Complete engagement packages",
            "Proposal event planning",
            "Wardrobe & styling consultation",
            "Creative décor, themes & entertainment"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Engagement Experts</>}
          description="Professional engagement planners ensure your celebration is stress-free, elegant, and unforgettable."
          points={[
            "Expert wardrobe planning for engagement events",
            "Dedicated coordinators for proposal and engagement parties",
            "Guest hospitality & luxury travel arrangements",
            "Personalized décor for intimate and grand events"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Engagement Event Planning"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Weddings for Engagement Planning"
          description="Discover why SRS Weddings is trusted for engagement parties, proposals, and luxury event planning across India and abroad."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Engagement & Proposal Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Professional Engagement Planner"
        subtitle="From creative proposals to luxury engagement parties — SRS Weddings offers packages tailored to your dream celebration."
        buttonText="Book Engagement Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default EngagementPlanne;
