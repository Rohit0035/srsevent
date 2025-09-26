import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/birth-ev-abt1.jpg";
import bannerImg from "../../assets/img/events/birth-ev-bg.jpg";
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/birth-ev-abt2.jpg";
import CopEventTwo from "../../assets/img/events/birth-ev-abt3.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/birth-ev-g1.jpeg";
import Gal2 from "../../assets/img/events/birth-ev-g2.jpg";
import Gal3 from "../../assets/img/events/birth-ev-g3.jpg";
import Gal4 from "../../assets/img/events/birth-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-birthday-cake",
    title: "Vision",
    description:
      "We aim to redefine birthday party planning in Chennai with unforgettable celebrations, creative themes, and personalized event experiences."
  },
  {
    icon: "fas fa-gift",
    title: "Mission",
    description:
      "Our mission is to be the most trusted birthday party planners in Chennai, offering decorations, party supplies, event coordination, and custom themes for all ages."
  }
];

const eventServices = [
  {
    title: "Complete Birthday Party Planning in Chennai",
    desc: "From kids’ birthdays to milestone celebrations like 50th and 60th birthdays, we handle venue booking, decorations, catering, party supplies, and entertainment in Chennai.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Theme Party Decoration & Setup",
    desc: "Our Chennai-based decorators create themed parties including princess, superhero, Bollywood, and customized setups for kids and adults.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Birthday Event Coordination",
    desc: "We manage day-of coordination, vendor handling, games, and guest hospitality for a stress-free birthday celebration in Chennai.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Birthday Planners in Chennai",
    description:
      "Recognized for excellence, we specialize in kids’ birthdays, milestone events, and themed celebrations across Chennai."
  },
  {
    number: "2",
    title: "Customized Party Packages",
    description:
      "We offer tailored services including decoration, catering, games, and entertainment, designed for families in Chennai."
  },
  {
    number: "3",
    title: "10+ Years of Experience",
    description:
      "With 1000+ birthday events managed, SRS Events Chennai ensures a seamless and memorable experience."
  },
  {
    number: "4",
    title: "Creative & Trendy Decorations",
    description:
      "From balloon arches to stage décor and themed setups, we bring your dream Chennai birthday party to life."
  },
  {
    number: "5",
    title: "Complete Guest Management",
    description:
      "We handle invitations, RSVPs, and hospitality so you can enjoy the party stress-free."
  },
  {
    number: "6",
    title: "Affordable Birthday Packages in Chennai",
    description:
      "Our transparent packages fit every budget while maintaining premium quality service."
  },
  {
    number: "7",
    title: "Wardrobe & Styling Assistance",
    description:
      "We help with costume themes and styling for kids, teens, and adults in Chennai."
  },
];

const faqData = [
  {
    question: "Do you plan complete birthday parties in Chennai?",
    answer:
      "Yes! We handle everything including decorations, party supplies, catering, entertainment, and guest management in Chennai."
  },
  {
    question: "Can you create themed birthday parties?",
    answer:
      "Absolutely. We specialize in themes like princess, superhero, Bollywood, retro, and fully customized birthday themes."
  },
  {
    question: "Do you provide birthday party supplies in Chennai?",
    answer:
      "Yes, we provide balloons, cake tables, props, and other party supplies as part of our birthday packages."
  },
  {
    question: "Do you plan milestone birthdays like 50th or 60th?",
    answer:
      "Yes, we organize milestone birthdays with elegant decorations, custom catering, and personalized touches."
  },
  {
    question: "How do I find the best birthday party planners in Chennai?",
    answer:
      "SRS Events is one of the most trusted birthday planners in Chennai with 1000+ successful events."
  }
];

const CheBirthdayPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Birthday Party Planners in Chennai | SRS Events</title>
        <meta
          name="description"
          content="SRS Events is the leading birthday party planner in Chennai. We plan kids’ birthdays, milestone events, themed parties, decorations, catering, and entertainment with expert coordination."
        />
        <meta
          name="keywords"
          content="birthday party planners Chennai, birthday decorations Chennai, kids birthday Chennai, milestone birthdays Chennai, birthday packages Chennai, birthday themes Chennai, birthday event organiser Chennai"
        />
        <link rel="canonical" href="https://srsevent.com/birthday-party-planners-chennai" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Plan Your Perfect Birthday in Chennai"
        description="From kids’ parties to milestone birthdays, SRS Events Chennai delivers unforgettable celebrations with themes, décor, catering, and full coordination."
        buttonText="Get Chennai Birthday Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful Birthday Events in Chennai"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Expert</span> Birthday Planners in Chennai
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Chennai</strong>, we specialize in <em>kids’ birthdays, milestone events, and themed celebrations</em>. From intimate gatherings to grand parties, we make every celebration stress-free and memorable.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a 1st birthday, 18th, 50th, or 60th, our team handles decorations, catering, games, and entertainment in Chennai.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Chennai</strong> for creative ideas, transparent pricing, and professional birthday planning services.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Birthday Planner in Chennai!</h2>
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
          highlight="Birthday Planning in Chennai"
          description="SRS Events offers complete birthday planning in Chennai. From themed kids’ parties to milestone birthdays, we provide décor, catering, entertainment, and guest management."
          extraText="Our Chennai birthday packages are designed for stress-free celebrations tailored to your needs."
          buttonText="Explore Chennai Birthday Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Our Chennai Birthday"
          highlight="Party Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Memorable Birthdays in Chennai</span></>}
          description="We combine professional birthday planning with personalized services — from decorations and catering to entertainment and guest management."
          points={[
            "Complete birthday packages in Chennai",
            "Theme party decorations & setup",
            "Games, entertainment & activities",
            "Customized supplies for kids & adults"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Birthday Experts in Chennai</>}
          description="Professional birthday planners in Chennai ensure your celebration is unique, stylish, and stress-free."
          points={[
            "Creative birthday themes & styling",
            "Vendor & event coordination",
            "Fun games & activities for guests",
            "Personalized packages at every budget"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Birthday Party Planning in Chennai"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Birthday Parties in Chennai"
          description="Discover why families across Chennai trust us for kids’ birthdays, milestone events, and themed parties."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Chennai Birthday Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Birthday Planning" highlight="FAQs in Chennai" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Professional Birthday Planner in Chennai"
        subtitle="From kids’ birthdays to milestone celebrations, SRS Events Chennai offers customized packages for stress-free celebrations."
        buttonText="Book Chennai Birthday Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default CheBirthdayPlanners;