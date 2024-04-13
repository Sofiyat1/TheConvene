import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { UserAuthContextProvider } from "../src/context/UserAuthContext.js";
import Protectedroute from './context/Protectedroute.js';

import Home from "./components/homepage/Home.js"
import Signup from "./components/account/account_js/Signup.js"
import Signin from "./components/account/account_js/Signin.js"

import Admin from "./components/adminconsole/Admin.js"
import Becomeadmin from './components/adminconsole/Becomeadmin.js';


import Meetup from "./components/meetup/meetup_js/Meetup.js"
import Userprofile from "./components/userprofile/Userprofile.js"


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },

    //other pages
    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/signin",
      element: <Signin />,
    },

    {
      path: "/profile",
      element:  <Userprofile /> 
    },

    {
      path: "/meetup",
      element: <Meetup />,
    },

    {
      path: "/becomeadmin",
      element: <Becomeadmin />,
    },

    {
      path: "/admin",
      element: <Admin />,
    }
  ]);

  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;