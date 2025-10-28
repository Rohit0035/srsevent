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
      "To be India’s leading award ceremony and celebration event planner, creating prestigious, elegant, and unforgettable experiences for corporates, weddings, cultural events, and social gatherings."
  },
  {
    icon: "fas fa-star",
    title: "Mission",
    description:
      "Our mission is to design and execute extraordinary ceremonies — from award functions, wedding ceremonies, and gala dinners to graduation nights and cultural events — with excellence, creativity, and flawless planning."
  }
];

const eventServices = [
  {
    title: "Corporate Award Ceremonies",
    desc: "We design and manage corporate award nights, employee recognition events, annual day celebrations, and gala dinners with grand stage setups and premium decor.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Wedding & Haldi Ceremonies",
    desc: "Beautifully curated wedding ceremonies, haldi functions, and receptions with customized decor, stage designs, lighting, and seamless guest management.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Cultural & Graduation Events",
    desc: "From graduation ceremonies to cultural nights and felicitation events, we ensure premium event execution with memorable experiences for every guest.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expertise in Award Ceremonies",
    description:
      "Decades of experience in planning corporate award shows, celebrity nights, and cultural ceremonies with flawless execution."
  },
  {
    number: "2",
    title: "Creative Stage & Decor",
    description:
      "Stunning stage setups, themed decor, elegant lighting, and premium AV solutions to elevate your event."
  },
  {
    number: "3",
    title: "End-to-End Management",
    description:
      "From guest invitations and stage design to catering and entertainment — we handle everything seamlessly."
  },
  {
    number: "4",
    title: "Wedding & Cultural Specialists",
    description:
      "Expertise in planning haldi ceremonies, wedding receptions, sangeet nights, and traditional cultural events."
  },
  {
    number: "5",
    title: "Trusted by Top Corporates",
    description:
      "We have organized award shows and ceremonies for leading brands, universities, and organizations."
  },
  {
    number: "6",
    title: "Memorable Guest Experience",
    description:
      "Focused on guest engagement, comfort, and delivering unforgettable moments for every occasion."
  },
];

const faqData = [
  {
    question: "Do you organize corporate award ceremonies?",
    answer:
      "Yes! We specialize in organizing corporate award shows, annual day celebrations, employee recognition programs, and gala dinners."
  },
  {
    question: "Can you manage wedding and haldi ceremonies?",
    answer:
      "Absolutely! From wedding ceremony stage setups to haldi decor, sangeet nights, and receptions — we plan and manage every detail beautifully."
  },
  {
    question: "Do you provide cultural and graduation event planning?",
    answer:
      "Yes, we organize graduation ceremonies, cultural events, and felicitation nights with premium decor, stage design, and seamless execution."
  },
  {
    question: "Do you offer complete event management?",
    answer:
      "Yes, we handle everything — decor, stage design, guest management, catering, lighting, audio-visuals, and entertainment."
  },
  {
    question: "Why choose SRS Events for ceremonies?",
    answer:
      "We are trusted for our creativity, attention to detail, elegant designs, and ability to deliver extraordinary award ceremonies and celebrations."
  },
];

const AwardCeremony = () => {
  return (
    <>
      <Helmet>
        <title>Award Ceremony Organisers in Bangalore | SRS Event</title>
        <meta
          name="description"
          content="Celebrate success with SRS Event — Bangalore’s trusted award ceremony organisers for corporates, schools & institutions. Make your event unforgettable!"
        />
        <meta
          name="keywords"
          content="Award Ceremony, Wedding Ceremony, Wedding Reception Decor, Wedding Haldi Ceremony, Ceremony Events, Corporate Award Nights, Annual Day Events, Graduation Ceremony, Gala Dinner, Cultural Events, Felicitation Ceremony, Celebrity Award Shows, SRS Event Management"
        />
        <link rel="canonical" href="https://www.srsevent.com/award-ceremony-organisers-bangalore" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Award Ceremony & Celebration "
        description="From wedding ceremonies and haldi functions to grand award shows and gala dinners — SRS Events creates unforgettable experiences with elegance and excellence."
        buttonText="Plan Your Ceremony"
        buttonLink="#enquirynow"
        bottomText="Trusted by Corporates, Celebrities & Families Across India"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leaders in </span>
                    Award Ceremony & Wedding Event Management
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we craft extraordinary <em>award ceremonies</em>, <em>wedding celebrations</em>, and <em>corporate recognition events</em>. Our expertise in premium decor, stage design, and guest experience ensures that every event stands out with elegance.
                  </p>
                  <p className='mt-3'>
                    Be it a <strong>wedding haldi ceremony</strong>, <strong>corporate award function</strong>, or <strong>graduation ceremony</strong>, we provide seamless planning, luxury execution, and unforgettable memories.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for your next <em>award night, wedding function, or cultural celebration</em> — and let us make it extraordinary.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan Your Ceremony with Us!</h2>
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
          highlight="Award & Ceremony Management"
          description="We specialize in organizing wedding ceremonies, haldi functions, receptions, corporate award nights, cultural events, and gala dinners."
          extraText="From elegant weddings to grand award shows — SRS Events ensures perfection in every detail."
          buttonText="Plan Your Event"
          image={HospThree}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Ceremony & Event Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">Premium</span> Ceremony Planning</>}
          description="We provide award-winning event planning for weddings, receptions, corporate awards, and cultural ceremonies."
          points={[
            "Corporate award functions & gala dinners",
            "Wedding ceremonies & haldi functions",
            "Cultural & graduation ceremonies",
            "Celebrity award shows & receptions"
          ]}
          image={HospOne}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing Us</>}
          description="We guarantee stress-free, premium, and creative event experiences for your award ceremonies and wedding functions."
          points={[
            "Elegant stage & decor",
            "Stress-free event execution",
            "Custom-designed ceremony packages",
            "Unforgettable guest experiences"
          ]}
          image={HospTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Award & Ceremony Events"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Award Ceremonies"
          description="Trusted by corporates, universities, and families across India for organizing award functions, weddings, and cultural celebrations."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Award & Wedding Event Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={HospBgCta}
        title="Plan Your Ceremony with Elegance & Excellence"
        subtitle="From wedding ceremonies and haldi functions to award shows and gala dinners — SRS Events brings your celebrations to life."
        buttonText="Book Your Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default AwardCeremony;
