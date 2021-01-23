import React, { Component }  from "react";
import "./style.css";
 
class Header extends Component {
  render() {
    let PortfolioData = this.props.PortfolioData;
    return (
      <>
      <header id="header" className="fixed-top header-transparent" >
      <div className="container-fluid">
  
        <div className="row justify-content-center">
        <div class="col-xl-11 d-flex align-items-center">
         <h1 className="logo mr-auto"><a href="#intro">{PortfolioData.name}</a></h1>
        
  
        <nav className="nav-menu d-none d-lg-block">
          <ul >
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li className="drop-down"><a href="#resume">Resume</a>
              <ul >
                <li><a style={{fontWeight: `bold`}} href={PortfolioData.resumeNewTab} target="_blank rel=norefferer" title="Resume.pdf">Open In New Tab</a></li>
                <li><a style={{fontWeight: `bold`}} href={PortfolioData.resumeDownload} target="_blank rel=norefferer" title="Resume.pdf">Download PDF</a></li>
              </ul>
            </li>
            <li className="drop-down"><a href="#social-links">Social Links</a>
              <ul>
                <li><i className="fa fa-github"></i> <a style={{fontWeight: `bold`}} href={PortfolioData.github} title="https://github.com/Samanthafoster17" target="_blank rel=norefferer">Github</a></li>
                <li><i className="fa fa-linkedin"></i> <a style={{fontWeight: `bold`}} href={PortfolioData.linkedIn} title="https://www.linkedin.com/in/samantha-foster-1b1b141b2/" target="_blank rel=norefferer">Linkedin</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      </div>
      </div>
    </header>

    </>



      

    
      
    )
  }
}


export default Header;