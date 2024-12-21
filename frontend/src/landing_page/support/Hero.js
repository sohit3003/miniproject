import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-light py-5" id="supportHero">
      <div className="container">
        {/* Hero Heading Section */}
        <div className="text-center mb-5">
          <h4 className="text-primary">Support Portal</h4>
          <p className="text-secondary">View and manage your train tickets easily.</p>
          <a href="#" className="btn btn-outline-primary btn-sm mt-2">
            Track Tickets
          </a>
        </div>


        {/* Main Content Section */}
        <div className="row g-4">
          {/* Search and Help Section */}
          <div className="col-lg-6">
            <div className="p-4 bg-white shadow rounded">
              <h2 className="fs-4 mb-3">
                Search for an answer or browse help topics to create a ticket
              </h2>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Eg. how do I activate F&O"
                />
              </div>

              <h5 className="fs-6">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Track account opening
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Track segment activation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Intraday margins
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Kite user manual
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Section */}
          <div className="col-lg-6">
            <div className="p-4 bg-white shadow rounded">
              <h2 className="fs-4 mb-3">Featured</h2>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none text-primary">
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none text-primary">
                    Latest Intraday leverages - MIS & CO
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
