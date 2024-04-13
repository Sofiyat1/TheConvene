import React from 'react';
import { Link } from "react-router-dom";

import "./header.css"

function Header() {
    return (
        <div className='header'>
            <div className="homenav">
                <div className="lefthomenav">
                    <h3>Convene.</h3>
                </div>
                <div className="righthomenav">
                    <ul>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Login</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/becomeadmin">Become Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Header;