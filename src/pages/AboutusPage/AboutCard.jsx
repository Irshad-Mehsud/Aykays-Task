import React, { useContext } from 'react';
import '../AboutusPage/Aboutus.css';
import AboutCardContext from '../../components/context/AboutCardContext'; // Import the context

const AboutCard = () => {
     const { AboutCardData } = useContext(AboutCardContext);
  return (
     <>
      {AboutCardData && AboutCardData.map((card, index) => (
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

export default AboutCard
