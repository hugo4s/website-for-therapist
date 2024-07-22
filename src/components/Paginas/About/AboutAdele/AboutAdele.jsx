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
        <h2>Hey there,</h2>
        <h1>I’m Adele.</h1>
        <p>
          I’m here to support your growth in discovering strategies that <em>actually</em> work in your life. I do this work because too many people walk around the world thinking they have to do it all, take care of everyone else, and smile while doing it.
        </p>
        <p>
          I understand the significance of connecting in a safe, affirming therapy space. I will hold that space to help you connect with your inner voice - your intuition - and lead an authentically abundant life.
        </p>
        <p>
          I don’t practice one-size-fits-all therapy. I’ll follow your lead and use the creative process as a guide in sharing your experiences. There is no “good” or “bad” in art therapy (I draw with stick figures). So, even if you’ve never picked up an art material in your life, art therapy can work.
        </p>
        <button className="start-button">MARCAR CONSULTA</button>
      </div>
    </div>
  );
};

export default AboutAdele;
