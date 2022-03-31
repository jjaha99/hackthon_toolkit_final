import React from 'react';
import people from '../../assets/social_il.png';
import bg from '../../assets/il.png';
import './header.css';
import Blog from '../blog/Blog';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Concordia University&apos;s Innovation Lab</h1>
      <p>The Innovation Lab is a playground where you will work in multidisciplinary teams on ideas brought in by industry, community, faculty, or you. You will develop innovation skills through workshops and by participating in exciting activities that are designed to nurture your innovative mindset. 
          <br></br>So come play and experience creative collisions that will empower you to design the future and be a part of the rich innovation culture at Concordia!</p>

      <div className="gpt3__header-content__input">
      <a href='https://www.concordia.ca/next-gen/innovation-lab.html'><button type="button">Check us out!</button> </a> 
      </div>

    </div>

    <div className="gpt3__header-image">
     <img src={bg} /> 
    </div>
  </div>
);

export default Header;