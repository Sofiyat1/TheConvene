import React from 'react'
import Home from "./components/homepage/home.js"
import Signup from './components/account_js/signup.js';
import Signin from './components/account_js/signin.js';
import Meetup from './components/meetup_page/meetup.js'


function App() {
  return (
    <div>
      <Home />
      <Signup />
      <Signin />
      <Meetup />
    </div>
  )
}
  
  
export default App;