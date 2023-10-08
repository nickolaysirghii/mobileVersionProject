import React from 'react';
import "./everyGenElem.css"

const EveryGenElem = ({data}) => {
    const { title , price , discont_price , procent } = data;
    const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}EveryGenContainer`}>
    <div className={`${mob}EveryGenImage`}></div>
    <div className={`${mob}generalPriceInfo`}>
     <p className={`${mob}GeneralDiscont`}>{discont_price}$</p>
     <p className={`${mob}GeneralPrice`}>{price}$</p>
     <p className={`${mob}GeneralPercent`}>{procent}</p>
    </div>
    <p className={`${mob}ElementGenTitle`}>{title}</p>
    <div className={`${mob}AddButton`}> Add to cart</div>
    </div>
    
  )
}

export default EveryGenElem