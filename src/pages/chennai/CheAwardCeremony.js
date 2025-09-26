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
      "To be Chennai’s leading award ceremony and celebration event planner, delivering prestigious, elegant, and unforgettable experiences for corporates, universities, and cultural organizations."
  },
  {
    icon: "fas fa-star",
    title: "Mission",
    description:
      "Our mission is to design and execute extraordinary ceremonies — from corporate award nights and recognition events to cultural celebrations and graduation ceremonies — with creativity and flawless execution."
  }
];

const eventServices = [
  {
    title: "Corporate Award Ceremonies",
    desc: "We organize corporate award nights, employee recognition events, annual day celebrations, and gala dinners with premium stage setups, lighting, and décor in Chennai.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Cultural & Graduation Events",
    desc: "From graduation ceremonies to cultural nights, felicitation events, and college award functions, we deliver memorable and engaging experiences in Chennai.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Gala Dinners & Celebrity Nights",
    desc: "We specialize in planning grand gala dinners, music award shows, and celebrity award functions with creativity, precision, and world-class production.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Award Show Expertise in Chennai",
    description:
      "Specialized in organizing prestigious corporate award shows, gala dinners, and cultural celebrations across Chennai."
  },
  {
    number: "2",
    title: "Creative Stage & Production",
    description:
      "We design stunning stages, themed décor, advanced lighting, and immersive AV setups to elevate every ceremony."
  },
  {
    number: "3",
    title: "Complete Event Management",
    description:
      "From concept, invites, and stage design to catering, entertainment, and guest management — we handle it all."
  },
  {
    number: "4",
    title: "Trusted by Corporates & Universities",
    description:
      "We’ve managed award ceremonies for top IT firms, colleges, and cultural associations in Chennai."
  },
  {
    number: "5",
    title: "Guest-Centric Experience",
    description:
      "Every ceremony is designed to impress — ensuring comfort, engagement, and unforgettable experiences for your guests."
  },
  {
    number: "6",
    title: "Local & International Reach",
    description:
      "Whether in Chennai or across India, our ceremony planning expertise ensures world-class execution."
  },
];

const faqData = [
  {
    question: "Do you organize corporate award ceremonies in Chennai?",
    answer:
      "Yes! We specialize in organizing corporate award nights, employee recognition programs, annual day celebrations, and gala dinners in Chennai."
  },
  {
    question: "Can you handle cultural and graduation events?",
    answer:
      "Absolutely! We organize cultural nights, college award shows, and graduation ceremonies with premium setups and seamless execution."
  },
  {
    question: "Do you plan gala dinners and celebrity nights?",
    answer:
      "Yes, we design and execute high-profile gala dinners, celebrity award functions, and entertainment-driven events in Chennai."
  },
  {
    question: "Do you provide complete event management?",
    answer:
      "Yes, from décor and stage production to catering, guest hospitality, and entertainment — we provide end-to-end ceremony management."
  },
  {
    question: "Why choose SRS Events for ceremonies in Chennai?",
    answer:
      "We bring creative stage designs, flawless planning, and experience working with corporates, universities, and cultural associations in Chennai."
  },
];

const CheAwardCeremony = () => {
  return (
    <>
      <Helmet>
        <title>Award Ceremony & Celebration Event Planners in Chennai - SRS Events</title>
        <meta
          name="description"
          content="SRS Events specializes in corporate award shows, cultural ceremonies, graduation events, and gala dinners in Chennai. We deliver elegant, creative, and world-class event experiences."
        />
        <meta
          name="keywords"
          content="award ceremony Chennai, corporate awards Chennai, gala dinners Chennai, graduation event planners Chennai, cultural ceremony organizers Chennai, celebrity award shows Chennai"
        />
        <link rel="canonical" href="https://srsevent.com/award-ceremony-organizers-in-chennai" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Award Ceremony & Celebration Planners in Chennai"
        description="From corporate award functions and gala dinners to cultural events and graduation ceremonies — SRS Events delivers unforgettable experiences with elegance and precision."
        buttonText="Plan Your Ceremony"
        buttonLink="#enquirynow"
        bottomText="Trusted by Corporates, Universities & Cultural Organizations in Chennai"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leaders in </span>
                    Award Ceremony & Celebration Management in Chennai
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Chennai</strong>, we design and deliver extraordinary <em>award ceremonies</em>, <em>cultural celebrations</em>, and <em>graduation events</em>. Our expertise in stage production, décor, and guest experience ensures every event is prestigious and memorable.
                  </p>
                  <p className='mt-3'>
                    Be it a <strong>corporate recognition night</strong>, <strong>cultural award show</strong>, or <strong>grand gala dinner</strong>, our team ensures flawless execution and impactful experiences in Chennai.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Chennai</strong> for your next <em>award ceremony or celebration</em> — and let us make it extraordinary.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan Your Ceremony in Chennai with Us!</h2>
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
          highlight="Award & Ceremony Management in Chennai"
          description="We specialize in corporate award nights, cultural ceremonies, graduation functions, and gala dinners across Chennai."
          extraText="From stage design and décor to guest hospitality and entertainment — SRS Events ensures perfection in every detail."
          buttonText="Plan Your Ceremony"
          image={HospThree}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Ceremony & Celebration Services in Chennai"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">Premium</span> Ceremony Planning in Chennai</>}
          description="We provide award-winning event planning for corporate awards, cultural ceremonies, gala dinners, and graduation events."
          points={[
            "Corporate award nights & recognition programs",
            "Cultural & graduation ceremonies",
            "Gala dinners & celebrity award shows",
            "Stage design, décor & AV production"
          ]}
          image={HospOne}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing SRS Events in Chennai</>}
          description="We ensure premium, stress-free, and creative event experiences for your award ceremonies and celebrations in Chennai."
          points={[
            "Elegant stage & décor designs",
            "End-to-end ceremony management",
            "Customized event packages",
            "Unforgettable guest experiences"
          ]}
          image={HospTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Award & Celebration Events in Chennai"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Award Ceremonies in Chennai"
          description="Trusted by corporates, universities, and cultural organizations in Chennai for managing award shows, celebrations, and gala dinners."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Ceremony & Event Gallery in Chennai"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions in Chennai" faqs={faqData} />

      <CTABanner
        backgroundImage={HospBgCta}
        title="Plan Your Ceremony in Chennai with Elegance & Excellence"
        subtitle="From corporate award functions and gala dinners to cultural events and graduation ceremonies — SRS Events brings your celebrations to life in Chennai."
        buttonText="Book Your Chennai Ceremony"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default CheAwardCeremony;
