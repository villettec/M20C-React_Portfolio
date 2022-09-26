import React, {useState} from "react";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from './components/Header';
import Footer from './components/Footer';
import "./style.css"

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const handleChange = () => {
    if (currentPage === "About") {
      return <AboutMe/>
    }
    if (currentPage === "Contact") {
      return <Contact/>
    } 
    if (currentPage === "Portfolio") {
      return <Portfolio/>
    }
    if (currentPage === "Resume") {
      return <Resume/>
    }
  };
  return (
    <div>
        <Header setCurrentPage={setCurrentPage}/>
        {handleChange()}
        <Footer/>
    </div>
  );
}

export default App;
