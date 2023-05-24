import quality from '../../../assets/aboutMe/content/quality.svg';
import robertLaptop from '../../../assets/aboutMe/content/robertLaptop.svg';
import time from '../../../assets/aboutMe/content/time.svg';
import wittingsGithub from '../../../assets/aboutMe/content/wittingsGithub.svg';
import wittingsAmazon from '../../../assets/aboutMe/content/wittingsAmazon.svg';
import eCommerce from '../../../assets/aboutMe/content/eCommerce.svg';
import mobile from '../../../assets/aboutMe/content/mobile.svg';
import responsive from '../../../assets/aboutMe/content/responsive.svg';

import illustrator from '../../../assets/aboutMe/content/illustrator.svg';
import photoshop from '../../../assets/aboutMe/content/photoshop.svg';
import xd from '../../../assets/aboutMe/content/xd.svg';
import sketch from '../../../assets/aboutMe/content/sketch.svg';
import figma from '../../../assets/aboutMe/content/figma.svg';

import js from '../../../assets/aboutMe/content/js.svg';
import react from '../../../assets/aboutMe/content/react.svg';
import codepen from '../../../assets/aboutMe/content/codepen.svg';

const design = [
  {
    image: sketch,
    name: 'Sketch'
  },
  {
    image: figma,
    name: 'Figma'
  },
  {
    image: xd,
    name: 'Adobe XD'
  },
  {
    image: photoshop,
    name: 'Adobe Photoshop'
  },
  {
    image: illustrator,
    name: "Adobe Illustrator"
  }
]

const dev = [
  {
    image: js,
    name: 'Javascript'
  },
  {
    image: react,
    name: 'React'
  },
  {
    image: codepen,
    name: 'Codepen'
  }
]

const array = [
  {
    title: 'I can design and build a responsive and accessible  website',
    content: 'My goal is to build accessible and responsive user interfaces for the web and mobile, while preserving the best practices for proper user experience.',
    image: responsive
  },
  {
    title: 'I can design and build an eCommerce store',
    content: 'I have extensive knowledge of development on the front-end and back-end so I’m able to deliver a completely functional eCommerce website.',
    image: eCommerce
  },
  {
    title: 'I can design and build a mobile app for iOS and Android',
    content: 'I recently started designing and coding mobile apps and I love it. It’s a different process compared to traditional website design but I’ve been successful in all projects so far.',
    image: mobile
  }
]

export { quality, robertLaptop, time, wittingsGithub, wittingsAmazon, eCommerce, mobile, responsive, array, design, dev };