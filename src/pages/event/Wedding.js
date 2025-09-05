import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet-async";
import EnquiryFormEvent from '../../components/EnquiryFormEvent';
import EventDetailAbout from '../../components/EventDetailAbout';
import wedimg from "../../assets/img/common/ph-grid.png"
import ser1img from "../../assets/img/common/ph-4.jpg"
import ser2img from "../../assets/img/common/ser-furn.jpg"
import ser3img from "../../assets/img/common/home-abt.jpg"

import EventServicesSlider from '../../components/EventServicesSlider';

const weddingServices = [
    {
        title: "Traditional Wedding",
        desc: "We organize authentic Indian traditional weddings that beautifully blend rituals and celebrations.",
        img: ser1img,
        bg: "bg-white text-dark",
    },
    {
        title: "Theme Wedding ",
        desc: "We craft theme-based weddings tailored to your ideas, creating a magical and personalized experience.",
        img: ser2img,
        bg: "bg-white text-dark",
    },
    {
        title: "Destination Wedding",
        desc: "From palaces to beaches, we plan destination weddings that combine luxury with unforgettable memories.",
        img: ser3img,
        bg: "bg-light text-dark",
    },
];
const Wedding = () => {
    return (
        <>
            <Header />
            <section
                className="position-relative text-white text-center d-flex align-items-center event1-bg">
                {/* Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

                <div className="container position-relative">
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8'>
                            <h1 className="fw-bold display-5 text-white">
                                Wedding Event Management
                            </h1>
                            <p className="mt-3">
                                Celebrate the most beautiful day of your life with <strong>SRS Events</strong>.
                                From traditional rituals to modern celebrations, we design weddings that reflect your love story in the most elegant way.
                                Our expert planners ensure that every detail – from décor and entertainment to hospitality – is flawlessly executed,
                                making your wedding truly unforgettable.
                            </p>
                            <a href="/contact" class="theme-btn mt-2">Reach Out to Us <i class="fas fa-arrow-right"></i></a>
                            <div className="mt-3 small">
                                <span>⭐ 4.9 Google Rating</span> |{" "}
                                <span>6+ years of corporate event experience</span> |{" "}
                                <span>500+ events managed</span> |{" "}
                                <span>Trusted by top brands</span> |{" "}
                            </div>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 mb-2'>
                            <div className='pt-sm-3'>
                                <h2 className="site-title">
                                    <span> Expert Wedding </span>
                                    Event Organizers in Bangalore
                                </h2>

                                <p className='mt-3'>
                                    Weddings are once-in-a-lifetime moments that bring together families, friends, and traditions in a celebration of love.
                                    At <strong>SRS Events</strong>, we create magical weddings with seamless planning, breathtaking décor, and thoughtful arrangements that leave lasting memories for you and your guests.
                                </p>

                                <p className='mt-3'>
                                    If you are looking for the right wedding event management company in Bangalore, choose SRS Events.
                                    Our passionate team specializes in designing weddings that blend elegance, culture, and modern trends —
                                    ensuring your special day is as unique as your love story.
                                </p>

                                <p className='p-3 mt-3 mb-3 border rounded-2'>
                                    Celebrate your wedding with <strong>SRS Events</strong> and experience flawless planning for your engagement, mehendi, sangeet, reception,
                                    and the big day itself. We take care of every detail to make your wedding truly unforgettable.
                                </p>
                            </div>

                        </div>
                        <div className='col-md-5 mb-2 text-center'>
                            <div className='bg-pink py-4 rounded-5'>
                                <h2 className='text-white fs-3'>Plan your event now with us!</h2>
                                <hr style={{ borderColor: '#fff' }} />
                                <div className="quote-content " style={{ backgroundColor: '#9c2356' }}>
                                    <EnquiryFormEvent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* weddding event about */}
            <EventDetailAbout
                title="Celebrate Love with"
                highlight="SRS Events"
                description="At SRS Events, we specialize in creating unforgettable wedding celebrations that are a true reflection of your love story."
                extraText="From venue selection and décor to entertainment and hospitality, we handle everything with precision and creativity."
                buttonText="Read More About Us"
                image={wedimg}
                theme="#000" // Red theme for weddings
            />
          
             {/* wedding event services */}
            <EventServicesSlider
                title="Explore Our Unique"
                highlight="Wedding Services"
                services={weddingServices}
            />
            <Footer />
        </>
    );
};

export default Wedding;