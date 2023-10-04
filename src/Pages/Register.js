import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    roles: "",
  });

  const { name, email, password, roles } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit2 = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/add", user);
    navigate("/Login");
    console.log("user added");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border-rounded p-5 mt-5 shadow">
          <h2 className="text-center">Please Register to continue</h2>

          <form onSubmit={(e) => onSubmit2(e)}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="form-label float-start mt-3 mb-2"
              >
                Enter your Name :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>

              <label htmlFor="name" className="form-label float-start mt-4">
                Enter your email :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Email@gmail.com"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>

              <label htmlFor="name" className="form-label float-start mt-4">
                Enter password :
              </label>
              <input
                type="password"
                className="form-control"
                placeholder=""
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>

              <label htmlFor="name" className="form-label float-start mt-4">
                Are you a user or admin ?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="roles"
                name="roles"
                value={roles}
                onChange={(e) => onInputChange(e)}
              ></input>

              <button type="submit" className="btn btn-outline-dark me-2 mt-3">
                Register
              </button>
              <Link className="btn btn-outline-danger mt-3" to="/Login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
