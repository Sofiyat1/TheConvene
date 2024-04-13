import React, { useState } from "react";
import "../../account/signinSignup.css"
import Header from "../../Header/Header2";
import Footer from "../../Footer/Footer";

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    comments: "",
    agreement: true,
    contact: "",
    location: "",
    rememberForget: true,
  });

  const [error, setError] = useState("")
  const signUp = useUserAuth();
  const navigate = useNavigate();

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match");
      return;
    }
    
    try {
      await signUp(formData.email, formData.password);
      navigate("/signin");
      alert("Please check email for verification")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <Header />
      <div className="overallSignup">
        <form onSubmit={handleSubmit}>
          <h1 className="createh1">Create account</h1>
          <p className="already">
            Already have an account?{" "}
            <span className="span">
              <Link to="/signin">Signin</Link>
            </span>
          </p>

          <div className="labelInput">
            <p className="convene">Convene</p>

            <label htmlFor="firstname">
              <input
                type="text"
                placeholder="Firstname"
                id="firstname"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </label>
            <label htmlFor="lastname">
              <input
                type="text"
                placeholder="Lastname"
                id="lastname"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="E-mail"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="Create a password"
                minLength="6"
                maxLength="15"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </label>
            <label htmlFor="repeatPassword">
              <input
              type="password"
              placeholder="Repeat password"
              minLength="6"
              maxLength="15"
              id="repeatPassword"
              name="repeatPassword"
              onChange={handleChange}
              value={formData.repeatPassword}  // Update value to formData.repeatPassword
              required
              />
            </label>
          </div>
          <div className="labelButton">
            <label>
              <button className="btn">Sign up</button>
            </label>
          </div>
          
          <div className="checkbox">
            <label htmlFor="agreement" className="checkbox-label">
              <input
                type="checkbox"
                onChange={handleChange}
                name="agreement"
                id="agreement"
                checked={formData.agreement}
                required
              />
              {" "}
              I have read and agree to the
              <span className="span">
                <a className="terms" href=" ">Terms of Service</a>
              </span>
            </label>
          </div>
        </form>
      </div>
      {error && <p>{error}</p>}
      <Footer />
    </div>
  );
}

export default Signup;


