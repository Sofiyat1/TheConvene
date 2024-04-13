import "../../account/signinSignup.css"
import Header from "../../Header/Header2.js";
import Footer from "../../Footer/Footer.js";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext.js";  

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const logIn = useUserAuth();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled out
    if (!formData.username || !formData.password) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");
    try {
      await logIn(formData.username, formData.password);
      // Redirect to profile page upon successful login
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin">
      <Header />
      <div className="overallSignin">
        <form onSubmit={handleSubmit}>
          <h1 className="welcome">Welcome Back</h1>
          <p className="already">
            Are you new here?{" "}
            <span className="span">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
          <div className="labelInput">
            <p className="convene">Convene</p>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="Enter password"
                maxLength="100"
                minLength="3"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </label>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="signinLabelButton">
            <button className="btn" id="btnn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;

