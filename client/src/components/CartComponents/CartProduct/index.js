import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import allActions from "../../../redux/actions";
import './cartProduct.css';

const CartProduct = ({cartItem}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(allActions.cartActions.changeQuantity([cartItem.id, quantity]));
  }, [quantity]);

  const removeItem = () => {
    dispatch(allActions.cartActions.removeFromCart(cartItem));
  };

  const imageURL = cartItem.images[0].toString();

  return (
    <>
      <div className="cart-inner">
        <div className="cart-images ">
          <div>
            <img src={imageURL} className="cart-img" alt="img"/>
          </div>
        </div>
        <div className="cart-item-description">
          <div className="cart-description">{cartItem.description}</div>
          <div className="prod-price">
            <span className="prod-price-currency">{cartItem.price.currency}</span>
            $
            <span>{cartItem.price.value}</span>
          </div>

          <div>
            COLOR
            <div className="prod-color-square" style={{
              backgroundColor: `${cartItem.color.hex}`,
            }}/>
          </div>
          <div className="cart-sizes">{cartItem.availableSizes}</div>
          <div className="cart-quantity">
            <p className="cart-quantity-title">QUANTITY:</p>
            <select
              className="cart-quantity-select"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button
            className="remove-btn"
            onClick={removeItem}
          >
            &#10006;  REMOVE
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;