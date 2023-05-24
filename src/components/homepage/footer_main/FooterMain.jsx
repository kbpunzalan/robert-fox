import React, { Component } from 'react'
import './footerMain.css';
import { dribble, instagram, twitter } from '../../../components/homepage/navbar/imports';

class FooterMain extends Component {
  render() {
    return (
      <div className="footer__container">
        <div className="footer__container__copyright">
          <p>&copy; Copyright Robert Fox 2022. All rights reserved.</p>
        </div>

        <div className="footer__container__text">
          <p>My Projects</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="footer__container__logo">
          <img src={twitter} alt="Twitter Logo" />
          <img src={instagram} alt="Instagram Logo" />
          <img src={dribble} alt="Dribble Logo" />
        </div>
      </div>
    )
  }
}

export default FooterMain