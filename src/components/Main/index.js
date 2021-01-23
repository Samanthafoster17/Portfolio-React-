import React, { Component } from "react";

import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import "./style.css";
import PortfolioData from "../../utils/PortfolioData";




export default class Main extends Component {
    render() {
        return (
           
            <div  className="main">
                <main id="main">
                

                <About PortfolioData={PortfolioData} />
                <Portfolio PortfolioData={PortfolioData} />
                <Contact PortfolioData={PortfolioData} />
                
                </main>
                </div>
        )
    }
}