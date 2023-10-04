import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <p class="navbar-brand" href="#">
            Navbar
          </p>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <p class="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li class="nav-item">
                <p class="nav-link">Link</p>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </p>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <p class="dropdown-item">Action</p>
                  </li>
                  <li>
                    <p class="dropdown-item">Another action</p>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <p class="dropdown-item">Something else here</p>
                  </li>
                </ul>
              </li>
              <li clpss="npv-item">
                <p
                  class="nav-link disabled"
                  //   href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </p>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
