import React from 'react';
import "./cart.css";
import { CartElems } from './CartData';
import EachCart from './EachCartProd/EachCart';

const Cart = () => {
    const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}cartMainContainer`}>
    <h2 className={`${mob}ShoppingCart`}>Shopping cart</h2>
    <div className={`${mob}StoreBelow`}>
        <div className={`${mob}StoreElements`}>
            <p className={`${mob}backToStore`}>Back to the store +</p>
            {
                CartElems.map((elem,idx)=>{
                    return <EachCart key={idx}  data={elem}/>
                })
            }
        </div>
        <div className={`${mob}CartBuy`}>
            <p className={`${mob}CartByTitle`}>Order details</p>
            <div className={`${mob}TotContainerDetails`}>
                <p className={`${mob}TottalCartleft`}>Total</p>
                <p className={`${mob}totMoneyHere`}>3077,00<span>$</span></p>
            </div>
            <input className={`${mob}Innnp`} type='text'placeholder='Phone number'/>
            <button className={`${mob}orderButton`}>Order</button>
        </div>
        
    </div>
    </div>
  )
}

export default Cart