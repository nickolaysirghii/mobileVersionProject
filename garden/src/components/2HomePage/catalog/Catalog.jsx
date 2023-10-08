import React from 'react';
import "./catalog.css";
import { catalogEEE } from './CatalogElements/catData';
import CatElems from './CatalogElements/CatElems';


const Catalog = () => {
  const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}catalogContainer`}>
     <div className={`${mob}catologTitle`}>
      <p>Catalog</p>
      <button>All categories</button>
     </div>
     <div className={`${mob}catalogElementsContainer`}>
     {
      catalogEEE.map((elem,idx)=>{
        return <CatElems key={idx} title={elem.title} />
      })
     }
     </div>
    </div>
  )
}

export default Catalog