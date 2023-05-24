import React from 'react';
import './footerContent.css';
import up from './imports';


class FooterContent extends React.Component {
  render() {
    window.onscroll = function (ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        console.log('Hi!')
      }
    };

    return (
      <div className="footerContent__container content-margin">
        <div className="footerContent__container__details">
          <section className="footerContent__container__details__content">
            <h3>I’m currently available for freelance work.</h3>
            <p>If you’re looking for a designer and developer that likes to get stuff done, let’s talk.</p>

            <section className="footerContent__container__details__content__contact">
              <p className='gradient-text'>hello@robertfox.design</p>
              <p>(704) 555-0127</p>
            </section>

          </section>

          <section className="footerContent__container__details__cta">
            <a href='/home' className='gradient-background'>Got a project in mind? Let’s talk!</a>
          </section>
        </div>

        <div className="footerContent__container__vertical-bar "></div>

        <div className="footerContent__container__up-button gradient-background">
          <a href='#'><img src={up} alt="Up Button" /></a>
        </div>
      </div>
    )
  }
}

export default FooterContent;