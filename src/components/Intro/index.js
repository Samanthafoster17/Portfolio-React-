import React from "react";
import "./style.css";
import Carousel1 from "../../img/coding-924920_1920.jpg";
import Carousel2 from "../../img/2.jpg";
import Carousel5 from "../../img/5.jpg";




function Intro(){
    return (

    <>

        <section id="intro">
    <div className="intro-container">
      <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

        <ol className="carousel-indicators">
        <li data-target="#introCarousel" data-slide-to="0" className=""></li>
        <li data-target="#introCarousel" data-slide-to="1" className=""></li>
        <li data-target="#introCarousel" data-slide-to="2" className=""></li>
        </ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active"><img src={Carousel1} alt="" /></div>
            <div className="carousel-container">
            <div className="container">
          
          </div>
           
          </div>

          <div className="carousel-item"><img src={Carousel2} alt="" /></div>
            <div className="carousel-container">
            <div className="container">
          
          </div>
          
          </div>

            

          <div className="carousel-item"><img src={Carousel5} alt="" /></div>
            <div className="carousel-container">
        <div className="container">

        </div>
        </div>

       </div>
         

        <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div> 
      </div>  
    </section>
    
    </>
    )
}
export default Intro;

