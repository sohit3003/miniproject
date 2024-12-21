import React from "react";

function Brokerage() {
  return (
    <div className="container py-5">
      {/* Main Section */}
      <div className="row text-center mb-5">
        <h2 className="fs-2 fw-bold text-primary">Brokerage & Charges</h2>
        <p className="text-muted fs-5">Understand the various charges that apply to your account.</p>
      </div>

      <div className="row g-4">
        {/* Charges List Card */}
        <div className="col-lg-12 col-md-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title text-primary">List of Charges</h4>
              <ul className="list-unstyled text-left">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success"></i> Call & Trade and RMS auto-squareoff: ₹50 + GST per order.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success"></i> Digital contract notes will be sent via e-mail.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success"></i> Physical copies of contract notes (₹20 each) + Courier charges.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success"></i> For NRI (non-PIS), 0.5% or ₹100 per executed order (whichever is lower).
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success"></i> For NRI (PIS), 0.5% or ₹200 per executed order (whichever is lower).
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success"></i> If account is in debit, ₹40 per executed order instead of ₹20.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
