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
      "We aim to redefine inauguration and event management in Hyderabad by delivering impactful ribbon-cutting ceremonies, corporate launches, and landmark openings."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "SRS Events Hyderabad strives to be the most trusted inauguration planner, handling everything from welcome speeches to government inaugurations with professionalism."
  }
];

const eventServices = [
  {
    title: "Corporate & Office Inaugurations",
    desc: "Comprehensive solutions for new office launches, IT park inaugurations, and Hyderabad corporate openings with flawless execution.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Ribbon-Cutting & Product Launches",
    desc: "Stylish ribbon-cutting ceremonies and product launches for Hyderabad businesses, with stage setups, décor, and welcome speech support.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Government & Public Inaugurations",
    desc: "Trusted by leading organizations for managing government projects, public launches, and city-level inaugurations across Hyderabad.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Local Hyderabad Expertise",
    description:
      "We understand Hyderabad’s culture, venues, and audience, ensuring a personalized inauguration event experience."
  },
  {
    number: "2",
    title: "Speech & Protocol Experts",
    description:
      "Our team guides you with impactful welcome speeches and manages protocols for Hyderabad’s corporate and government ceremonies."
  },
  {
    number: "3",
    title: "6+ Years of Experience",
    description:
      "Over 500 inauguration and launch events executed, including major Hyderabad corporate and government projects."
  },
  {
    number: "4",
    title: "Trusted by Hyderabad Businesses",
    description:
      "We’ve planned inaugurations for IT firms, startups, retail chains, and public infrastructure in Hyderabad."
  },
  {
    number: "5",
    title: "Creative Event Planning",
    description:
      "Innovative décor and setups for office launches, corporate inaugurations, and city-wide public events."
  },
  {
    number: "6",
    title: "Crowd Management Experts",
    description:
      "Ensuring safe, smooth execution for high-footfall Hyderabad inaugurations and openings."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "Affordable inauguration planning packages for Hyderabad corporates and government organizations."
  },
  {
    number: "8",
    title: "End-to-End Event Execution",
    description:
      "From concept to completion, we handle everything to make your Hyderabad inauguration stress-free."
  },
];

const faqData = [
  {
    question: "Do you provide inauguration planning in Hyderabad?",
    answer:
      "Yes, SRS Events is a trusted inauguration planner in Hyderabad for ribbon-cutting ceremonies, office launches, and corporate events."
  },
  {
    question: "Can you manage large-scale Hyderabad inaugurations?",
    answer:
      "Absolutely. We specialize in Hyderabad public and government inaugurations, ensuring smooth event execution."
  },
  {
    question: "Do you assist with welcome speeches for inaugurations?",
    answer:
      "Yes, our experts craft and manage impactful inaugural speeches for Hyderabad corporate and government events."
  },
  {
    question: "Are your services only for corporates?",
    answer:
      "No, we handle corporate, retail, and government inaugurations across Hyderabad and Telangana."
  },
  {
    question: "Do you provide destination event services?",
    answer:
      "Yes, along with Hyderabad, we organize inauguration and launch events across India and abroad."
  }
];

const HydInauguration = () => {
  return (
    <>
      <Helmet>
        <title>Inauguration Planners in Hyderabad | Corporate Event Management - SRS Events</title>
        <meta
          name="description"
          content="Looking for the best inauguration planners in Hyderabad? SRS Events specializes in office launches, ribbon-cutting ceremonies, product launches, and government inaugurations across Hyderabad."
        />
        <meta
          name="keywords"
          content="inauguration planners in Hyderabad, office inauguration Hyderabad, ribbon-cutting ceremony Hyderabad, corporate launch Hyderabad, event management Hyderabad, inauguration event Hyderabad"
        />
        <link rel="canonical" href="https://srsevent.com/inauguration-event-organizers-hyderabad" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Trusted Inauguration Planners in Hyderabad"
        description="From office launches in HITEC City to government inaugurations across Hyderabad, SRS Events delivers professional inauguration planning, speech preparation, and flawless execution."
        buttonText="Plan Your Hyderabad Inauguration"
        buttonLink="#book"
        bottomText="500+ Successful Corporate & Public Inaugurations in Hyderabad"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Inauguration Planners in Hyderabad
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Hyderabad</strong>, we provide end-to-end inauguration planning — from stylish ribbon-cutting setups to corporate and government launches.
                  </p>
                  <p className='mt-3'>
                    Whether it’s an IT office inauguration in Madhapur or a public project launch, our team ensures memorable experiences for Hyderabad businesses and institutions.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Hyderabad</strong> for reliable inauguration planning, speech preparation, and seamless event management.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your Hyderabad inauguration!</h2>
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
          highlight="Hyderabad Inauguration Services"
          description="SRS Events Hyderabad specializes in inauguration ceremonies, office launches, and public project openings."
          extraText="From crafting welcome speeches to handling major corporate and government inaugurations in Hyderabad, we are your trusted partner."
          buttonText="Plan Your Hyderabad Inauguration"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Hyderabad Inauguration Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Planning for <span className="text-pink">Hyderabad Inauguration </span> Ceremonies</>}
          description="We integrate professional inauguration planning with creative setups to deliver seamless Hyderabad events."
          points={[
            "Stylish inauguration décor & setups",
            "Corporate conference & launch management",
            "Government inauguration logistics",
            "Customized solutions for Hyderabad businesses"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing Hyderabad Inauguration Planners</>}
          description="Working with SRS Events ensures stress-free, efficient, and impactful inauguration events in Hyderabad."
          points={[
            "Professional welcome speech guidance",
            "Safe and reliable crowd management",
            "Creative Hyderabad-focused event setups",
            "Stress-free execution with local expertise"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Hyderabad Inauguration Events"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events Hyderabad"
          description="Discover why Hyderabad corporates and government organizations trust SRS Events for their inauguration planning."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Hyderabad Inauguration Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Plan Your Hyderabad Inauguration with SRS Events"
        subtitle="From IT office launches and retail store openings to government inaugurations across Hyderabad, SRS Events delivers flawless event planning and execution."
        buttonText="Book Your Hyderabad Inauguration"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HydInauguration;
