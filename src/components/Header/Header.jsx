import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../../provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const [success, setSuccess] = useState("");
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    setSuccess("");
    logOut()
    .then((result) => {
      const results = result.user;
      console.log(results);
      console.log("Log Out SuccessFull");
    });
  };
 
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/singUp">Sing Up</Link>
        {user ? (
          <>
            <button className="btn btn-primary" onClick={handleSingOut}>
              Sing Out
            </button>
          </>
        ) : (
          <span>
            {" "}
            <Link to="/login">Login</Link>
          </span>
        )}
        {user && <span className="text-white ml-2">{user.name}</span>}
      </div>
    </nav>
  );
};

export default Header;
