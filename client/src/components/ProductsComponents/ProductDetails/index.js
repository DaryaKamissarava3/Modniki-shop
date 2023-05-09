import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartButton from '../../CartComponents/CartButton';
import WishlistBtn from '../../NavigationComponents/WishListBtn';
import Subscription from '../../Subscription';
import Footer from '../../Footer';
import NavigationPanel from "../../NavigationComponents/NavigationPanel/NavigationPanel";
import './productDetails.css';

const ProductDetails = () => {
  window.scrollTo(0, 0);
  const params = useParams();
  const products = useSelector((state) => state.products.products);

  const productInformation = products.find((el) => {
    if (el.id === params.id) {
      return el;
    }
  });

  const firstImage = productInformation.images[0].toString();
  const secondImage = productInformation.images[1].toString();

  return (
    <>
      <section className="product-details">
        <NavigationPanel blockTitle="black-title" classForNav="nav-link-black" fill="black"/>
        <div className="product-container">
          <div className="product-inner">
            <div className="product-images first-block">
              <div>
                <img src={firstImage} className="prod-img" alt="img"/>
              </div>
              <div>
                <img src={secondImage} className="prod-img" alt="img"/>
              </div>
            </div>
            <div className="product-description">
              <div className="prod-name">{productInformation.name}</div>
              <div className="prod-price">
                <span className="prod-price-currency">{productInformation.price.currency}</span>
                $
                <span>{productInformation.price.value}</span>
              </div>
              <div className="prod-status">
                PRE-ORDER
              </div>
              <div>
                COLOR
                <div className="prod-color-square" style={{
                  backgroundColor: `${productInformation.color.hex}`,
                }}/>
              </div>
              <div className="prod-sizes">{productInformation.availableSizes}</div>
              <div className="buttons-to-add">

                <CartButton inf={productInformation}/>

                <button className="wish-button">
                  <WishlistBtn fill="white" inf={productInformation}/>
                </button>
              </div>
              <div className="accordion">
                <div className="accordion_item active">
                  <div className="accordion_header">
                    <div className="accordion-title">PRODUCT DESCRIPTION</div>
                  </div>
                  <div className="accordion_content">
                    <p>
                      {productInformation.description}
                    </p>
                  </div>
                </div>
                <div className="accordion_item">
                  <div className="accordion_header">
                    <div className="accordion-title">SHIPPING & RETURNS</div>
                  </div>
                  <div className="accordion_content">
                    <p>
                      {productInformation.description}
                    </p>
                  </div>
                </div>
                <div className="accordion_item">
                  <div className="accordion_header">
                    <div className="accordion-title">FABRIC COMPOSITION</div>
                  </div>
                  <div className="accordion_content">
                    <p>
                      {productInformation.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Subscription/>
        <Footer/>
      </section>
    </>
  );
};

export default ProductDetails;