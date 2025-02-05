import React from "react";
import "./Servicos.css";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const cards = [
  { id: 1, title: "Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, title: "Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, title: "Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, title: "Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 6, title: "Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const ContactInfo = [
  { title: "EMERGÊNCIA", info: "(11) 6918-1525", img: "../src/img/icons8-siren-96.png" },
  { title: "LOCALIZAÇÃO", info: "Av. Manoel da Silva, 3400", img: "../src/img/LocationIcon.png" },
  { title: "E-MAIL", info: "saintmichiel@gmail.com", img: "../src/img/emailicon.png" },
  { title: "HORÁRIO DE TRABALHO", info: "Dom-Dom 09:00-20:00", img: "../src/img/icons8-clock-50.png" }
];

export default function HealthPage() {
  return (
    <>
      <Navbar />
      <img src="../src/img/logo servico.png" className="img-servicos" alt="Logo Servicos" />
      <div className="container">
        <div className="cards-section grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div className="image">
                <img src={"../src/img/cards.png"} alt={card.title} className="imgCard" />
              </div>
              <div className="content">
                <h3 className="CHECKUP">{card.title}</h3>
                <p>{card.description}</p>
                <a href="#">Leia mais →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <h2>ENTRE EM CONTATO</h2>
        <h3 className="CONTATO">Contato</h3>
        <div className="contact-grid">
          {ContactInfo.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="contact-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}