import React from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import bag from "../../svg/bag.svg";

const Header = () => {
 const mob = window.innerWidth > 800 ? "" : "mob";

//  console.log(`window.screen.width - ${window.screen.width}`);
//  console.log(`window.screen.height - ${window.screen.height}`);
// console.log(`window.screen.availWidth - ${window.screen.availWidth}`);
// console.log(`window.screen.availHeight - ${window.screen.availHeight}`);
// console.log(`window.outerWidth - ${window.outerWidth}`);
// console.log(`window.outerHeight - ${window.outerHeight}`);
// console.log(`window.innerWidth - ${window.innerWidth}`);
// console.log(`window.innerHeight - ${window.innerHeight}`);
// console.log(`document.documentElement.clientWidth - ${document.documentElement.clientWidth}`);
// console.log(`document.documentElement.clientHeight - ${document.documentElement.clientHeight}`);
// console.log(`document.documentElement.scrollWidth - ${document.documentElement.scrollWidth}`);
// console.log(`document.documentElement.scrollHeight - ${document.documentElement.scrollHeight}`);

  return (
    <div className={`${mob}HeaderContainer`}>
        <FontAwesomeIcon className={`${mob}Bar`} icon={faBars}/>
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