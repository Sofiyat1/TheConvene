 import React from "react"
 import "../../index.css"
 import "./meetup.css"

//Left bar
import Profileicon from "../../assets/Union.png"
import Homeicon from "../../assets/home-2.png"
import Videocallicon from "../../assets/video.png"
import Microphoneicon from "../../assets/microphone.png"
import Messageicon from "../../assets/Frame 29.png"

//Right bar
import Arrowup from "../../assets/icons8-arrow-up-24.png"
import Arrowdown from "../../assets/icons8-arrow-down-24 (1).png"
import Askquestion from "../../assets/icons8-ask-question-24.png"
import Comment from "../../assets/icons8-comment-24.png"

function leftbar(){
    return (
        <div className="meetupSection">
            <div className="allWrapper">
            <div className="leftbar">
                <ul>
                    <li className="firstLi">
                        <img src={Profileicon} alt="Profile" />
                    </li>
                    <li>
                        <img src={Homeicon} alt="Home" />
                    </li>
                    <li className="thirdLi">
                        <img src={Videocallicon} alt="VideoCall" />
                    </li>
                    <li>
                        <img src={Microphoneicon} alt="Microphone" />
                    </li>
                    <li>
                        <img src={Messageicon} alt="Message" />
                    </li>
                </ul>
            </div>
            <div className="meetingspace">
            <h1>THE MEETING SPACE</h1>
            </div>
            <div className="rightbar">
                <h1>Questions</h1>
                <p>Share your thoughts and ask your questions here</p>
            </div>
            </div>
        </div>
    );
}

export default leftbar;