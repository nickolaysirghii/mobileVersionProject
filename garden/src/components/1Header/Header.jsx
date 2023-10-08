import React from 'react';
import { useState } from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import bag from "../../svg/bag.svg";
import HeaderBar from './HeaderBar';

const Header = () => {
 const mob = window.innerWidth > 800 ? "" : "mob";
const [BarrClass , setBarrClass] = useState('HidenHeaderBarContainer')
const barFunction = ()=>{
    if(BarrClass === 'HidenHeaderBarContainer' ){
      setBarrClass('ShowHeaderBarContainer')
    }else{
      setBarrClass('HidenHeaderBarContainer')  
    }
}
const closeBarr = ()=>{
  setBarrClass('HidenHeaderBarContainer')
}
  return (
    <div className={`${mob}HeaderContainer`}>
        <div onClick={closeBarr}  className={BarrClass}><HeaderBar /></div>
        <FontAwesomeIcon className={`${mob}Bar`} icon={faBars}/>
        <div onClick={barFunction} className={`${mob}classCover`}></div>
        <div className={`${mob}HeaderLogo`}></div>
        <div className={`${mob}HeaderCatalog`}>Catalog</div>
        <div className={`${mob}Ankers`}>
           <a>Main page</a>
           <a>All products</a>
           <a>All sales</a>
        </div>
        <img src={bag} alt='Bag' className={`${mob}Bag`}/>
        
    </div>
  )
}

export default Header