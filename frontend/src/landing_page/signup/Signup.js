import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleGenerateOtp = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("http://localhost:3002/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(`OTP sent successfully! Please check your email.`);
        setOtpSent(true);

      } else {
        setMessage(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (!name || !email || !otp) {
      setMessage("Please fill in all fields and enter the OTP.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, otp }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token)
        setMessage("Signup successful! Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#f8f9fa" }}
    >
      <div
        className="card p-4"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          background: "#fff",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{ fontWeight: "700", fontSize: "1.8rem", color: "#333" }}
        >
          Sign Up
        </h1>
        <p className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
          Enter your details to sign up. You will receive an OTP on your email.
        </p>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        {otpSent && (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-control"
            />
          </div>
        )}

        {!otpSent && (
          <button
            className="btn btn-primary w-100 mb-3"
            onClick={handleGenerateOtp}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Generate OTP"}
          </button>
        )}

        {otpSent && (
          <button
            className="btn btn-success w-100 mb-3"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        )}

        {message && (
          <p
            className="text-center mt-3"
            style={{
              color: message.startsWith("Signup successful") ? "green" : "red",
              fontSize: "0.9rem",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
