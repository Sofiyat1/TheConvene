import React from "react";
import "../../account/signinSignup.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../../../src/context/UserAuthContext";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    comments: "",
    agreement: true,
    contact: "",
    location: "",
    rememberForget: true,
  });

  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="signup">
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
                onChange={handleChange}
                value={formData.firstname}
                required
              />
            </label>
            <label htmlFor="lastname">
              <input
                type="text"
                placeholder="Lastname"
                id="lastname"
                onChange={handleChange}
                value={formData.lastname}
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
                maxlength="15"
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
                maxlength="15"
                id="repeatPassword"
                name="repeatPassword"
                onChange={handleChange}
                value={formData.password}
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
    </div>
  );
}

export default Signup;
