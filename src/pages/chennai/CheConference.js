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
    desc: "We organize management meetings, annual corporate conferences, and business summits with complete planning, logistics, and execution in Chennai.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "International & Academic Seminars",
    desc: "From academic conferences to global professional seminars in Chennai, including industry-specific congresses, we deliver flawless execution.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Workshops & Panel Discussions",
    desc: "Expert planning for HR summits, leadership workshops, society meetings, and professional development panels across Chennai.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "To be the most trusted conference and seminar event management company in Chennai, delivering seamless corporate summits, academic congresses, and leadership forums."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to empower Chennai organizations with impactful conferences and seminars that foster networking, learning, and collaboration."
  }
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Conference Planners in Chennai",
    description:
      "From IT summits on OMR to international academic congresses in Chennai, our expertise ensures success."
  },
  {
    number: "2",
    title: "End-to-End Services",
    description:
      "We manage everything — venue booking, stage setup, AV equipment, delegate hospitality, and logistics in Chennai."
  },
  {
    number: "3",
    title: "Global Standards",
    description:
      "We follow international best practices for conference management, trusted by global and Indian organizations in Chennai."
  },
  {
    number: "4",
    title: "Proven Track Record",
    description:
      "500+ successful conferences and seminars for corporates, universities, and associations in Chennai."
  },
  {
    number: "5",
    title: "MICE Expertise",
    description:
      "Meetings, Incentives, Conferences, and Exhibitions managed seamlessly for Chennai industries and institutions."
  },
  {
    number: "6",
    title: "Custom Conference Themes",
    description:
      "Creative, brand-focused setups tailored to reflect your company’s identity and event objectives."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "Clear, competitive packages for conferences and seminars in Chennai with no hidden charges."
  },
  {
    number: "8",
    title: "International Reach",
    description:
      "We organize conferences across Chennai, India, and abroad, ensuring world-class experiences."
  },
];

const faqData = [
  {
    question: "Do you organize corporate conferences in Chennai?",
    answer:
      "Yes, we specialize in annual management meetings, corporate summits, HR events, and industry-specific conferences in Chennai."
  },
  {
    question: "Can you manage international conferences in Chennai?",
    answer:
      "Absolutely. We handle global congresses, symposiums, and professional academic conferences with end-to-end services in Chennai."
  },
  {
    question: "Do you provide technical and AV setup in Chennai?",
    answer:
      "Yes, we provide sound systems, projectors, LED walls, lighting, and full AV support for conferences and seminars in Chennai."
  },
  {
    question: "Do you handle HR and industry-specific seminars in Chennai?",
    answer:
      "Yes, we manage HR conferences, leadership summits, and industry-focused workshops across Chennai."
  },
  {
    question: "Do you manage panel discussions and workshops in Chennai?",
    answer:
      "Yes, we design engaging setups for workshops, leadership panels, training sessions, and networking events in Chennai."
  }
];

const CheConference = () => {
  return (
    <>
      <Helmet>
        <title>Conference & Seminar Event Management Company in Chennai - SRS Events</title>
        <meta
          name="description"
          content="SRS Events is a leading conference and seminar event management company in Chennai. We specialize in management meetings, corporate conferences, academic seminars, workshops, and international congress planning in Chennai."
        />
        <meta
          name="keywords"
          content="conference event management Chennai, corporate conferences Chennai, seminar organizers Chennai, academic conference planning Chennai, MICE services Chennai"
        />
        <link rel="canonical" href="https://srsevent.com/conference-events-management-company-chennai" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Conference & Seminar Event Management in Chennai"
        description="From corporate management meetings to international conferences, seminars, and workshops in Chennai — SRS Events delivers seamless planning, execution, and impactful experiences."
        buttonText="Plan Your Chennai Conference"
        buttonLink="#book"
        bottomText="Trusted by 500+ Corporates, Universities & Associations in Chennai & Beyond"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Conference & Seminar Organisers in Chennai
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Chennai</strong>, we specialize in management meetings, international conferences, academic seminars, and industry workshops.
                  </p>
                  <p className='mt-3'>
                    Whether it’s an IT summit on OMR, a leadership conclave in Chennai Trade Centre, or an international academic conference, we bring world-class expertise.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Chennai</strong> for stress-free, impactful conferences and seminars that inspire collaboration and knowledge-sharing.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your next conference in Chennai with us!</h2>
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
          highlight="Conference & Seminar Planning Services in Chennai"
          description="SRS Events organizes impactful conferences, seminars, workshops, and management meetings for corporates, universities, and associations in Chennai."
          extraText="From venue selection and stage setup to delegate management and international conference logistics, we are Chennai’s trusted partner for conference management."
          buttonText="Plan Your Chennai Conference"
          image={ConfAbout}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Conference & Seminar Services in Chennai"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">MICE</span> Solutions in Chennai (Meetings, Incentives, Conferences, Exhibitions)</>}
          description="We integrate conference planning with professional MICE services — ensuring seamless business and academic event management in Chennai."
          points={[
            "Management meeting logistics in Chennai",
            "Corporate incentive programs",
            "International conference planning",
            "Professional exhibitions and seminars"
          ]}
          image={ConfImg1}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Professional Conference Management in Chennai</>}
          description="Hiring professional conference planners in Chennai ensures impactful delivery and seamless execution."
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
          subtitle="Conference & Seminar Events in Chennai"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Conference Management in Chennai"
          description="Discover why corporates, universities, and global organizations trust SRS Events for their conference planning in Chennai."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Conference & Seminar Gallery in Chennai"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions in Chennai" faqs={faqData} />

      <CTABanner
        backgroundImage={ConfBgCta}
        title="Plan Your Conference in Chennai with Excellence"
        subtitle="From management meetings and international congresses to seminars and workshops in Chennai — SRS Events ensures impactful planning and flawless execution."
        buttonText="Book Your Chennai Conference Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default CheConference;
