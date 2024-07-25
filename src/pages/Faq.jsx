import React from 'react';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Faq from './../components/Paginas/Perguntas/Respostas/Respostas'
import Perguntas from '../components/Paginas/Perguntas/PerguntasFrequentes/PerguntasFrequentes';

function About() {
  return (
    <div className="about">
      <Header/>
      <Perguntas/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default About;
