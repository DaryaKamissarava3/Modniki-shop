import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartProduct from '../CartProduct';
import Subscription from '../../Subscription';
import Footer from '../../Footer';
import NavigationPanel from "../../NavigationComponents/NavigationPanel/NavigationPanel";
import {sendOrder} from "../../../services";
import allActions from "../../../redux/actions";
import './cart.css';
import VisaLogo from '../../../assets/images/cart/visa-logo.svg';
import CreditCartLogo from '../../../assets/images/cart/maestro-logo.svg';

const Cart = () => {
  const [productsResponse, setProductsResponse] = useState('');
  const allProductsInCart = useSelector((state) => state.cart.cart);
  const cart = useSelector((state) => state.cart.cart);
  const products = cart.map((item) => item.id);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price.value) * item.quantity, 0);

  function makeOrder(event) {
    event.preventDefault();
    sendOrder(products)
      .then((response) => response.json())
      .then((data) => {
        setProductsResponse(data);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(allActions.cartActions.clearCart());
  }

  return (
    <>
      <NavigationPanel blockTitle="black-title" classForNav="nav-link-black" fill="black"/>
      <div className="cart-container">
        <div className="cart-title">
          <span className="cart-title-text">BAG</span>
          <span className="cart-count">({allProductsInCart.length})</span>
        </div>
        {allProductsInCart.map((item) =>
          (
            <CartProduct
              cartItem={item}
              key={item.id}
            />
          ))}
        <div className="total-sum">
          Total USD ${totalPrice}
        </div>
        {productsResponse.message !== undefined &&
           <div className="products-response">{productsResponse.message}</div>
        }
        <button className="btn-checkout" onClick={(event) => makeOrder(event)} >PROCEED TO CHECKOUT</button>
        <div className="bank-cart-img">
          <img src={CreditCartLogo} className="bankCart-first-img" alt="maestro-logo.svg"/>
          <img src={VisaLogo} className="bankCart-second-img" alt="visa-logo.svg"/>
        </div>
      </div>
      <Subscription/>
      <Footer/>
    </>
  );
};

export default Cart;