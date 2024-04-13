import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header2";
import Footer from "../Footer/Footer";

import "../account/signinSignup.css"
import "../adminconsole/adminconsole.css";

function Becomeadmin() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    comments: "",
    agreement: true,
    contact: "",
    industry: "",
    // file: ""
  });
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
  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
  }
  return (
    <div className="becomeadmin">
      <Header />
      <div className="overallSignup">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="createh1">Create an Admin account</h1>
          <p className="already">
            Already have an account?{" "}
            <span className="span">
              <Link to="/admin">Signin</Link>
            </span>
          </p>

          <div className="labelInput">
            <p className="convene">Convene</p>
            <label htmlFor="firstname">
              <input
                type="text"
                placeholder="Firstname"
                maxLength="100"
                minLength="3"
                id="firstname"
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
                value={formData.password}
                required
              />
            </label>

            <label htmlFor="industry" className="industry">
              Industry
              <select
                id="industry"
                value={formData.location}
                onChange={handleChange}
                name="industry"
              >
                <option value="">--- Choose ---</option>
                <option value="tech">Tech</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="sciences">Sciences</option>
                <option value="Business">Business</option>
                <option value="creative">Creative</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="other">Other</option>
              </select>
            </label>

            <fieldset>
                <p>Provide an overview of your professional background and experience {" "}</p>
                <label htmlFor="comments">
                <textarea
                  value={formData.comments}
                  placeholder=""
                  id="comments"
                  onChange={handleChange}
                  name="comments"
                />{" "}
              </label>
              </fieldset>
            <fieldset>
              <label htmlFor="file" className="fileLabel">
                Upload any of your recent professional certification(s)
                <input
                  type="file"
                  id="file"
                  onChange={handleChange}
                  name="file"
                />
                </label>
              </fieldset>

              <div className="button">
            <label>
              <button className="btnAdminConsole">Sign up</button>
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
              I have read and agree to the{" "}
              <span className="span">
                <a className="terms" href=" ">Terms of Service</a>
              </span>
            </label>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Becomeadmin;






















