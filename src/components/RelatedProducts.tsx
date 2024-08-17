import React,{useContext} from 'react';
import Items from '../components/Items';
import { ShopContext } from '../context/ShopContext';

const RelatedProducts:React.FC = () => {
  const {itemsArr} = useContext(ShopContext)
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-[90vh] px-12'>
      <h1 className='text-2xl font-bold'>Related Products</h1>
      <hr className='w-[200px] h-[8px] rounded-md bg=red-500' />
      <div className='mt-[50px]  flex gap-10 overflow-x-scroll w-full'>
        {itemsArr.map((item, i) => {
          return {
            <div className='w-[200px]'>
              <Items key={`${item.title}_${i}`} id={item.id} title={item.title} imgSrc={item.imgSrc} price={item.price}/>
            </div>
 }
        })}
      </div>
    </div>
  );
}

export default RelatedProducts