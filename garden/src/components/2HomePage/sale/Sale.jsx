import React from 'react';
import "./sale.css";

const Sale = () => {
  const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}saleContainer`}>
    <div className={`${mob}NewSaleBush`}></div>
    <p className={`${mob}NewSaleTitle`}><span>Sale</span><br />New season</p>
    <button>Sale</button>
    </div>
  )
}

export default Sale