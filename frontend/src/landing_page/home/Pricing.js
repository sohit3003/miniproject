import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#333" }}>
          Unbeatable Pricing
        </h1>
        <p className="text-muted" style={{ fontSize: "1.2rem" }}>
          We pioneered the concept of discount broking and price transparency
          in India. Flat fees and no hidden charges.
        </p>
        <a
          href=""
          style={{
            fontSize: "1.1rem",
            color: "#007BFF",
            fontWeight: "500",
            textDecoration: "none",
          }}
        >
          See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>

      {/* Pricing Cards Section */}
      <div className="d-flex justify-content-between align-items-center flex-wrap text-center">
        {/* Left-aligned Pricing Card */}
        <div
          className="card shadow-lg border-0 rounded-lg mx-3"
          style={{
            width: "300px",
            padding: "40px",
            backgroundColor: "#F8F9FA",
            textAlign: "center",
            transition: "transform 0.3s ease",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "700", color: "#28a745" }}>
            ₹0
          </h1>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Free equity delivery and <br /> direct mutual funds
          </p>
        </div>

        {/* Right-aligned Pricing Card */}
        <div
          className="card shadow-lg border-0 rounded-lg mx-3"
          style={{
            width: "300px",
            padding: "40px",
            backgroundColor: "#F8F9FA",
            textAlign: "center",
            transition: "transform 0.3s ease",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "700", color: "#ff6f61" }}>
            ₹20
          </h1>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Intraday and F&O trades
          </p>
        </div>
      </div>

      {/* Optional Footer Section */}
      <div className="text-center mt-5">
        <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
          Transparent pricing. No hidden charges.
        </p>
      </div>
    </div>
  );
}

export default Pricing;
