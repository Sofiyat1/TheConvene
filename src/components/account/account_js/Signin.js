import "../../account/signinSignup.css"

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext.js";  

function Signin() {
  const [formData, setFormData] = useState({
    username: "",
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
            <label htmlFor="username">
              <input
                type="text"
                placeholder="Enter username"
                maxLength="100"
                minLength="3"
                id="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="Enter password"
                maxLength="100"
                minLength="3"
                id="signinPassword"
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
    </div>
  );
}

export default Signin;

/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext.js"



function Signin() {
  const [formData, setFormData] = useState("Login", {
    username: "",
    password: "",
    // confirmPassword: "",
  });

  const [error, setError] = useState("");
  const logIn  = useUserAuth();
  const navigate = useNavigate();

  const googleSignin = useUserAuth();
  console.log(logIn)

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if(formData.password === formData.confirmPassword){
    //    console.log("Successfully signed up")
    // } else {
    //     console.log("Passwords do not match")
    // }

    setError("");
    try {
      await logIn(formData.emailAddress, formData.password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }

    // submitToApi(formData)
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignin();
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signin">
      <div className="overallSignin">
        <form onSubmit={handleSubmit}>
          <h1 className="welcome">Welcome Back</h1>
          <p className="already">Are you new here? <span className="span"><Link to="/signup">Sign up</Link></span></p>
          <div className="labelInput">
          <p className="convene">Convene</p>

            <label htmlFor="username">
              <input
                type="text"
                placeholder="Enter username"
                maxLength="100"
                minLength="3"
                id="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
              />
              </label>
              <label htmlFor="password">
              <input
                type="password"
                placeholder="Enter password"
                maxlength="100"
                minLength="3"
                id="signinPassword"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
              </label>
          </div>
          <div className="signinLabelButton">
          <label htmlFor="btnn">
            <button className="btn" id="btnn">Sign in</button>
          </label>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Signin;
*/

