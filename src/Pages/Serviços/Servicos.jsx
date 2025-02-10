import React from "react";
import "./Servicos.css";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Contato from "../../components/Contato/Contato";

const cards = [
  { id: 1, title: "Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Proctologista", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, title: "Endocrinologista", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, title: "Fonoaudióloga", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, title: "Pediatria", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 6, title: "Oftalmologista", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
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
      <div className="container-servicos">
        <div className="cards-section-servicos">
          {cards.map((card) => (
            <div key={card.id} className="card-servico">
              <div className="image-servico">
                <img src={"../src/img/cards.png"} alt={card.title} className="imgCard-servico" />
              </div>
              <div className="content-servico">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#">Leia mais →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contato/>
      <Footer />
    </>
  );
}
