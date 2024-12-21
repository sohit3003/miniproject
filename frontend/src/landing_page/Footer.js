import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(245, 245, 245)", padding: "20px 0" }}>
      <div className="container text-center">
        {/* Logo */}
        <img
          src="media/images/market pulse image.png"
          alt="Company Logo"
          style={{ width: "250px", marginBottom: "10px" }}
        />

        {/* Essential Links */}
        <div style={{ marginBottom: "10px", fontSize: "14px" }}>
          <a href="/about" style={{ margin: "0 10px", color: "#555" }}>
            About
          </a>
          <a href="/contact" style={{ margin: "0 10px", color: "#555" }}>
            Contact
          </a>
          <a href="/support" style={{ margin: "0 10px", color: "#555" }}>
            Support
          </a>
          <a href="/privacy-policy" style={{ margin: "0 10px", color: "#555" }}>
            Privacy Policy
          </a>
        </div>

        {/* Disclaimer */}
        <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>
          Investments in securities market are subject to market risks; please
          read all related documents carefully before investing. For complaints,
          email <a href="mailto:complaints@marketpulse.com">complaints@marketpulse.com</a>.
        </p>

        {/* Copyright */}
        <p style={{ fontSize: "12px", color: "#777", margin: "5px 0 0" }}>
          &copy; 2010 - 2024, Not MraketPulse Broking Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
