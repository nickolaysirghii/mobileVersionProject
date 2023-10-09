import React from 'react';
import "./eachCardPro.css";

const EachCart = ({data}) => {
  return (
    <div className='EachProductCart'>
{ data.title}
    </div>
  )
}

export default EachCart