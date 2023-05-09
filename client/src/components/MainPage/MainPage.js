import React, {useState} from 'react';
import TopSection from "../TopSectionComponents/TopSection";
import ShopInstagram from "../ShopInstagram";
import Subscription from "../Subscription";
import Footer from "../Footer";
import Products from "../ProductsComponents/Products";
import Category from "../CategoryComponents/Category";
import CategoryList from "../CategoryComponents/CategoryList";
import ResultOfSearch from "../NavigationComponents/ResultOfSearch";
import NavigationPanel from "../NavigationComponents/NavigationPanel/NavigationPanel";

const MainPage = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [isClassName, setClassName] = useState(false);
  const [sectionName, setSectionName] = useState('');
  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [isClassNameOfSearch, setClassNameOfSearch] = useState(false);

  return (
    <>
      <NavigationPanel
        blockTitle="white-title" classForNav="nav-link dedicated" fill="white"
        updateClassStatus={setClassNameOfSearch} updateDataSearch={setResultOfSearch}
      />
      <TopSection/>
      <ResultOfSearch isActiveBlock={isClassNameOfSearch} foundResultsOfSearch={resultOfSearch} />
      <Category categoryTitle={setSectionName} updateStatus={setClassName} updateData={setSearchProducts} />
      <CategoryList sectionTitle={sectionName} isActive={isClassName} foundProducts={searchProducts} />
      <Products />
      <ShopInstagram />
      <Subscription />
      <Footer />
    </>
  );
};

export default MainPage;