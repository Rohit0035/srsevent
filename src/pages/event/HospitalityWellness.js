import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import bannerImg from "../../assets/img/events/hospi-bg.jpg";
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

// images (replace with hospitality/wellness related if you have)
import HospOne from "../../assets/img/events/hospi-ev-abt2.jpg";
import HospTwo from "../../assets/img/events/hospi-ev-abt3.jpg";
import HospThree from "../../assets/img/events/hospi-ev-abt1.jpeg";
import HospBgCta from "../../assets/img/events/hospi-bg.jpg";
import Gal1 from "../../assets/img/events/hospi-ev-g1.jpg";
import Gal2 from "../../assets/img/events/hospi-ev-g2.jpg";
import Gal3 from "../../assets/img/events/hospi-ev-g3.jpg";
import Gal4 from "../../assets/img/events/hospi-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "To be the leading hospitality and wellness event management company, delivering unforgettable experiences through wellness retreats, corporate wellness programs, and premium hospitality services."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to blend hospitality excellence with wellness-focused event management, ensuring relaxation, rejuvenation, and flawless service for both personal and corporate events."
  }
];

const eventServices = [
  {
    title: "Wellness Retreats & Camps",
    desc: "We design and manage yoga retreats, meditation camps, spa getaways, and holistic healing experiences tailored to rejuvenate mind and body.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Corporate Wellness Programs",
    desc: "Specialized corporate wellness events including stress management workshops, fitness programs, and motivational seminars to boost employee wellbeing.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Hospitality Event Planning",
    desc: "End-to-end hospitality management for wellness expos, hotel launches, spa events, and luxury hospitality gatherings with premium guest experience.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expertise in Wellness & Hospitality",
    description:
      "Proven experience in managing health and wellness events, corporate wellness programs, and luxury hospitality services."
  },
  {
    number: "2",
    title: "Seamless Guest Experience",
    description:
      "We ensure flawless hospitality, personalized wellness experiences, and stress-free event execution."
  },
  {
    number: "3",
    title: "Tailored Wellness Programs",
    description:
      "Custom-designed wellness events including yoga, meditation, nutrition, and fitness workshops."
  },
  {
    number: "4",
    title: "Trusted by Corporates & Resorts",
    description:
      "Partnered with leading hotels, resorts, and corporates for exclusive hospitality and wellness events."
  },
  {
    number: "5",
    title: "End-to-End Event Management",
    description:
      "From wellness retreats to corporate hospitality expos, we handle everything from logistics to guest care."
  },
  {
    number: "6",
    title: "Focus on Health & Wellbeing",
    description:
      "We integrate hospitality excellence with wellness planning to deliver memorable experiences."
  },
];

const faqData = [
  {
    question: "Do you organize corporate wellness programs?",
    answer:
      "Yes, we specialize in corporate wellness events including stress management workshops, fitness sessions, nutrition seminars, and wellness retreats for employees."
  },
  {
    question: "Can you manage hospitality for luxury wellness retreats?",
    answer:
      "Absolutely! We provide complete hospitality services for yoga retreats, spa events, meditation camps, and luxury wellness experiences."
  },
  {
    question: "Do you offer personalized wellness event packages?",
    answer:
      "Yes, we customize every wellness and hospitality event according to client needs, including theme, location, food, and guest experience."
  },
  {
    question: "Are your services available for both personal and corporate clients?",
    answer:
      "Yes, we handle wellness and hospitality events for both private clients (birthdays, anniversaries, retreats) and corporates (employee wellness, conferences, wellness expos)."
  },
  {
    question: "What makes your hospitality management unique?",
    answer:
      "We combine event management expertise with hospitality excellence, ensuring stress-free guest experiences, wellness-focused activities, and flawless execution."
  },
];

const HospitalityWellness = () => {
  return (
    <>
      <Helmet>
        <title>Hospitality and Wellness Event Management | Wellness Retreats & Corporate Wellness Programs</title>
        <meta
          name="description"
          content="SRS Events offers expert hospitality and wellness event management, including wellness retreats, corporate wellness programs, spa & yoga events, hospitality expos, and luxury guest experiences."
        />
        <meta
          name="keywords"
          content="hospitality and event management, hospitality in event management, event management and hospitality, wellness event planners, corporate wellness events, yoga retreats, spa event organizers, wellness hospitality management, wellness retreats India, health and wellness event organizers"
        />
        <link rel="canonical" href="https://srsevent.com/hospitalitywellness" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Hospitality & Wellness Event Management"
        description="From yoga retreats and wellness seminars to corporate wellness programs and luxury hospitality services — we deliver flawless planning, execution, and guest experiences."
        buttonText="Plan Your Wellness Event"
        buttonLink="#enquirynow"
        bottomText="Trusted by Corporates, Resorts & Wellness Brands Worldwide"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leaders in </span>
                    Hospitality and Wellness Event Management
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we specialize in blending <em>hospitality excellence</em> with <em>wellness-focused event management</em>. From yoga retreats and meditation camps to corporate wellness workshops, we deliver world-class experiences.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a luxury spa event, wellness expo, or a corporate health program, we ensure flawless planning, guest comfort, and wellness-driven activities.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for hospitality management, wellness retreats, and corporate wellness events that create lasting impact.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan Your Wellness Event with Us!</h2>
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
          highlight="Hospitality & Wellness Management"
          description="We offer complete event management for wellness retreats, spa events, hospitality expos, yoga and meditation workshops, and corporate wellness programs."
          extraText="From luxury resorts to corporate venues, SRS Events ensures seamless hospitality and wellness event execution."
          buttonText="Plan Your Wellness Event"
          image={HospThree}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Hospitality & Wellness Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">Wellness</span> & Hospitality Solutions</>}
          description="We combine wellness activities with premium hospitality services for an unforgettable guest experience."
          points={[
            "Wellness retreats & holistic camps",
            "Corporate hospitality & wellness programs",
            "Yoga, meditation & fitness events",
            "Luxury hospitality event planning"
          ]}
          image={HospOne}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing Us</>}
          description="SRS Events ensures wellness-focused, guest-friendly, and hospitality-driven event experiences."
          points={[
            "Stress-free event planning",
            "Customized wellness programs",
            "Premium hospitality management",
            "Holistic guest satisfaction"
          ]}
          image={HospTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Hospitality & Wellness Events"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Hospitality & Wellness"
          description="Trusted by leading corporates, hotels, and wellness brands for wellness retreats, spa events, and corporate wellness programs."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Hospitality & Wellness Event Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={HospBgCta}
        title="Plan Your Wellness & Hospitality Event with Excellence"
        subtitle="From yoga retreats and spa events to corporate wellness programs — SRS Events ensures world-class hospitality and wellness event management."
        buttonText="Book Your Wellness Event"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HospitalityWellness;
