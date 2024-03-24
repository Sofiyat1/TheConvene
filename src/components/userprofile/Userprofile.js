import "./userprofile.css"
import React from "react"
import Button from "./Button.js"

import User from "./userprofile_assets/userprofile.png"
import Arrowup from "./userprofile_assets/icons8-arrow-up-24.png"
import Arrowdown from "./userprofile_assets/icons8-arrow-up-24.png"
import Commenticon from "./userprofile_assets/icons8-comment-24.png"


function Userprofile() {
    return (
        <div className="overallProfile">
            <div className="profile">
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
                            <Button id="buttn" text="Log out" />
                        </div>
                    </div>
                </div>
                <div className="rightside">
                    <div className="profileTxt">
                        <h3>Activities</h3>
                    </div>
                    <div className="activities">
                        <div className="actList">
                            <div className="actList1">
                                <p className="bold">Number of Question asked</p>
                                <div className="number">
                                <span className="bold">35</span>
                                </div>
                                <div className="actBtn">
                                    <Button text="View History" />
                                </div>
                            </div>
                            <div className="actList2">
                                <p className="bold">Number of Question answered</p>
                                <div className="number">
                                <span className="bold">18</span>
                                </div>
                                <div className="actBtn">
                                    <Button text="View History" />
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
}
export default Userprofile;
/*
          <div className="activities">
            
              <h2>Activities</h2>

              <div>
                <h3>
                  Number of Questions Asked: <span>35</span>
                </h3>

                <div className="btnWrap">
                  <button className="view">View history</button>
                  <button className="view">View your comments</button>
                </div>
              </div>

            
            
          </div>
          </aside>

          <div className="upcomingEvents">
            <h2>Upcoming Events</h2>
            <div>
              <h3>Product Development Hangout</h3>
              <p>
                The largest product development hangout in Africa! Ask our
                experts any questions.
              </p>
              <span>Date: 31/4/2024</span>
              <p>Status: You are scheduled to attend!</p>
            </div>

            <div className="queIconsWrap">
              <span>
                <img src={Arrowup} alt="user icon" />
              </span>

              <span>
                {" "}
                <img src={Arrowdown} alt="user icon" />
              </span>

              <span>
                <img src={Commenticon} alt="user icon" />
              </span>
              <span>9:44</span>
            </div>
          </div>

          <div className="upcomingEvents">
            <h2>Upcoming Events</h2>
            <div>
              <h3>Software Development Hangout</h3>
              <p>
                The largest software development hangout in Africa! Ask our
                experts any questions.
              </p>
              <span>Date: 31/4/2024</span>
              <p>Status: You are scheduled to attend!</p>
            </div>

            <div className="queIconsWrap">
              <span>
                <img src={Arrowup} alt="user icon" />
              </span>

              <span>
                {" "}
                <img src={Arrowdown} alt="user icon" />
              </span>

              <span>
                <img src={Commenticon} alt="user icon" />
              </span>
              <span>9:44</span>
            </div>
          </div>
        </div>
      </div>
*/ 