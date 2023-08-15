import React, {useState} from "react";

// For head metadata
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from "react-helmet";

import Sidebar from './components/Sidebar';

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
// For alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Helmet>
        <title>Villette's Portfolio</title>
        <meta name="description" content="Villette's Portfolio"/>
        <meta name="keywords" content="front end developer, web developer, software developer"/>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link
        rel="icon"
        sizes="192x192"
        href="%PUBLIC_URL%/android-chrome-192X192.png"
      />
      <link
        rel="icon"
        sizes="512x512"
        href="%PUBLIC_URL%/android-chrome-512X512.png"
      />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="%PUBLIC_URL%/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="%PUBLIC_URL%/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="%PUBLIC_URL%/favicon-16x16.png"
      />
      <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
      </Helmet>

        <HelmetProvider>
        <Sidebar setCurrentPage={setCurrentPage}/>

        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="light"/>

        {handleChange()}
        </HelmetProvider>
    </div>
  );
}

export default App;
