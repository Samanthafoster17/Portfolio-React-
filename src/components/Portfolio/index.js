import React, { Component } from "react";
import "./style.css";




class Portfolio extends Component {
  render() {
   let PortfolioData = this.props.PortfolioData;
    return(
    <>
     <section id="portfolio" className="section-bg">
       <div className="container">
         <header className="section-header">
           <h3 className="section-title">My Portfolio</h3>
         </header>
         <div className="row portfolio-container">

           {
             PortfolioData.projects && PortfolioData.projects.map((item)=>{
               return(
                 <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay={item.dataWow}>
                   <div className="portfolio-wrap">
                     <figure>
                       <img src={item.img} className="img-fluid" alt="" />
                       <a href={item.github} className="link-preview"  target="_blank rel=norefferer"
                  role="button" aria-pressed="true" id="github" title="View Github Repository"><i
                    className="fa fa-github"></i></a>
                <a href={item.projectSite} className="link-details"  target="_blank rel=norefferer"
                  title="Visit Site"><i className="ion ion-android-open"></i></a>
                     </figure>
                   
                     <div className="portfolio-info">
                 <h4><a href={item.projectSite} target="_blank rel=norefferer">{item.title}</a></h4>
                <p></p>

                 <div className="progress">
                   <div className="progress-bar" role="progressbar" style={{backgroundColor: item.backgroundColor, width: item.width}} aria-valuenow="62.3"
                    aria-valuemin="0" aria-valuemax="100">{item.language}</div>
                  <div className="progress-bar" style={{backgroundColor: item.secBgColor , width: item.secWidth}} role="progressbar"
                    aria-valuenow="26.2" aria-valuemin="0" aria-valuemax="100">{item.secLang}</div>
                  <div className="progress-bar" role="progressbar" style={{backgroundColor: item.thirdBgColor, width: item.thirdWidth}}
                    aria-valuenow="11.5" aria-valuemin="0" aria-valuemax="100">{item.thirdLang}</div>
                    <div className="progress-bar" style={{backgroundColor: item.fourthBgColor, width: item.fourthWidth}} role="progressbar"
                    aria-valuenow="26.2" aria-valuemin="0" aria-valuemax="100">{item.fourthLang}</div>
                </div>

                     </div>
                   
                     </div>
                   </div>
               )
             })
           }

         </div>

       </div>
     </section>
    </>




    )
}
}
export default Portfolio;