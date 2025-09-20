import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const TermsConditions = () => {
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



            {/* breadcrumb */}
            <div className="site-breadcrumb">
                <div className="container">
                    <h2 className="breadcrumb-title">Terms & Conditions</h2>
                </div>
            </div>

            {/* Terms Section */}
            <section className="py-5 bg-white">
                <div className="container">

                    <div className="mb-30">
                        <h4>1. Acceptance of Terms</h4>
                        <p>
                            By accessing or using the services of <strong>SRS Events</strong>, you agree to be
                            bound by these Terms & Conditions. If you do not agree, you should discontinue use of
                            our website and services immediately.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>2. Services</h4>
                        <p>
                            SRS Events provides event planning, management, and coordination services. Service
                            details, inclusions, and exclusions will be specified in the final agreement or
                            contract with each client.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>3. Booking & Payments</h4>
                        <ul>
                            <li>A booking is considered confirmed only after an advance payment is received.</li>
                            <li>All payments must be made within the timeline specified in the invoice.</li>
                            <li>Failure to complete payment may result in cancellation of services.</li>
                        </ul>
                    </div>

                    <div className="mb-30">
                        <h4>4. Cancellations & Refunds</h4>
                        <ul>
                            <li>
                                Cancellation requests must be submitted in writing via email or official
                                communication.
                            </li>
                            <li>
                                Refunds, if applicable, will be processed as per the cancellation policy outlined in
                                the client agreement.
                            </li>
                            <li>
                                Advance payments may be non-refundable due to vendor bookings and administrative
                                costs.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-30">
                        <h4>5. Client Responsibilities</h4>
                        <ul>
                            <li>Provide accurate event details, preferences, and timely approvals.</li>
                            <li>Ensure access to the venue for event setup and execution.</li>
                            <li>Comply with all legal and safety regulations during the event.</li>
                        </ul>
                    </div>

                    <div className="mb-30">
                        <h4>6. Vendor & Third-Party Services</h4>
                        <p>
                            SRS Events may collaborate with third-party vendors (decorators, caterers,
                            entertainers, etc.). While we ensure quality, we are not liable for delays,
                            cancellations, or service issues caused by third parties.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>7. Limitation of Liability</h4>
                        <p>
                            SRS Events is not responsible for unforeseen circumstances such as natural disasters,
                            strikes, government restrictions, or emergencies that may affect event execution. Our
                            liability, if proven, shall not exceed the total amount paid for services.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>8. Intellectual Property</h4>
                        <p>
                            All content on our website, including text, images, and logos, is the property of SRS
                            Events and may not be copied, reproduced, or used without prior written consent.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>9. Changes to Terms</h4>
                        <p>
                            SRS Events reserves the right to update these Terms & Conditions at any time. Clients
                            are advised to review them periodically.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>10. Governing Law</h4>
                        <p>
                            These Terms & Conditions are governed by the laws of India and the United Arab
                            Emirates, where SRS Events operates.
                        </p>
                    </div>

                    <div className="mb-30">
                        <h4>11. Contact Us</h4>
                        <p>
                            For any questions or clarifications regarding these Terms & Conditions, please contact
                            us:
                        </p>
                        <p>
                            📧 <a href="mailto:info@gmail.com">info@gmail.com</a> <br />
                            📞 <a href="tel:+971504418336">+971 504418336</a>,{' '}
                            <a href="tel:+919036124720">+91 90361 24720</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default TermsConditions;
