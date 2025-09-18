import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/hus-ev-abt1.jpg";
import bannerImg from "../../assets/img/events/hus-ev-bg.jpg";
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/hus-ev-abt2.jpeg";
import CopEventTwo from "../../assets/img/events/hus-ev-abt3.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/hus-ev-g1.jpeg";
import Gal2 from "../../assets/img/events/hus-ev-g2.jpeg";
import Gal3 from "../../assets/img/events/hus-ev-g3.jpeg";
import Gal4 from "../../assets/img/events/hus-ev-g4.jpeg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-home",
    title: "Vision",
    description:
      "We aim to redefine house warming, griha pravesh, and naming ceremonies in India with personalized celebrations, beautiful décor, and memorable experiences for families."
  },
  {
    icon: "fas fa-gift",
    title: "Mission",
    description:
      "Our mission is to provide trusted house warming and naming ceremony planners offering creative decorations, gifts, catering, and seamless event coordination."
  }
];

const eventServices = [
  {
    title: "Complete House Warming & Naming Ceremony Planning",
    desc: "From intimate family gatherings to grand griha pravesh or cradle ceremonies, we manage venue setup, décor, catering, gifts, and rituals.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Themed Décor & Ritual Setup",
    desc: "Our decorators create beautiful themes for griha pravesh, barsa ceremonies, and naming ceremonies including kalash setups, floral arrangements, and stage décor.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Invitations, Gifts & Event Coordination",
    desc: "We assist with customized invitations, unique gifts, day-of ceremony coordination, entertainment, and guest hospitality for memorable celebrations.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Griha Pravesh & Naming Ceremony Planners",
    description:
      "Recognized for excellence, we specialize in house warming ceremonies, barsa ceremonies, cradle ceremonies, and naming ceremonies."
  },
  {
    number: "2",
    title: "Customized Ceremony Packages",
    description:
      "We provide tailored services including themed décor, gifts, catering, rituals, and invitations."
  },
  {
    number: "3",
    title: "10+ Years of Event Planning Experience",
    description:
      "With 1000+ house warming and naming ceremonies organized, we ensure memorable celebrations for families."
  },
  {
    number: "4",
    title: "Creative & Elegant Decorations",
    description:
      "From kalash setups and floral décor to thematic stage arrangements, we create visually stunning house warming and naming ceremonies."
  },
  {
    number: "5",
    title: "Complete Guest Management",
    description:
      "We manage invitations, RSVPs, seating arrangements, and hospitality for a hassle-free celebration."
  },
  {
    number: "6",
    title: "Affordable Packages",
    description:
      "Our house warming and naming ceremony packages are fully customizable with transparent pricing."
  },
  {
    number: "7",
    title: "Gift & Styling Assistance",
    description:
      "We suggest unique gifts, themed décor, and styling for hosts and guests."
  },
];

const faqData = [
  {
    question: "Do you plan complete house warming ceremonies?",
    answer:
      "Yes, we handle everything including décor, rituals, gifts, invitations, catering, and guest management."
  },
  {
    question: "Can you plan naming or cradle ceremonies?",
    answer:
      "Absolutely! We specialize in naming ceremonies, barsa ceremonies, and cradle ceremonies with complete coordination."
  },
  {
    question: "Do you provide house warming or naming ceremony gift ideas?",
    answer:
      "Yes, we suggest unique gifts and personalized hampers for a memorable celebration."
  },
  {
    question: "Do you handle invitations for house warming events?",
    answer:
      "Yes, we create customized invitations for house warming, griha pravesh, and naming ceremonies."
  },
  {
    question: "How do I find house warming or naming ceremony planners near me?",
    answer:
      "SRS Events offers professional house warming and naming ceremony planning services across India. Contact us to connect with expert planners near you."
  }
];

const HousewarmingEvent = () => {
  return (
    <>
      <Helmet>
        <title>House Warming & Naming Ceremony Planners | SRS Events</title>
        <meta
          name="description"
          content="SRS Events provides expert house warming and naming ceremony planners in India. Plan griha pravesh, barsa, cradle, and naming ceremonies with themed décor, gifts, invitations, and professional coordination."
        />
        <meta
          name="keywords"
          content="house warming ceremony, naming ceremony, griha pravesh, barsa ceremony, cradle ceremony, griha pravesh ceremony, griha pravesh kalash, house opening ceremony, home warming ceremony, house warming function, naam karan, naming ceremony in telugu, house warming planner, naming ceremony planner, housewarming event management, griha pravesh planner, baby cradle ceremony, house blessing ceremony"
        />
        <link rel="canonical" href="https://srsevent.com/housewarming-event-planner-Bangalore" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Plan Your Perfect House Warming & Naming Ceremony"
        description="From intimate family gatherings to grand griha pravesh and naming ceremonies, SRS Events delivers seamless celebrations with creative themes, gifts, invitations, and expert coordination."
        buttonText="Get House Warming Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful House Warming & Naming Ceremonies Across India"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Expert</span> House Warming & Naming Ceremony Planners
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we specialize in <em>house warming ceremonies, griha pravesh, barsa, cradle, and naming ceremonies</em>. From intimate family gatherings to grand celebrations, we create memorable moments.
                  </p>
                  <p className='mt-3'>
                    We manage rituals, gifts, invitations, décor, catering, and guest hospitality to ensure a seamless event.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for stress-free planning, personalized packages, and expert event coordination.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your House Warming Planner!</h2>
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
          highlight="House Warming & Naming Ceremony Services"
          description="SRS Events provides end-to-end planning for griha pravesh, naming ceremonies, barsa ceremonies, and cradle events in India. From décor to gifts and invitations, we ensure unforgettable celebrations."
          extraText="Our packages include personalized themes, gifts, invitations, catering, rituals, and full event coordination."
          buttonText="Explore House Warming Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="House Warming & Naming Ceremony Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Beautiful & Memorable House Warming & Naming Ceremonies</span></>}
          description="We combine house warming and naming ceremony planning with personalized services — from décor and rituals to gifts, invitations, and guest management."
          points={[
            "Complete house warming packages",
            "Themed décor & ritual setups",
            "Gifts, invitations, and catering",
            "Customized ceremony services"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring House Warming & Naming Ceremony Experts</>}
          description="Professional planners ensure your house warming or naming ceremony is seamless, beautiful, and unforgettable."
          points={[
            "Expert décor and ritual arrangements",
            "Day-of event coordination and entertainment",
            "Guest hospitality & memorable experiences",
            "Personalized gifts, invitations & kalash setup"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="House Warming & Naming Ceremony Planning"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for House Warming & Naming Ceremony Planning"
          description="Discover why SRS Events is trusted for griha pravesh, cradle, barsa, and naming ceremonies across India."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="House Warming & Naming Ceremony Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Professional House Warming & Naming Ceremony Planner"
        subtitle="From intimate griha pravesh to grand naming ceremonies and barsa events, SRS Events offers packages tailored to your dream celebration."
        buttonText="Book House Warming Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HousewarmingEvent;
