import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="main">
        <div className="backgroundimage">
          <div className="welcome">
            {/* <h1>Welcome</h1> */}
          </div>
          <div className="ipsumcontainer">
            <div className="story">
              {/* <h3>Our Story</h3> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
              <h1>The Spirit of Photo</h1>
              <h2>Discovering the world one photo at a time.</h2>
              <div className="signup">
                <button>Sign Up!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="meetcontainer">
          <h2 className="meetfounders">Meet Our Founders!</h2>
          <div className="founders">
            <div className="dee">
              <img src=""></img>
            </div>
            <div className="bio">
              <p>Dee's Bio</p>
              <p>Dee is a writer.</p>
              <p><a href="https://www.linkedin.com/in/dyrolyn-a-46ab2bb7/" className="linkedin">LinkedIn</a></p>
              <p><a href="https://github.com/joeyd2212" className="linkedin">Github</a></p>
            </div>
            <div className="austin">
              <img src=""></img>
            </div>
            <div className="bio">
              <p>Austin's Bio</p>
              <p>Software Engineer out of Arlington, VA.</p>
              <p><a href="https://www.linkedin.com/in/austin-regan/" className="linkedin">LinkedIn</a></p>
              <p><a href="https://github.com/astnrgn" className="linkedin">Github</a></p>
            </div>
            <div className="laura">
              <img src=""></img>
            </div>
            <div className="bio">
              <p>Laura's Bio</p>
              <p>Software Engineer || Chemist</p>
              <p><a href="https://www.linkedin.com/in/laura-ella-robinson/" className="linkedin">LinkedIn</a></p>
              <p><a href="https://github.com/Laura-Ella" className="linkedin">Github</a></p>
            </div>
          </div>
        </div>

        <div>
          <div className="message">
            {/* <div className="signup">
              <button>Sign Up!</button>
            </div> */}
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
            <a href="mailto:us@pinstagram500.com">Say Hello</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
