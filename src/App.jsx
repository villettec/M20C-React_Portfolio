import React, {useState} from "react";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from './components/Header';
import "./style.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="dark"/>
        {handleChange()}
    </div>
  );
}

export default App;
