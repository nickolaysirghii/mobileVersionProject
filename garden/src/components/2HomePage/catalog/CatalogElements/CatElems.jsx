import React from 'react';
import "./catElems.css";

const CatElems = ({title}) => {
    const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}catElement`}>
        <div></div>
        <p>{title}</p>
    </div>
  )
}

export default CatElems