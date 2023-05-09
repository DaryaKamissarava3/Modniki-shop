import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Picture from '../Picture';
import WishlistBtn from '../../NavigationComponents/WishListBtn';
import './productItem.css';

const ProductsItem = ({name, price, imgUrl}) => {
  const params = useParams();
  const products=useSelector((state)=>state.products.products);

  const productInformation = products.find((el) => {
    if (el.id === params.id) {
      return el;
    }
  });

  return (
    <div className="card-item ">
      <span className="like-note">
        <WishlistBtn fill="white" inf={productInformation} />
      </span>
      <Picture
        imageUrl={imgUrl}
        name={name}
      />
      <div className="product-cost">
        <div className="product-currency">{price.currency}</div>
        <div className="product-currency-value"> $ {price.value}</div>
      </div>
    </div>
  );
};

export default ProductsItem;