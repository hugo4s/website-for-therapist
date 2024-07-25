import React from 'react';
import './AboutAdele.css';
import Marvin from './../../../../assets/Marvin_Monroe.webp'; // Cer../..tifique-se de que o caminho está correto

const AboutAdele = () => {
  return (
    <div className="about-adele">
      <div className="image-container">
        <img src={Marvin} alt="Adele" />
      </div>
      <div className="text-container">
        <h2>Olá,</h2>
        <h1>O meu nome é Sílvia.</h1>
        <p>
        Estou aqui para apoiar o seu crescimento e ajudá-lo a descobrir estratégias que realmente funcionem na sua vida. Faço este trabalho porque acredito que muitas pessoas sentem a pressão de fazer tudo, cuidar de todos e manter um sorriso enquanto enfrentam desafios. Quero ajudar a aliviar essa carga e guiá-lo em direção a uma vida mais equilibrada e satisfatória.
        </p>
        <p>
        Acredito que não existe uma abordagem única para todos na hipnoterapia. Mesmo que nunca tenha experimentado a hipnose antes, ela pode ser uma ferramenta poderosa para você. Através da hipnoterapia, podemos explorar novas formas de superar obstáculos, reduzir o stress e alcançar os seus objetivos de vida.
        </p>
        <p>
        Venha descobrir como a hipnoterapia pode desbloquear o seu potencial e transformar a sua vida. Estou aqui para caminhar ao seu lado nesta jornada, ajudando-o a viver de forma mais autêntica e abundante.
        </p>
        <button className="start-button">MARCAR CONSULTA</button>
      </div>
    </div>
  );
};

export default AboutAdele;
