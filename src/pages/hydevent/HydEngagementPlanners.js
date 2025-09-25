import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/ever-ev-abt1.jpg";
import bannerImg from "../../assets/img/events/ever-ev-bg.jpg";
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/ever-ev-abt2.jpg";
import CopEventTwo from "../../assets/img/events/ever-ev-abt3.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/ever-ev-g1.jpg";
import Gal2 from "../../assets/img/events/ever-ev-g2.jpg";
import Gal3 from "../../assets/img/events/ever-ev-g3.jpg";
import Gal4 from "../../assets/img/events/ever-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-heart",
    title: "Vision",
    description:
      "To be Hyderabad’s most trusted engagement planners, creating magical proposals, luxury engagement parties, and unforgettable celebrations."
  },
  {
    icon: "fas fa-gem",
    title: "Mission",
    description:
      "Our mission is to provide premium engagement planning in Hyderabad — from creative proposals and décor to wardrobe styling and day-of coordination."
  }
];

const eventServices = [
  {
    title: "Engagement Party Planning",
    desc: "We design and execute luxury engagement parties in Hyderabad — from venue booking and décor to catering and entertainment.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Proposal Event Planning",
    desc: "Creative proposal setups across Hyderabad — rooftop dinners, luxury resorts, or themed venues, styled to perfection.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Personalized Engagement Packages",
    desc: "End-to-end engagement services including wardrobe styling, guest hospitality, and complete event coordination.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Top Engagement Planners in Hyderabad",
    description:
      "Recognized for planning premium proposals and engagement parties in the city’s most sought-after venues."
  },
  {
    number: "2",
    title: "Personalized Packages",
    description:
      "Tailor-made engagement and proposal packages with décor, styling, and seamless execution."
  },
  {
    number: "3",
    title: "10+ Years of Expertise",
    description:
      "With 1000+ events planned, our experience ensures elegance, creativity, and smooth management."
  },
  {
    number: "4",
    title: "Luxury Venues in Hyderabad",
    description:
      "Partnerships with 5-star hotels, banquet halls, and scenic venues across Hyderabad."
  },
  {
    number: "5",
    title: "Creative & Trendy Themes",
    description:
      "Unique décor, floral styling, and modern themes to make your engagement stand out."
  },
  {
    number: "6",
    title: "Complete Guest Hospitality",
    description:
      "Travel, stay, and hospitality services for your family and friends attending your engagement."
  },
];

const faqData = [
  {
    question: "Do you plan complete engagement parties in Hyderabad?",
    answer:
      "Yes, we manage everything — from venue booking and décor to catering, wardrobe styling, and guest management."
  },
  {
    question: "Can you organize creative proposals?",
    answer:
      "Absolutely! We specialize in proposal planning across Hyderabad — from rooftop dinners to luxury resort setups."
  },
  {
    question: "Do you provide wardrobe styling for engagements?",
    answer:
      "Yes, we offer complete styling assistance for the couple and family, ensuring everyone looks their best."
  },
  {
    question: "Which venues do you work with in Hyderabad?",
    answer:
      "We work with luxury hotels, banquet halls, resorts, and private venues across Hyderabad for engagement events."
  },
  {
    question: "Why choose SRS Weddings for engagement planning?",
    answer:
      "Because we combine creativity, luxury, and seamless execution to deliver unforgettable engagement experiences in Hyderabad."
  },
];

const HydEngagementPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Engagement Planners in Hyderabad | Proposal & Event Experts</title>
        <meta
          name="description"
          content="SRS Weddings are expert engagement planners in Hyderabad. We organize proposal events, luxury engagement parties, wardrobe styling, and personalized engagement packages."
        />
        <meta
          name="keywords"
          content="engagement planners in Hyderabad, proposal event planners Hyderabad, engagement party planner Hyderabad, engagement packages Hyderabad, engagement event management, wedding engagement planners Hyderabad"
        />
        <link rel="canonical" href="https://srsevent.com/engagement-planners-hyderabad" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Hyderabad’s Trusted Engagement & Proposal Planners"
        description="From intimate proposals to grand engagement parties, SRS Weddings makes your celebration stress-free, elegant, and unforgettable."
        buttonText="Get Engagement Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Engagements & Proposals Planned Across Hyderabad"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Engagement Planning</span> in Hyderabad
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Weddings</strong>, we specialize in <em>engagement parties, proposals, and luxury celebrations</em> across Hyderabad’s top venues. 
                  </p>
                  <p className='mt-3'>
                    Whether you’re planning a private proposal setup or a grand engagement party, our planners handle every detail with precision.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Weddings</strong> for creative proposals, stress-free planning, and personalized packages designed for Hyderabad celebrations.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Engagement Planner!</h2>
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
          highlight="Hyderabad Engagement Planning"
          description="We provide complete engagement services in Hyderabad — from proposal events and luxury parties to décor, styling, and guest management."
          extraText="Our engagement planners ensure your Hyderabad event is stylish, seamless, and unforgettable."
          buttonText="Explore Engagement Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Our Hyderabad"
          highlight="Engagement Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Memorable Engagements</span> in Hyderabad</>}
          description="We combine engagement planning with personalized services — from creative proposals to luxury hospitality and styling."
          points={[
            "Luxury engagement party planning",
            "Creative proposal setups",
            "Wardrobe styling & consultation",
            "Guest hospitality & venue selection"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Choosing Us</>}
          description="Our professional Hyderabad engagement planners deliver stress-free, stylish, and memorable celebrations."
          points={[
            "Creative Hyderabad proposal planning",
            "Personalized engagement packages",
            "Luxury guest hospitality",
            "Elegant décor & styling"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Engagement Planning in Hyderabad"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Weddings in Hyderabad"
          description="Trusted by couples and families for luxury engagement and proposal events in Hyderabad."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Hyderabad Engagement Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Hyderabad’s Best Engagement Planners"
        subtitle="From proposals to luxury engagement parties — SRS Weddings creates experiences you’ll cherish forever."
        buttonText="Book Engagement Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HydEngagementPlanners;
