import React from 'react';
import "./randomeSale.css";
import { randomeElll } from './randomeData';
import RandomeElement from './EveryElement/RandomeElement';

const RandomeSale = () => {
  const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}randomeSaleContainer`}>
    <p className={`${mob}RandomeTitle`}>Sale</p>
    <div className={`${mob}RandomeElements`}>
      {
        randomeElll.map((elem,idx)=>{
          return <RandomeElement key={idx} elem={elem}/>
        })
      }
    </div>
    </div>
  )
}

export default RandomeSale