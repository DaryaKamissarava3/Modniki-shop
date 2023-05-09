import React from 'react';
import './topSectionTitle.css';

const TopSectionTitle = () => {
  return (
    <>
      <div className="header-title-block">
        <div>
          <h1 className="header-title">NEW COLLECTION</h1>
        </div>
        <div className="title-description">
          Our easiest chuck-on-and-go staples come with a serious style heritage<br/>
          that’s liberating, sexy, comfy and supremely cool.
        </div>
        <button className="header-button">SHOP NEW ARRIVALS</button>
      </div>
    </>
  );
};

export default TopSectionTitle;