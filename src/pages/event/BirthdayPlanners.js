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
      "We aim to redefine birthday party planning in India with unforgettable celebrations, themed parties, and personalized event experiences for all ages."
  },
  {
    icon: "fas fa-gift",
    title: "Mission",
    description:
      "Our mission is to be the most trusted birthday party planners, offering creative decorations, party supplies, event coordination, and custom themes for kids, teens, and adults."
  }
];

const eventServices = [
  {
    title: "Complete Birthday Party Planning",
    desc: "From kids’ birthday parties to milestone celebrations like 50th and 60th birthdays, we manage venue booking, decorations, catering, party supplies, and entertainment.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Theme Party Decoration & Setup",
    desc: "Our expert decorators create themed birthday parties, including mermaid, superhero, and customized concepts for kids and adults.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Birthday Event Coordination",
    desc: "We handle day-of event management, vendor coordination, entertainment, games, and guest hospitality to make every birthday stress-free.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Birthday Planners",
    description:
      "Recognized for excellence, we specialize in kids’ birthday parties, milestone birthdays, and themed celebrations."
  },
  {
    number: "2",
    title: "Customized Party Packages",
    description:
      "We provide tailored services including decorations, party supplies, catering, games, and themed event coordination."
  },
  {
    number: "3",
    title: "10+ Years of Birthday Party Experience",
    description:
      "With 1000+ birthday events managed, we ensure a seamless and memorable experience for all ages."
  },
  {
    number: "4",
    title: "Creative & Trendy Decorations",
    description:
      "From balloons to stage décor and themed setups, we create visually stunning birthday parties."
  },
  {
    number: "5",
    title: "Complete Guest Management",
    description:
      "We take care of invitations, RSVPs, and hospitality to ensure every guest enjoys the celebration."
  },
  {
    number: "6",
    title: "Affordable Birthday Packages",
    description:
      "Our birthday party packages are fully customizable with transparent pricing and no hidden costs."
  },
  {
    number: "7",
    title: "Wardrobe & Styling Assistance",
    description:
      "We assist with costume themes and styling for kids’ birthday parties, teens, and adult celebrations."
  },
];

const faqData = [
  {
    question: "Do you plan complete birthday parties?",
    answer:
      "Yes, we handle everything including decorations, party supplies, catering, entertainment, and guest management."
  },
  {
    question: "Can you create themed birthday parties?",
    answer:
      "Absolutely! We specialize in themed events such as mermaid parties, superhero themes, princess parties, and custom themes for all ages."
  },
  {
    question: "Do you provide birthday party supplies?",
    answer:
      "Yes, we provide balloons, cake setups, props, and other party supplies as part of our packages."
  },
  {
    question: "Do you plan milestone birthdays like 50th or 60th?",
    answer:
      "Yes, we organize milestone birthdays with special decorations, custom catering, and personalized experiences."
  },
  {
    question: "How do I find birthday party planners near me?",
    answer:
      "SRS Events offers professional birthday planning services across India. Contact us to find the best birthday party planners near you."
  }
];

const BirthdayPlanners = () => {
  return (
    <>
      <Helmet>
        <title>Birthday Party Planners & Decorations | SRS Events</title>
        <meta
          name="description"
          content="SRS Events provides expert birthday party planners in India. Plan kids' birthdays, milestone celebrations, themed parties, decorations, and party supplies with professional coordination."
        />
        <meta
          name="keywords"
          content="birthday party, birthday decorations, kids birthday party, 60th birthday decorations, 50th birthday decorations, mermaid party supplies, birthday party decorations, birthday parties near me, party supplies near me, birthday party supplies, 1st birthday decorations, 18th birthday decorations, birthday event planner, birthday planner near me, birthday themes, birthday party coordinator, birthday celebration packages, birthday event organizer"
        />
        <link rel="canonical" href="https://srsevent.com/birthdayplanners" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Plan Your Perfect Birthday Celebration"
        description="From kids’ birthday parties to milestone celebrations, SRS Events delivers seamless birthdays with creative decorations, themes, and expert coordination."
        buttonText="Get Birthday Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful Birthday Events Across India"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Expert</span> Birthday Planners
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we specialize in <em>kids' birthday parties, milestone birthdays, themed celebrations</em>, and customized birthday events. From intimate gatherings to grand parties, we make every celebration memorable.
                  </p>
                  <p className='mt-3'>
                    Whether you’re planning a 1st birthday, 18th, 50th, or 60th birthday, our planners handle decorations, party supplies, catering, and entertainment.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for stress-free planning, transparent pricing, and personalized birthday packages.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Birthday Planner!</h2>
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
          highlight="Birthday Planning Services"
          description="SRS Events provides end-to-end birthday party planning in India. From kids' birthday themes to milestone celebrations, we offer decorations, party supplies, catering, and full event coordination."
          extraText="Our birthday packages include themed parties, party supplies, and fun-filled celebrations for all ages."
          buttonText="Explore Birthday Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Birthday Party Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Fun & Memorable Birthday Parties</span></>}
          description="We combine birthday planning with personalized services — from decorations and themes to party supplies and guest management."
          points={[
            "Complete birthday packages",
            "Theme party decorations & setup",
            "Catering, games & entertainment",
            "Customized party supplies for all ages"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Birthday Party Experts</>}
          description="Professional birthday planners ensure your celebration is stress-free, fun, and unforgettable."
          points={[
            "Expert theme decorations and styling",
            "Day-of event coordination and entertainment",
            "Guest hospitality & fun activities",
            "Personalized party supplies & cakes"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Birthday Party Planning"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Birthday Planning"
          description="Discover why SRS Events is trusted for kids' parties, milestone birthdays, and themed celebrations across India."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Birthday Party Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Professional Birthday Planner"
        subtitle="From kids' themed parties to milestone birthday celebrations, SRS Events offers packages tailored to your dream party."
        buttonText="Book Birthday Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default BirthdayPlanners;
