import React from 'react';
import Header from './../components/Header/Header';
import AboutAdele from '../components/Paginas/About/AboutAdele/AboutAdele'
import QuoteComponent from '../components/Paginas/About/QuoteComponent/QuoteComponent';
import MyStoryComponent from '../components/Paginas/About/MyStoryComponent/MyStoryComponent';
import Click from '../components/Paginas/About/Click/Click';
import Certificate from '../components/Paginas/About/Certificate/Certificate';
import FAQ from '../components/Paginas/Home/FAQ/FAQ';
import Footer from './../components/Footer/Footer';

function About() {
  return (
    <div className="about">
      <Header/>
      <AboutAdele/>
      <QuoteComponent/>
      <MyStoryComponent />
      <Click/>
      <Certificate/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default About;
