import React, { useState } from 'react';
import hfoot from "../assets/img/common/h-foot.png"
import { useNavigate } from 'react-router-dom';
import { postEnquiry } from '../services/api';
const FreeQuote = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        date: "",
        event_type: "",
        event_location: "",
        relation: "",
        whatsapp: false,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await postEnquiry(formData); // ✅ call API service

            if (response.status === 200) {
                setFormData({
                    full_name: "",
                    email: "",
                    phone_number: "",
                    date: "",
                    event_type: "",
                    event_location: "",
                    relation: "",
                    whatsapp: false,
                });
                navigate("/thankyou");
            } else {
                setMessage(
                    `❌ Submission failed: ${response.data.message || "Try again."}`
                );
            }
        } catch (error) {
            console.error("CORS/Network Error:", error);
            setMessage("❌ Error submitting form. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* quote area */}
            <div className="quote-area py-5">
                <div className="container">
                    <div className="quote-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="quote-img">
                                    <img src={hfoot} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="quote-content">
                                    <div className="quote-header">
                                        <h6>Get Free Quote</h6>
                                        <h2>Feel Free To Contact With Us</h2>
                                    </div>
                                    <form onSubmit={handleSubmit} className="rounded">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="full_name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        value={formData.full_name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone_number"
                                                        className="form-control"
                                                        placeholder="Phone Number"
                                                        value={formData.phone_number}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        className="form-control"
                                                        placeholder="Date"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <select
                                                        name="event_type"
                                                        value={formData.event_type}
                                                        onChange={handleChange}
                                                        className="form-select rounded-4"
                                                        required
                                                    >
                                                        <option value="">Select an Event Type</option>
                                                        <option>Corporate Management</option>
                                                        <option>Inauguration Planners</option>
                                                        <option>Conferences and Seminar Event</option>
                                                        <option>Corporate Outdoor Events</option>
                                                        <option>Hospitality and Wellness Management</option>
                                                        <option>Award Ceremony</option>
                                                        <option>Wedding Planners</option>
                                                        <option>Destination Wedding</option>
                                                        <option>Engagement Planners</option>
                                                        <option>Birthday Planners</option>
                                                        <option>Baby Shower</option>
                                                        <option>Wedding Anniversary</option>
                                                        <option>Housewarming Event</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="event_location"
                                                        value={formData.event_location}
                                                        onChange={handleChange}
                                                        className="form-control rounded-4"
                                                        placeholder="Enter your Event Location"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="relation"
                                                value={formData.relation}
                                                onChange={handleChange}
                                                className="form-select rounded-4"
                                                required
                                            >
                                                <option value="">Select a Relation</option>
                                                <option>Friend</option>
                                                <option>Family</option>
                                                <option>Colleague</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <button className="theme-btn">
                                            Submit Now
                                            <i className="fas-arrow-right" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quote area end */}
        </>
    );
};

export default FreeQuote;
