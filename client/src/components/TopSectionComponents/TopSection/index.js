import React from 'react';
import Background from '../../../assets/images/headerBackground.svg';
import TopSectionTitle from '../TopSectionTitle';
import './topSection.css';

const TopSection = () => {
  return (
    <div className="header" style={{ backgroundImage: 'url(' + Background + ')' }}>
      <TopSectionTitle />
    </div>
  );
};

export default TopSection;