import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/desti-ev-abt3.jpg"
import bannerImg from "../../assets/img/events/desti-ev-bg.jpg"
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/desti-ev-abt2.jpg"
import CopEventTwo from "../../assets/img/events/desti-ev-abt1.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg"
import Gal1 from "../../assets/img/events/desti-ev-g1.jpg"
import Gal2 from "../../assets/img/events/desti-ev-g2.jpg"
import Gal3 from "../../assets/img/events/desti-ev-g3.jpg"
import Gal4 from "../../assets/img/events/desti-ev-g4.jpg"

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-heart",
    title: "Vision",
    description:
      "We envision redefining wedding planning and event management in India by delivering world-class weddings, destination events, and memorable celebrations."
  },
  {
    icon: "fas fa-gem",
    title: "Mission",
    description:
      "Our mission is to be the most trusted wedding planners, providing personalized wedding coordination, wardrobe planning, and day-of wedding coordinator services."
  }
];

const eventServices = [
  {
    title: "Complete Wedding Planning",
    desc: "From engagement to reception, we manage everything — venue booking, décor, catering, wardrobe planning, and guest management.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Day-of Wedding Coordinator",
    desc: "Dedicated coordinators ensure your wedding day runs seamlessly — managing vendors, timelines, and on-the-spot troubleshooting.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Destination Weddings & Wardrobe Planning",
    desc: "Expert wedding planners for exotic destinations, luxury venues, and complete wardrobe planning for bride, groom, and family.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Certified & Trusted Wedding Planners",
    description:
      "Recognized for excellence, we specialize in weddings, receptions, destination weddings, and luxury celebrations."
  },
  {
    number: "2",
    title: "Personalized Wedding Coordination",
    description:
      "We offer tailored services including wardrobe planning, theme décor, and detailed day-of wedding coordination."
  },
  {
    number: "3",
    title: "10+ Years of Wedding Experience",
    description:
      "With 1000+ weddings and events managed, our expertise ensures flawless planning and execution."
  },
  {
    number: "4",
    title: "Destination Wedding Experts",
    description:
      "From Goa to Udaipur to international destinations, we plan dream weddings across the globe."
  },
  {
    number: "5",
    title: "Creative & Trendy Décor",
    description:
      "We design innovative wedding themes, floral décor, and luxury stage setups."
  },
  {
    number: "6",
    title: "Complete Guest Management",
    description:
      "Smooth travel, stay, and hospitality arrangements for your guests."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "Affordable wedding planning packages with no hidden charges."
  },
  {
    number: "8",
    title: "Wardrobe & Styling Assistance",
    description:
      "From bridal lehengas to groom styling, our wardrobe planners ensure you shine."
  },
];

const faqData = [
  {
    question: "Do you provide complete wedding planning services?",
    answer:
      "Yes, we handle everything including venue, décor, catering, entertainment, wardrobe planning, and guest management."
  },
  {
    question: "Do you offer day-of wedding coordinator services?",
    answer:
      "Absolutely. Our coordinators manage vendors, schedules, and ensure everything runs smoothly on the big day."
  },
  {
    question: "Can you plan destination weddings?",
    answer:
      "Yes, we specialize in destination weddings in India and abroad, including Goa, Jaipur, Udaipur, and international venues."
  },
  {
    question: "Do you assist with wedding wardrobe planning?",
    answer:
      "Yes, we offer wedding wardrobe planning for brides, grooms, and families with expert stylists."
  },
  {
    question: "How do I find wedding planners near me?",
    answer:
      "Our wedding planning services are available across India. Contact us to connect with expert wedding planners near you."
  }
];

const WeddingPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Planners & Wedding Event Management Company | SRS Weddings</title>
        <meta
          name="description"
          content="SRS Weddings is a leading wedding planning company in India. We provide wedding planners near you, day-of wedding coordinators, wardrobe planning, destination weddings, and complete wedding & event management services."
        />
        <meta
          name="keywords"
          content="wedding planners, wedding planners near me, wedding planning websites, wedding coordinator, day of wedding coordinator, wedding coordinator near me, wedding planning sites, wedding wardrobe planner, destination wedding planners, wedding and event management, Indian wedding planners, luxury wedding planners"
        />
        <link rel="canonical" href="https://srsevent.com/weddingplanners" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Professional Wedding Planners & Event Management"
        description="From traditional weddings to destination celebrations, wardrobe planning, and day-of coordination — SRS Weddings delivers flawless experiences."
        buttonText="Plan Your Wedding"
        buttonLink="#book"
        bottomText="1000+ Successful Weddings & Luxury Events Across India"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Wedding Planners in India
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Weddings</strong>, we provide end-to-end wedding planning services including wedding wardrobe planning, destination weddings, and complete wedding coordination.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a traditional Indian wedding, modern celebration, or luxury destination wedding, our expert planners ensure every detail is perfect.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Weddings</strong> for seamless wedding arrangements, day-of coordination, and memorable event management.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your wedding with us!</h2>
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
          highlight="Wedding Planning Services"
          description="SRS Weddings specializes in luxury weddings, destination planning, wardrobe styling, and seamless event coordination across India."
          extraText="From bridal wardrobe planning to day-of wedding coordination, we ensure a stress-free and memorable wedding celebration."
          buttonText="Plan Your Wedding"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Wedding & Event Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Planning for <span className="text-pink">Luxury Weddings & Destination Celebrations</span></>}
          description="We combine wedding planning with personalized services — from wardrobe styling to event hospitality."
          points={[
            "Complete wedding planning packages",
            "Destination wedding coordination",
            "Wardrobe & styling consultation",
            "Creative décor & entertainment"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Professional Wedding Planning</>}
          description="Hiring professional wedding planners ensures your celebration is stress-free, elegant, and memorable."
          points={[
            "Expert wedding wardrobe planning",
            "Dedicated day-of wedding coordinator",
            "Guest hospitality & logistics",
            "Personalized themes & décor"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Wedding & Event Planning"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Weddings as Your Wedding Planners"
          description="Discover why SRS Weddings is trusted for luxury weddings, wardrobe planning, and destination event management across India."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Wedding Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Plan Your Dream Wedding with Excellence"
        subtitle="From wardrobe planning and décor to destination weddings and day-of coordination — SRS Weddings delivers flawless celebrations."
        buttonText="Book Your Wedding Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default WeddingPlanners;
