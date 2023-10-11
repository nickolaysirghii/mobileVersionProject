import React from 'react';
import "./eachCardPro.css";

const EachCart = ({data}) => {
  const mob = window.innerWidth > 800 ? "" : "mob";

  return (
    <div className={`${mob}EachProductCart`}>
      <div className={`${mob}cartProdImagh`}></div>
      <div className={`${mob}cartProdImfog`}>
        <div className={`${mob}DeleteWrapper`}>
           <p className={`${mob}cartProdTitler`}>Manhole hover Stump medium polystone</p>
           <div className={`${mob}DeleteProduct`}></div>
        </div>
        <div className={`${mob}PriceWrapper`}>
           <p className={`${mob}PriceProductCart`}>199<span>$</span></p>
           <p className={`${mob}priceDiscont`}>250<span>$</span></p>
        </div>
        <div className={`${mob}IncreaseAmount`}>
          <p className={`${mob}minus`}>-</p><p className={`${mob}priceState`}>1</p> +
        </div>
        
        
      </div>
    </div>
  )
}

export default EachCart