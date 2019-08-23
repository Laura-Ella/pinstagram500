import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="main">
        <div className="backgroundimage">
          <div className="welcome" />
          <div className="ipsumcontainer">
            <div className="story">
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
              <img src="" />
            </div>
            <div className="bio">
              <p>Dee's Bio</p>
              <p>Dee is a writer.</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/dyrolyn-a-46ab2bb7/"
                  className="linkedin"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/joeyd2212" className="linkedin">
                  Github
                </a>
              </p>
            </div>
            <div className="austin">
              <img src="" />
            </div>
            <div className="bio">
              <p>Austin's Bio</p>
              <p>Software Developer out of Arlington, VA.</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/austin-regan/"
                  className="linkedin"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/astnrgn" className="linkedin">
                  Github
                </a>
              </p>
            </div>
            <div className="laura">
              <img src="" />
            </div>
            <div className="bio">
              <p>Laura's Bio</p>
              <p>Software Engineer || Chemist</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/laura-ella-robinson/"
                  className="linkedin"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/Laura-Ella" className="linkedin">
                  Github
                </a>
              </p>
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
              <input type="text" placeholder="Hey guys!" />
              <button>Send!</button>
            </div>
          </div>
          <div />
        </div>
        <div className="footercontainer">
          <div className="footerleft">
            <h3>Contact Info</h3>
            <p>
              Address:
              <span>
                <a
                  href="https://goo.gl/maps/69APgP5PuAeDamnY9"
                  className="address"
                >
                  509 7th St NW, Washington, DC
                </a>
              </span>
            </p>
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
