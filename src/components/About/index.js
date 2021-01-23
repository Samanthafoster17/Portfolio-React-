import React, { Component } from "react";
import "./style.css";
import Screenshot from "../../img/Screenshot 2020-10-16 160159.png";




class About extends Component {
  render() {
    let PortfolioData = this.props.PortfolioData;
    return (
       <>
        <section id="about">
        <div className="container">
  
          <header className="section-header">
            <h3>About Me</h3>
  
          </header>
  
          <div className="row about-cols">
  
  
            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
                  <img src={Screenshot}  alt="" className="img-fluid" />
  
                </div>
                  
                <p>
                 {PortfolioData.about}

                {/* "Welcome! My name is Samantha Foster, Full stack web developer who has a passion for problem solving! Realizing each problem is an opportunity to gain more knowledge! 
                After working many years with companies that limited room for growth, Decided to open more opportunities and began studying Full stack web development at Johns Hopkins University. 
                While enrolled, always made time outside of class to apply and challenge newly developed skills by creating additional projects, collaborating with classmates, and reviewing previous projects to add improvements. 
                Aside from development enjoys family time, exercise and cooking new foods. 
                Motivated to join a team that will allow skills to not only be applied but also challenged. Thank you for taking the time to read about me! Please feel free to send a message and connect using social-links!" */}
                </p>
              </div>
            </div>
  
  
  
          </div>
  
        </div>
      </section>
      </>
    )
  }
  }
export default About;

