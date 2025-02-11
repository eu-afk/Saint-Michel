import React from "react";
import "./Servicos.css";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Contato from "../../components/Contato/Contato";

const cards = [
  { id: 1, title: "Clínico Geral", description: "O serviço de Clínico Geral é a porta de entrada para o cuidado com a sua saúde. Nossos profissionais estão preparados para realizar atendimentos abrangentes, oferecendo diagnósticos precisos e orientações sobre os mais diversos problemas de saúde. O clínico geral avalia sintomas, solicita exames quando necessário e acompanha o tratamento de condições comuns, como gripes, dores, alergias, hipertensão, diabetes, entre outras. Além disso, ele atua na prevenção de doenças, promovendo check-ups regulares e aconselhamento sobre hábitos saudáveis.  Agende sua consulta e cuide da sua saúde com quem entende do assunto!", 
    
   },
];

const ContactInfo = [
  { title: "EMERGÊNCIA", info: "(11) 6918-1525", img: "../src/img/icons8-siren-96.png" },
];

export default function HealthPage() {
  return (
    <>
      <Navbar />

      <img src="../src/img/logo servico.png" className="img-servicos" alt="Logo Servicos" />
      <br /><br />
      <h1 className="tittle-contato">Clínico Geral</h1>
      <h1 className="team-title">Principais serviços da nossa rede</h1>

      {/* Seção com os cards lado a lado */}
      <div className="team-section">
        <div className="image-container">
          {cards.map((card) => (
            <div key={card.id} className="card-servico">
              <div className="image-servico" style={{ flex: 1.2 }}>
                <img src={"src/img/ClinicoGeral.jpg"} alt={card.title} className="imgCard-servico" />
              </div>
              <div className="content-servico">
                <h3 className="title-card">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <br />
                <button className="team-button">Saiba Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="team-section">
        <div className="image-container">
          {cards.map((card) => (
            <div key={card.id} className="card-servico">
              <div className="image-servico" style={{ flex: 1.2 }}>
                <img src={"src/img/ClinicoGeral.jpg"} alt={card.title} className="imgCard-servico" />
              </div>
              <div className="content-servico">
                <h3 className="title-card">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <br />
                <button className="team-button">Saiba Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <Contato />
      <Footer />
    </>
  );
}
