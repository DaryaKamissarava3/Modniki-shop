import React from 'react';
import {Link} from "react-router-dom";
import ProductsItem from '../../ProductsComponents/ProductsItem';
import './categoryList.css';

const CategoryList = ({ isActive, foundProducts,sectionTitle }) => {
  return (
    <section className={isActive ? 'section products-list' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">{sectionTitle}</h2>
        </div>
        <div className="card">
          {foundProducts.map((item) =>
            (
              <Link className="product-link" to={`/products/${item.id}`} key={item.id}>
                <ProductsItem
                  imgUrl={item.images[0]}
                  name={item.name}
                  type={item.type}
                  price={item.price}
                  color={item.color}
                  availableSizes={item.availableSizes}
                  description={item.description}
                  key={item.id}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;