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
            "We aim to redefine corporate event management in Chennai by blending creativity, flawless logistics, and strategic execution for businesses of every scale."
    },
    {
        icon: "fas fa-handshake",
        title: "Mission",
        description:
            "At SRS Events Chennai, our mission is to be the most trusted partner for corporate gatherings, conferences, and launches — providing professional planning with world-class quality."
    }
];

const eventServices = [
    {
        title: "Corporate Conferences",
        desc: "We manage high-level conferences in Chennai, ensuring seamless logistics, engaging sessions, and impactful delivery.",
        img: Gal1,
        bg: "bg-white text-dark",
    },
    {
        title: "Team Building & Corporate Retreats",
        desc: "We curate team-building activities in Chennai and nearby destinations to strengthen collaboration and employee engagement.",
        img: Gal2,
        bg: "bg-white text-dark",
    },
    {
        title: "Product Launches & Exhibitions",
        desc: "From stage setups to media coverage, we deliver product launches and exhibitions that capture attention in Chennai’s competitive market.",
        img: Gal3,
        bg: "bg-light text-dark",
    },
];

const itemsWhyus = [
    {
        number: "1",
        title: "Chennai-Based Expertise",
        description:
            "With deep knowledge of Chennai’s business hubs, we understand the unique requirements of corporates in IT, automotive, and manufacturing industries."
    },
    {
        number: "2",
        title: "Trusted Corporate Event Specialists",
        description:
            "We deliver customized event planning solutions for board meetings, expos, seminars, and corporate celebrations."
    },
    {
        number: "3",
        title: "Proven Track Record",
        description:
            "500+ corporate events executed across Chennai and Tamil Nadu with precision and excellence."
    },
    {
        number: "4",
        title: "End-to-End Event Management",
        description:
            "From creative design to execution, we provide complete corporate event planning under one roof."
    },
    {
        number: "5",
        title: "Professional Crowd & Guest Management",
        description:
            "Our team ensures smooth guest experiences and safe event flow, even for high-footfall events."
    },
    {
        number: "6",
        title: "Innovative & Tech-Driven Approach",
        description:
            "We integrate modern technology, AV solutions, and creative designs to enhance your events."
    },
];

const faqData = [
    {
        question: "Do you handle IT and industry-specific events in Chennai?",
        answer:
            "Yes, SRS Events Chennai specializes in industry-focused events including IT summits, manufacturing expos, and corporate gatherings."
    },
    {
        question: "Can you plan product launches in Chennai?",
        answer:
            "Absolutely. We organize impactful product launches tailored for Chennai’s market, with complete stage, branding, and media solutions."
    },
    {
        question: "Do you manage corporate retreats outside Chennai?",
        answer:
            "Yes, we plan retreats in nearby destinations like Mahabalipuram, Pondicherry, and hill stations across Tamil Nadu."
    },
    {
        question: "Why choose SRS Events Chennai?",
        answer:
            "We combine Chennai expertise with global event standards, ensuring flawless delivery for every corporate event."
    },
];

const CheCorporateManagement = () => {
    return (
        <>
            <Helmet>
                <title>Corporate Event Management Company in Chennai - SRS Events</title>
                <meta
                    name="description"
                    content="SRS Events Chennai is a trusted corporate event management company. We organize conferences, product launches, exhibitions, team-building activities, and corporate retreats in Chennai."
                />
                <meta
                    name="keywords"
                    content="corporate event management Chennai, event organisers in Chennai, product launches Chennai, corporate conferences Chennai, event management companies Chennai"
                />
                <link rel="canonical" href="https://srsevent.com/corporate-event-management-company-chennai" />
            </Helmet>

            <Header />

            <HeroSection
                backgroundImage={bannerImg}
                heading="Corporate Event Management in Chennai"
                description="From high-impact conferences to product launches and corporate retreats in Chennai — SRS Events delivers innovative planning, flawless logistics, and memorable experiences."
                buttonText="Plan Your Chennai Event"
                buttonLink="#enquirynow"
                bottomText="500+ Successful Corporate Events | Trusted by Leading Brands in Chennai"
            />

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-7 mb-2'>
                            <div className='pt-sm-3'>
                                <ScrollAnimation animateIn='bounceInUp'>
                                    <h2 className="fw-bold mb-3">
                                        <span className='text-pink'> Leading </span>
                                        Corporate Event Organisers in Chennai
                                    </h2>
                                    <p className='mt-3'>
                                        At <strong>SRS Events Chennai</strong>, we provide end-to-end event planning for businesses. From corporate meetings to exhibitions, we ensure smooth execution for every occasion.
                                    </p>
                                    <p className='mt-3'>
                                        Whether it’s conferences in IT parks, automotive product launches, or team retreats — we deliver experiences that inspire growth and collaboration.
                                    </p>
                                    <p className='p-3 mt-3 mb-3 border rounded-2'>
                                        Choose <strong>SRS Events Chennai</strong> for professional planning, creative setups, and unmatched corporate event execution.
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
                            <div className='bg-pink py-4 rounded-5'>
                                <ScrollAnimation animateIn='fadeInRight'>
                                    <h2 className='text-white fs-4'>Plan your Chennai event now with us!</h2>
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
                    highlight="Corporate Event Management in Chennai"
                    description="SRS Events Chennai specializes in planning and executing corporate gatherings, conferences, exhibitions, and retreats tailored to Chennai’s industries."
                    extraText="We handle everything — from logistics and vendor management to creative stage setups and crowd management — ensuring stress-free event delivery."
                    buttonText="Plan Your Chennai Conference"
                    image={wedimg}
                    theme="#000"
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <EventServicesSlider
                    title="Explore Our Corporate"
                    highlight="Event Services in Chennai"
                    services={eventServices}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <ImageTextBlock
                    title={<><span className="text-pink">MICE</span> Solutions in Chennai</>}
                    description="We provide professional Meetings, Incentives, Conferences, and Exhibitions (MICE) services in Chennai, designed to deliver impactful experiences."
                    points={[
                        "Corporate conferences & seminars",
                        "Team incentives & bonding programs",
                        "Product exhibitions & trade shows",
                        "Flawless logistics & AV solutions"
                    ]}
                    image={CopEventOne}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInUp'>
                <TextImageBlock
                    title={<><span className="text-pink">Benefits</span> of Choosing SRS Chennai</>}
                    description="Our Chennai-based expertise ensures tailored event solutions for corporates across industries."
                    points={[
                        "Strong vendor network in Chennai",
                        "Access to premium venues & facilities",
                        "Seamless planning & execution",
                        "Trusted by top companies in Tamil Nadu"
                    ]}
                    image={CopEventTwo}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInUp'>
                <InfoCardsSection
                    title="Our Vision and Mission for"
                    subtitle="Corporate Events in Chennai"
                    items={items}
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounceInUp'>
                <WhyChooseUsSection
                    title="Why Choose"
                    subtitle="SRS Events Chennai"
                    description="We are the go-to corporate event organisers in Chennai, trusted for our local expertise and global standards."
                    items={itemsWhyus}
                />
            </ScrollAnimation>

            <GallerySection
                title="Explore Our"
                highlight="Corporate Event Gallery"
                images={galleryImages}
            />

            <FAQAccordion title="Frequently" highlight="Asked Questions" faqs={faqData} />

            <CTABanner
                backgroundImage={CopEvBgCta}
                title="Looking for Corporate Event Excellence in Chennai?"
                subtitle="Let SRS Events Chennai plan your next event with creativity, innovation, and flawless execution."
                buttonText="Book Your Chennai Event"
                buttonLink="#enquirynow"
            />

            <Footer />
        </>
    );
};

export default CheCorporateManagement;
