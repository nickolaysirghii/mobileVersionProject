import React from 'react';
import "./getSale.css";

const GetSale = () => {
  const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}getSaleContainer`}>
    <div className={`${mob}hobit`}></div>
    <form className={`${mob}getSaleInfo`}>
      <p className={`${mob}off`}>5% off</p>
      <p className={`${mob}belowOff`}>on the first order</p>
      <input type='text'defaultValue='+49' /><br/>
      <button>Get a discount</button>
    </form>
    </div>
  )
}

export default GetSale