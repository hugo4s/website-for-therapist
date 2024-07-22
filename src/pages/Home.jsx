import React from 'react';
import Header from './../components/Header/Header';
import HeaderSection from '../components/Paginas/Home/HeaderSection/HeaderSection';
import TextSection from '../components/Paginas/Home/TextSection/TextSection';
import WhoWeAre from '../components/Paginas/Home/WhoWeAre/WhoWeAre';
import FAQ from '../components/Paginas/Home/FAQ/FAQ';
import WhatWeBelieve from '../components/Paginas/Home/WhatWeBelieve/WhatWeBelieve';
import Footer from './../components/Footer/Footer'

function Home() {
  return (
    <div className="home">
      <Header />
      <HeaderSection />
      <TextSection />
      <WhoWeAre />
      <WhatWeBelieve/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default Home;
