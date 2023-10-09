import React from 'react';
import "./eachprod.css";

const EachProduct = () => {
  const mob = window.innerWidth > 800 ? "" : "mob";
  
  return (
    <div className={`${mob}eachProdContainer`}>
    <h2 className={`${mob}EachProdTitle`}>Spade</h2>
    <div className={`${mob}eachBelow`}>
          <div className={`${mob}EachElemImagef`}></div>
          <div className={`${mob}EachElemInfoff`}>
            <div className={`${mob}EachPriceInff`}>
              <p className={`${mob}discontEachPr`}>199<span>$</span></p>
              <p className={`${mob}priceEachPr`}>250$</p>
              <p className={`${mob}PercentEachPr`}>-7%</p>
            </div>
            <button className={`${mob}TocartButton`}>to cart</button>
            <div className={`${mob}everyDescriptionf`}>
              <p className={`${mob}EvDescriptTitle`}>Descripton</p>
              <p className={`${mob}AllDescriptionf`}>Size, cm - 45x33
              Material: frost-resistant polymer,froes</p>
            </div>
          </div>
    </div>
    </div>
  )
}

export default EachProduct