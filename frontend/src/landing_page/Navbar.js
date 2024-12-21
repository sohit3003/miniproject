
import React from "react";

function Navbar() {
  const token = localStorage.getItem("token");
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="/">
          <img
            src="media/images/market pulse image.png"
            style={{ height: "80px", objectFit: "contain" }}
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              {
                token == null ?
                  (
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/signup">
                        Signup
                      </a>
                    </li>
                  ) : (
                    <li class="nav-item">
                      <button class="nav-link active" aria-current="page" href="/signup"
                        onClick={() => {
                          localStorage.removeItem('token')
                          window.location.href = "/";
                        }}>
                        Logout
                      </button>
                    </li>
                  )}
              <li class="nav-item">
                <a class="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/support">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
