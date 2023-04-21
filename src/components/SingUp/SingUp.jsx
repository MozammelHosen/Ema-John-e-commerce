import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./SingUp.css";

const SingUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createSingUp } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      return setError("Password Not Match");
    } else if (password < 6) {
      return setError("Minimum 6 Digit ");
    }

    createSingUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Create User SuccessFully");
        event.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Sing Up now!</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-[400px]  shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                type="text"
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
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">
                  Confirm Password
                </span>
              </label>
              <input
                type="text"
                name="confirmPassword"
                placeholder="Confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-500 text-xl">
              <small>{error}</small>
            </p>
            <p className="text-orange-500 text-xl">
              <small>{success}</small>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SingUp</button>
            </div>
            <p>
              <small>
                Already have a Account ?{" "}
                <Link className="btn btn-link text-orange-500" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
