import React from 'react';
import TitleBlock from "../../TopSectionComponents/TitleBlock";
import CategoryItem from "../CategoryItem";
import Beauty from '../../../assets/images/categories/deauty.svg';
import Tops from '../../../assets/images/categories/tops.svg';
import Denim from '../../../assets/images/categories/denim.svg';
import Swimwear from '../../../assets/images/categories/swimwear.svg';
import Tees from '../../../assets/images/categories/tees.svg';
import Dresses from '../../../assets/images/categories/dress.svg';
import './category.css'

const Category = ({updateStatus, updateData,categoryTitle}) => {
  return (
    <div className="category-container">
      <TitleBlock title="Shop by the Category"/>
      <div className="category">
        <CategoryItem pass={Dresses} name={'Dresses'}  updateStatus={updateStatus} updateData={updateData} categoryTitle={categoryTitle} />
        <CategoryItem pass={Tees} name={'Tees'}  updateStatus={updateStatus} updateData={updateData} categoryTitle={categoryTitle}/>
        <CategoryItem pass={Swimwear} name={'Swimwear'} updateStatus={updateStatus} updateData={updateData} categoryTitle={categoryTitle} />
        <CategoryItem pass={Denim} name={'Denim'} updateStatus={updateStatus} updateData={updateData} categoryTitle={categoryTitle}/>
        <CategoryItem pass={Tops} name={'Tops'} updateStatus={updateStatus} updateData={updateData} categoryTitle={categoryTitle} />
        <CategoryItem pass={Beauty} name={'Beauty'} updateStatus={updateStatus} updateData={updateData} categoryTitle={categoryTitle}/>
      </div>
    </div>
  );
};

export default Category;