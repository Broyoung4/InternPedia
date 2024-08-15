import React from 'react';
import { createContext, useContext, useState } from 'react';
import itemsArr from '../utils/Items';


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = {itemsArr}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;