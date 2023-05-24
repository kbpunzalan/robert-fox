import React, { Component } from 'react';
import './imageHover.css';

export class ImageHover extends Component {
  render() {
    return (
      <div className="imageHover__content" >
        <img src={this.props.image} alt="" />
        <div className="imageHover__content__text">
          <h5 className='imageHover__content__text--opacity'>{this.props.title}</h5>
          <p className='imageHover__content__text--opacity'>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

export default ImageHover