import "./userprofile.css"
import React from "react"
import Button from "./Button.js"
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"

import User from "./userprofile_assets/userprofile.png"
import Arrowup from "./userprofile_assets/icons8-arrow-up-24.png"
import Arrowdown from "./userprofile_assets/icons8-arrow-up-24.png"
import Commenticon from "./userprofile_assets/icons8-comment-24.png"


function Userprofile() {
  return (
    <div className="userProfile">
      <Header />
      <div className="overallProfile">
        <div className="leftside">
            <div className="avatar">
              <img className="avatarImg" src={User} alt="profileavatar" />
              <h3 className="profileName">Sofiyat Gbadamosi</h3>
              <div className="userDetails">
                <p><span className="bold">Username : </span><i className="italic">Softwork1</i></p>
                <p><span className="bold">Email : </span><i className="italic">sofiyatgbadamosi@gmail.com</i></p>
                <p><span className="bold">Password : </span><i className="italic">*********</i></p>
              </div>
              <div className="logOutButton">
              <button id="buttn">Log out</button>
              </div>
            </div>
          </div>

          <div className="middleside">
              <div className="profileTxt">
                <h3>Activities</h3>
              </div>
              <div className="activities">
                <div className="list">
                <div className="list1">
                  <p className="bold">Number of Question asked<span className="number">20</span></p>
                </div>
                <button>View History</button>
                <div className="list2">
                  <p className="bold">Number of Question answered<span className="number">35</span></p>
                </div>
                <button>View History</button>
                </div>
            </div>
          </div>

          <div className="rightside">
            <div className="rightsideWrapper">
              <div className="upcoming">
                <h1>Upcoming Events</h1>
                <p className="upcoTime1">9:44pm</p>

                <div className="postUpco">
                  <h2>Product Development Hangout</h2>
                  <p>The largest product development hangout in Africa! Ask our
                    experts any questions.</p>

                  <div className="statusDate">
                    <p>Status: You are scheduled to attend!</p>
                    <p>Date: 31/4/2024</p>
                  </div>
                  <div className="upcoIcon">
                    <img src={Arrowup} alt="arrowUp" />
                    {" "}
                    <img src={Arrowdown} alt="arrowDown" />
                    <img src={Commenticon} alt="comment" />
                  </div>
                </div>




                {/* Other Upcoming Events */}
                <p className="upcoTime2">8:00am</p>
                <div className="postUpco">
                  <h2>Software Development Hangout</h2>
                  <p>The largest software development hangout in Africa! Ask our
                    experts any questions.</p>
                  <div className="statusDate">
                    <p>Status: You are scheduled to attend!</p>
                    <p>Date: 16/5/2024</p>
                  </div>
                  <div className="upcoIcon">
                    <img src={Arrowup} alt="arrowUp" />
                    {" "}
                    <img src={Arrowdown} alt="arrowDown" />
                    <img src={Commenticon} alt="comment" />
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
      <Footer />

    </div>
  );
}
export default Userprofile;
