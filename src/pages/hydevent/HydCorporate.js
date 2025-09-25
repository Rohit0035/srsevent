import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import ScrollAnimation from 'react-animate-on-scroll';

// Event Images (Corporate Hyderabad)
import bannerImg from "../../assets/img/events/hyd-bg.jpeg";
import abtImg from "../../assets/img/events/hyd-abt2.jpeg";
import corpImgOne from "../../assets/img/events/hyd-gal-2.jpg";
import corpImgTwo from "../../assets/img/events/hyd-g-5.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/hyd-g-1.jpg";
import Gal2 from "../../assets/img/events/hyd-g-5.jpg";
import Gal3 from "../../assets/img/events/hyd-g-3.jpg";
import Gal4 from "../../assets/img/events/hyd-g-4.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4];

const eventServices = [
    {
        title: "Corporate Conferences",
        desc: "From seamless registrations to technical support, we ensure smooth execution of corporate conferences in Hyderabad.",
        img: Gal1,
        bg: "bg-white text-dark",
    },
    {
        title: "Product Launches",
        desc: "Creative stage setups, audio-visuals, and impactful experiences for successful product launches across Hyderabad.",
        img: Gal2,
        bg: "bg-light text-dark",
    },
    {
        title: "Team-Building Retreats",
        desc: "We design engaging corporate retreats and bonding sessions in Hyderabad and nearby destinations.",
        img: Gal3,
        bg: "bg-white text-dark",
    },
];

const itemsWhyus = [
    { number: "1", title: "Corporate Expertise", description: "Specialists in Hyderabad corporate event planning with 6+ years of experience." },
    { number: "2", title: "Prime Hyderabad Venues", description: "Partnerships with HITEX, Shilpakala Vedika, and premium 5-star hotels." },
    { number: "3", title: "End-to-End Services", description: "From ideation to execution, we handle logistics, décor, AV, and hospitality." },
    { number: "4", title: "Innovative Event Concepts", description: "We bring unique ideas for conferences, expos, and launches." },
    { number: "5", title: "Trusted by Leading Brands", description: "Top corporates in Hyderabad rely on us for seamless event management." },
];

const faqData = [
    {
        question: "Do you manage corporate events in Hyderabad’s HITEC City?",
        answer: "Yes, we specialize in conferences, MICE events, and corporate gatherings across HITEC City and business hubs."
    },
    {
        question: "Can you arrange product launches at premium venues?",
        answer: "Absolutely. We handle stage design, AV setups, and media coverage for impactful launches."
    },
    {
        question: "Do you provide end-to-end event services?",
        answer: "Yes, from planning to hospitality, décor, branding, and logistics – we manage everything."
    },
    {
        question: "Do you offer team-building retreats?",
        answer: "Yes, we organize engaging corporate retreats and off-site bonding experiences in Hyderabad and nearby destinations."
    }
];

// New Section – Hyderabad Venues
const HyderabadVenues = () => (
    <section className="py-5 bg-light">
        <div className="container">
            <h2 className="fw-bold text-center mb-4">Top <span className="text-pink">Corporate Venues in Hyderabad</span></h2>
            <div className="row">
                {[
                    { name: "HITEX Exhibition Center", desc: "Perfect for expos, mega conferences, and conventions." },
                    { name: "Shilpakala Vedika", desc: "Ideal for corporate gatherings, cultural shows, and seminars." },
                    { name: "5-Star Hotels & Resorts", desc: "Premium corporate events at Taj Krishna, Novotel, and ITC Kakatiya." },
                ].map((venue, i) => (
                    <div className="col-md-4 mb-3" key={i}>
                        <div className="card shadow-sm rounded-4 h-100">
                            <div className="card-body">
                                <h5 className="fw-bold">{venue.name}</h5>
                                <hr />
                                <p>{venue.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// New Section – Testimonials
const Testimonials = () => (
    <section className="py-5">
        <div className="container">
            <h2 className="fw-bold text-center mb-4">Corporate Client <span className="text-pink">Testimonials</span></h2>
            <div className="row">
                {[
                    { text: "Our corporate summit at HITEX was managed flawlessly. The arrangements exceeded expectations.", name: "Infosys Hyderabad" },
                    { text: "We launched our new product at Novotel and the event was a huge success thanks to the SRS Events team.", name: "TechCorp Pvt Ltd" },
                ].map((t, i) => (
                    <div className="col-md-6 mb-3" key={i}>
                        <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                            <p className="fst-italic">“{t.text}”</p>
                            <h6 className="fw-bold mt-3">- {t.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// New Section – Quick Facts
const QuickFacts = () => (
    <section className="py-5 bg-light">
        <div className="container text-center">
            <h2 className="fw-bold mb-4">
                Corporate <span className="text-pink">Quick Facts</span>
            </h2>
            <div className="row">
                {[
                    { num: "300+", label: "Corporate Events Managed", icon: "fas fa-calendar-check" },
                    { num: "50+", label: "Top Corporate Clients", icon: "fas fa-building" },
                    { num: "6+", label: "Years of Experience", icon: "fas fa-award" },
                ].map((fact, i) => (
                    <div className="col-md-4 mb-3" key={i}>
                        <div className="p-4 bg-white shadow rounded-4 h-100">
                            <div className="d-flex justify-content-center mb-3">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: "#fce4ec",
                                    }}
                                >
                                    <i className={`${fact.icon} text-pink fs-4`}></i>
                                </div>
                            </div>
                            <h3 className="text-pink fw-bold">{fact.num}</h3>
                            <p>{fact.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const HydCorporate = () => {
    return (
        <>
            <Helmet>
                <title>Corporate Event Management Hyderabad - Conferences, Product Launches & More</title>
                <meta
                    name="description"
                    content="SRS Events is the leading corporate event management company in Hyderabad. From conferences and expos to product launches and retreats, we deliver flawless corporate events."
                />
                <meta
                    name="keywords"
                    content="corporate event management Hyderabad, business events Hyderabad, conference organisers Hyderabad, product launch events Hyderabad, corporate retreats Hyderabad"
                />
                <link rel="canonical" href="https://srsevent.com/corporate-event-management-company-hyderabad" />
            </Helmet>

            <Header />

            <HeroSection
                backgroundImage={bannerImg}
                heading="Hyderabad’s Leading Corporate Event Management"
                description="From corporate conferences in HITEC City to product launches and retreats, SRS Events is your trusted partner for professional event management in Hyderabad."
                buttonText="Plan Your Corporate Event"
                buttonLink="#enquirynow"
                bottomText="300+ Corporate Events | Trusted by 50+ Leading Brands"
            />

            {/* About Section */}
            <ScrollAnimation animateIn='fadeInUp'>
                <EventDetailAbout
                    title="About Our"
                    highlight="Corporate Event Services in Hyderabad"
                    description="We specialize in managing impactful corporate events across Hyderabad — ensuring flawless execution, professional setups, and unforgettable experiences."
                    extraText="Our expert team handles everything – from venue selection and décor to logistics and hospitality."
                    buttonText="Get Started"
                    image={abtImg}
                    theme="#000"
                />
            </ScrollAnimation>

            {/* Services */}
            <ScrollAnimation animateIn='fadeInUp'>
                <EventServicesSlider
                    title="Our Corporate"
                    highlight="Event Planning Services"
                    services={eventServices}
                />
            </ScrollAnimation>

            <ImageTextBlock
                title={<><span className="text-pink">Conferences</span> & Seminars</>}
                description="We manage corporate conferences and seminars with precision — from registrations to AV setups and hospitality."
                points={[
                    "Seamless registrations & logistics",
                    "Professional audio-visual management",
                    "On-site coordination & hospitality",
                ]}
                image={corpImgOne}
            />

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-7 mb-2'>
                            <div className='pt-sm-3'>
                                <ScrollAnimation animateIn='bounceInUp'>
                                    <h2 className="fw-bold mb-3">
                                        <span className='text-pink'> Professional </span>
                                        Corporate Event Organisers in Hyderabad
                                    </h2>
                                    <p className='mt-3'>
                                        At <strong>SRS Events</strong>, we provide comprehensive solutions for corporate gatherings — ensuring smooth execution and impactful experiences.
                                    </p>
                                    <p className='mt-3'>
                                        From international conferences to leadership summits and product launches, our expert team ensures everything is handled with professionalism.
                                    </p>
                                    <p className='p-3 mt-3 mb-3 border rounded-2'>
                                        Choose <strong>SRS Events</strong> for innovative concepts, seamless execution, and exceptional results — making us the most trusted corporate event management company in Hyderabad.
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-5 mb-2 text-center' id="enquirynow">
                            <div className='bg-pink py-4 rounded-5'>
                                <ScrollAnimation animateIn='fadeInRight'>
                                    <h2 className='text-white fs-4'>Plan your corporate event now!</h2>
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

            <TextImageBlock
                title={<><span className="text-pink">Product Launches</span> & Expos</>}
                description="We specialize in impactful corporate product launches, trade expos, and promotional events in Hyderabad."
                points={[
                    "Creative stage design & branding",
                    "High-tech audio-visual setup",
                    "Media coverage & guest engagement",
                ]}
                image={corpImgTwo}
            />

            {/* New Sections */}
            <HyderabadVenues />
            <Testimonials />
            <QuickFacts />

            {/* Why Choose Us */}
            <WhyChooseUsSection
                title="Why Choose"
                subtitle="SRS Events for Hyderabad Corporate Events"
                description="We combine professionalism, innovation, and flawless execution to deliver Hyderabad’s best corporate events."
                items={itemsWhyus}
            />

            <GallerySection
                title="Explore Our"
                highlight="Corporate Event Gallery"
                images={galleryImages}
            />

            <FAQAccordion title="Corporate Event" highlight="FAQs" faqs={faqData} />

            <CTABanner
                backgroundImage={CopEvBgCta}
                title="Plan Your Corporate Event in Hyderabad with Us"
                subtitle="From conferences to product launches, SRS Events delivers creativity, professionalism, and flawless execution."
                buttonText="Book Your Corporate Event"
                buttonLink="#enquirynow"
            />

            <Footer />
        </>
    );
};

export default HydCorporate;