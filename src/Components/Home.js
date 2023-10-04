import AdminNavbar from "../Layout/AdminNavbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  let navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout, user } = useAuth0();

  return (
    <div className="w-60 mx-auto">
      <nav class="navbar navbar-expand-lg navbar-light bg-light m-2">
        <div class="container-fluid">
          <p class="navbar-brand " href="#">
            <h2>Books</h2>
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
                <Link className="btn btn-outline-light me-1" to={`//`}>
                  Books
                </Link>
              </li>

              {/* <li class="nav-item dropdown">
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
                  </li> */}
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="name"
                // value={name}
                onChange={(e) => onInputChange(e)}
              ></input>

              <Link className="btn btn-outline-success" to={`/search}`}>
                Search
              </Link>
            </form> */}

            {
              isAuthenticated && (
                // ? (
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                  <h6>{user.name}</h6>
                </button>
                // ) : (
                // <button
                //   className="btn btn-outline-primary ms-2 "
                //   onClick={() => loginWithRedirect()}
                // >
                //   Log In / Sign up
                // </button>
              )
              // )
            }
            {/* {isAuthenticated && <p>{user.name}</p>} */}
            {isAuthenticated && user.name == "vaishnavi@gmail.com" && (
              // <Link className="btn btn-outline-primary ms-2 " to="/add">
              //   Add Book
              // </Link>
              <h6>hii admin</h6>
            )}
          </div>
        </div>
      </nav>

      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="Assets/Pictures/Images/book1.jpg"
              width="70%"
              height="30%"
              class="d-block align:center"
              alt="pic1"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="Assets/Pictures/Images/book2.jpg"
              width="70%"
              className="d-block align:center"
              alt="pic2"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="C:\Users\SR781YL\OneDrive - EY\Documents\Spring Projects\book_db_frontend\Assets\Pictures\book3.jpg"
              width="70%"
              className="d-block align:center"
              alt="pic3"
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div> */}

      <div className="card w-50 p-3 mx-auto">
        <img
          src="Assets//Pictures//book1.jpg"
          class="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h1 className="card-title p-2">Welcome to the Book store</h1>
          <h5 className="card-text p-2">Please Login/ Sign up to Continue</h5>
          <button
            className="btn btn-outline-primary ms-2 p-2"
            onClick={() => loginWithRedirect()}
          >
            Log In / Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
