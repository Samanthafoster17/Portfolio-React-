import './App.css';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Main from './components/Main';
import BackToTop from './components/BackToTop';
import PortfolioData from "./utils/PortfolioData";




function App() {
  return (
   <div className="App">
     <Header PortfolioData={PortfolioData} />,
     <Intro />,
  <Main />,
  <Footer PortfolioData={PortfolioData} />,
  <BackToTop />
   </div>
   
  );
}

export default App;
