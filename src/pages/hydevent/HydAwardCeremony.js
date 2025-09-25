import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import bannerImg from "../../assets/img/events/cere-ev-bg.jpg";
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
import HospOne from "../../assets/img/events/cere-ev-abt2.jpg";
import HospTwo from "../../assets/img/events/cere-ev-abt3.jpg";
import HospThree from "../../assets/img/events/cere-ev-abt1.jpg";
import HospBgCta from "../../assets/img/events/outdoor-ev-abt2.jpeg";
import Gal1 from "../../assets/img/events/cere-ev-g1.jpg";
import Gal2 from "../../assets/img/events/cere-ev-g2.webp";
import Gal3 from "../../assets/img/events/cere-ev-g3.webp";
import Gal4 from "../../assets/img/events/cere-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-trophy",
    title: "Vision",
    description:
      "To be Hyderabad’s most trusted award ceremony and celebration planner, delivering impactful, elegant, and memorable experiences for corporates, weddings, universities, and cultural organizations."
  },
  {
    icon: "fas fa-star",
    title: "Mission",
    description:
      "Our mission is to craft extraordinary ceremonies in Hyderabad — from corporate award nights and gala dinners to wedding receptions, cultural shows, and graduation events — executed with creativity, precision, and class."
  }
];

const eventServices = [
  {
    title: "Corporate & Industry Award Functions",
    desc: "From annual awards to leadership recognition, we plan and execute corporate award ceremonies in Hyderabad with premium stage setups, décor, and AV solutions.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Wedding & Social Ceremonies",
    desc: "Beautiful haldi functions, receptions, and wedding ceremonies in Hyderabad with bespoke décor, lighting, entertainment, and complete event management.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Cultural & Graduation Celebrations",
    desc: "We specialize in planning Hyderabad’s cultural nights, university convocations, and graduation ceremonies with premium arrangements and seamless execution.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Award Ceremony Specialists",
    description:
      "Expertise in corporate recognition events, annual days, and gala nights across Hyderabad’s leading venues."
  },
  {
    number: "2",
    title: "Creative Stage & Elegant Décor",
    description:
      "From LED backdrops to themed décor and luxury lighting, we make every Hyderabad ceremony unforgettable."
  },
  {
    number: "3",
    title: "Full-Service Event Management",
    description:
      "We manage everything — guest invites, stage design, logistics, catering, entertainment, and more."
  },
  {
    number: "4",
    title: "Hyderabad Wedding & Cultural Experts",
    description:
      "Trusted for haldi ceremonies, receptions, cultural programs, and social celebrations with a touch of tradition."
  },
  {
    number: "5",
    title: "Trusted by Corporates & Universities",
    description:
      "We’ve organized award functions and graduation ceremonies for top Hyderabad corporates and institutions."
  },
  {
    number: "6",
    title: "Memorable Guest Experience",
    description:
      "Our focus is guest engagement, smooth flow, and creating elegant, lasting impressions."
  },
];

const faqData = [
  {
    question: "Do you organize corporate award ceremonies in Hyderabad?",
    answer:
      "Yes! We specialize in corporate award nights, annual day celebrations, gala dinners, and leadership recognition functions across Hyderabad."
  },
  {
    question: "Do you handle weddings and social ceremonies in Hyderabad?",
    answer:
      "Absolutely! From haldi ceremonies and receptions to engagement functions, we design and manage every detail beautifully."
  },
  {
    question: "Do you plan cultural and graduation events in Hyderabad?",
    answer:
      "Yes, we regularly organize cultural programs, convocations, and graduation nights for universities and colleges in Hyderabad."
  },
  {
    question: "Do you provide complete event management?",
    answer:
      "Yes, we cover décor, stage design, guest management, logistics, catering, lighting, AV, and entertainment end-to-end."
  },
  {
    question: "Why choose SRS Events Hyderabad for ceremonies?",
    answer:
      "We are trusted in Hyderabad for our creativity, flawless execution, premium setups, and dedication to making events unforgettable."
  },
];

const HydAwardCeremony = () => {
  return (
    <>
      <Helmet>
        <title>Award Ceremony & Celebration Planners in Hyderabad | SRS Events</title>
        <meta
          name="description"
          content="SRS Events Hyderabad specializes in award ceremonies, gala dinners, wedding ceremonies, haldi events, cultural shows, and graduation celebrations with premium setups and flawless execution."
        />
        <meta
          name="keywords"
          content="Award Ceremony Hyderabad, Corporate Award Nights Hyderabad, Gala Dinner Planners Hyderabad, Graduation Ceremony Hyderabad, Wedding Ceremony Hyderabad, Haldi Ceremony Hyderabad, Cultural Event Planners Hyderabad, Award Organizers Hyderabad, SRS Event Management Hyderabad"
        />
        <link rel="canonical" href="https://srsevent.com/award-ceremony-organizers-in-hyderabad" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Award Ceremony & Celebration in Hyderabad"
        description="From corporate award functions and gala dinners to wedding ceremonies, haldi events, and cultural nights — SRS Events Hyderabad creates unforgettable celebrations with elegance and excellence."
        buttonText="Plan Your Ceremony"
        buttonLink="#enquirynow"
        bottomText="Trusted by Corporates, Universities & Families Across Hyderabad"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leaders in </span>
                    Award Ceremony & Event Planning in Hyderabad
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Hyderabad</strong>, we specialize in crafting <em>award ceremonies</em>, <em>wedding celebrations</em>, and <em>cultural events</em>. From creative stage setups to elegant décor, our events reflect class and perfection.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a <strong>corporate recognition event</strong>, a <strong>wedding reception</strong>, or a <strong>graduation night</strong>, we bring your celebrations to life with seamless execution and creative flair.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Hyderabad</strong> for your next <em>award night, wedding function, or cultural ceremony</em> — and make it truly extraordinary.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan Your Ceremony in Hyderabad!</h2>
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
          highlight="Award & Ceremony Planning in Hyderabad"
          description="We manage wedding ceremonies, haldi events, receptions, corporate award nights, cultural programs, and graduation celebrations with premium setups and flawless planning."
          extraText="From intimate social ceremonies to large-scale corporate functions — SRS Events Hyderabad ensures perfection in every detail."
          buttonText="Plan Your Event"
          image={HospThree}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Ceremony Services in Hyderabad"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">Premium</span> Ceremony Planning in Hyderabad</>}
          description="From corporate award shows to elegant wedding receptions, our event planners in Hyderabad deliver creative, stress-free, and impactful celebrations."
          points={[
            "Corporate award functions & gala dinners",
            "Wedding & haldi ceremonies",
            "Cultural & graduation events",
            "Celebrity award shows & receptions"
          ]}
          image={HospOne}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing SRS Hyderabad</>}
          description="We ensure every Hyderabad ceremony is stress-free, premium, and memorable."
          points={[
            "Luxury stage & décor design",
            "Seamless event execution",
            "Custom-designed Hyderabad packages",
            "Guest-focused experiences"
          ]}
          image={HospTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Ceremony Planning in Hyderabad"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events Hyderabad for Ceremonies"
          description="Trusted across Hyderabad for award functions, weddings, and cultural celebrations with world-class setups and flawless management."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Hyderabad Ceremony Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={HospBgCta}
        title="Plan Your Hyderabad Ceremony with Excellence"
        subtitle="From corporate awards and gala dinners to weddings and cultural nights — SRS Events Hyderabad brings your celebrations to life."
        buttonText="Book Your Ceremony Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HydAwardCeremony;
