import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import bannerImg from "../../assets/img/events/outdor-ev-bg.png";
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

// images
import CopEventOne from "../../assets/img/events/outdoor-ev-abt2.jpeg";
import CopEventTwo from "../../assets/img/events/outdor-ev-abt3.jpg";
import CopEventthree from "../../assets/img/events/outdor-ev-ab1.jpg";
import CopEvBgCta from "../../assets/img/events/outdoor-ev-abt2.jpeg";
import Gal1 from "../../assets/img/events/outdor-ev-g1.jpeg";
import Gal2 from "../../assets/img/events/outdor-ev-g2.jpeg";
import Gal3 from "../../assets/img/events/outdor-ev-g3.jpeg";
import Gal4 from "../../assets/img/events/outdor-ev-g4.png";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "To be India’s most trusted partner in organizing large-scale corporate outdoor events, expos, auto shows, renewable energy fairs, and international trade exhibitions."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to deliver world-class corporate outdoor events with flawless execution — from Pragati Maidan exhibitions to Expo 2025, Auto Expos, trade fairs, and global summits."
  }
];

const eventServices = [
  {
    title: "Trade Fairs & Expos",
    desc: "Expert management of trade fairs, gift expos, renewable energy expos, IIJS exhibitions, and international expos across major venues like Pragati Maidan.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Auto & Industry Expos",
    desc: "Specialized planning for Auto Expo, construction equipment expos, CMPL Expo, and product-specific exhibitions with custom-designed booths and crowd management.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Exhibition Stand & Booth Design",
    desc: "Creative exhibition stand builders delivering impactful designs for corporate expos, trade fairs, and brand showcases to maximize visibility and engagement.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expertise in Global Expos",
    description:
      "Proven experience in managing international trade fairs like Auto Expo, Renewable Energy Expo, and Expo 2025."
  },
  {
    number: "2",
    title: "Seamless Venue Management",
    description:
      "Specialized in large venues like Pragati Maidan, ensuring smooth logistics, stall setups, and visitor experience."
  },
  {
    number: "3",
    title: "Creative Stand Builders",
    description:
      "Innovative exhibition stand builders for impactful trade show booths and outdoor branding."
  },
  {
    number: "4",
    title: "Corporate Outdoor Event Experts",
    description:
      "Handling everything from outdoor product launches to international expos with precision."
  },
  {
    number: "5",
    title: "Crowd & Safety Management",
    description:
      "Trusted for handling high-footfall events like Auto Expo and IIJS exhibitions."
  },
  {
    number: "6",
    title: "Trusted by 500+ Companies",
    description:
      "Global brands rely on us for trade exhibitions, expos, and corporate outdoor events."
  },
];

const faqData = [
  {
    question: "Do you manage trade shows and expos?",
    answer:
      "Yes, we specialize in organizing trade fairs, Pragati Maidan exhibitions, Auto Expo, renewable energy expos, IIJS exhibitions, and Expo 2025 events."
  },
  {
    question: "Can you design custom exhibition stands?",
    answer:
      "Absolutely! Our professional exhibition stand builders deliver creative and impactful booths for all types of expos and corporate events."
  },
  {
    question: "Do you provide services for outdoor product launches?",
    answer:
      "Yes, we handle outdoor corporate product launches, auto expos, and large trade fairs with complete event management solutions."
  },
  {
    question: "Are your services limited to India?",
    answer:
      "No, we also manage international expos and trade fairs, partnering with global event organizers."
  },
  {
    question: "Can you handle large venues like Pragati Maidan?",
    answer:
      "Yes, we have expertise in managing large-scale exhibitions at Pragati Maidan, Mumbai Exhibition Centre, and other global venues."
  },
];

const CorporateOutdoor = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Outdoor Event Management | Trade Shows, Expos & Exhibitions</title>
        <meta
          name="description"
          content="SRS Events specializes in corporate outdoor events, trade shows, expos, Auto Expo, renewable energy fairs, IIJS exhibitions, Pragati Maidan events, and Expo 2025. Trusted exhibition stand builders and event managers."
        />
        <meta
          name="keywords"
          content="corporate outdoor events, canton trade show, auto expo, trade fairs, expo 2025, Pragati Maidan exhibition today, CMPL Expo, gift expo, renewable energy expo, construction equipment expo, IIJS exhibition, exhibition stand builders, expos near me, trade exhibition management, corporate event organisers"
        />
        <link rel="canonical" href="https://srsevent.com/corporateoutdoor" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Corporate Outdoor Events, Trade Shows & Expos"
        description="From Auto Expo and Renewable Energy Expo to Pragati Maidan trade shows and Expo 2025 — we deliver flawless outdoor corporate event management, exhibition stand building, and world-class expo experiences."
        buttonText="Plan Your Expo"
        buttonLink="#enquirynow"
        bottomText="500+ Corporate Outdoor Events & Trade Fairs Delivered"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leaders in </span>
                    Corporate Outdoor Event Management
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we manage high-profile trade exhibitions, auto expos, renewable energy fairs, IIJS exhibitions, and global expos like Expo 2025.
                  </p>
                  <p className='mt-3'>
                    From Pragati Maidan exhibitions to outdoor corporate product launches, we ensure impactful branding, stall design, and flawless visitor experiences.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for professional trade show management, corporate outdoor events, and international expo execution.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan Your Outdoor Event with Us!</h2>
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
          highlight="Corporate Outdoor Event Planning"
          description="We deliver end-to-end management for corporate outdoor events, trade shows, Auto Expo, renewable energy expos, gift expos, IIJS exhibitions, and international fairs."
          extraText="From venue booking at Pragati Maidan to stand building and product showcasing, SRS Events is your trusted partner for corporate outdoor events."
          buttonText="Plan Your Outdoor Event"
          image={CopEventthree}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Corporate Outdoor Event Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">MICE</span> Solutions for Expos & Trade Shows</>}
          description="Our expertise combines MICE event planning with large-scale outdoor corporate expos, ensuring seamless experiences."
          points={[
            "Trade fair & exhibition logistics",
            "Corporate outdoor incentives & branding",
            "Conference setups & launch events",
            "Expo booth & exhibition stand design"
          ]}
          image={CopEventOne}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing Us</>}
          description="SRS Events ensures unmatched reliability and creativity in managing corporate outdoor events and expos."
          points={[
            "Professional trade fair & expo planning",
            "Custom exhibition stand building",
            "Seamless visitor & crowd management",
            "Stress-free execution for your brand"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Corporate Outdoor Events"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Outdoor Corporate Events"
          description="Discover why global brands choose us for Auto Expo, Pragati Maidan trade fairs, Renewable Energy Expo, and Expo 2025."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Corporate Outdoor Event Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Plan Your Corporate Outdoor Event with Excellence"
        subtitle="From Auto Expo and Renewable Energy Expo to trade fairs at Pragati Maidan — SRS Events ensures world-class corporate outdoor event management."
        buttonText="Book Your Outdoor Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default CorporateOutdoor;
