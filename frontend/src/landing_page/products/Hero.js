import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid text-center"
      style={{
        backgroundImage: "url('media/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        padding: "100px 0",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 style={{ fontWeight: "700", fontSize: "3rem", marginBottom: "20px" }}>
          Technology at Its Best
        </h1>
        <h3 style={{ fontWeight: "400", fontSize: "1.5rem", marginBottom: "30px" }}>
          Elevate your trading experience with cutting-edge platforms
        </h3>
      </div>
    </div>
  );
}

export default Hero;

