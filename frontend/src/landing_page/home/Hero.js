import React from "react";
import { useNavigate } from "react-router";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/stock_trading2.png"
          alt="Hero Image"
          className="hero-image mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        {
          localStorage.getItem('token') === null &&
          <button
            onClick={() => navigate("/signup")}
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        }
      </div>
    </div>
  );
}

export default Hero;
