import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import bannerImg from "../../assets/img/events/con-ev-bg.jpg";
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import ScrollAnimation from 'react-animate-on-scroll';
import ConfImg1 from "../../assets/img/events/con-ev-abt2.jpg";
import ConfImg2 from "../../assets/img/events/con-ev-abt3.jpg";
import ConfAbout from "../../assets/img/events/con-ev-abt1.jpg";
import ConfBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/con-ev-g1.jpg";
import Gal2 from "../../assets/img/events/con-ev-g2.jpg";
import Gal3 from "../../assets/img/events/con-ev-g3.jpg";
import Gal4 from "../../assets/img/events/con-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const eventServices = [
  {
    title: "Corporate Conference Management",
    desc: "We specialize in organizing management meetings, corporate events, and annual conferences with complete planning, logistics, and execution.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "International & Academic Seminars",
    desc: "From academic conferences to professional seminars like the World Congress on Engineering Asset Management, we ensure flawless experiences.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Workshops & Panel Discussions",
    desc: "Expert planning for society meetings, HR summits, leadership workshops, and professional development panels.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "To become the most trusted conference and seminar event management company by delivering seamless international conferences, management meetings, and business summits."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to empower organizations with impactful conferences and seminars, blending knowledge-sharing, networking, and flawless execution."
  }
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Conference Planners",
    description:
      "From HR management annual conferences to international academic congresses, our expertise ensures success."
  },
  {
    number: "2",
    title: "End-to-End Services",
    description:
      "We manage everything — from venue booking, stage setup, AV equipment, to delegate hospitality."
  },
  {
    number: "3",
    title: "Global Standards",
    description:
      "We follow international conference management practices trusted by organizations worldwide."
  },
  {
    number: "4",
    title: "Proven Track Record",
    description:
      "500+ successful conferences and seminar events for corporates, universities, and associations."
  },
  {
    number: "5",
    title: "MICE Expertise",
    description:
      "Meetings, Incentives, Conferences, and Exhibitions handled seamlessly for organizations across industries."
  },
  {
    number: "6",
    title: "Custom Conference Themes",
    description:
      "Innovative and creative setups tailored to reflect your brand and event objectives."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "No hidden charges, only clear and competitive conference management packages."
  },
  {
    number: "8",
    title: "International Reach",
    description:
      "We organize events across India and abroad, ensuring world-class conference experiences."
  },
];

const faqData = [
  {
    question: "Do you organize management meetings and corporate conferences?",
    answer:
      "Yes, we specialize in corporate conferences, annual meetings, HR management events, and professional summits."
  },
  {
    question: "Can you manage international conferences?",
    answer:
      "Absolutely. From the World Congress on Engineering Asset Management to academic symposiums, we handle end-to-end conference planning."
  },
  {
    question: "Do you provide technical and AV setup?",
    answer:
      "Yes, we arrange sound systems, projectors, LED screens, stage lighting, and complete audio-visual support."
  },
  {
    question: "Can you handle society and HR conferences?",
    answer:
      "Yes, including the Society for Human Resource Management annual conference, HR summits, and industry-specific seminars."
  },
  {
    question: "Do you also manage workshops and panel discussions?",
    answer:
      "Yes, we create engaging setups for workshops, leadership panels, training sessions, and networking events."
  }
];

const ConferencesSeminar = () => {
  return (
    <>
      <Helmet>
        <title>Conference & Seminar Event Management Company - SRS Events</title>
        <meta
          name="description"
          content="SRS Events is a leading conference and seminar event management company in India. We specialize in management meetings, corporate conferences, academic seminars, workshops, and international congress planning."
        />
        <meta
          name="keywords"
          content="management meetings, conference event management companies, event management conferences, world congress on engineering asset management, society for human resource management annual conference, international seminar organizers, corporate conference planning, MICE services"
        />
        <link rel="canonical" href="https://srsevent.com/conference-events-management-company-bangalore" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Professional Conference & Seminar Event Management"
        description="From corporate management meetings to international conferences, seminars, and workshops, SRS Events delivers seamless planning, execution, and memorable experiences."
        buttonText="Plan Your Conference"
        buttonLink="#book"
        bottomText="Trusted by 500+ Corporates, Universities & Associations Worldwide"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Conference & Seminar Organisers in India
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we specialize in management meetings, international conferences, academic seminars, and industry workshops. 
                  </p>
                  <p className='mt-3'>
                    Whether it’s the World Congress on Engineering Asset Management, the Society for Human Resource Management Annual Conference, or a local business summit, we bring world-class event planning expertise.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for stress-free, impactful conferences and seminars that inspire collaboration and knowledge-sharing.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your next conference with us!</h2>
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
          highlight="Conference & Seminar Planning Services"
          description="SRS Events specializes in organizing impactful conferences, seminars, workshops, and management meetings for corporates, universities, and associations."
          extraText="From venue selection and stage setup to delegate management and international conference logistics, we are a trusted partner for conference event management companies worldwide."
          buttonText="Plan Your Conference"
          image={ConfAbout}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Conference & Seminar Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">MICE</span> Solutions (Meetings, Incentives, Conferences, Exhibitions)</>}
          description="We integrate corporate conference planning with professional MICE services — ensuring seamless business and academic event management."
          points={[
            "Management meeting logistics",
            "Corporate incentive programs",
            "International conference planning",
            "Professional exhibitions and seminars"
          ]}
          image={ConfImg1}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Professional Conference Management</>}
          description="Hiring professional conference planners ensures impactful delivery and seamless execution."
          points={[
            "Complete event logistics & support",
            "Professional technical & AV setup",
            "Stress-free delegate management",
            "Enhanced networking and knowledge sharing"
          ]}
          image={ConfImg2}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Conference & Seminar Events"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Conference Management"
          description="Discover why SRS Events is trusted for international conferences, corporate seminars, and academic workshops worldwide."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Conference & Seminar Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={ConfBgCta}
        title="Plan Your Conference with Excellence"
        subtitle="From management meetings and international congresses to seminars and workshops — SRS Events ensures impactful event planning and flawless execution."
        buttonText="Book Your Conference Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default ConferencesSeminar;
