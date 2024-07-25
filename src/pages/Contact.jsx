import React from 'react';
import Header from './../components/Header/Header';
import ContactUs from '../components/Paginas/Contacto/ContactUs/ContactUs';
import ContactComponent from '../components/Paginas/Contacto/ContactComponent/ContactComponent';
import FAQ from '../components/FAQ/FAQ';
import Footer from './../components/Footer/Footer';

function Contact() {
  return (
    <div className="contact">
      <Header/>
      <ContactUs/>
      <ContactComponent/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default Contact;
