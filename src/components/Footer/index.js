import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    let PortfolioData = this.props.PortfolioData;
    return (
      <>
<footer id="footer">
<div class="footer-top">
  <div class="container">
    <div class="row">


      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="ion-ios-arrow-right"></i> <a href="#intro">Home</a></li>
          <li><i class="ion-ios-arrow-right"></i> <a href="#about">About Me</a></li>
          <li><i class="ion-ios-arrow-right"></i> <a
                  href={PortfolioData.resumeNewTab} 
              target="_blank rel=noreferrer">Resume</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-contact">
        <h4>Contact</h4>
        <p>
          <strong>Location: </strong>
         {PortfolioData.location}
          <br/> 
          <strong>Phone:</strong> {PortfolioData.phone}
          <br/>
          <strong>Email:</strong> {PortfolioData.email}
        </p>

        <div class="social-links">
          <a href={PortfolioData.github} target="_blank rel=norefferer" class="github"><i class="fa fa-github"></i></a>
          <a href={PortfolioData.linkedIn} target="_blank rel=norefferer" class="linkedin"><i
              class="fa fa-linkedin"></i></a>
        </div>

      </div>



    </div>
  </div>
</div>



</footer>
 </>
 
)
    }
}

export default Footer;