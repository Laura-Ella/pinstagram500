import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="main">
        <div className="backgroundimage">
          <div className="welcome">
            <h1>Welcome</h1>
          </div>
          <div className="ipsumcontainer">
            <div className="story">
              <h3>Our Story</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <div className="meetcontainer">
          <h3>Meet Our Founders!</h3>
          <div className="founders">
            <div className="meet">
              <img src=""></img>
            </div>
            <div className="bio">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="meet">
              <img src=""></img>
            </div>
            <div className="bio">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="meet">
              <img src=""></img>
            </div>
            <div className="bio">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="message">
            <div className="signup">
              <button>Sign Up!</button>
            </div>
            <div className="contact">
              <h4>Send us a message!</h4>
              <p>Your message will be posted in one of our Slack channels.</p>
              <input type="text" placeholder="Hey guys!"></input>
              <button>Send!</button>
            </div>
          </div>
          <div>
          </div>
        </div>

        {/* <div class="timeline">
          <div class="container left">
            <div class="content">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div> */}

        <div className="footercontainer">
          <div className="footerleft">
            <h3>Contact Info</h3>
            <p>Address:<span><a href="https://goo.gl/maps/69APgP5PuAeDamnY9" className="address">509 7th St NW, Washington, DC</a></span></p>
            <p>Phone Number: 202-322-9847</p>
          </div>
          <div className="footerright">
              <a href="#">Home</a>
              <a href="#">Contact Us</a>
              <a href="#">Careers</a>
              <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
