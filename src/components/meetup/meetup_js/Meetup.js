import React from "react";
import "../meetup_css/meetup.css"
import Questions from "./Questionpage"

//right bar
import Userprofile from "../meetup_assets/userprofile.png"
import Questionicon from "../meetup_assets/icons8-ask-question-24.png"
import Sendicon from "../meetup_assets/icons8-send-comment-24.png"
import Profile1 from "../meetup_assets/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png"
import Profile2 from "../meetup_assets/brian-lawson-9vzfoIpHTbs-unsplash.png"


//Left bar
import Profileicon from "../meetup_assets/Union.png"
import Homeicon from "../meetup_assets/home-2.png";
import Videocallicon from "../meetup_assets/video.png";
import Microphoneicon from "../meetup_assets/microphone.png";
import Messageicon from "../meetup_assets/Frame 29.png";


function Meetup() {
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
        <div className="scrollable">
          <h1>Questions</h1>

          <h3 className="thoughts">Share your thoughts and ask your questions here</h3>
          <Questions
            img={Profile1}
            name='Sofiyat Gbadamosi'
            question='What is React?'
            upvote={300}
            downvote={20}
            comment={105}
          />
          <Questions
            img={Profile2}
            name='Obianuju Onoha'
            question='What is the difference between JavaScript and React?'
            upvote={150}
            downvote={55}
            comment={33}
          />
          <Questions
            img={Userprofile}
            name='You'
            question='What is JavaScript?'
            upvote={150}
            downvote={55}
            comment={1}
          />

          <div className="askQuestionWrap">
            <img className="questionIcon" src={Questionicon} alt="question icon" width='24px' height='24px' />
            <textarea value="Ask a question..."> </textarea>
            <img className="sendIcon" src={Sendicon} alt="send icon" width='24px' height='24px' />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Meetup;
