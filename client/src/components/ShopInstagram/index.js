import React from 'react';
import MainPicture from '../../assets/images/instagram/mainpicture.png';
import FirstPicture from '../../assets/images/instagram/first.png';
import SecondPicture from '../../assets/images/instagram/second.png';
import ThirdPicture from '../../assets/images/instagram/third.png';
import FourthPicture from '../../assets/images/instagram/fourth.png';
import './shopInstagram.css';

const shopInstagram = () => {
  return (
    <div className="instagram-section container">
      <div className="inst-title">
        <p className="inst-text">SHOP INSTAGRAM</p>
        <p className="inst-shop">SHOP
          <span className="inst-cursor">
            <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.4822 11.5516L1.16058 0.200447C0.894011 -0.0668158 0.466495 -0.0668158 0.199927 0.200447C-0.0666422 0.46771 -0.0666422 0.89634 0.199927 1.1636L11.0387 12.0306L0.199927 22.8976C-0.0666422 23.1649 -0.0666422 23.5935 0.199927 23.8608C0.330696 23.9919 0.506732 24.0625 0.677738 24.0625C0.848745 24.0625 1.02478 23.9969 1.15555 23.8608L12.4772 12.5097C12.7437 12.2475 12.7437 11.8138 12.4822 11.5516Z"
                fill="#000F08"/>
            </svg>
          </span>
        </p>
      </div>
      <div className="instagram-pictures">
        <span className="inst-first-block">
          <img className="inst-main-picture" src={MainPicture} alt="main instagram picture"/>
        </span>
        <div className="inst-second-block">
          <img className="inst-extra-picture" src={FirstPicture} alt="picture"/>
          <img className="inst-extra-picture" src={SecondPicture} alt="picture"/>
          <img className="inst-extra-picture" src={ThirdPicture} alt="picture"/>
          <img className="inst-extra-picture" src={FourthPicture} alt="picture"/>
        </div>
      </div>
      <div className="inst-hashtag">#MODNIKKY</div>
    </div>
  );
};

export default shopInstagram;