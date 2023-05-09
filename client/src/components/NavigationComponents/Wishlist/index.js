import React from 'react';
import {useSelector} from 'react-redux';
import CartProduct from '../../CartComponents/CartProduct';
import Footer from '../../Footer';
import NavigationPanel from "../NavigationPanel/NavigationPanel";

const Wishlist = () => {
  const allProductsInWishlist = useSelector((state) => state.wishlist.wishlist);
console.log(allProductsInWishlist)
  return (
    <>
      <NavigationPanel blockTitle="black-title" classForNav="nav-link-black" fill="black"/>
      <div className="cart-container">
        <div className="cart-title">
          <span className="cart-title-text">WISHLIST</span>
          <span className="cart-count">({allProductsInWishlist.length})</span>
        </div>
        {allProductsInWishlist.map((item) =>
          (
            <CartProduct
              cartItem={item}
              key={item.id}
            />
          ))}
      </div>
      <Footer/>
    </>
  );
};

export default Wishlist;