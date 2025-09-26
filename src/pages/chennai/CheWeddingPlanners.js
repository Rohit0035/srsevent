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
      "To be the most trusted wedding planners in Chennai, delivering luxury, culture, and unforgettable memories for every couple."
  },
  {
    icon: "fas fa-gem",
    title: "Mission",
    description:
      "Our mission is to provide complete wedding planning in Chennai — from venue booking and décor to wardrobe styling and day-of coordination — ensuring a stress-free experience."
  }
];

const eventServices = [
  {
    title: "Complete Wedding Planning in Chennai",
    desc: "We manage everything — from venue booking at Chennai’s top luxury hotels, beach resorts, and heritage locations to décor, catering, wardrobe styling, and guest hospitality.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Day-of Wedding Coordination",
    desc: "Our coordinators ensure your Chennai wedding runs seamlessly — managing vendors, timelines, and last-minute details with precision.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Destination Weddings & Wardrobe Planning",
    desc: "We plan dreamy destination weddings from Chennai to Goa, Jaipur, Udaipur, and international venues — with curated wardrobe planning for bride, groom, and families.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Trusted Wedding Planners in Chennai",
    description:
      "Recognized for excellence, we specialize in luxury weddings, receptions, and destination weddings in Chennai and beyond."
  },
  {
    number: "2",
    title: "Personalized Wedding Themes",
    description:
      "From traditional Tamil weddings to modern luxury celebrations, we design décor, themes, and wardrobe styling that reflect your story."
  },
  {
    number: "3",
    title: "10+ Years of Experience",
    description:
      "With 1000+ weddings managed, including high-profile Chennai events, our expertise guarantees flawless execution."
  },
  {
    number: "4",
    title: "Destination Wedding Experts",
    description:
      "From Chennai to Goa, Jaipur, Udaipur, or international luxury destinations, we plan dream weddings globally."
  },
  {
    number: "5",
    title: "Creative Décor & Styling",
    description:
      "Luxury floral décor, stage setups, and wardrobe planning for brides and grooms in Chennai."
  },
  {
    number: "6",
    title: "Guest Hospitality",
    description:
      "Smooth travel, accommodation, and personalized hospitality for your wedding guests in Chennai."
  },
  {
    number: "7",
    title: "Transparent Pricing",
    description:
      "Clear wedding planning packages in Chennai with no hidden charges."
  },
  {
    number: "8",
    title: "Wardrobe & Styling Experts",
    description:
      "Our wardrobe planners curate bridal sarees, lehengas, groom sherwanis, and family styling to perfection."
  },
];

const faqData = [
  {
    question: "Do you provide complete wedding planning services in Chennai?",
    answer:
      "Yes, we offer end-to-end wedding planning in Chennai, including venue booking, décor, catering, wardrobe, entertainment, and guest management."
  },
  {
    question: "Can you manage luxury weddings in Chennai?",
    answer:
      "Absolutely. From ITC Grand Chola and Leela Palace to Mahabalipuram resorts and luxury beach venues, we organize weddings at Chennai’s most prestigious destinations."
  },
  {
    question: "Do you organize destination weddings?",
    answer:
      "Yes, from Chennai we plan weddings across Goa, Jaipur, Udaipur, and international destinations."
  },
  {
    question: "Do you provide wardrobe planning for weddings in Chennai?",
    answer:
      "Yes, our stylists offer wardrobe planning for the bride, groom, and families, ensuring picture-perfect wedding looks."
  },
  {
    question: "How do I book wedding planners in Chennai?",
    answer:
      "Contact SRS Weddings Chennai through our enquiry form to connect with certified planners and coordinators."
  }
];

const CheWeddingPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Planners in Chennai | Luxury Wedding Management - SRS Events</title>
        <meta
          name="description"
          content="SRS Events is a leading wedding planner in Chennai. We specialize in luxury weddings, destination weddings, wardrobe planning, guest management, and day-of coordination across Chennai."
        />
        <meta
          name="keywords"
          content="wedding planners Chennai, wedding event management Chennai, destination weddings Chennai, luxury weddings Chennai, wedding coordinator Chennai, wardrobe planning Chennai"
        />
        <link rel="canonical" href="https://srsevent.com/wedding-planners-chennai" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Top Wedding Planners in Chennai"
        description="From luxury weddings at palaces and beach resorts to destination celebrations, wardrobe styling, and seamless coordination — SRS Weddings Chennai delivers unforgettable experiences."
        buttonText="Plan Your Chennai Wedding"
        buttonLink="#book"
        bottomText="1000+ Successful Weddings & Celebrations in Chennai & Beyond"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Leading </span>
                    Wedding Planners in Chennai
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Weddings Chennai</strong>, we provide complete wedding planning services, including luxury décor, destination weddings, and wardrobe styling.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a traditional Tamil wedding, a modern celebration, or a grand destination event, our planners ensure every detail is flawless.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Weddings Chennai</strong> for stress-free arrangements, luxury themes, and unforgettable memories.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Plan your Chennai wedding with us!</h2>
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
          highlight="Wedding Planning in Chennai"
          description="SRS Weddings Chennai specializes in luxury weddings, traditional ceremonies, destination planning, and wardrobe styling for couples across the city."
          extraText="From wardrobe planning to day-of coordination, we ensure your Chennai wedding is seamless and memorable."
          buttonText="Plan Your Wedding in Chennai"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Wedding Services in Chennai"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Chennai’s Choice for <span className="text-pink">Luxury Weddings & Destination Celebrations</span></>}
          description="We combine wedding planning with wardrobe styling, guest hospitality, and cultural traditions of Chennai."
          points={[
            "Luxury wedding planning in Chennai",
            "Destination weddings across India & abroad",
            "Wardrobe & styling consultation",
            "Creative décor & entertainment"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Wedding Planners in Chennai</>}
          description="Professional planners ensure a stress-free and elegant Chennai wedding."
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
          subtitle="Weddings in Chennai"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Weddings Chennai"
          description="Trusted by couples and families, we deliver flawless wedding experiences in Chennai."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Wedding Gallery in Chennai"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions in Chennai" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Plan Your Dream Wedding in Chennai with Excellence"
        subtitle="From luxury palaces to destination weddings, wardrobe styling to seamless coordination — SRS Weddings Chennai delivers magical celebrations."
        buttonText="Book Your Chennai Wedding Planner"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default CheWeddingPlanners;
