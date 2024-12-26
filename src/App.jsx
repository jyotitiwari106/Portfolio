import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Portfolio from "./Components/PortFolio";
import Experiance from "./Components/Experiance";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/Aboutus";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      {/*<Experiance />*/}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
