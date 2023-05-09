import React, {useState} from 'react';
import ProductsItem from '../../ProductsComponents/ProductsItem';
import {Link} from "react-router-dom";
import './resultOfSearch.css';

const ResultOfSearch = ({isActiveBlock,foundResultsOfSearch}) => {
  const [arrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(8);

  const arrowMore = () => {
    setArrowMax(arrowMax + 8);
  };

  return (
    <section className={isActiveBlock ? 'section products-list' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">Search results</h2>
        </div>
        <div className="card">
          {foundResultsOfSearch.slice(arrowMin, arrowMax).map((item) =>
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
        {!(arrowMax >= foundResultsOfSearch.length || foundResultsOfSearch.length < 8) && (
          <button className="btn-show-more" onClick={arrowMore} >Show more</button>
        )}
      </div>
    </section>
  );
};

export default ResultOfSearch;