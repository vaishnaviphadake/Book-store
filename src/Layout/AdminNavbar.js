import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Books from "../Pages/Books";

function AdminNavbar() {
  let navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout, user } = useAuth0();
  const [id, setId] = useState("");
  console.log(id);

  // const { id } = useParams();

  const [book, setBook] = useState({
    name: "",
    author: "",
    price: "",
    pages: "",
  });

  const onInputChange = async (e) => {
    e.preventDefault();
    // const result = await axios.get(`http://localhost:8080/bookName/${name}`);
    // navigate("/");
    // const { rname, rauthor, rprice, rpages } = result;
    console.log("book edited");
    // setBook(result.data);
  };

  // const uname = user.name;

  return (
    <div>
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
                <Link className="btn btn-outline-light me-1" to={`/books`}>
                  Books
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setId(e.target.value)}
              ></input>

              <Link
                className="btn btn-outline-success text-dark me-1"
                to={`/search/${id}`}
              >
                Search
              </Link>
            </form>

            {isAuthenticated ? (
              <button
                className="btn  btn-sm"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
                <p>{user.name}</p>
                {/* <Books /> */}
              </button>
            ) : (
              <button
                className="btn btn-outline-primary ms-2 "
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
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
    </div>
  );
}

export default AdminNavbar;
