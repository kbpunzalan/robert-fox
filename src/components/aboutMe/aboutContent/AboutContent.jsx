import React from 'react';

import Bars from '../../../containers/bars/Bars';
import './aboutContent.css';

import WhatYouGet from '../../../containers/whatYouGet/WhatYouGet';
import Testimonials from '../../../containers/testimonials/Testimonials';
import ImageHover from '../../../containers/imageHover/ImageHover';
import AppLogo from '../../../containers/appLogos/AppLogo';

import { quality, robertLaptop, time, wittingsGithub, wittingsAmazon, eCommerce, mobile, responsive, array, design, dev } from './imports.js';


class AboutContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      design: true,
      dev: false
    }

    this.designChangeHandler = this.designChangeHandler.bind(this);
    this.devChangeHandler = this.devChangeHandler.bind(this);
    this.designMouseOver = this.designMouseOver.bind(this);
    this.devMouseOver = this.devMouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  designChangeHandler() {
    this.setState({ design: true })
    this.setState({ dev: false })

    document.getElementById('dev').classList.remove('gradient-background');
    document.getElementById('design').classList.add('gradient-background');
    document.getElementById('dev').classList.remove('hover-background-about-me');
    document.getElementById('design').classList.remove('hover-background-about-me');
    
  }
  
  devChangeHandler() {
    this.setState({ dev: true })
    this.setState({ design: false })
    
    document.getElementById('design').classList.remove('gradient-background');
    document.getElementById('dev').classList.add('gradient-background');
    document.getElementById('dev').classList.remove('hover-background-about-me');
    document.getElementById('design').classList.remove('hover-background-about-me');
  }
  
  designMouseOver() {
    if (!this.state.design) {
      document.getElementById('design').classList.add('hover-background-about-me');
    }
  }
  
  devMouseOver() {
    if (!this.state.dev) {
      document.getElementById('dev').classList.add('hover-background-about-me');
    }
  }
  
  mouseOut() {
    document.getElementById('dev').classList.remove('hover-background-about-me');
    document.getElementById('design').classList.remove('hover-background-about-me');
    
  }
  

  render() {
    return (
      <div className='about-content__container'>
        <div className="about-content__container__skillSet content-margin">
          <div className="about-content__container__skillSet__text">
            <h3 className='gradient-text'>SKILL SET</h3>
          </div>

          <div className="about-content__container__skillSet__bars">
            <Bars appName={'Adobe XD'} percentage={87} />
            <Bars appName={'Figma'} percentage={90} />
            <Bars appName={'Adobe Illustrator'} percentage={80} />
            <Bars appName={'Sketch'} percentage={78} />
            <Bars appName={'Adobe Photoshop'} percentage={75} />
            <Bars appName={'HTML 5'} percentage={75} />
            <Bars appName={'CSS 3'} percentage={90} />
            <Bars appName={'Javascript'} percentage={80} />
            <Bars appName={'React JS'} percentage={89} />
            <Bars appName={'Codepen'} percentage={75} />
          </div>
        </div>

        <div className="about-content__container__time-quality content-margin">
          <div className="about-content__container__time-quality__text">
            <h4 className='gradient-text'>Regardless of project size, you will always get:</h4>

            <div className="about-content__container__time-quality__text__paragraph">
              <WhatYouGet title={'1. On-time delivery'} content={'I know time is money so I don’t want to waste yours. Or mine. So I guarantee that I will always deliver what you pay for as promised.'} icon={time} color={'#FC3A79'} />
              <WhatYouGet title={'2. Quality'} content={'I don’t want to put my name on something subpar so my first concern is always quality. No matter what, you will love the end result.'} icon={quality} color={'#FE572E'} />
            </div>
          </div>

          <div className="about-content__container__time-quality__image">
            <img src={robertLaptop} alt="" />
          </div>
        </div>

        <div className="about-content__container__testimonials gradient-background content-margin">
          <Testimonials content={'“Working with Robert has been an absolute pleasure and we’ll definitely turn to his expertise for new projects.”'} image={wittingsAmazon} fullName={'James Wittings'} position={'Marketing Director at Amazon'} />
          <Testimonials content={'“Robert is great. We worked together really well and we’ll definitely contact his services in the furure”'} image={wittingsGithub} fullName={'James Wittings'} position={'Creative Director at GitHub'} />
        </div>

        <div className="about-content__container__imageHover content-margin">
          <h3 className='gradient-text'>What I Can Do:</h3>

          <div className="about-content__container__imageHover__content" >
            {
              array.map((item, index) => {
                return (
                  <ImageHover key={index} title={item.title} content={item.content} image={item.image} />
                )
              })
            }
          </div>
        </div>

        <div className="about-content__container__tools content-margin">

          <div className="about-content__container__tools__clicker">
            <div id='design' className="about-content__container__tools__clicker--design gradient-background" onClick={this.designChangeHandler} onMouseOver={this.designMouseOver} onMouseOut={this.mouseOut} >
              <p>Tools I use for Design</p>
            </div>

            <div id='dev' className="about-content__container__tools__clicker--dev" onClick={this.devChangeHandler} onMouseOver={this.devMouseOver} onMouseOut={this.mouseOut}>
              <p>Tools I use for Development</p>
            </div>
          </div>

          <div className="about-content__container__tools__contents">
            {this.state.design &&
              <div className="about-content__container__tools__contents--design">
                {
                  design.map((item, index) => {
                    return(
                      <AppLogo key={index} image={item.image} name={item.name} />
                    ) 
                  })
                }
              </div>
            }

            {this.state.dev &&
              <div className="about-content__container__tools__contents--dev">
                {
                  dev.map((item, index) => {
                    return(
                      <AppLogo key={index} image={item.image} name={item.name} />
                    ) 
                  })
                }
              </div>
            }
          </div>


        </div>

      </div>
    )
  }
}

export default AboutContent;