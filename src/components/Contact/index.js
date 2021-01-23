import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
  render() {
    let PortfolioData = this.props.PortfolioData;
    return(
      
        <section id="contact" className="section-bg wow fadeInUp">
      <div className="container">

        <div className="section-header">
          <h3>Contact Me</h3>
          <p></p>
        </div>

        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Location</h3>
              <address>{PortfolioData.location}</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+14436879385" title="Call">{PortfolioData.phone}</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p><a href="mailto:Samanthafoster17@gmail.com" title="Send E-mail">{PortfolioData.email}</a></p>
            </div>
          </div>
        </div>


      </div>
    </section>

      
    )
    }
  }

export default Contact;