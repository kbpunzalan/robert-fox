import React, { Component } from 'react';
import './appLogo.css';

export class AppLogo extends Component {
  render() {
    return (
      <div className="applogo__container">
        <img src={this.props.image} alt="" />
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default AppLogo;