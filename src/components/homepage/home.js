import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import Background from "./home_assets/backg.jpg";
import Networking from "./home_assets/network-2.png";

function Home() {
  useEffect(() => {
    function handleOurStoryClick(event) {
      event.preventDefault();
      document
        .getElementById("our-story")
        .scrollIntoView({ behavior: "smooth" });
    }
    const ourStoryLink = document.querySelector('a[href="#our-story"]');
    if (ourStoryLink) {
      ourStoryLink.addEventListener("click", handleOurStoryClick);
    }

    return () => {
      if (ourStoryLink) {
        ourStoryLink.removeEventListener("click", handleOurStoryClick);
      }
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      var navbar = document.querySelector(".homenav");
      if (navbar) {
        var scrollPosition = window.scrollY;
        var opacity = Math.min(scrollPosition / 1500, 1); // Adjust 200 for starting point
        opacity = scrollPosition > 0 ? opacity : 1; //Ensure background is fully visible at the top

        // Update the background color with transparency
        navbar.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
      }
    }

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage">
      <div className="homenav">
        <div className="lefthomenav">
          <h3>Convene.</h3>
        </div>
        <div className="righthomenav">
          <ul>
            <li>
              <a href="#our-story">Our Story</a>
            </li>
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
      <section className="homebody">
        <div className="backg">
          <img className="background" src={Background} alt="backg" />
          <div className="textcontainer">
            <h2>Make Group for Team Work!</h2>
          </div>
          <div className="imagecontainer">
            <img className="foreground" src={Networking} alt="network" />
          </div>
          <div className="imagecontainer2">
            <img className="foreground2" src={Networking} alt="network2" />
          </div>
          <div className="imagecontainer3">
            <img className="foreground3" src={Networking} alt="network3" />
          </div>
          <div className="imagecontainer4">
            <img className="foreground4" src={Networking} alt="network4" />
          </div>
        </div>
      </section>
      <div className="ourStory" id="our-story">
        <h2>OUR STORY</h2>
        <div className="tellSto">
          <div className="largeText">
            <h1>Everyone has a Story to Tell</h1>
          </div>
          <div className="smallText1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat mauris at turpis tristique malesuada. Sed in risus vel
              sem ultrices accumsan nec nec nulla. Nulla facilisi. Phasellus non
              sapien semper, fermentum leo vitae, consequat nisi. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Morbi quis justo mauris. Cras sit amet nisi
              fermentum, viverra dolor ac, tempus sapien. Quisque volutpat
              ligula in elit vehicula, sit amet vehicula elit dictum.
              Suspendisse ut urna vel enim mollis consequat. Fusce id felis vel
              metus commodo vulputate. Mauris a lorem eu eros euismod convallis.
              Integer nec magna sed nisi luctus gravida sit amet et ligula.
              Nullam efficitur fringilla felis, id molestie velit lacinia eget.
              Suspendisse potenti. Nam nec magna sed felis eleifend semper.
              Curabitur fermentum ex in ultricies efficitur. In hac habitasse
              platea dictumst. Aliquam hendrerit purus non purus faucibus, sed
              vehicula sapien fringilla. Vestibulum euismod magna nec nulla
              pulvinar, vel volutpat magna pulvinar. Integer volutpat orci at
              enim auctor, a fringilla risus sagittis. Ut sed turpis lectus.
              Integer pharetra lorem quis metus fringilla, a auctor lacus
              suscipit. Nam sed ante justo. Proin id sem lacinia, pulvinar
              lectus vel, sodales velit.ed vulputate sapien vel velit malesuada
              dignissim. Morbi ultrices tortor ut ligula scelerisque, vitae
              elementum magna tincidunt. Phasellus nec orci nec magna tincidunt
              pharetra. Vivamus ultricies mi a tellus luctus lacinia. Mauris
              euismod nulla sit amet purus bibendum, nec vulputate metus
              lacinia. Nullam sit amet ullamcorper risus. Curabitur sed risus
              dapibus, ultricies purus non, ultrices mi. Phasellus varius ligula
              eget posuere ultricies. Donec ut malesuada nulla. Praesent sodales
              commodo dapibus. Nam pulvinar mi sit amet neque suscipit, eu
              mollis ex ultrices. Vestibulum auctor nisi sit amet efficitur
              fermentum.
            </p>
          </div>
        </div>
        <div className="smallText1">
          <p>Curabitur lobortis aliquet ante nec vestibulum.
              Pellentesque vitae purus pulvinar, cursus lacus eget, S
              ullamcorper quam. Mauris sit amet turpis eget nisl finibus
              vehicula. ullamcorper quam. Mauris sit amet turpis eget nisl finibus vehicula. Donec sit amet lacus eu leo placerat convallis. Duis vehicula nulla quis nunc consectetur,
            vitae convallis elit fermentum. Sed ac mauris risus. Nullam nec odio ut dolor pharetra mollis. Pellentesque auctor quam vitae mauris volutpat, quis facilisis purus iaculis.
          </p>
        </div>
      </div>
      <p className="copyright">&copy; Tech4dev</p>

    </div>
  );
}

export default Home;
