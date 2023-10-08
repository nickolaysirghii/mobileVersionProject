import React from 'react';
import "./categories.css";
import EveryCategory from './EveryCategory/EveryCategory';
import { catData } from './categoriesData';

const Categories = () => {
    const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div>
    <h2 className={`${mob}CategoriesTitle`}>Categories</h2>
    <div className={`${mob}CategoriesElements`}>
        {
            catData.map((elem , idx)=>{
                return <EveryCategory key={idx} data={elem} />
            })
        }
    </div>
    </div>
  )
}

export default Categories