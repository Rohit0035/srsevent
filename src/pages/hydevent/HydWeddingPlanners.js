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
      "To be the most trusted wedding planners in Hyderabad, delivering luxury, tradition, and unforgettable memories for every couple."
  },
  {
    icon: "fas fa-gem",
    title: "Mission",
    description:
      "Our mission is to provide complete wedding planning in Hyderabad — from venue booking and décor to wardrobe styling and day-of coordination — ensuring a stress-free experience."
  }
];

const eventServices = [
  {
    title: "Complete Wedding Planning in Hyderabad",
    desc: "We handle everything — from venue booking at Hyderabad’s top luxury hotels and palaces to décor, catering, wardrobe styling, and guest hospitality.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Day-of Wedding Coordination",
    desc: "Our coordinators ensure your Hyderabad wedding runs seamlessly — managing vendors, timelines, and last-minute details.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Destination Weddings & Wardrobe Planning",
    desc: "We plan dreamy destination weddings from Hyderabad to Goa, Udaipur, and international venues — with personalized wardrobe planning for bride, groom, and family.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Trusted Wedding Planners in Hyderabad",
    description:
      "Recognized for excellence, we specialize in luxury weddings, receptions, and destination weddings in Hyderabad and beyond."
  },
  {
    number: "2",
    title: "Personalized Wedding Themes",
    description:
      "From traditional Hyderabadi weddings to modern celebrations, we design décor, themes, and wardrobe styling that reflect your story."
  },
  {
    number: "3",
    title: "10+ Years of Experience",
    description:
      "With 1000+ weddings managed, including high-profile Hyderabad events, our expertise guarantees flawless execution."
  },
  {
    number: "4",
    title: "Destination Wedding Experts",
    description:
      "From Hyderabad to Goa, Jaipur, Udaipur, or international luxury destinations, we plan dream weddings globally."
  },
  {
    number: "5",
    title: "Creative Décor & Styling",
    description:
      "Luxury floral décor, stage setups, and wardrobe planning for brides and grooms in Hyderabad."
  },
  {
    number: "6",
    title: "Guest Hospitality",
    description:
      "Smooth travel, accommodation, and personalized hospitality for your wedding guests in Hyderabad."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "Clear wedding planning packages in Hyderabad with no hidden charges."
  },
  {
    number: "8",
    title: "Wardrobe & Styling Experts",
    description:
      "Our wardrobe planners curate bridal lehengas, groom sherwanis, and family styling to perfection."
  },
];

const faqData = [
  {
    question: "Do you provide complete wedding planning services in Hyderabad?",
    answer:
      "Yes, we offer end-to-end wedding planning in Hyderabad, including venue, décor, catering, wardrobe, entertainment, and guest management."
  },
  {
    question: "Can you manage luxury weddings in Hyderabad?",
    answer:
      "Absolutely. From Falaknuma Palace to top 5-star hotels, we organize luxury weddings at Hyderabad’s most prestigious venues."
  },
  {
    question: "Do you organize destination weddings?",
    answer:
      "Yes, from Hyderabad we plan weddings across Goa, Udaipur, Jaipur, and international destinations."
  },
  {
    question: "Do you provide wardrobe planning for weddings in Hyderabad?",
    answer:
      "Yes, our stylists offer wardrobe planning for the bride, groom, and families, ensuring picture-perfect wedding looks."
  },
  {
    question: "How do I book wedding planners in Hyderabad?",
    answer:
      "Contact SRS Weddings Hyderabad through our enquiry form to connect with certified planners and coordinators."
  }
];

const HydWeddingPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Planners in Hyderabad | Luxury Wedding Management - SRS Events</title>
        <meta
          name="description"
          content="SRS Events is a leading wedding planner in Hyderabad. We specialize in luxury weddings, destination weddings, wardrobe planning, guest management, and day-of coordination across Hyderabad."
        />
        <meta
          name="keywords"
          content="wedding planners Hyderabad, wedding event management Hyderabad, destination weddings Hyderabad, luxury weddings Hyderabad, wedding coordinator Hyderabad, wardrobe planning Hyderabad"
        />
        <link rel="canonical" href="https://srsevent.com/wedding-planners-hyderabad" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Top Wedding Planners in Hyderabad"
        description="From luxury weddings at palaces to destination celebrations, wardrobe styling, and seamless coordination — SRS Weddings Hyderabad delivers unforgettable experiences."
        buttonText="Plan Your Hyderabad Wedding"
        buttonLink="#book"
        bottomText="1000+ Successful Weddings & Celebrations in Hyderabad & Beyond"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Wedding Planners in Hyderabad
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Weddings Hyderabad</strong>, we provide complete wedding planning services, including luxury décor, destination weddings, and wardrobe styling.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a traditional Hyderabadi wedding, a modern celebration, or a grand destination event, our planners ensure every detail is flawless.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Weddings Hyderabad</strong> for stress-free arrangements, luxury themes, and unforgettable memories.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your Hyderabad wedding with us!</h2>
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
          highlight="Wedding Planning in Hyderabad"
          description="SRS Weddings Hyderabad specializes in luxury weddings, traditional ceremonies, destination planning, and wardrobe styling for couples across the city."
          extraText="From wardrobe planning to day-of coordination, we ensure your Hyderabad wedding is seamless and memorable."
          buttonText="Plan Your Wedding in Hyderabad"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Wedding Services in Hyderabad"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Hyderabad’s Choice for <span className="text-pink">Luxury Weddings & Destination Celebrations</span></>}
          description="We combine wedding planning with wardrobe styling, guest hospitality, and cultural traditions of Hyderabad."
          points={[
            "Luxury wedding planning in Hyderabad",
            "Destination weddings across India & abroad",
            "Wardrobe & styling consultation",
            "Creative décor & entertainment"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Wedding Planners in Hyderabad</>}
          description="Professional planners ensure a stress-free and elegant Hyderabad wedding."
          points={[
            "Expert wardrobe planning",
            "Dedicated day-of coordination",
            "Guest logistics & hospitality",
            "Customized wedding themes"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Weddings in Hyderabad"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Weddings Hyderabad"
          description="Trusted by couples and families, we deliver flawless wedding experiences in Hyderabad."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Wedding Gallery in Hyderabad"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions in Hyderabad" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Plan Your Dream Wedding in Hyderabad with Excellence"
        subtitle="From luxury palaces to destination weddings, wardrobe styling to seamless coordination — SRS Weddings Hyderabad delivers magical celebrations."
        buttonText="Book Your Hyderabad Wedding Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HydWeddingPlanners;
