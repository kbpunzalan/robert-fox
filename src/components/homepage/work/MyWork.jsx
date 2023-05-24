import React from 'react';
import './myWork.css';
import { jamesWittings, work1, work2, work3 } from './imports';

class MyWork extends React.Component {
  render() {
    return (
      <div className='mywork content-margin'>
        <div className="mywork__text light-margin">
          <h3>My Work</h3>
          <p>I specialize in website design and development, but I’ve also designed successful iOS and Android apps.</p>
        </div>

        <div className="mywork__pictures light-margin" id='mywork'>
          <img src={work1} alt="Work1" />
          <img src={work2} alt="Work2" />
          <img src={work3} alt="Work3" />
        </div>

        <div className="mywork__testimonial">
          <p>“Working with Robert has been an absolute pleasure and we’ll definitely turn to his expertise for new projects.”</p>

          <section className="mywork__testimonial__person">
            <img src={jamesWittings} alt="James Wittings Picture and Company" />

            <section className="mywork__testimonial__person__text">
              <h4>James Wittings</h4>
              <p>Marketing Director at Amazon</p>
            </section>
          </section>
        </div>

      </div>
    )
  }
}

export default MyWork