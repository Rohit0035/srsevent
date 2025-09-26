import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/events/cop-ev-bgg.jpg"
import bannerImg from "../../assets/img/events/cop-ev-bgg.jpg"
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import CopEventOne from "../../assets/img/events/cop-ev-1.jpg"
import CopEventTwo from "../../assets/img/events/cop-ev-2.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg"
import Gal1 from "../../assets/img/events/cop-ev-g1.jpg"
import Gal2 from "../../assets/img/events/cop-ev-g2.jpg"
import Gal3 from "../../assets/img/events/cop-ev-g3.jpg"
import Gal4 from "../../assets/img/events/cop-ev-g4.jpg"

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const items = [
  {
    icon: "fas fa-eye",
    title: "Vision",
    description:
      "We aim to redefine corporate event management in Hyderabad by delivering innovative, impactful, and result-driven events for businesses across industries."
  },
  {
    icon: "fas fa-handshake",
    title: "Mission",
    description:
      "Our mission is to be the most trusted corporate event management company in Hyderabad, offering seamless conferences, product launches, exhibitions, and employee engagement programs."
  }
];

const eventServices = [
  {
    title: "Corporate Conferences & Seminars",
    desc: "We manage end-to-end conference planning in Hyderabad with logistics, speaker coordination, and venue management.",
    img: Gal1,
    bg: "bg-white text-dark",
  },
  {
    title: "Team Building & Corporate Retreats",
    desc: "Our curated bonding activities and retreats strengthen employee morale and collaboration for Hyderabad-based companies.",
    img: Gal2,
    bg: "bg-white text-dark",
  },
  {
    title: "Product Launches & Exhibitions",
    desc: "We create impactful product launches, trade shows, and exhibitions in Hyderabad with creative themes and flawless execution.",
    img: Gal3,
    bg: "bg-light text-dark",
  },
];

const itemsWhyus = [
  {
    number: "1",
    title: "Hyderabad Corporate Event Experts",
    description:
      "Specialized in corporate gatherings, conferences, expos, and launches in Hyderabad’s prime venues."
  },
  {
    number: "2",
    title: "End-to-End Event Management",
    description:
      "From concept to execution — décor, logistics, guest management, and on-ground coordination handled seamlessly."
  },
  {
    number: "3",
    title: "7+ Years of Experience",
    description:
      "Trusted by 200+ Hyderabad corporates, startups, and associations for delivering world-class events."
  },
  {
    number: "4",
    title: "Venue Partnerships in Hyderabad",
    description:
      "Strong tie-ups with top hotels, convention centers, and banquet halls in Hyderabad for premium experiences."
  },
  {
    number: "5",
    title: "Creative & Impactful Planning",
    description:
      "We combine creativity and strategy to design events that align with corporate goals and brand identity."
  },
  {
    number: "6",
    title: "Transparent Pricing",
    description:
      "Customized event packages with clear, upfront pricing for corporates of all sizes in Hyderabad."
  },
];

const faqData = [
  {
    question: "Do you provide conference and seminar management in Hyderabad?",
    answer:
      "Yes, we specialize in organizing corporate conferences and seminars in Hyderabad with complete logistics, AV setup, and speaker coordination."
  },
  {
    question: "Can you plan product launches in Hyderabad?",
    answer:
      "Absolutely. We organize impactful product launches in Hyderabad’s top venues with creative branding and audience engagement."
  },
  {
    question: "Do you offer team-building and employee engagement events?",
    answer:
      "Yes, we provide customized team-building activities, retreats, and motivational events for companies in Hyderabad."
  },
  {
    question: "Can you handle large-scale exhibitions in Hyderabad?",
    answer:
      "Yes, our team manages trade fairs, exhibitions, and conventions with full crowd management services in Hyderabad."
  },
  {
    question: "Which industries do you serve in Hyderabad?",
    answer:
      "We serve IT, pharma, education, startups, real estate, and more — delivering tailored event solutions for each sector."
  },
];

const HydCorporate = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Event Management Company in Hyderabad - SRS Events</title>
        <meta
          name="description"
          content="SRS Events is a leading corporate event management company in Hyderabad. We organize conferences, seminars, product launches, team-building events, and exhibitions with creative planning and flawless execution."
        />
        <meta
          name="keywords"
          content="corporate event management Hyderabad, conference organizers Hyderabad, product launch planners Hyderabad, team building Hyderabad, corporate retreat Hyderabad, exhibition organizers Hyderabad, seminar event management Hyderabad"
        />
        <link rel="canonical" href="https://srsevent.com/corporate-event-management-hyderabad" />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage={bannerImg}
        heading="Corporate Event Management in Hyderabad"
        description="From corporate conferences and product launches to exhibitions and retreats in Hyderabad — SRS Events ensures precision, creativity, and impact for every event."
        buttonText="Plan Your Hyderabad Event"
        buttonLink="#enquirynow"
        bottomText="200+ Successful Corporate Events in Hyderabad | Trusted by Leading Brands"
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-7 mb-2'>
              <div className='pt-sm-3'>
                <ScrollAnimation animateIn='bounceInUp'>
                  <h2 className="fw-bold mb-3">
                    <span className='text-pink'> Expert </span>
                    Corporate Event Organisers in Hyderabad
                  </h2>
                  <p className='mt-3'>
                    At <strong>SRS Events Hyderabad</strong>, we provide end-to-end event planning for corporate gatherings. From conferences and seminars to exhibitions and team-building events — we deliver excellence.
                  </p>
                  <p className='mt-3'>
                    Whether it’s a product launch, a networking event, or a large-scale corporate gathering, our team ensures flawless execution with innovative ideas and professional management.
                  </p>
                  <p className='p-3 mt-3 mb-3 border rounded-2'>
                    Choose <strong>SRS Events Hyderabad</strong> for creative planning, transparent pricing, and reliable execution tailored to your business needs.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
              <div className='bg-pink py-4 rounded-5'>
                <ScrollAnimation animateIn='fadeInRight'>
                  <h2 className='text-white fs-4'>Book Your Hyderabad Event Planner</h2>
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
          highlight="Corporate Event Planning in Hyderabad"
          description="SRS Events offers tailored event planning for Hyderabad corporates — covering conferences, exhibitions, product launches, and retreats."
          extraText="We handle logistics, décor, crowd management, and full event coordination to ensure seamless execution."
          buttonText="Plan Your Hyderabad Event"
          image={wedimg}
          theme="#000"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <EventServicesSlider
          title="Explore Our"
          highlight="Corporate Event Services in Hyderabad"
          services={eventServices}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp'>
        <ImageTextBlock
          title={<><span className="text-pink">MICE</span> Solutions (Meetings, Incentives, Conferences, Exhibitions) in Hyderabad</>}
          description="We deliver professional MICE services in Hyderabad — integrating conferences, incentive programs, exhibitions, and corporate retreats with flawless planning."
          points={[
            "Conference and seminar planning in Hyderabad",
            "Team-building & employee engagement programs",
            "Product launches & trade fairs",
            "Creative exhibition setups"
          ]}
          image={CopEventOne}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <TextImageBlock
          title={<><span className="text-pink">Benefits</span> of Hiring Hyderabad Event Experts</>}
          description="Professional event planners in Hyderabad ensure stress-free, impactful, and goal-oriented corporate gatherings."
          points={[
            "Strong local vendor and venue network",
            "Professional crowd management services",
            "End-to-end planning & execution",
            "Tailored corporate solutions for Hyderabad businesses"
          ]}
          image={CopEventTwo}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <InfoCardsSection
          title="Our Vision and Mission for"
          subtitle="Corporate Event Management in Hyderabad"
          items={items}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn='bounceInUp'>
        <WhyChooseUsSection
          title="Why Choose"
          subtitle="SRS Events Hyderabad"
          description="Discover why corporates, startups, and associations in Hyderabad trust SRS Events for conferences, product launches, and team-building events."
          items={itemsWhyus}
        />
      </ScrollAnimation>

      <GallerySection
        title="Explore Our"
        highlight="Hyderabad Corporate Event Gallery"
        images={galleryImages}
      />

      <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

      <CTABanner
        backgroundImage={CopEvBgCta}
        title="Book Your Corporate Event in Hyderabad"
        subtitle="From corporate conferences and seminars to product launches and exhibitions — SRS Events Hyderabad is your trusted partner for seamless planning and execution."
        buttonText="Get Hyderabad Event Packages"
        buttonLink="#enquirynow"
      />

      <Footer />
    </>
  );
};

export default HydCorporate;
