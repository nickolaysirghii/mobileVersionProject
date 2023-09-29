import React , { useEffect } from 'react';
import "./header.css";
import bag from "../../svg/bag.svg";
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from "react-redux";
import { fetchProducts } from '../../reduxStore/Slices/fetchProductsAll';
import { fetchCategoryes } from '../../reduxStore/Slices/fetchCategries';




const Header = () => {

const dispatcher = useDispatch();
const {cartAmount , circleAmount} = useSelector((state)=>state.allProducts);
const { sendStatus  } = useSelector((state)=>state.allProducts);
const {top, left, productImage , targetClasses , apear } = useSelector((state)=>state.animation);
useEffect(()=>{dispatcher(fetchProducts());dispatcher(fetchCategoryes());},[]);

return (
    <div className='headerContainer'>
        <header className='header'>
              <Link to="/" className='logo'></Link>
              <Link to="/categories"><button>Catalog</button></Link>
              <div className='links'>
                   <Link to="/">Main Page</Link>
                   <Link to="/products/all" className='products'>All products</Link>
                   <Link to="/sales/all">All sales</Link>
              </div>
              <Link to="/cart"><img src={bag} alt='bag' className='bag'/></Link>
              <div className={cartAmount > 0 ? "cartAmount" : "cartHidden"}>{cartAmount}</div>
             
                  {
                   apear && <div className='swallow'><div>{cartAmount}</div></div>
                  }
                
            {
               ( targetClasses === "NewButton" ||
                 targetClasses === "toCart"    ||
                 targetClasses === "showNewButton" ) && apear && 
                 <div style={{top:`${targetClasses    === "toCart" ? (top -17) : top}px`,
                              left:`${targetClasses   === "toCart" ? (left +15) : left}px`,
                              width:`${targetClasses  === "toCart" ? "710" : 300}px`,
                              height:`${targetClasses === "toCart" ? "710" : 300}px`,
                              backgroundImage: `url(http://localhost:3333${productImage})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat"}}
                      className='animationElem'></div>
           }

        </header>
        {
        sendStatus && <div className='fallingCircleContainer'>
                          <div className='fallingCircle'>{circleAmount}</div>
                     </div>
        }
        {
          sendStatus && <div className='theBee'>
            <div className='bzzCover'></div>
            <div className='The_bee'>
           <div className='DownPart'></div>
           <div className='head'></div>
           <div className='backHead'></div>
           <div className='beeBack'></div>
           <div className='leftWing'></div>
           <div className='rihtWing'></div>
        </div>
          </div>
        }
        </div>
  )
}

export default Header
