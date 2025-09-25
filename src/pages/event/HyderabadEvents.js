import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import EventServicesSlider from '../../components/EventServicesSlider';
import ImageTextBlock from '../../components/ImageTextBlock';
import TextImageBlock from '../../components/TextImageBlock';
import InfoCardsSection from '../../components/InfoCardsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import CTABanner from '../../components/CTABanner';
import GallerySection from '../../components/GallerySection';
import FAQAccordion from '../../components/FAQAccordion';
import HeroSection from '../../components/HeroSection';
import ScrollAnimation from 'react-animate-on-scroll';

// Event Images (replace with Hyderabad-specific later if available)
import bannerImg from "../../assets/img/events/hyd-bg.jpeg";
import wedimg from "../../assets/img/events/hyd-abt-1.png";
import CopEventOne from "../../assets/img/events/hyd-abt2.jpeg";
import CopEventTwo from "../../assets/img/events/hyd-abt3.jpg";
import CopEvBgCta from "../../assets/img/events/cop-ev-bg.jpg";
import Gal1 from "../../assets/img/events/hyd-g-1.jpg";
import Gal2 from "../../assets/img/events/hyd-g-5.jpg";
import Gal3 from "../../assets/img/events/hyd-g-3.jpg";
import Gal4 from "../../assets/img/events/hyd-g-4.jpg";
import Gal5 from "../../assets/img/events/hyd-g-6.jpg";
import Gal6 from "../../assets/img/events/hyd-g-7.jpg";
import Gal7 from "../../assets/img/events/hyd-g-8.jpg";
import Gal8 from "../../assets/img/events/hyd-g-1.jpg";

const galleryImages = [Gal1, Gal2, Gal3, Gal4, Gal5, Gal6, Gal7, Gal8];

const eventServices = [
    {
        title: "Hyderabad Weddings",
        desc: "From palatial weddings at Taj Falaknuma Palace to intimate ceremonies, we blend traditional Hyderabadi charm with modern elegance.",
        img: Gal1,
        bg: "bg-white text-dark",
    },
    {
        title: "Corporate Events in HITEC City",
        desc: "Seamless conferences, product launches, and seminars across Hyderabad’s IT hubs with world-class arrangements.",
        img: Gal2,
        bg: "bg-light text-dark",
    },
    {
        title: "Destination & Luxury Events",
        desc: "Planning a royal destination event? We manage exotic resorts and premium Hyderabad venues with perfection.",
        img: Gal3,
        bg: "bg-white text-dark",
    },
];

const itemsWhyus = [
    { number: "1", title: "Trusted Hyderabad Event Experts", description: "With 6+ years of expertise, we are Hyderabad’s preferred event organisers." },
    { number: "2", title: "Iconic Venue Partnerships", description: "Strong tie-ups with venues like Taj Falaknuma, HITEX, and Shilpakala Vedika." },
    { number: "3", title: "Cultural Integration", description: "Hyderabadi cuisine, Qawwali nights, and royal setups tailored for events." },
    { number: "4", title: "Corporate Event Specialists", description: "Expertise in HITEC City business gatherings and brand launches." },
    { number: "5", title: "Luxury Destination Planning", description: "Flawless management of high-end luxury events across Hyderabad." },
];

const faqData = [
    {
        question: "Do you provide wedding planning services in Hyderabad?",
        answer: "Yes, we specialize in Hyderabad weddings at iconic venues like Taj Falaknuma, Shilpakala Vedika, and top resorts."
    },
    {
        question: "Can you arrange corporate conferences in HITEC City?",
        answer: "Absolutely. We manage conferences, product launches, and MICE events for Hyderabad’s corporate hubs."
    },
    {
        question: "Do you offer cultural-themed events?",
        answer: "Yes. We curate Hyderabadi cultural themes with cuisine, décor, and music to make events unforgettable."
    },
    {
        question: "Can you plan multi-day destination events?",
        answer: "Yes, we handle luxury destination and multi-day celebrations in Hyderabad and nearby locations."
    }
];

// New Section – Hyderabad Venues
const HyderabadVenues = () => (
    <section className="py-5 bg-light">
        <div className="container">
            <h2 className="fw-bold text-center mb-4">Top <span className="text-pink">Hyderabad Venues</span></h2>
            <div className="row">
                {[
                    { name: "Taj Falaknuma Palace", desc: "Royal weddings & luxury events in a palace setting." },
                    { name: "HITEX Exhibition Center", desc: "Corporate events, expos, and mega conferences." },
                    { name: "Shilpakala Vedika", desc: "Cultural programs, weddings, and large gatherings." },
                ].map((venue, i) => (
                    <div className="col-md-4 mb-3" key={i}>
                        <div className="card shadow-sm rounded-4 h-100">
                            <div className="card-body">
                                <h5 className="fw-bold">{venue.name}</h5>
                                <hr/>
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
            <h2 className="fw-bold text-center mb-4">Client <span className="text-pink">Testimonials</span></h2>
            <div className="row">
                {[
                    { text: "Our wedding at Taj Falaknuma was magical! The team managed every detail perfectly.", name: "Rashmi & Ankit" },
                    { text: "Our corporate conference at HITEX was seamless. Guests were impressed by the arrangements.", name: "TechCorp Pvt Ltd" },
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

// New Section – Cultural Touch
const CulturalTouch = () => (
    <section className="py-5 bg-dark text-white">
        <div className="container text-center">
            <h2 className="fw-bold mb-3 text-white">Adding a <span className="text-pink">Cultural Touch</span></h2>
            <p className="mb-0">
                From Hyderabadi Dum Biryani counters to Qawwali performances and <br />
                Nizami-inspired décor, we bring the soul of Hyderabad into your events.</p>
            <a href="#enquirynow" class="theme-btn mt-4">Book Your Event</a>
        </div>
    </section>
);

// New Section – Quick Facts
const QuickFacts = () => (
    <section className="py-5 bg-light">
        <div className="container text-center">
            <h2 className="fw-bold mb-4">
                Quick <span className="text-pink">Facts</span>
            </h2>
            <div className="row">
                {[
                    { num: "500+", label: "Events in Hyderabad", icon: "fas fa-calendar-check" },
                    { num: "10+", label: "Iconic Venues Covered", icon: "fas fa-landmark" },
                    { num: "6+", label: "Years of Expertise", icon: "fas fa-award" },
                ].map((fact, i) => (
                    <div className="col-md-4 mb-3" key={i}>
                        <div className="p-4 bg-white shadow rounded-4 h-100">
                            {/* Icon */}
                            <div className="d-flex justify-content-center mb-3">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: "#fce4ec", // light pink background
                                    }}
                                >
                                    <i className={`${fact.icon} text-pink fs-4`}></i>
                                </div>
                            </div>

                            {/* Numbers */}
                            <h3 className="text-pink fw-bold">{fact.num}</h3>
                            <p>{fact.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

);

const HyderabadEvents = () => {
    return (
        <>
            <Helmet>
                <title>Hyderabad Event Management Company - Weddings & Corporate Events</title>
                <meta
                    name="description"
                    content="SRS Events is the leading event management company in Hyderabad. From royal weddings to corporate conferences and destination events, we make your celebrations unforgettable."
                />
                <meta
                    name="keywords"
                    content="Hyderabad event management company, wedding planners Hyderabad, corporate events Hyderabad, event organisers Hyderabad, luxury events Hyderabad, destination weddings Hyderabad"
                />
                <link rel="canonical" href="https://srsevent.com/hyderabad-events" />
            </Helmet>

            <Header />

            <HeroSection
                backgroundImage={bannerImg}
                heading="Crafting Unforgettable Hyderabad Events"
                description="From royal weddings at Taj Falaknuma to corporate gatherings in HITEC City, SRS Events is your trusted partner in Hyderabad event management."
                buttonText="Plan Your Event Now"
                buttonLink="#enquirynow"
                bottomText="500+ Events in Hyderabad | Trusted by Leading Brands"
            />



            {/* About Section */}
            <ScrollAnimation animateIn='fadeInUp'>
                <EventDetailAbout
                    title="About Our"
                    highlight="Hyderabad Event Management Services"
                    description="We specialize in creating unforgettable events in Hyderabad — from cultural weddings to high-profile corporate conferences."
                    extraText="Our team integrates Hyderabad’s rich traditions with modern event management for truly remarkable celebrations."
                    buttonText="Get Started"
                    image={wedimg}
                    theme="#000"
                />
            </ScrollAnimation>

            {/* Services */}
            <ScrollAnimation animateIn='fadeInUp'>
                <EventServicesSlider
                    title="Explore Our Hyderabad"
                    highlight="Event Planning Services"
                    services={eventServices}
                />
            </ScrollAnimation>

            <ImageTextBlock
                title={<><span className="text-pink">Weddings</span> in Hyderabad</>}
                description="Experience royal weddings with Nizami-style décor, traditional rituals, and luxury venues that reflect Hyderabad’s grandeur."
                points={[
                    "Palace & resort weddings",
                    "Traditional Hyderabadi themes",
                    "World-class catering services",
                ]}
                image={CopEventOne}
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


            <TextImageBlock
                title={<><span className="text-pink">Corporate</span> Events in Hyderabad</>}
                description="From HITEC City business gatherings to international conferences, we handle professional corporate events with precision."
                points={[
                    "Seamless conference management",
                    "Product launches & seminars",
                    "Corporate bonding activities",
                ]}
                image={CopEventTwo}
            />

            {/* New Sections */}
            <HyderabadVenues />
            <Testimonials />
            <CulturalTouch />
            <QuickFacts />

            {/* Why Choose Us */}
            <WhyChooseUsSection
                title="Why Choose"
                subtitle="SRS Events for Hyderabad"
                description="We combine Hyderabad’s rich heritage with world-class event management for unforgettable celebrations."
                items={itemsWhyus}
            />

            <GallerySection
                title="Explore Our"
                highlight="Hyderabad Event Gallery"
                images={galleryImages}
            />

            <FAQAccordion title="Hyderabad Event" highlight="FAQs" faqs={faqData} />

            <CTABanner
                backgroundImage={CopEvBgCta}
                title="Plan Your Hyderabad Event with Us"
                subtitle="From iconic weddings to corporate conferences, we bring creativity and expertise to make your event remarkable."
                buttonText="Book Your Event"
                buttonLink="#enquirynow"
            />

            <Footer />
        </>
    );
};

export default HyderabadEvents;
