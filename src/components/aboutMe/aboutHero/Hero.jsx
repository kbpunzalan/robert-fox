import React from 'react';
import './hero.css';
import { robertFox, companies, academics, earlyAge, whatIDo, academicsHover, earlyAgeHover, whatIDoHover, companiesHover } from './imports.js'


const removeGradientGeneral = () => {
  let array = ['earlyAge1', 'academics1', 'whatIDo1', 'companies1'];
  array.forEach(element => {
    document.getElementById(element).style.display = 'none';
  });
}

const addBlackGeneral = () => {
  let array = ['earlyAge', 'academics', 'whatIDo', 'companies'];
  array.forEach(element => {
    document.getElementById(element).style.display = 'flex';
  });
}

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      earlyAge: true,
      items: {
        earlyAge: false,
        companies: false,
        academics: false,
        doesWhat: false
      }
    }
    
    this.generalParagraph = this.generalParagraph.bind(this);

    this.academicsChangeHandler = this.academicsChangeHandler.bind(this);
    this.earlyAgeChangeHandler = this.earlyAgeChangeHandler.bind(this);
    this.whatIDoChangeHandler = this.whatIDoChangeHandler.bind(this);
    this.companiesChangeHandler = this.companiesChangeHandler.bind(this);
  }

  generalParagraph(gradientID, blackID) {
    removeGradientGeneral();
    addBlackGeneral()

    document.getElementById(gradientID).style.display = 'flex';
    document.getElementById(blackID).style.display = 'none';

    // set all states to false
    Object.keys(this.state.items).map(
      i => this.setState({ [i]: false }))
  }

  earlyAgeChangeHandler() {
    this.generalParagraph('earlyAge1', 'earlyAge');
    this.setState({ earlyAge: true });
  }
  
  academicsChangeHandler() {
    this.generalParagraph('academics1', 'academics');
    this.setState({ academics: true });
  }
  
  whatIDoChangeHandler() {
    this.generalParagraph('whatIDo1', 'whatIDo');
    this.setState({ doesWhat: true });
  }
  
  companiesChangeHandler() {
    this.generalParagraph('companies1', 'companies');
    this.setState({ companies: true });
  }

  render() {
    // removeGradientGeneral()
    return (
      <div className="about-hero ghost-border-gradient content-margin">
        <div className="about-hero__image">
          <img src={robertFox} alt="Picture of Robert Fox" />
        </div>

        <div className="about-hero__text">
          <h1 className='gradient-text'>I’m Robert Fox.</h1>
          <h2>Freelance UI Designer &amp; Web Developer</h2>
          <section className="about-hero__text__paragraph">
            <img src={earlyAge} id='earlyAge' className='about-hero__text__paragraph--display' alt="" onClick={this.earlyAgeChangeHandler} />
            <img src={earlyAgeHover} id='earlyAge1' className='about-hero__text__paragraph--display1' alt="" onClick={this.earlyAgeChangeHandler} />

            <img src={academics} alt="" id='academics' className='about-hero__text__paragraph--display' onClick={this.academicsChangeHandler} />
            <img src={academicsHover} alt="" id='academics1' className='about-hero__text__paragraph--display1' onClick={this.academicsChangeHandler} />

            <img src={whatIDo} id='whatIDo' className='about-hero__text__paragraph--display' alt="" onClick={this.whatIDoChangeHandler} />
            <img src={whatIDoHover} id='whatIDo1' className='about-hero__text__paragraph--display1' alt="" onClick={this.whatIDoChangeHandler} />

            <img src={companies} id='companies' className='about-hero__text__paragraph--display' alt="" onClick={this.companiesChangeHandler} />
            <img src={companiesHover} id='companies1' className='about-hero__text__paragraph--display1' alt="" onClick={this.companiesChangeHandler} />
          </section>

          <section className="about-hero__text__shown">
            {this.state.earlyAge &&
              <p id='earlyAgeParagraph' className='about-hero__text__shown--display'>I was born in <span>Henderson, Nevada</span> almost three decades ago. From an early age I showed interest for computers and that grew into a passion during high school.</p>
            }

            {this.state.academics &&
              <p className='about-hero__text__shown--display'> I got into <span>web design</span> and development in college. Attending the <span>Carnegie Mellon University</span> in <span>Pittsburgh</span> was the best decision I ever made because it showed me what I wanted to do for the rest of my life.</p>

            }

            {this.state.doesWhat &&
              <p className='about-hero__text__shown--display'> Currently I help businesses all around the world by <span>designing</span> and <span>coding websites and mobile apps</span>.</p>

            }

            {this.state.companies &&
              <>
                <p className='about-hero__text__shown--display'> I had the pleasure of working with big companies like <span>Apple</span>, <span>Microsoft</span> and <span>Amazon</span>, just to name a few.</p>
                <p>Right now I’m based in <span>New York</span>.</p>
              </>
            }
          </section>
        </div>
      </div>
    )
  }
}

export default Hero