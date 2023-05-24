import React, { Component } from 'react';
import './hero.css';
import { downward, check, apple, adobe, github, microsoft, amazon } from './imports'

export class Hero extends Component {
  render() {
    return (
      <>
        <div className="hero__container content-margin" id='home'>
          <section className="hero__container__text">
            <h3 className='gradient-text'>Hey there, I’m Robert</h3>
            <h1>Freelance UI Designer & Web Developer</h1>
            <p>I help business grow by crafting amazing web experiences. If you’re looking for a designer and developer that likes to get stuff done, let’s talk.</p>
          </section>

          <section className="hero__container__buttons">
            <a href="#mywork">
              <div className="hero__container__buttons--work gradient-background">
                <p>See my Work</p>
                <img src={downward} alt="Downward Icon" />
              </div>
            </a>
            
            <div className="hero__container__buttons--hire ghost-border-gradient">
              <p className='gradient-text'>Hire Me</p>
              <img src={check} alt="Downward Icon" />
            </div>
          </section>
        </div>

        <div className="hero__companies content-margin gradient-background">
          <div className="hero__companies__text">
            <p>I had the pleasure of working with these awesome companies</p>
          </div>

          <div className="hero__companies__logos">
            <img src={amazon} alt="Amazon Logo" />
            <img src={adobe} alt="Adobe Logo" />
            <img src={apple} alt="Apple Logo" />
            <img src={github} alt="Github Logo" />
            <img src={microsoft} alt="Microsoft Logo" />
          </div>
        </div>
      </>
    )
  }
}

export default Hero;