import React, {useState} from 'react';
import allActions from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import './cartButton.css';

const CartButton = ({inf}) => {
  const [disableBtn,setDisableBtn]=useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(allActions.cartActions.addToCart(inf));
    setDisableBtn(true);
  };

  return (
    <>
      <button
        className={disableBtn===false ? 'add-to-bag-button' : 'disable-btn'}
        onClick={addToCart}
        disabled={disableBtn}
      >
        ADD TO BAG
      </button>
    </>
  );
};

export default CartButton;