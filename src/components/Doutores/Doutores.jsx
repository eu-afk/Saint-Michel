import React from "react";
import "./Doutores.css";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const doctors = [
  { name: "Dr. Flávio", specialty: "Neurologista", image: "src/img/MedicoNego1.png" },
  { name: "Dr. Flávio", specialty: "Neurologista", image: "src/img/MedicoNego1.png" },
  { name: "Dr. Flávio", specialty: "Neurologista", image: "src/img/MedicoNego1.png" },
  { name: "Dr. Flávio", specialty: "Neurologista", image: "src/img/MedicoNego1.png" },
  { name: "Dr. Flávio", specialty: "Neurologista", image: "src/img/MedicoNego1.png" },
  { name: "Dr. Flávio", specialty: "Neurologista", image: "src/img/MedicoNego1.png" },
];

const DoctorCard = ({ name, specialty, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="doctor-image" />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{specialty}</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <button className="profile-button">Visualizar Perfil</button>
      </div>
    </div>
  );
};

const Medico = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Medico;
