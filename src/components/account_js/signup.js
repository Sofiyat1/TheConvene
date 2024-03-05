import React from "react";
import "../account_css/signinSignup.css"
function signup() {
  return (
    <div className="signup">
      <div className="overallSignup">
        <form>
          <h1 className="createh1">Create account</h1>
          <p className="already">Already have an account? <span className="span">Signin</span></p>

          <div className="labelInput">
          <p className="convene">Convene</p>

            <label for="firstname">
              <input
                type="text"
                placeholder="Firstname"
                maxLength="100"
                minLength="3"
                id="firstname"
              />
              </label>
              <label for="lastname">
              <input
                type="text"
                placeholder="Lastname"
                maxlength="100"
                minLength="3"
                id="lastname"
              />
              </label>
              <label for="email">
              <input type="email" placeholder="E-mail" id="email" />
            </label>
            <label for="password">
              <input type="password" placeholder="Create a password" minLength="6" maxlength="15" id="password" />
            </label>
            <label for="repeatPassword">
              <input type="password" placeholder="Repeat password" minLength="6" maxlength="15" id="repeatPassword" />
            </label>
          </div>
          <div className="labelButton">
          <label>
            <button className="btn">Sign up</button>
          </label>
          </div>
          <div className="checkbox">
          <label className="checkbox-label">
            <input type="checkbox" name="termsandcondition" />I have read and agree to the <span className="span"> Terms of Service</span>
          </label>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default signup;
