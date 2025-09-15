// src/pages/ThankYou.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
      <div
        className="card shadow-lg text-center p-4 border-0"
        style={{ maxWidth: "500px", borderRadius: "20px" }}
      >
        <div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{
            width: "90px",
            height: "90px",
            backgroundColor: "#9c2356",
            color: "#fff",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          ✓
        </div>

        <h1 className="fw-bold mb-3" style={{ color: "#9c2356" }}>
          Thank You!
        </h1>
        <p className="text-muted mb-4 fs-5">
          Your submission has been received successfully. <br />
          We’ll get back to you shortly.
        </p>

        <button
          onClick={() => navigate("/")}
          className="btn btn-lg text-white px-4 py-2"
          style={{ backgroundColor: "#9c2356" }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
