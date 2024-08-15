import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa6";
import {  } from "react-icons/fa6";

interface ProductDisplayProps {
  product: {
    title: string;
    description: string;
    price: number;
    imgSrc: string;
  };
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
    <div className="mt-12 flex flex-col md:flex-row px-2 gap-4">
      <div className='flex flex-col-reverse md:flex-row flex-1 md:gap-4 gap-8'>
        <div className='flex flex-row md:flex-col gap-2 overflow-x-scroll '>
          <img className='md:h-[163px] h-[70px]' src={product.imgSrc} alt='' />
          <img className='md:h-[163px] h-[70px]' src={product.imgSrc} alt='' />
          <img className='md:h-[163px] h-[70px]' src={product.imgSrc} alt='' />
          <img className='md:h-[163px] h-[70px]' src={product.imgSrc} alt='' />
        </div>
        <div>
          <img className='w-[586px] h-auto' src={product.imgSrc} alt='' />
          
        </div>
      </div>
      <div className='flex flex-1 flex-col'>
        <h1 className='text-5xl font-bold'>{product.title}</h1>
        <div className='flex justify-start items-center gap-4'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <p>{122}</p>
        </div>
        <div className='flex items-center rounded-full border bg-white/70 p-1 text-2xl font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
          <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>{product.price} <span className="">USD</span> </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh vitae dictum laoreet, dolor lectus porta quam, et lacinia odio justo ac enim. Aenean sed justo a ipsum volutpat lacinia. Nulla facilisi. Sed sit amet libero nec enim dictum dictum. Donec at elit quis odio tincidunt suscipit. Nulla facilisi. Sed et felis ac nisl bibendum egestas at nec lectus.</p>
        </div>
        <div>
          <h1>Select Size</h1>
          <div>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p><span>Category :</span>Women, Shoes</p>
        <p><span>Tags :</span>Modern, Exotic</p>
      </div>
    </div>
  );
};

export default ProductDisplay;