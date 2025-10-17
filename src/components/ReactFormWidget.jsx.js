import React, { useState, useEffect } from "react";

const ReactFormWidget = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    let timer;
    if (!isOpen) {
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
            </div>
          </div>
          <div className="rfw-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
                setIsOpen(false);
              }}
            >
              <div className="rfw-form-group">
                <input type="text" placeholder="Name"  required />
              </div>

              <div className="rfw-form-group">
                <input type="email" placeholder="Email" required />
              </div>

              <div className="rfw-form-group">
                <input type="text" placeholder="Event Name" required />
              </div>

              <button type="submit" className="btn theme-btn bg-black w-100" style={{ fontSize: '12px' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReactFormWidget;
