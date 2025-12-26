import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>SrsEvent – Your Celebration, Your Style</title>
                <meta
                    name="description"
                    content="SrsEvent – Your Celebration, Your Style. Plan your perfect event with us."
                />
                <meta
                    name="keywords"
                    content="event planner, wedding, birthday, Bangalore events"
                />
                <link rel="canonical" href="https://srsevent.com/wedding-planners-bangalores" />
            </Helmet>
            {/* Header */}
            <Header />

            {/* Banner */}
            {/* breadcrumb */}
            <div className="site-breadcrumb">
                <div className="container">
                    <h2 className="breadcrumb-title">Privacy Policy</h2>
                </div>
            </div>

            {/* Policy Section */}
            <section className="py-5 bg-white">
                <div className="container">

                    <div className="mb-30">
                        <h4>1. Introduction</h4>
                        <p>
                            At <strong>SRS Events</strong>, your privacy is important to us. This Privacy Policy
                            explains how we collect, use, and safeguard your personal information when you engage
                            with our services or visit our website.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>2. Information We Collect</h4>
                        <ul>
                            <li>Personal details such as your name, phone number, and email address.</li>
                            <li>Event information including type, date, venue, and guest preferences.</li>
                            <li>Payment details for bookings and service agreements.</li>
                            <li>Any communication shared via email, WhatsApp, or contact forms.</li>
                        </ul>
                    </div>

                    <div className="mb-30">
                        <h4>3. How We Use Your Information</h4>
                        <ul>
                            <li>To provide event planning and management services.</li>
                            <li>To communicate quotes, updates, and service details.</li>
                            <li>To coordinate with trusted vendors and partners on your behalf.</li>
                            <li>For legal compliance and business record-keeping.</li>
                        </ul>
                    </div>

                    <div className="mb-30">
                        <h4>4. Sharing of Information</h4>
                        <p>
                            We do not sell your personal information. However, we may share your details with:
                        </p>
                        <ul>
                            <li>Event vendors and service providers strictly for event execution.</li>
                            <li>Legal authorities if required to comply with applicable laws.</li>
                            <li>Trusted partners only with your consent.</li>
                        </ul>
                    </div>

                    <div className="mb-30">
                        <h4>5. Data Security</h4>
                        <p>
                            We implement strict security measures to protect your personal information from
                            unauthorized access, misuse, or disclosure. However, no online transmission is 100%
                            secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>6. Your Rights</h4>
                        <ul>
                            <li>Request access to the personal information we hold about you.</li>
                            <li>Ask for corrections or updates to your data.</li>
                            <li>Request deletion of your personal data, subject to legal obligations.</li>
                        </ul>
                    </div>

                    <div className="mb-30">
                        <h4>7. Cookies & Website Usage</h4>
                        <p>
                            Our website may use cookies to improve user experience and analyze site performance.
                            You can disable cookies in your browser settings if you prefer.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>8. Changes to Privacy Policy</h4>
                        <p>
                            SRS Events reserves the right to update this Privacy Policy at any time. Please review
                            this page periodically to stay informed.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>9. Contact Us</h4>
                        <p>
                            If you have any questions about our Privacy Policy or how we handle your data, please
                            contact us:
                        </p>
                        <p>
                            📧 <a href="mailto:info@gmail.com">info@gmail.com</a> <br />
                            📞 <a href="tel:+971563543020">+971 563543020</a>,{' '}
                            <a href="tel:+919036124720">+91 90361 24720</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
