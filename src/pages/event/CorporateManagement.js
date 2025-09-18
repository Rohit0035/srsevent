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

const galleryImages = [ Gal1, Gal2, Gal3, Gal4 ];

const items = [
    {
        icon: "fas fa-eye",
        title: "Vision",
        description:
            "We envision redefining the standards of event management companies in India by delivering exceptional event arrangement, strategic meetings management, and corporate bonding solutions."
    },
    {
        icon: "fas fa-handshake",
        title: "Mission",
        description:
            "SRS Events aims to be the most trusted destination management company and event organiser near you — providing innovative, reliable, and professional crowd management services for every occasion."
    }
];

const eventServices = [
    {
        title: "Corporate Conferences",
        desc: "We specialize in strategic meetings management, ensuring your conferences are productive, seamless, and impactful.",
        img: Gal1,
        bg: "bg-white text-dark",
    },
    {
        title: "Team Building & Corporate Bonding",
        desc: "Our corporate bonding activities foster stronger relationships, motivation, and collaboration within your organization.",
        img: Gal2,
        bg: "bg-white text-dark",
    },
    {
        title: "Destination Events",
        desc: "As a professional destination management company, we plan flawless destination corporate events with world-class hospitality.",
        img: Gal3,
        bg: "bg-light text-dark",
    },
];

const itemsWhyus = [
    {
        number: "1",
        title: "Certified & Trusted Event Management Company",
        description:
            "Recognized for excellence, SRS Events is among the most reliable event management companies in India."
    },
    {
        number: "2",
        title: "Corporate Event Specialists",
        description:
            "We handle corporate bonding, crowd management services, and event arrangement for small to large-scale business gatherings."
    },
    {
        number: "3",
        title: "6+ Years of Expertise",
        description:
            "With over 500 successful event management events delivered, we have mastered precision, creativity, and execution."
    },
    {
        number: "4",
        title: "Destination Event Management",
        description:
            "Our capabilities as a destination management company allow us to host events across India and abroad."
    },
    {
        number: "5",
        title: "Creative Event Planning",
        description:
            "We design innovative event planning solutions including setups, décor, and engagement activities."
    },
    {
        number: "6",
        title: "Efficient Strategic Meetings Management",
        description:
            "Our team ensures your meetings and corporate gatherings are well-planned, result-driven, and stress-free."
    },
    {
        number: "7",
        title: "Transparent Pricing",
        description:
            "We provide cost-effective corporate event management services with no hidden charges."
    },
    {
        number: "8",
        title: "Multi-City & International Execution",
        description:
            "From Bangalore to global destinations, we are the event organisers near you who make things possible."
    },
    {
        number: "9",
        title: "Proven Expertise in High-Footfall Events",
        description:
            "Our crowd management services ensure safe, seamless execution for large-scale events."
    }
];

const faqData = [
    {
        question: "Do you provide industry-specific corporate event management services?",
        answer:
            "Yes, SRS Events is an experienced event management company offering tailored event arrangement and strategic meetings management across industries."
    },
    {
        question: "Can you manage destination events or multi-location corporate events?",
        answer:
            "Absolutely. As a destination management company, we specialize in organizing events across India and internationally."
    },
    {
        question: "Do you handle crowd management services for large events?",
        answer:
            "Yes, we provide expert crowd management services to ensure smooth and safe event flow for high-footfall corporate gatherings."
    },
    {
        question: "What makes SRS Events different from other event organisers near me?",
        answer:
            "We combine creativity, technology, and reliability to deliver unmatched event management events and corporate bonding experiences."
    },
    {
        question: "Do you provide event planning for all types of corporate gatherings?",
        answer:
            "Yes, our event planning covers conferences, exhibitions, product launches, team-building activities, and more."
    },
    {
        question: "Are your services certified and recognized?",
        answer:
            "Yes, SRS Events is a recognized and certified event management company with a proven portfolio."
    }
];

const CorporateManagement = () => {
    return (
        <>
            <Helmet>
                <title>Corporate Event Management Company - SRS Events</title>
                <meta
                    name="description"
                    content="SRS Events is a leading corporate event management company in India. We specialize in event planning, crowd management services, destination events, strategic meetings management, and corporate bonding activities."
                />
                <meta
                    name="keywords"
                    content="crowd management services, destination management company, event arrangement, event management events, strategic meetings management, corporate bonding, event planning, event management companies, event organisers near me"
                />
                <link rel="canonical" href="https://srsevent.com/corporate-event-management-company-bangalore" />
            </Helmet>

            <Header />

            <HeroSection
                backgroundImage={bannerImg}
                heading="Crafting Excellence in Corporate Event Management"
                description="From strategic meetings management and corporate bonding activities to flawless event arrangement and large-scale event management events — SRS Events ensures every detail is handled with precision. Whether you need a destination management company or event organisers near you, we are your trusted partner."
                buttonText="Plan Your Corporate Event"
                buttonLink="#enquirynow"
                bottomText="500+ Successful Events | Trusted by Leading Brands"
            />

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-7 mb-2'>
                            <div className='pt-sm-3'>
                                <ScrollAnimation animateIn='bounceInUp'>
                                    <h2 className="fw-bold mb-3">
                                        <span className='text-pink'> Leading </span>
                                        Event Organisers Near You
                                    </h2>
                                    <p className='mt-3'>
                                        At <strong>SRS Events</strong>, we provide complete event planning solutions for corporate gatherings. From destination management company services to crowd management services, we ensure a seamless experience for every attendee.
                                    </p>
                                    <p className='mt-3'>
                                        Whether it’s conferences, product launches, or corporate bonding retreats — our team of experts creates engaging and result-driven event management events that leave a lasting impression.
                                    </p>
                                    <p className='p-3 mt-3 mb-3 border rounded-2'>
                                        Choose <strong>SRS Events</strong> for hassle-free event arrangement, innovative ideas, and professional execution — making us one of the most trusted event management companies in India.
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
                            <div className='bg-pink py-4 rounded-5'>
                                <ScrollAnimation animateIn='fadeInRight'>
                                    <h2 className='text-white fs-4'>Plan your event now with us!</h2>
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
                    highlight="Corporate Event Management Services"
                    description="SRS Events specializes in strategic meetings management, destination events, and corporate bonding solutions tailored for businesses."
                    extraText="As one of India’s leading event management companies, we provide everything from event arrangement to crowd management services, ensuring flawless execution every time."
                    buttonText="Plan Your Conference"
                    image={wedimg}
                    theme="#000"
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <EventServicesSlider
                    title="Explore Our Corporate"
                    highlight="Event Planning Services"
                    services={eventServices}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <ImageTextBlock
                    title={<><span className="text-pink">MICE</span> Solutions (Meetings, Incentives, Conferences, Exhibitions)</>}
                    description="We deliver professional MICE services — integrating strategic meetings management and event arrangement with engaging designs."
                    points={[
                        "Seamless corporate meeting planning",
                        "Incentives & corporate bonding programs",
                        "Conference logistics & execution",
                        "Creative exhibition setups"
                    ]}
                    image={CopEventOne}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInUp'>
                <TextImageBlock
                    title={<><span className="text-pink">Benefits</span> of Professional Event Planning</>}
                    description="Hiring expert event management companies ensures efficiency, reliability, and flawless delivery."
                    points={[
                        "Access to top vendors and logistics support",
                        "Professional crowd management services",
                        "Stress-free event arrangement and execution",
                        "Focus on goals while we manage the rest"
                    ]}
                    image={CopEventTwo}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInUp'>
                <InfoCardsSection
                    title="Our Vision and Mission for"
                    subtitle="Corporate Event Management"
                    items={items}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInUp'>
                <WhyChooseUsSection
                    title="Why Choose"
                    subtitle="SRS Events for Corporate Event Management"
                    description="Discover why SRS Events stands out among event organisers near you with unmatched planning and execution."
                    items={itemsWhyus}
                />
            </ScrollAnimation>

            <GallerySection
                title="Visit Our"
                highlight="Corporate Event Gallery"
                images={galleryImages}
            />

            <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

            <CTABanner
                backgroundImage={CopEvBgCta}
                title="Looking for Corporate Event Excellence?"
                subtitle="Let us manage your next event with seamless planning, innovative ideas, and expert execution. From strategic meetings management to destination events — we deliver perfection."
                buttonText="Book Your Corporate Event"
                buttonLink="#enquirynow"
            />

            <Footer />
        </>
    );
};

export default CorporateManagement;
