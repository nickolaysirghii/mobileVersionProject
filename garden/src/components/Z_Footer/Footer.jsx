import React from 'react';
import "./footer.css";
import watsUp from "../../svg/watsUp.svg"
import instagran from "../../svg/instagram.svg"

const Footer = () => {
  const mob = window.innerWidth > 800 ? "" : "mob";
  return (
    <div className={`${mob}footerContainer`}>
     <h2>Contact<span>Address</span></h2>
     <div className={`${mob}footerPhone`}><p>+49 999 999 99 99</p><span>
      <a href='https://tel-ran.de/' target='_blank'>Linkstraße 2, 8 OG, 10785,<br/> Berlin, Deutschland</a></span></div>
     <div className={`${mob}footerWhatsUp`}>
        <a href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=ro&gl=US' target='_blank' className={`${mob}social`}>
           <img src={instagran} alt='insta' />
           <p>Instagram</p>
        </a>
        <a href='https://www.whatsapp.com/' target='_blank' className={`${mob}social`}>
           <img src={watsUp} alt='insta' />
           <p>WhatsApp</p>
        </a>
        <div className={`${mob}footerHours`}>
            <p>Working Hours:</p>
            <h4>24 hours a day</h4>
        </div>
     </div>
     <div className={`${mob}footerMap`}></div>
    </div>
  )
}

export default Footer