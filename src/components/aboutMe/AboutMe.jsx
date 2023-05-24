import React from 'react';
import NavBar from '../homepage/navbar/NavBar';
import FooterMain from '../homepage/footer_main/FooterMain';

import Hero from './aboutHero/Hero';
import AboutContent from './aboutContent/AboutContent';


class AboutMe extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <AboutContent />
        <FooterMain />
      </>
    )
  }
}

export default AboutMe