import React from 'react';
import {useSelector} from 'react-redux';

const CategoryItem = ({pass, name, updateStatus, updateData,categoryTitle}) => {
  const products=useSelector((state)=>state.products.products);

  const handleClick = async () => {
    const resArr = products.filter(el => el.type === name)
    if (resArr.length === 0) {
      alert('No beauty products found');
      return;
    }
    categoryTitle(name)
    updateStatus((prevState) => !prevState);
    updateData(resArr);
  };

  return (
    <button
      className="category-item"
      onClick={handleClick}
    >
      <img src={pass} className="category-item-img" alt="image-of-category-product"/>
      <span className="category-item-title">{name}</span>
    </button>
  );
};

export default CategoryItem;