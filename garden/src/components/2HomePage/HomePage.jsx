import React from 'react';
import Sale from './sale/Sale';
import Catalog from './catalog/Catalog';
import GetSale from './getSale/GetSale';
import RandomeSale from "./randomeSale/RandomeSale"

const HomePage = () => {
  return (
    <div>
        <Sale />
        <Catalog />
        <GetSale />
        <RandomeSale />
    </div>
  )
}

export default HomePage