import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/inn-ev-abt.jpg"
import bannerImg from "../../assets/img/events/inn-ev-bg.jpg"
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/inn-ev-abt2.jpeg"
import CopEventTwo from "../../assets/img/events/inn-ev-abt3.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg"
import Gal1 from "../../assets/img/events/inn-ev-g1.jpg"
import Gal2 from "../../assets/img/events/inn-ev-g2.jpg"
import Gal3 from "../../assets/img/events/inn-ev-g3.jpg"
import Gal4 from "../../assets/img/events/inn-ev-g4.jpg"

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "We envision redefining inauguration and event management in India by delivering world-class inauguration ceremonies, corporate launch events, and strategic meetings management solutions."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "SRS Events aims to be the most trusted inauguration and event management company, handling everything from welcome speech preparation to government inauguration ceremony planning."
  }
];

const eventServices = [
  {
    title: "Inauguration Ceremony Planning",
    desc: "Comprehensive solutions for ribbon-cutting ceremonies, Bundelkhand Expressway inaugurations, Samruddhi Mahamarg events, new office inaugurations, and grand openings.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Corporate Conferences & Launches",
    desc: "Seamless execution of business conferences, product launches, and inaugural ceremonies with impactful stage setups and welcome speech arrangements.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Government & Public Inaugurations",
    desc: "Proven expertise in managing high-profile inaugurations like expressways, infrastructure projects, and public events with professional crowd management.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Certified & Trusted Inauguration Planners",
    description:
      "Recognized for excellence, SRS Events specializes in inauguration events, including expressway openings, corporate office launches, and government ceremonies."
  },
  {
    number: "2",
    title: "Welcome Speech & Protocol Experts",
    description:
      "We guide you with impactful inaugural speeches and protocol management for every event."
  },
  {
    number: "3",
    title: "6+ Years of Experience",
    description:
      "With 500+ inauguration and corporate events executed, we have mastered precision and creativity."
  },
  {
    number: "4",
    title: "Destination Event Management",
    description:
      "From Bangalore to global stages, we manage inauguration and launch events anywhere."
  },
  {
    number: "5",
    title: "Creative Event Planning",
    description:
      "Innovative setups for ribbon-cutting ceremonies, conferences, and gala dinners."
  },
  {
    number: "6",
    title: "Crowd Management Experts",
    description:
      "Ensuring smooth, safe execution for high-footfall inaugurations like highways and public projects."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "Cost-effective inauguration and corporate event services with no hidden charges."
  },
  {
    number: "8",
    title: "Proven Government Event Experience",
    description:
      "We’ve successfully handled government inaugurations like Bundelkhand Expressway and Samruddhi Mahamarg."
  },
];

const faqData = [
  {
    question: "Do you provide inauguration ceremony planning services?",
    answer:
      "Yes, SRS Events specializes in planning ribbon-cutting ceremonies, new office inaugurations, highway inaugurations, and grand openings."
  },
  {
    question: "Can you manage government or large-scale public inaugurations?",
    answer:
      "Absolutely. We have experience with events like Bundelkhand Expressway and Samruddhi Mahamarg inaugurations, ensuring smooth execution."
  },
  {
    question: "Do you help with welcome speech for inaugural ceremonies?",
    answer:
      "Yes, our team assists in preparing and managing impactful welcome speeches for inaugurations."
  },
  {
    question: "Are your services only for corporate events?",
    answer:
      "No, we handle both corporate and public inaugurations including offices, infrastructure, and product launches."
  },
  {
    question: "Do you provide destination inauguration event services?",
    answer:
      "Yes, as a destination management company, we organize inauguration and launch events across India and abroad."
  }
];

const InaugurationPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Inauguration Event Organisers in Bangalore | SRS Event</title>
        <meta
          name="description"
          content="Plan impactful inaugurations in Bangalore with SRS Event — expert organisers for showroom openings, corporate launches & ribbon-cutting ceremonies."
        />
        <meta
          name="keywords"
          content="bundelkhand expressway, inauguration, inauguration ceremony, samruddhi mahamarg, welcome speech for inaugural ceremony, new office inauguration, inauguration event, corporate inauguration services, ribbon-cutting ceremony, event organisers near me, event management companies in India"
        />
        <link rel="canonical" href="https://www.srsevent.com/inauguration-event-organisers-bangalore" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Professional Inauguration & Corporate Event Management"
        description="From Bundelkhand Expressway and Samruddhi Mahamarg inaugurations to new office inaugurations and corporate launches, SRS Events delivers flawless inauguration ceremony planning, welcome speech guidance, and event execution."
        buttonText="Plan Your Inauguration"
        buttonLink="#book"
        bottomText="500+ Successful Inaugurations & Corporate Events Across India"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Inauguration Event Organisers in India
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we provide comprehensive inauguration event planning, from ribbon-cutting ceremonies to large-scale highway inaugurations like Bundelkhand Expressway.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a corporate launch, new office inauguration, or government event like Samruddhi Mahamarg, our expert planners ensure impactful experiences.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for seamless inauguration event arrangement, welcome speech preparation, and flawless execution.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your inauguration with us!</h2>
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
          highlight="Inauguration & Event Planning Services"
          description="SRS Events specializes in inauguration ceremonies, strategic corporate launches, and destination event management across India."
          extraText="From crafting welcome speeches for inaugural ceremonies to handling expressway inaugurations like Bundelkhand and Samruddhi Mahamarg, we are a trusted event management company."
          buttonText="Plan Your Inauguration"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Inauguration & Event Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Planning for <span className="text-pink">Grand Openings & Inauguration </span> Ceremonies</>}
          description="We integrate inauguration event planning with professional MICE services — ensuring seamless experiences for businesses and governments."
          points={[
            "Seamless inauguration meeting planning",
            "Incentives & corporate bonding programs",
            "Conference logistics & execution",
            "Creative exhibition & inaugural setups"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Professional Inauguration Planning</>}
          description="Hiring professional inauguration planners ensures efficiency, reliability, and flawless delivery."
          points={[
            "Expert inauguration speech preparation",
            "Professional crowd management services",
            "Stress-free inauguration event execution",
            "Focus on your goals while we manage the rest"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Inauguration & Corporate Events"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Inauguration Event Management"
          description="Discover why SRS Events is trusted for Bundelkhand Expressway, Samruddhi Mahamarg, and corporate inaugurations across India."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Inauguration Event Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Plan Your Inauguration with Excellence"
        subtitle="From new office inaugurations and corporate launches to expressway openings and gala events — SRS Events delivers flawless event planning, welcome speech preparation, and expert execution."
        buttonText="Book Your Inauguration Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default InaugurationPlanners;
