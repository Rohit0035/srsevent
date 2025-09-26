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
      "We aim to redefine inauguration and event management in Chennai by delivering impactful ribbon-cutting ceremonies, corporate launches, and landmark openings."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "SRS Events Chennai strives to be the most trusted inauguration planner, handling everything from welcome speeches to government inaugurations with professionalism."
  }
];

const eventServices = [
  {
    title: "Corporate & Office Inaugurations",
    desc: "Comprehensive solutions for new office launches, IT corridor inaugurations, and Chennai corporate openings with flawless execution.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Ribbon-Cutting & Product Launches",
    desc: "Stylish ribbon-cutting ceremonies and product launches for Chennai businesses, with stage setups, décor, and welcome speech support.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Government & Public Inaugurations",
    desc: "Trusted by leading organizations for managing government projects, public launches, and city-level inaugurations across Chennai and Tamil Nadu.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Local Chennai Expertise",
    description:
      "We understand Chennai’s culture, venues, and audience, ensuring a personalized inauguration event experience."
  },
  {
    number: "2",
    title: "Speech & Protocol Experts",
    description:
      "Our team guides you with impactful welcome speeches and manages protocols for Chennai’s corporate and government ceremonies."
  },
  {
    number: "3",
    title: "6+ Years of Experience",
    description:
      "Over 500 inauguration and launch events executed, including major Chennai corporate and government projects."
  },
  {
    number: "4",
    title: "Trusted by Chennai Businesses",
    description:
      "We’ve planned inaugurations for IT firms, startups, retail chains, and public infrastructure in Chennai."
  },
  {
    number: "5",
    title: "Creative Event Planning",
    description:
      "Innovative décor and setups for office launches, corporate inaugurations, and city-wide public events in Chennai."
  },
  {
    number: "6",
    title: "Crowd Management Experts",
    description:
      "Ensuring safe, smooth execution for high-footfall Chennai inaugurations and openings."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "Affordable inauguration planning packages for Chennai corporates and government organizations."
  },
  {
    number: "8",
    title: "End-to-End Event Execution",
    description:
      "From concept to completion, we handle everything to make your Chennai inauguration stress-free."
  },
];

const faqData = [
  {
    question: "Do you provide inauguration planning in Chennai?",
    answer:
      "Yes, SRS Events is a trusted inauguration planner in Chennai for ribbon-cutting ceremonies, office launches, and corporate events."
  },
  {
    question: "Can you manage large-scale Chennai inaugurations?",
    answer:
      "Absolutely. We specialize in Chennai public and government inaugurations, ensuring smooth event execution."
  },
  {
    question: "Do you assist with welcome speeches for inaugurations?",
    answer:
      "Yes, our experts craft and manage impactful inaugural speeches for Chennai corporate and government events."
  },
  {
    question: "Are your services only for corporates?",
    answer:
      "No, we handle corporate, retail, and government inaugurations across Chennai and Tamil Nadu."
  },
  {
    question: "Do you provide destination event services?",
    answer:
      "Yes, along with Chennai, we organize inauguration and launch events across India and abroad."
  }
];

const CheInaugurationPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Inauguration Planners in Chennai | Corporate Event Management - SRS Events</title>
        <meta
          name="description"
          content="Looking for the best inauguration planners in Chennai? SRS Events specializes in office launches, ribbon-cutting ceremonies, product launches, and government inaugurations across Chennai."
        />
        <meta
          name="keywords"
          content="inauguration planners in Chennai, office inauguration Chennai, ribbon-cutting ceremony Chennai, corporate launch Chennai, event management Chennai, inauguration event Chennai"
        />
        <link rel="canonical" href="https://srsevent.com/inauguration-event-organizers-chennai" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Trusted Inauguration Planners in Chennai"
        description="From office launches in OMR and Guindy to government inaugurations across Chennai, SRS Events delivers professional inauguration planning, speech preparation, and flawless execution."
        buttonText="Plan Your Chennai Inauguration"
        buttonLink="#book"
        bottomText="500+ Successful Corporate & Public Inaugurations in Chennai"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Inauguration Planners in Chennai
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Chennai</strong>, we provide end-to-end inauguration planning — from stylish ribbon-cutting setups to corporate and government launches.
                  </p>
                  <p className='mt-3'>
                    Whether it’s an IT office inauguration in OMR or a public project launch in Tamil Nadu, our team ensures memorable experiences for Chennai businesses and institutions.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Chennai</strong> for reliable inauguration planning, speech preparation, and seamless event management.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your Chennai inauguration!</h2>
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
          highlight="Chennai Inauguration Services"
          description="SRS Events Chennai specializes in inauguration ceremonies, office launches, and public project openings."
          extraText="From crafting welcome speeches to handling major corporate and government inaugurations in Chennai, we are your trusted partner."
          buttonText="Plan Your Chennai Inauguration"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Chennai Inauguration Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Planning for <span className="text-pink">Chennai Inauguration </span> Ceremonies</>}
          description="We integrate professional inauguration planning with creative setups to deliver seamless Chennai events."
          points={[
            "Stylish inauguration décor & setups",
            "Corporate conference & launch management",
            "Government inauguration logistics",
            "Customized solutions for Chennai businesses"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing Chennai Inauguration Planners</>}
          description="Working with SRS Events ensures stress-free, efficient, and impactful inauguration events in Chennai."
          points={[
            "Professional welcome speech guidance",
            "Safe and reliable crowd management",
            "Creative Chennai-focused event setups",
            "Stress-free execution with local expertise"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Chennai Inauguration Events"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events Chennai"
          description="Discover why Chennai corporates and government organizations trust SRS Events for their inauguration planning."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Chennai Inauguration Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Plan Your Chennai Inauguration with SRS Events"
        subtitle="From IT office launches and retail store openings to government inaugurations across Chennai, SRS Events delivers flawless event planning and execution."
        buttonText="Book Your Chennai Inauguration"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default CheInaugurationPlanners;
