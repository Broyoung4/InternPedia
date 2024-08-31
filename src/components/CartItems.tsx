import React, {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { HiBars3, HiXMark } from "react-icons/hi2";

const CartItems = () => {
  const {itemsArr, cartItems, removeFromCart, getTotalCartAmount, clearCart} = useContext(ShopContext);

  console.log(cartItems)
  let isEmpty = true;

  for (const key in cartItems) {
    if (cartItems[key] !== 0) {
      isEmpty = false; // Found a non-zero value, cart is not empty
      break; // Stop the loop early
    }
  }
  return (
    <div>
      {!isEmpty ? (
      <>
        <div className='my-[100px] mx-[170px]'>
          <div className='grid grid-cols-6 items-center gap-12 py-4   text-neutral-800 dark:text-neutral-200  text-xl font-semibold'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className='h-[3px]  bg-neutral-200 dark:bg-neutral-800'/>
          {itemsArr.map((e)=> {
          if (cartItems[e.id] > 0) {
            return (

                 <div>
                   <div className='grid grid-cols-6 items-center gap-12 py-4 text-neutral-500 dark:text-neutral-100 text-xl font-semibold text-xl font-semibold '>
                     <img className='h-[62px]' src={e.imgSrc} alt={e.title} />
                     <p>{e.title}</p>
                      <p>{e.price}</p>
                     <button className='w-[64px] h-[50px] border border-neutral-300 dark:border-neutral-800 bg-white'>{cartItems[e.id]}</button>
                     <p>$ {e.price * cartItems[e.id]}</p>
                     <HiXMark className='w-[15px] mx-[40px] cursor-pointer text-black' size={65} onClick={()=> {removeFromCart(e.id)}} />
                   </div>
                   <hr  className='h-[3px]  bg-neutral-200 dark:bg-neutral-800' />
                 </div>
            ) 
          }
          return null;
          })}
          <div className='flex my-[100px]'>
            <div className='flex-1 flex flex-col mr-[200px] gap-6'>
              <h1>Cart Totals</h1>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between py-[15px]'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr className='h-[3px]  bg-neutral-200 dark:bg-neutral-800'/>
                <div className='flex justify-between'>
                  <p>Shipping Fee</p>
                  <p> Free</p>
                </div>
                <hr className='h-[3px] bg-neutral-200 dark:bg-neutral-800'/>
                <div  className='flex justify-between'>
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button className='w-[262px] h-[58px] my-6 outline-0 border-0 bg-blue-500 hover:bg-blue-400 py-4 px-2 text-white rounded-xl'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex-1 text-xl font-semibold'>
              <p className=''>if you have a promo code, Enter Here</p>
              <div className='w-[504px] h-[58px] mt-[15px] pl-[20px] bg-neutral-200'>
                <input className='border-0 outline-0 bg-transparent text-xl w-[300px] h-[50px]' type='text' placeholder='Enter Promo Code' />
                <button className='w-[170px] h-[58px] text-xl bg-black text-white cursor-pointer'>Submit</button>
              </div>
              <div>
                <button onClick={clearCart} className='mt-[130px] w-[262px] h-[58px] my-6 outline-0 border-0 bg-red-500 hover:bg-red-400 py-4 px-2 text-white rounded-xl'>EMPTY CART</button>
              </div>
            </div>
          </div>

        </div>
      </>
      ) : (<div className='my-[100px] mx-[170px] text-2xl'>
        Your Cart is Empty, <Link className='hover:text-neutral-500' to='/'>Start Shopping</Link>
      </div>)}
    </div>
   
  
  )
}

export default CartItems;