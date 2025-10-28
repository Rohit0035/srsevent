import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/wedd-ev-abt1.jpg";
import bannerImg from "../../assets/img/events/wedd-ev-bg.jpg";
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/wedd-ev-abt2.jpg";
import CopEventTwo from "../../assets/img/events/wedd-ev-abt3.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/wedd-ev-g1.jpg";
import Gal2 from "../../assets/img/events/wedd-ev-g2.jpg";
import Gal3 from "../../assets/img/events/wedd-ev-g3.jpg";
import Gal4 from "../../assets/img/events/wedd-ev-g4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-heart",
    title: "Vision",
    description:
      "We aim to redefine wedding anniversary celebrations in India, creating unforgettable moments with personalized themes, décor, and entertainment for couples."
  },
  {
    icon: "fas fa-gift",
    title: "Mission",
    description:
      "Our mission is to provide trusted anniversary event planners offering creative decorations, themed parties, gifts, catering, and seamless coordination for couples celebrating milestones."
  }
];

const eventServices = [
  {
    title: "Complete Anniversary Planning",
    desc: "From intimate anniversary dinners to grand 25th or 50th anniversary parties, we manage venue selection, décor, catering, gifts, and entertainment.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Themed Anniversary Decoration & Setup",
    desc: "Our decorators craft stunning anniversary themes including romantic, elegant, and custom setups with floral arrangements, stage décor, and lighting.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Gifts, Invitations & Event Coordination",
    desc: "We assist with unique anniversary gifts, customized invitations, day-of event coordination, live music, and guest hospitality for a memorable celebration.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Anniversary Planners",
    description:
      "Recognized for excellence, we specialize in 25th, 50th, and milestone wedding anniversary celebrations."
  },
  {
    number: "2",
    title: "Customized Anniversary Packages",
    description:
      "We provide tailored services including themed décor, gifts, catering, entertainment, and invitations."
  },
  {
    number: "3",
    title: "10+ Years of Event Planning Experience",
    description:
      "With 1000+ anniversary events managed, we ensure seamless and memorable celebrations for couples."
  },
  {
    number: "4",
    title: "Creative & Elegant Decorations",
    description:
      "From balloons and floral décor to candle-lit settings and stage setups, we create visually stunning anniversary parties."
  },
  {
    number: "5",
    title: "Complete Guest Management",
    description:
      "We manage invitations, RSVPs, seating arrangements, and hospitality for a hassle-free experience."
  },
  {
    number: "6",
    title: "Affordable Anniversary Packages",
    description:
      "Our packages are fully customizable with transparent pricing and no hidden charges."
  },
  {
    number: "7",
    title: "Gift & Styling Assistance",
    description:
      "We suggest unique anniversary gifts, couple styling, and décor to make your celebration memorable."
  },
];

const faqData = [
  {
    question: "Do you plan complete wedding anniversary events?",
    answer:
      "Yes, we handle everything including themed decorations, gifts, invitations, catering, entertainment, and guest management."
  },
  {
    question: "Can you plan milestone anniversaries like 25th or 50th?",
    answer:
      "Absolutely! We specialize in planning 25th, 50th, and other milestone anniversary celebrations with custom themes."
  },
  {
    question: "Do you provide anniversary gift ideas?",
    answer:
      "Yes, we suggest unique gifts and personalized hampers for couples to make the day special."
  },
  {
    question: "Do you handle anniversary invitations?",
    answer:
      "Yes, we create customized invitations for wedding anniversaries, both digital and printed."
  },
  {
    question: "How do I find anniversary planners near me?",
    answer:
      "SRS Events offers professional wedding anniversary planning services across India. Contact us to find expert anniversary planners near you."
  }
];

const WeddingAnniversary = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Anniversary Planners in Bangalore | SRS Event</title>
        <meta
          name="description"
          content="Relive your love story with SRS Event — elegant anniversary planners in Bangalore creating timeless celebrations & romantic memories."
        />
        <meta
          name="keywords"
          content="anniversary planners, wedding anniversary planners, anniversary event planner, 25th anniversary planner, 25th wedding anniversary planner, 50th anniversary party planner, 50th wedding anniversary planner, event management for anniversary, anniversary celebration ideas, anniversary party decoration, anniversary gifts, anniversary invitations, anniversary themes, anniversary near me, milestone anniversary planner, couple celebration planner, romantic anniversary planner"
        />
        <link rel="canonical" href="https://www.srsevent.com/wedding-anniversary-planners-bangalore" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Plan Your Perfect Wedding Anniversary Celebration"
        description="From intimate dinners to grand milestone anniversaries, SRS Events delivers seamless celebrations with creative themes, gifts, invitations, and expert coordination."
        buttonText="Get Anniversary Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful Wedding Anniversary Celebrations Across India"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Expert</span> Wedding Anniversary Planners
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events</strong>, we specialize in <em>wedding anniversaries, milestone celebrations, and couple events</em>. From romantic intimate gatherings to grand parties, we create memorable experiences.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a 25th or 50th wedding anniversary, we manage gifts, invitations, décor, catering, entertainment, and guest hospitality.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events</strong> for stress-free planning, personalized anniversary packages, and expert coordination.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Anniversary Planner!</h2>
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
          highlight="Wedding Anniversary Planning Services"
          description="SRS Events provides end-to-end anniversary event planning in India. From themed décor to gifts and invitations, we ensure unforgettable celebrations for couples."
          extraText="Our packages include personalized themes, gifts, invitations, catering, and full event coordination."
          buttonText="Explore Anniversary Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Wedding Anniversary Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Beautiful & Memorable Anniversary Celebrations</span></>}
          description="We combine anniversary planning with personalized services — from decorations and gifts to invitations and guest management."
          points={[
            "Complete anniversary packages",
            "Themed decorations & setups",
            "Gifts, invitations, and catering",
            "Customized anniversary services"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Anniversary Experts</>}
          description="Professional anniversary planners ensure your celebration is stress-free, romantic, and unforgettable."
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
          subtitle="Wedding Anniversary Planning"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events for Wedding Anniversary Planning"
          description="Discover why SRS Events is trusted for 25th, 50th, and milestone wedding anniversary celebrations across India."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Anniversary Celebration Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Professional Anniversary Planner"
        subtitle="From intimate dinners to grand 25th and 50th anniversary parties, SRS Events offers packages tailored to your dream celebration."
        buttonText="Book Anniversary Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default WeddingAnniversary;
