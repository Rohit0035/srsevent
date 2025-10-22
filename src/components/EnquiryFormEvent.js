import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postEnquiry } from "../services/api"; 
import Loader from "./Loader";

const EnquiryFormEvent = () => {
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
    { 
      loading ? (
        <Loader />
      ):
    
      <form onSubmit={handleSubmit} className="rounded">
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="form-control rounded-4"
              placeholder="Enter your Full Name"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control rounded-4"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="form-control rounded-4"
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-control rounded-4"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
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

          <div className="col-md-6 mb-3">
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

          <div className="col-md-12 mb-3">
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
          <div className="col-md-12 mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                name="whatsapp"
                checked={formData.whatsapp}
                onChange={handleChange}
                className="form-check-input"
                id="whatsapp"
              />
              <label
                className="form-check-label text-start w-100 text-white"
                htmlFor="whatsapp"
              >
                Send me updates on WhatsApp
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              className="btn theme-btn bg-black w-100"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {message && (
            <div className="col-md-12 mt-3">
              <p className="text-center">{message}</p>
            </div>
          )}
        </div>
      </form>
      }
    </>
  );
};

export default EnquiryFormEvent;
