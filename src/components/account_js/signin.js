import React from "react";
import "../account_css/signinSignup.css"
function signin() {
  return (
    <div className="signin">
      <div className="overallSignin">
        <form>
          <h1 className="welcome">Welcome Back</h1>
          <div className="labelInput">
          <p className="convene">Convene</p>

            <label for="username">
              <input
                type="text"
                placeholder="Enter username"
                maxLength="100"
                minLength="3"
                id="username"
              />
              </label>
              <label for="password">
              <input
                type="password"
                placeholder="Enter password"
                maxlength="100"
                minLength="3"
                id="signinPassword"
              />
              </label>
          </div>
          <div className="signinLabelButton">
          <label>
            <button className="btn">Sign up</button>
          </label>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default signin;
