import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/bab-ev-abt1.webp";
import bannerImg from "../../assets/img/events/bab-ev-bg.jpeg";
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/bab-ev-abt2.jpg";
import CopEventTwo from "../../assets/img/events/bab-ev-abt3.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/bab-ev-g1.jpeg";
import Gal2 from "../../assets/img/events/bab-ev-g2.jpeg";
import Gal3 from "../../assets/img/events/bab-ev-g3.jpg";
import Gal4 from "../../assets/img/events/bab-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-baby",
    title: "Vision",
    description:
      "We aim to redefine baby shower and naming ceremony planning in India with personalized celebrations, unique themes, and memorable experiences for every family."
  },
  {
    icon: "fas fa-gift",
    title: "Mission",
    description:
      "Our mission is to provide trusted baby shower planners offering creative decorations, invitations, gifts, catering, and event coordination for newborn celebrations."
  }
];

const eventServices = [
  {
    title: "Complete Baby Shower Planning",
    desc: "From intimate baby showers to grand naming ceremonies, we manage venue selection, décor, catering, gifts, and all event logistics.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Themed Baby Shower & Naming Ceremony Decor",
    desc: "Our decorators create beautiful baby shower themes like pastel, floral, or customized ideas, including balloon arches, centerpieces, and stage setup.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Gifts, Invitations & Event Coordination",
    desc: "We assist with unique gift ideas, customized invitations, day-of event coordination, games, and guest hospitality for an unforgettable experience.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Baby Shower Planners",
    description:
      "Recognized for excellence, we specialize in baby showers, naming ceremonies, and newborn celebrations."
  },
  {
    number: "2",
    title: "Customized Packages",
    description:
      "We provide tailored services including themed décor, party supplies, gifts, catering, and event coordination."
  },
  {
    number: "3",
    title: "10+ Years of Event Planning Experience",
    description:
      "With 1000+ baby shower and naming ceremonies organized, we ensure memorable celebrations for families."
  },
  {
    number: "4",
    title: "Creative & Trendy Decorations",
    description:
      "From balloons and floral décor to themed setups, we create visually stunning baby shower events."
  },
  {
    number: "5",
    title: "Complete Guest Management",
    description:
      "We manage invitations, RSVPs, and hospitality, ensuring every guest enjoys the event."
  },
  {
    number: "6",
    title: "Affordable Packages",
    description:
      "Our baby shower and naming ceremony packages are fully customizable, with transparent pricing and no hidden charges."
  },
  {
    number: "7",
    title: "Gift & Styling Assistance",
    description:
      "We suggest unique baby shower gifts, themed décor, and styling for the parents and guests."
  },
];

const faqData = [
  {
    question: "Do you plan complete baby showers?",
    answer:
      "Yes, we handle everything including themed decorations, gifts, invitations, catering, and guest management."
  },
  {
    question: "Can you create themed baby showers or naming ceremonies?",
    answer:
      "Absolutely! We specialize in pastel, floral, mermaid, and custom themes for baby showers and naming ceremonies."
  },
  {
    question: "Do you provide baby shower gift ideas?",
    answer:
      "Yes, we help with selecting unique gifts, newborn essentials, and personalized gift hampers."
  },
  {
    question: "Do you handle baby shower invitations?",
    answer:
      "Yes, we create customized invitations for baby showers and naming ceremonies, both digital and printed."
  },
  {
    question: "How do I find baby shower planners near me?",
    answer:
      "SRS Events offers professional baby shower and naming ceremony planning services across India. Contact us to connect with expert planners near you."
  }
];

const BabyShower = () => {
  return (
    <>
      <Helmet>
        <title>Baby Shower & Naming Ceremony Planners | SRS Events</title>
        <meta
          name="description"
          content="SRS Events provides expert baby shower and naming ceremony planners in India. Plan themed baby showers, newborn celebrations, gifts, invitations, and decorations with professional coordination."
        />
        <meta
          name="keywords"
          content="baby shower, naming ceremony, baby shower invitations, baby shower gifts, baby shower decorations, baby shower ideas, baby bath seat, baby shower gift ideas, baby shower themes, best newborn gifts, babyshower gift, newborn bath seat, babyshower decorations, babyshower gift ideas, seemantham decoration, baby celebration planner, newborn celebration planner, baby party planning, baby naming ceremony planner, baby shower near me, newborn gifts ideas"
        />
        <link rel="canonical" href="https://srsevent.com/baby-shower-event-organisers-bangalore." />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Plan Your Perfect Baby Shower & Naming Ceremony"
        description="From intimate baby showers to grand naming ceremonies, SRS Events delivers seamless celebrations with creative themes, gifts, invitations, and expert coordination."
        buttonText="Get Baby Shower Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful Baby Showers & Naming Ceremonies Across India"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Expert</span> Baby Shower Planners
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we specialize in <em>baby showers, naming ceremonies, and newborn celebrations</em>. From intimate family gatherings to grand events, we create memorable moments.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a baby shower, naming ceremony, or seemantham decoration, we manage gifts, invitations, decorations, catering, and entertainment.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for stress-free planning, personalized packages, and expert baby shower coordination.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Baby Shower Planner!</h2>
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
          highlight="Baby Shower & Naming Ceremony Services"
          description="SRS Events provides end-to-end baby shower and naming ceremony planning in India. From themed decorations to gifts and invitations, we ensure unforgettable celebrations."
          extraText="Our packages include personalized themes, gifts, invitations, catering, and full event coordination."
          buttonText="Explore Baby Shower Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Baby Shower & Naming Ceremony Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Beautiful & Memorable Baby Celebrations</span></>}
          description="We combine baby shower and naming ceremony planning with personalized services — from decorations and gifts to invitations and guest management."
          points={[
            "Complete baby shower packages",
            "Themed decorations & setups",
            "Gifts, invitations, and catering",
            "Customized baby celebration services"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Baby Shower Experts</>}
          description="Professional baby shower planners ensure your celebration is stress-free, beautiful, and unforgettable."
          points={[
            "Expert theme decorations and styling",
            "Day-of event coordination and entertainment",
            "Guest hospitality & memorable experiences",
            "Personalized gifts, invitations & cakes"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Baby Shower & Naming Ceremony Planning"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Baby Shower Planning"
          description="Discover why SRS Events is trusted for baby showers, naming ceremonies, and newborn celebrations across India."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Baby Shower & Naming Ceremony Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Professional Baby Shower Planner"
        subtitle="From themed baby showers to naming ceremonies, SRS Events offers packages tailored to your dream celebration."
        buttonText="Book Baby Shower Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default BabyShower;
