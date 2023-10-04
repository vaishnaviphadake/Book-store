import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit2 = async (e) => {
    e.preventDefault();
    const result = await axios.get("http://localhost:8080/user/email/${email}");
    const { Oname, Oemail, Opassword, Oroles } = result;

    if (email == Oemail && password == Opassword) {
      navigate("/");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border-rounded p-5 mt-5 shadow">
          <h2 className="text-center">Please Login to continue</h2>

          <form onSubmit={(e) => onSubmit2(e)}>
            <div className="mb-2">
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

              <button type="submit" className="btn btn-outline-dark me-2 mt-3">
                Login
              </button>
              <Link className="btn btn-outline-danger mt-3" to="/register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
