import React, { Component } from 'react';
import './whatYouGet.css';

export class WhatYouGet extends Component {
  render() {
    return (
      <div className='whatYouGet__container'>
        <section className="whatYouGet__container__title" style={{color: this.props.color}}>
          <h5>{this.props.title}</h5>
          <img src={this.props.icon} alt="" />
        </section>
        
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default WhatYouGet