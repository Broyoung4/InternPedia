import React,{useContext} from 'react';
import Items from '../components/Items';
import { ShopContext } from '../context/ShopContext';

interface RelatedProductsProps {
  itemsArr: any [];
}

const RelatedProducts:React.FC = () => {
  const {itemsArr} = useContext(ShopContext)
  const handleMotion = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    
    
    <div className='flex flex-col items-center justify-center gap-4 h-[90vh] px-4 w-full'>
      <h1 className='text-2xl font-bold text-left'>Related Products</h1>
      <hr className='w-[200px] h-[7px] rounded-md bg-gray-500' />
      <div onClick={handleMotion} className='mt-[50px] flex justify-center gap-10 overflow-x-scroll w-full'>
        {itemsArr.map((item, i) => {
          return (
              <Items key={`${item.title}_${i}`} id={item.id} title={item.title} imgSrc={item.imgSrc} price={item.price}/>
              )
        })}
      </div>
    </div>
  );
}

export default RelatedProducts