import React from 'react';
import "../categories.css";

const EveryCategory = ({data}) => {
    const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div>
      <div className={`${mob}evCatImage`}></div>
      <p className={`${mob}EvCatTitle`}>{data.title}</p>
    </div>
  )
}

export default EveryCategory