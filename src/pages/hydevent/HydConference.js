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
    desc: "We specialize in organizing management meetings, corporate events, and annual conferences with complete planning, logistics, and execution in Hyderabad.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "International & Academic Seminars",
    desc: "From academic conferences to professional seminars in Hyderabad like the World Congress on Engineering Asset Management, we ensure flawless experiences.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Workshops & Panel Discussions",
    desc: "Expert planning for society meetings, HR summits, leadership workshops, and professional development panels across Hyderabad.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "To become the most trusted conference and seminar event management company in Hyderabad by delivering seamless international conferences, management meetings, and business summits."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to empower organizations in Hyderabad with impactful conferences and seminars, blending knowledge-sharing, networking, and flawless execution."
  }
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Conference Planners in Hyderabad",
    description:
      "From HR management annual conferences to international academic congresses in Hyderabad, our expertise ensures success."
  },
  {
    number: "2",
    title: "End-to-End Services",
    description:
      "We manage everything — from venue booking, stage setup, AV equipment, to delegate hospitality in Hyderabad."
  },
  {
    number: "3",
    title: "Global Standards",
    description:
      "We follow international conference management practices trusted by organizations in Hyderabad and worldwide."
  },
  {
    number: "4",
    title: "Proven Track Record",
    description:
      "500+ successful conferences and seminar events for corporates, universities, and associations in Hyderabad."
  },
  {
    number: "5",
    title: "MICE Expertise",
    description:
      "Meetings, Incentives, Conferences, and Exhibitions handled seamlessly for organizations across Hyderabad industries."
  },
  {
    number: "6",
    title: "Custom Conference Themes",
    description:
      "Innovative and creative setups tailored to reflect your brand and event objectives in Hyderabad."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "No hidden charges, only clear and competitive conference management packages in Hyderabad."
  },
  {
    number: "8",
    title: "International Reach",
    description:
      "We organize events across Hyderabad, India, and abroad, ensuring world-class conference experiences."
  },
];

const faqData = [
  {
    question: "Do you organize management meetings and corporate conferences in Hyderabad?",
    answer:
      "Yes, we specialize in corporate conferences, annual meetings, HR management events, and professional summits in Hyderabad."
  },
  {
    question: "Can you manage international conferences in Hyderabad?",
    answer:
      "Absolutely. From the World Congress on Engineering Asset Management to academic symposiums, we handle end-to-end conference planning in Hyderabad."
  },
  {
    question: "Do you provide technical and AV setup in Hyderabad?",
    answer:
      "Yes, we arrange sound systems, projectors, LED screens, stage lighting, and complete audio-visual support for Hyderabad events."
  },
  {
    question: "Can you handle society and HR conferences in Hyderabad?",
    answer:
      "Yes, including the Society for Human Resource Management annual conference, HR summits, and industry-specific seminars in Hyderabad."
  },
  {
    question: "Do you also manage workshops and panel discussions in Hyderabad?",
    answer:
      "Yes, we create engaging setups for workshops, leadership panels, training sessions, and networking events in Hyderabad."
  }
];

const HydConference = () => {
  return (
    <>
      <Helmet>
        <title>Conference & Seminar Event Management Company in Hyderabad - SRS Events</title>
        <meta
          name="description"
          content="SRS Events is a leading conference and seminar event management company in Hyderabad. We specialize in management meetings, corporate conferences, academic seminars, workshops, and international congress planning in Hyderabad."
        />
        <meta
          name="keywords"
          content="conference event management Hyderabad, corporate conferences Hyderabad, seminar organizers Hyderabad, academic conference planning Hyderabad, MICE services Hyderabad"
        />
        <link rel="canonical" href="https://srsevent.com/conference-events-management-company-hyderabad" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Conference & Seminar Event Management in Hyderabad"
        description="From corporate management meetings to international conferences, seminars, and workshops in Hyderabad — SRS Events delivers seamless planning, execution, and impactful experiences."
        buttonText="Plan Your Hyderabad Conference"
        buttonLink="#book"
        bottomText="Trusted by 500+ Corporates, Universities & Associations in Hyderabad & Beyond"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Conference & Seminar Organisers in Hyderabad
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Hyderabad</strong>, we specialize in management meetings, international conferences, academic seminars, and industry workshops. 
                  </p>
                  <p className='mt-3'>
                    Whether it’s the World Congress on Engineering Asset Management, the Society for Human Resource Management Annual Conference, or a local business summit in Hyderabad, we bring world-class event planning expertise.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Hyderabad</strong> for stress-free, impactful conferences and seminars that inspire collaboration and knowledge-sharing.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your next conference in Hyderabad with us!</h2>
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
          highlight="Conference & Seminar Planning Services in Hyderabad"
          description="SRS Events specializes in organizing impactful conferences, seminars, workshops, and management meetings for corporates, universities, and associations in Hyderabad."
          extraText="From venue selection and stage setup to delegate management and international conference logistics in Hyderabad, we are a trusted partner for conference event management."
          buttonText="Plan Your Hyderabad Conference"
          image={ConfAbout}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Conference & Seminar Services in Hyderabad"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">MICE</span> Solutions in Hyderabad (Meetings, Incentives, Conferences, Exhibitions)</>}
          description="We integrate corporate conference planning with professional MICE services — ensuring seamless business and academic event management in Hyderabad."
          points={[
            "Management meeting logistics in Hyderabad",
            "Corporate incentive programs",
            "International conference planning",
            "Professional exhibitions and seminars"
          ]}
          image={ConfImg1}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Professional Conference Management in Hyderabad</>}
          description="Hiring professional conference planners in Hyderabad ensures impactful delivery and seamless execution."
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
          subtitle="Conference & Seminar Events in Hyderabad"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Conference Management in Hyderabad"
          description="Discover why SRS Events is trusted for international conferences, corporate seminars, and academic workshops in Hyderabad."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Conference & Seminar Gallery in Hyderabad"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions in Hyderabad" faqs={faqData} />

      <CTABanner
        backgroundImage={ConfBgCta}
        title="Plan Your Conference in Hyderabad with Excellence"
        subtitle="From management meetings and international congresses to seminars and workshops in Hyderabad — SRS Events ensures impactful event planning and flawless execution."
        buttonText="Book Your Hyderabad Conference Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HydConference;
