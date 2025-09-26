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
      "We aim to redefine wedding anniversary celebrations in Chennai, delivering unforgettable moments with personalized themes, décor, and entertainment for couples."
  },
  {
    icon: "fas fa-gift",
    title: "Mission",
    description:
      "Our mission is to be Chennai’s most trusted anniversary event planners, offering creative decorations, themed parties, gifts, catering, and seamless coordination."
  }
];

const eventServices = [
  {
    title: "Complete Anniversary Planning in Chennai",
    desc: "From intimate anniversary dinners to grand 25th or 50th anniversary parties in Chennai, we handle venue selection, décor, catering, gifts, and entertainment.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Themed Anniversary Decoration & Setup",
    desc: "Our Chennai-based decorators design stunning anniversary themes including romantic, elegant, and custom setups with floral arrangements, stage décor, and lighting.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Gifts, Invitations & Event Coordination",
    desc: "We provide unique anniversary gifts, customized invitations, day-of event coordination, live music, and guest hospitality for couples in Chennai.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Expert Anniversary Planners in Chennai",
    description:
      "Trusted for 25th, 50th, and milestone wedding anniversary celebrations across Chennai."
  },
  {
    number: "2",
    title: "Customized Anniversary Packages",
    description:
      "We provide tailored services including themed décor, catering, entertainment, gifts, and invitations in Chennai."
  },
  {
    number: "3",
    title: "10+ Years of Experience",
    description:
      "With 1000+ anniversary events in Chennai, we ensure flawless and memorable celebrations."
  },
  {
    number: "4",
    title: "Creative & Elegant Decorations",
    description:
      "From floral décor to candle-lit setups and stage styling, our Chennai team delivers visually stunning anniversary events."
  },
  {
    number: "5",
    title: "Complete Guest Management",
    description:
      "We handle invitations, RSVPs, seating arrangements, and hospitality for stress-free Chennai celebrations."
  },
  {
    number: "6",
    title: "Affordable Chennai Packages",
    description:
      "Transparent pricing with customizable anniversary packages to suit every couple’s needs."
  },
  {
    number: "7",
    title: "Gift & Styling Assistance",
    description:
      "We help with unique anniversary gifts, couple styling, and décor themes in Chennai."
  },
];

const faqData = [
  {
    question: "Do you plan complete wedding anniversary events in Chennai?",
    answer:
      "Yes, we handle everything including themed decorations, gifts, invitations, catering, entertainment, and guest management in Chennai."
  },
  {
    question: "Can you plan milestone anniversaries like 25th or 50th in Chennai?",
    answer:
      "Absolutely! We specialize in planning 25th, 50th, and other milestone anniversary celebrations with custom Chennai-specific themes."
  },
  {
    question: "Do you provide anniversary gift ideas?",
    answer:
      "Yes, we suggest unique gifts and personalized hampers for couples to make their Chennai celebration memorable."
  },
  {
    question: "Do you handle anniversary invitations in Chennai?",
    answer:
      "Yes, we create customized anniversary invitations, both digital and printed, tailored for Chennai events."
  },
  {
    question: "How do I find anniversary planners near me in Chennai?",
    answer:
      "SRS Events offers professional wedding anniversary planning services across Chennai. Contact us to connect with expert planners."
  }
];

const CheWeddingAnniversary = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Anniversary Planners in Chennai | SRS Events</title>
        <meta
          name="description"
          content="SRS Events is a leading wedding anniversary planner in Chennai. We organize 25th, 50th, and milestone anniversary celebrations with décor, catering, gifts, and professional coordination."
        />
        <meta
          name="keywords"
          content="anniversary planners Chennai, wedding anniversary planner Chennai, 25th anniversary planner Chennai, 50th anniversary party Chennai, milestone anniversary Chennai, anniversary decoration Chennai, anniversary event management Chennai"
        />
        <link rel="canonical" href="https://srsevent.com/wedding-anniversary-planners-chennai" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Wedding Anniversary Planners in Chennai"
        description="From romantic intimate dinners to grand milestone anniversaries, SRS Events Chennai delivers creative themes, décor, gifts, and expert coordination."
        buttonText="Get Chennai Anniversary Packages"
        buttonLink="#enquirynow"
        bottomText="1000+ Successful Wedding Anniversary Celebrations in Chennai"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'>Expert</span> Anniversary Planners in Chennai
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Chennai</strong>, we specialize in <em>wedding anniversaries, milestone celebrations, and couple events</em>. From cozy dinners to grand parties, we create memorable experiences for couples.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a 25th or 50th wedding anniversary, our Chennai team manages gifts, invitations, décor, catering, entertainment, and guest hospitality.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Chennai</strong> for stress-free anniversary planning, personalized packages, and expert event coordination.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Anniversary Planner in Chennai!</h2>
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
          highlight="Wedding Anniversary Services in Chennai"
          description="SRS Events offers end-to-end wedding anniversary planning in Chennai. From themed décor to catering, we ensure unforgettable celebrations for couples."
          extraText="Our anniversary packages in Chennai include personalized themes, gifts, invitations, catering, and full event coordination."
          buttonText="Explore Chennai Anniversary Packages"
          image={CopEventOne}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Chennai Anniversary Services"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<>Plan <span className="text-pink">Beautiful & Memorable Anniversaries</span> in Chennai</>}
          description="We combine anniversary planning with personalized services — from décor and gifts to catering and guest management in Chennai."
          points={[
            "Complete Chennai anniversary packages",
            "Romantic & themed decorations",
            "Gifts, invitations, and catering",
            "Full event coordination in Chennai"
          ]}
          image={wedimg}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Chennai Anniversary Experts</>}
          description="Professional anniversary planners ensure your Chennai celebration is stress-free, romantic, and unforgettable."
          points={[
            "Creative décor & styling",
            "Day-of coordination & entertainment",
            "Guest hospitality & catering",
            "Personalized gifts, invitations & cakes"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Anniversary Planning in Chennai"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events Chennai for Wedding Anniversaries"
          description="Trusted for 25th, 50th, and milestone anniversary celebrations, SRS Events Chennai delivers stress-free planning and personalized services."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Chennai Anniversary Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Chennai Anniversary Planner"
        subtitle="From intimate dinners to grand milestone parties, SRS Events Chennai offers packages tailored to your dream celebration."
        buttonText="Book Anniversary Packages in Chennai"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default CheWeddingAnniversary;
