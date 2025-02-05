import React from "react";
import "./Medico.css";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Doutores from "../../components/Doutores/Doutores";


const Medico = () => {
  return (
    <>
      <Navbar />
        <Doutores/>
      <Footer />
    </>
  );
};

export default Medico;
