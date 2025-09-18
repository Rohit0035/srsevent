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
    icon: "fas fa-heart",
    title: "Vision",
    description:
      "We envision redefining destination wedding planning in India and abroad by delivering world-class weddings, luxury wedding resorts, palace weddings, and unforgettable celebrations."
  },
  {
    icon: "fas fa-gem",
    title: "Mission",
    description:
      "Our mission is to be the most trusted destination wedding planners, offering personalized packages, international destination weddings, wardrobe planning, and day-of coordination services."
  }
];

const eventServices = [
  {
    title: "Complete Destination Wedding Packages",
    desc: "From sangeet resorts to palace weddings, we manage every detail — destination wedding venues, décor, catering, wardrobe planning, guest management, and entertainment.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Day-of Destination Wedding Coordinator",
    desc: "Dedicated coordinators ensure your destination wedding runs seamlessly — managing vendors, timelines, and on-the-spot troubleshooting, whether in India or abroad.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Luxury Wedding Resorts & Venues",
    desc: "Expert planning for venus wedding resorts, Udaivilas weddings, luxury beach weddings, and international destination weddings with complete wardrobe planning.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Certified & Trusted Destination Wedding Planners",
    description:
      "Recognized for excellence, we specialize in destination wedding locations, luxury resorts, palace weddings, and international celebrations."
  },
  {
    number: "2",
    title: "Personalized Destination Wedding Packages",
    description:
      "We offer tailored services including wardrobe planning, theme décor, and detailed day-of coordination for every destination."
  },
  {
    number: "3",
    title: "10+ Years of Destination Wedding Experience",
    description:
      "With 1000+ weddings and events managed, including best destination weddings in India and abroad, our expertise ensures perfection."
  },
  {
    number: "4",
    title: "Luxury Venues & Resorts",
    description:
      "From Udaivilas wedding cost planning to luxury beach weddings in Goa and palace weddings in Jaipur, we make dreams come true."
  },
  {
    number: "5",
    title: "Creative & Trendy Décor",
    description:
      "We design innovative wedding themes, floral décor, and luxury stage setups for unforgettable memories."
  },
  {
    number: "6",
    title: "Complete Guest Management",
    description:
      "Seamless travel, stay, and hospitality at wedding resorts and international destinations."
  },
  {
    number: "7",
    title: "Transparent Destination Wedding Cost",
    description:
      "Affordable destination wedding packages in India & abroad with no hidden charges."
  },
  {
    number: "8",
    title: "Wardrobe & Styling Assistance",
    description:
      "From bridal lehengas to groom styling, our wardrobe planners ensure you shine at every destination celebration."
  },
];

const faqData = [
  {
    question: "What is the average destination wedding cost in India?",
    answer:
      "Destination wedding cost depends on the location, venues, and guest count. Udaivilas wedding cost for 3 days, for example, varies from 1.5 to 2 crores, while beach weddings in Goa or palace weddings in Jaipur can be customized to your budget."
  },
  {
    question: "Do you provide international destination wedding packages?",
    answer:
      "Yes, we specialize in international destination weddings including Bali, Thailand, Dubai, and Europe with customized packages."
  },
  {
    question: "Can you book wedding resorts and luxury venues?",
    answer:
      "Absolutely. We manage bookings for venus wedding resorts, luxury beach resorts, palace venues, and premium properties like Udaivilas."
  },
  {
    question: "Do you assist with wardrobe planning for destination weddings?",
    answer:
      "Yes, our team offers wardrobe and styling assistance for brides, grooms, and families as part of our destination wedding packages."
  },
  {
    question: "How do I find the best destination wedding planner in India?",
    answer:
      "SRS Weddings is among the best destination wedding planners in India, with 10+ years of experience in luxury, palace, and international wedding planning."
  }
];

const DestinationWedding = () => {
  return (
    <>
      <Helmet>
        <title>Destination Wedding Planners & Luxury Wedding Packages | SRS Weddings</title>
        <meta
          name="description"
          content="SRS Weddings offers complete destination wedding planning in India & abroad. Explore destination wedding locations, venues, luxury resorts, palace weddings, beach weddings, Udaivilas wedding cost, and personalized packages."
        />
        <meta
          name="keywords"
          content="destination wedding, destination wedding locations, destination wedding packages, destination wedding planner, best destination weddings, destination wedding cost, destination wedding venues, wedding resorts, luxury wedding resorts, venus wedding resort, udaivilas wedding cost for 3 days, udaivilas wedding cost, sangeet resort, palace wedding, luxury beach wedding, destination wedding India, international destination weddings"
        />
        <link rel="canonical" href="https://srsevent.com/destination-wedding-planner-bangalore" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Plan Your Luxury Destination Wedding With Us"
        description="From Udaivilas palace weddings to luxury beach weddings in Goa and international destination weddings, SRS Weddings delivers seamless celebrations with customized packages."
        buttonText="Get Wedding Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful Destination Weddings in India & Abroad"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Premium </span>
                    Destination Wedding Planners
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Weddings</strong>, we specialize in <em>destination wedding locations</em>, luxury wedding resorts, and palace weddings. From sangeet resorts to beach weddings, we craft unforgettable experiences.
                  </p>
                  <p className='mt-3'>
                    Whether you’re looking for <strong>Udaivilas wedding cost for 3 days</strong>, a luxury beach wedding in Goa, or an international destination wedding in Bali, our planners handle everything.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Weddings</strong> for stress-free planning, transparent destination wedding costs, and personalized packages across India and abroad.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan Your Destination Wedding!</h2>
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
          highlight="Destination Wedding Services"
          description="SRS Weddings offers end-to-end planning for destination weddings in India & abroad. From luxury palace weddings to international venues, we provide wardrobe styling, décor, and seamless coordination."
          extraText="Our destination wedding packages include Udaivilas weddings, luxury beach weddings, and premium wedding resorts."
          buttonText="Explore Wedding Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Destination Wedding Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Luxury Weddings & International Destinations</span></>}
          description="We combine destination wedding planning with personalized services — from wardrobe styling to guest hospitality and venue selection."
          points={[
            "Complete destination wedding packages",
            "Luxury wedding resorts & palace venues",
            "Wardrobe & styling consultation",
            "Creative décor, themes & entertainment"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Destination Wedding Experts</>}
          description="Professional destination wedding planners ensure your celebration is stress-free, elegant, and unforgettable."
          points={[
            "Expert wardrobe planning for destination weddings",
            "Dedicated coordinators at venues & resorts",
            "Guest hospitality & luxury travel arrangements",
            "Personalized décor at wedding resorts & palaces"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Destination Wedding Planning"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Weddings for Destination Weddings"
          description="Discover why SRS Weddings is trusted for destination weddings in India and abroad, with packages covering palace weddings, beach venues, and international celebrations."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Destination Wedding Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Luxury Destination Wedding Planner"
        subtitle="From Udaivilas weddings to international beach resorts — SRS Weddings offers packages tailored to your dream celebration."
        buttonText="Book Destination Wedding Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default DestinationWedding;