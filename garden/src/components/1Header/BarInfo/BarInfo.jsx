import React from 'react';
import "../header.css";

const BarInfo = ({data}) => {
    const {title} = data
  return (
    <div className='BarElement'>{title}</div>
  )
}

export default BarInfo