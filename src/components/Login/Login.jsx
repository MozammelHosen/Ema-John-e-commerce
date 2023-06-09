import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { loginIn } = useContext(AuthContext);

  const handleLoginIn = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setSuccess("User Login SuccessFully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <form
          onSubmit={handleLoginIn}
          className="card flex-shrink-0 w-[400px]  shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-xl text-orange-500">{success}</p>
            <p className="text-xl text-red-500">{error}</p>
            <p>
              <small>
                I am New User ?{" "}
                <Link className="btn btn-link text-orange-500" to="/singup">
                  SingUp
                </Link>
              </small>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
