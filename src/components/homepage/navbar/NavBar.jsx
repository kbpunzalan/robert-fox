import React from 'react';
import './navbar.css';
import { twitter, logo, instagram, dribble } from './imports.js';

class NavBar extends React.Component {
  render() {
    return(
      <div className="navbar__container content-margin" id='navbar'>
        <div className="navbar__container__left-side">
          <a href="/"><img src={logo} alt="Robert Fox Logo" /></a> 
          <a href="/about-me"><p>About Me</p></a>
          <p>Contact</p>
        </div>

        <div className="navbar__container__right-side">
          <div className="navbar__container__right-side__contact">
            <p className='gradient-text'>hello@robertfox.design</p>
            <p>(704) 555-0127</p>
          </div>

          <div className='navbar__container__right-side__divider'></div>
          
          <div className="navbar__container__right-side__logo">
            <img src={twitter} alt="Twitter Logo" />
            <img src={instagram} alt="Instagram Logos" />
            <img src={dribble} alt="Dribble Logo" />
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;