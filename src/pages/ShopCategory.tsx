import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { IoMdArrowDropdown } from "react-icons/io";
import Items from '../components/Items';

const ShopCategory = ({category}) => {
  const {itemsArr} = useContext(ShopContext);
  return (
    <div className='flex flex-col md:flex-row gap-4 mx-auto mt-8 md:mt-12'>
      <div className='px-2 py-3 rounded-md border border-black dark:border-white'>
        <IoMdArrowDropdown className='sort-icon' />
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 w-full  justify-center mx-auto'>
        {itemsArr.map((item, i)=> {
         if (category === item.category) {
           return <Items key={`${item.title}_${i}`} id={item.id} title={item.title} imgSrc={item.imgSrc} price={item.price} />
         } else {
           return null;
         }
        } )}
      </div>
    </div>
  );
};

export default ShopCategory;