import React, { Component } from 'react';
import './testimonials.css';

export class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials__container ">
        <h4>{this.props.content}</h4>
        <section className="testimonials__container__person">
          <img src={this.props.image} alt="" />

          <section className="testimonials__container__person__name">
            <h5>{this.props.fullName}</h5>
            <p>{this.props.position}</p>
          </section>
        </section>
      </div>
    )
  }
}

export default Testimonials