import Arrowup from "../meetup_assets/icons8-arrow-up-24.png"
import Arrowdown from "../meetup_assets/icons8-arrow-down-24 (1).png"
import Commenticon from "../meetup_assets/icons8-comment-24.png"
import { useState } from "react";
import "../meetup_css/questionpage.css"

function Questionpage(props) {
  const [upvote, setUpVote] = useState(0);
  const [downvote, setDownVote] = useState(0);

  function upVote() {
    setUpVote((prevvote) => prevvote + 1);
  }

  function downVote() {
    setDownVote((prevvote) => prevvote + 1);
  }
  return (
    <div>
      <div className="questionWrap">
        <div className="quest">
          <img
            className="user"
            src={props.img}
            alt={props.name}
            width="50px"
            height="50px"
          />
          <div className="nameQuestion"></div>
          <div className="content">

            <h3 className="userName">{props.name}</h3>
            <p className="userQuestion">{props.question}</p>
            <div className="vote">
              <img className="up" src={Arrowup} alt="user icon" onClick={upVote} />
              <span>{upvote}</span>
              <img className="down" src={Arrowdown} alt="user icon" onClick={downVote} />
              <span>{downvote}</span>
              <img className="comment" src={Commenticon} alt="user icon" />
              <span>{props.comment}</span>
              <div className="time">
              <span>9:44</span>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Questionpage;
