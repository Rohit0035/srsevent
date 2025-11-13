import React, { useState, useEffect } from "react";
import { postShortEnquiry } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "./Loader";

const ReactFormWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDataSubmited, setIsDataSubmited] = useState(false);
   const [formData, setFormData] = useState({
      full_name: "",
      email: "",
      event_name: "",
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
        const response = await postShortEnquiry(formData); // ✅ call API service
  
        if (response.status === 200) {
          setFormData({
            full_name: "",
            email: "",
            event_name: "",
          });
          // setIsOpen(false)
          toast.success('Data submitted successfully')
          setIsDataSubmited(true)
          setIsOpen(false)
          setMessage('Data submitted successfully')
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

  useEffect(() => {
    let timer;
    if (!isOpen && !isDataSubmited) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="rfw-widget animate-slide-up">
          <div className="rfw-header">
            <div className="rfw-header-content">
              <h3 className="text-white">
                Contact Us
                <span style={{ float: 'right' }}>
                  <i className="fas fa-times" style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}></i>
                </span>
              </h3>
              <ToastContainer />
            </div>
          </div>
          <div className="rfw-body">
            {
              loading ? (
                <div style={{ color: "#fff", textAlign: "center", height: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  Submitting...
                </div>
              ) : 
            
            <form onSubmit={handleSubmit} >
              <div className="rfw-form-group">
                <input 
                  type="text" 
                  name="full_name"
                  placeholder="Name"  
                  required 
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </div>

              <div className="rfw-form-group">
                <input 
                  type="text"
                  name="email" 
                  placeholder="Email/phone" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="rfw-form-group">
                <input 
                  type="text" 
                  name="event_name"
                  placeholder="Event Name" 
                  required 
                  value={formData.event_name}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn theme-btn bg-black w-100" style={{ fontSize: '12px' }}>
                Send Message
              </button>
            </form>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default ReactFormWidget;
