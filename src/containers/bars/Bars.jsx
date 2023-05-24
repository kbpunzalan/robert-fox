import React, { Component } from 'react';
import './bars.css';

export class Bars extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bars__container">
        <section className="bars__container__text gradient-background" style= {{width: `${this.props.percentage/100 * 400}px`}} >
          <h4 className='1' id='content_bar' >{this.props.appName}</h4>
        </section>

        <section className="percentage" id='percentage'>
          <p className='gradient-text'> {this.props.percentage}%</p>
        </section>
      </div>
    )
  }
}

export default Bars