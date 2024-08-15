import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductDisplay from '../components/ProductDisplay';

const Product = () => {
  const {itemsArr} = useContext(ShopContext);
  const {productId} = useParams();
  const product = itemsArr.find((e) => e.id === parseInt(productId));
  return (
    <div className='mt-6 md:mt-8 sm:px-10 sm:py-8 px-4 py-6 min-h-screen'>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
    </div>
  );
};

export default Product;