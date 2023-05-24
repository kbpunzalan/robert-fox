import NavBar from './navbar/NavBar';
import Hero from './hero/Hero';
import MyWork from './work/MyWork';
import FooterContent from './footer_content/FooterContent';
import FooterMain from './footer_main/FooterMain';

import React, { Component } from 'react'

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <MyWork />
        <FooterContent />
        <FooterMain />
      </div>
    )
  }
}

export default Homepage;