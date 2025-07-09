import React, { useContext } from 'react';
import '../pages/ServicePage/Service.css';
import CardContext from './context/CardContext';

const Card = () => {
  const { CardData } = useContext(CardContext); 

  return (
    <>
      {CardData && CardData.map((card, index) => (
        <div key={index} className='Card'>
          <div className='flex items-center justify-center'>
            <h5 className='card-heading'>{card.heading}</h5>
          </div>
          <div className='card-text flex items-center justify-center'>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
