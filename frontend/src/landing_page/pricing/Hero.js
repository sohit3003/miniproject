import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 style={{ fontWeight: "800", fontSize: "3rem", color: "#333" }}>
          Pricing
        </h1>
        <h3 className="text-muted mt-3" style={{ fontSize: "1.25rem", fontWeight: "400" }}>
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Cards Section */}
      <div className="row text-center justify-content-center">
        {/* Card 1 */}
        <div className="col-lg-4 mb-5">
          <div
            className="d-flex flex-column align-items-center p-4"
            style={{
              backgroundColor: "#f1f3f5",
              borderRadius: "15px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              minHeight: "300px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src="media/images/pricingEquity.svg"
              alt="Equity Delivery"
              style={{ width: "80px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "1.6rem", fontWeight: "600", color: "#333" }}>
              Free equity delivery
            </h3>
            <p className="text-muted mt-3" style={{ fontSize: "1rem" }}>
              All equity delivery investments (NSE, BSE) are absolutely free —
              ₹0 brokerage.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 mb-5">
          <div
            className="d-flex flex-column align-items-center p-4"
            style={{
              backgroundColor: "#f1f3f5",
              borderRadius: "15px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              minHeight: "300px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday Trades"
              style={{ width: "80px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "1.6rem", fontWeight: "600", color: "#333" }}>
              Intraday and F&O trades
            </h3>
            <p className="text-muted mt-3" style={{ fontSize: "1rem" }}>
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 mb-5">
          <div
            className="d-flex flex-column align-items-center p-4"
            style={{
              backgroundColor: "#f1f3f5",
              borderRadius: "15px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              minHeight: "300px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src="media/images/pricingEquity.svg"
              alt="Mutual Funds"
              style={{ width: "80px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "1.6rem", fontWeight: "600", color: "#333" }}>
              Free direct MF
            </h3>
            <p className="text-muted mt-3" style={{ fontSize: "1rem" }}>
              All direct mutual fund investments are absolutely free — ₹0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
