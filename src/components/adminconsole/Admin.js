import React from "react";
import "../account/signinSignup.css"
import Header from "../Header/Header2";
import Footer from "../Footer/Footer";

import { useState } from "react"
import { Link } from "react-router-dom"

function Admin() {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
        })

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
        }
        // submitToApi(formData)
    }

    return (
        <div className="adminConsole">
            <Header />
            <div className="overallSignin">
                <form onSubmit={handleSubmit}>
                    <h1 className="welcome">Login as an Admin</h1>
                    <p className="already">Don't have an admin account? <span className="span"><Link to="/becomeadmin">Sign up</Link></span></p>
                    <div className="labelInput">
                        <p className="convene">Convene</p>

                        <label htmlFor="email">
                            <input
                                type="text"
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
                                id="password"
                                name="password"
                                onChange={handleChange} 
                                value={formData.password}
                            />
                        </label>
                    </div>
                    <div className="signinLabelButton">
                        <label>
                            <button className="btn">Sign in</button>
                        </label>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Admin