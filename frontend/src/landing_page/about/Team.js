import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">Reviews</h1>
      </div>

      {/* Section 1 */}
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\images\person1.png"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
        </div>
        <div className="col-6 p-3">
          <p>
          "Market Pulse has completely transformed how we manage our stock. The real-time tracking and analytics have minimized inventory errors, saving us both time and money. The customizable dashboards provide all the insights we need to make informed decisions. Highly recommended for businesses looking to optimize their operations!"
          </p>
          <p>
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="row p-3 text-muted border-top"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\images\person2.png"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Person 2"
          />
          <h4 className="mt-5">Seema Sharma</h4>
        </div>
        <div className="col-6 p-3">
          <p>
          "Highly Informative App"
          "This app is perfect for analyzing market trends and stock patterns. The technical indicators are comprehensive, and the insights section is very helpful for staying updated."
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="row p-3 text-muted border-top"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\images\person3.png"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Person 3"
          />
          <h4 className="mt-5">Raavi Verma</h4>
        </div>
        <div className="col-6 p-3">
          <p>
          "Seamless Experience"
          "I’ve tried several trading apps, but Market Pulse stands out for its smooth UI and the accuracy of its data. Highly recommended for traders of all levels!"
          </p>
       </div>
      </div>

      {/* Section 4 */}
      <div
        className="row p-3 text-muted border-top"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\images\person4.png"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Person 4"
          />
          <h4 className="mt-5">Anjali Rao</h4>
        </div>
        <div className="col-6 p-3">
          <p>
          "Best Trading Companion"
"Market Pulse has completely transformed how I approach trading. The charting tools are top-notch, and I love the customizable watchlists. It’s fast and reliable, which is critical during live market sessions."

          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
