import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../Layout/AdminNavbar";
import { Link, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Books from "./Books";
import BooksCard from "./BooksCard";

function AdminHome() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className="container">
      {/* {
        isAuthenticated ? (
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
        ) : (
          <button
            className="btn btn-outline-primary ms-2 "
            onClick={() => loginWithRedirect()}
          >
            Log In / Sign up
          </button>
        )
        // )
      } */}
      {/* <AdminNavbar /> */}
      <Books />
    </div>
  );
}

export default AdminHome;
