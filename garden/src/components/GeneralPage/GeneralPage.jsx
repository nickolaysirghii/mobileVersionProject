import React from 'react';
import "./generalPage.css";
import EveryGenElem from './EveryGenProd/EveryGenElem';
import { generalData } from './eneralPageData';

const GeneralPage = () => {
  const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}generalPageContainer`}>
    <h2>All Products</h2>
    <div className={`${mob}toolbars`}>
      <div>
         <p className={`${mob}toolbarPrice`}>Price</p>
         <input className={`${mob}toolbarFrom`} type='text' placeholder='from'/>
         <input className={`${mob}toolbarFrom`} type='text'placeholder='to'/>
      </div>
      <div>
         <p className={`${mob}toolbarDiscount`}>Discounted items</p>
         <input className={`${mob}checkbox`} type='checkbox' />
      </div>
      <div>
         <p className={`${mob}toolbarSorted`}>Sorted</p>
         <select name="cars" className={`${mob}toolsSelect`}>
           <option value="volvo">by default</option>
           <option value="saab">Saab</option>
           <option value="mercedes">Mercedes</option>
           <option value="audi">Audi</option>
         </select>
      </div>
    </div>
    <div className={`${mob}GeneralElements`}>
     {
        generalData.map((elem,idx)=>{
            return <EveryGenElem key={idx} data={elem} />
        })
     }
    </div>
    </div>
  )
}

export default GeneralPage