import React from "react";

const TopicCard = ({ title, links }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> {title}
          </h5>
          <ul className="list-unstyled mt-3">
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function CreateTicket() {
  const topics = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Market Pulse",
        "Market pulse IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Support Requests",
      links: [
        "Technical Issues",
        "Payment Queries",
        "Refund Status",
        "Document Submission",
        "Service Requests",
      ],
    },
    {
      title: "Investment Help",
      links: [
        "Stock Trading",
        "Mutual Funds",
        "IPO Applications",
        "Tax Reports",
        "Portfolio Management",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 text-center">
        <h1 className="fs-2">Create a Ticket by Selecting a Relevant Topic</h1>
      </div>
      <div className="row">
        {topics.map((topic, index) => (
          <TopicCard key={index} title={topic.title} links={topic.links} />
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
