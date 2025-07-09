import React, { useContext, useState } from 'react';
import '../AboutusPage/Aboutus.css';
const  WorkingCard = () => {
    const [WorrkCardData,setWorkCardData] =useState([
        { heading: "Download", text: "Open Play Store or App Store" },
        { heading: "Install App", text: "The app will install automatically." },
        { heading: "Ready to Use", text: "Sign up or log in to start exploring!" }
    ])
    
  return (
     <>
      {WorrkCardData && WorrkCardData.map((card, index) => (
        <div key={index} className='About-Card'>
          <div className='flex items-center justify-center'>
            <h5 className='About-card-heading'>{card.heading}</h5>
          </div>
          <div className='about-card-text flex items-center justify-center'>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default WorkingCard;
