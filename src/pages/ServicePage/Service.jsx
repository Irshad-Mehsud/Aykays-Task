import React from 'react'
import useState from 'react';
import './Service.css' // You can still use your font styles here
import Card from '../../components/Card';
import CardContext from '../../components/context/CardContext';
const Service = () => {
    const [CardData, setCardData] = React.useState([
    { heading: "🔥Seamless Connections", text: "Stay in touch with friends, family, and like-minded people with just a tap." },
    { heading: "📸 Share Your Story", text: "Upload photos, videos, and updates to let the world know what’s happening in your life." },
    { heading: "💬 Real-Time Chat", text: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging." },
    { heading: "🔒 Privacy First", text: "Your data, your control. We prioritize your privacy with world-class security." },
    { heading: "🌎 Discover & Explore", text: "Find trending content, join communities, and follow pages that match your interests." },
    { heading: "💼 Grow Your Business", text: "Use our platform to market your brand, and build meaningful relationships." }
  ]); 
  return (
     <div className="service w-full min-h-screen bg-[#F2F2F2] flex items-center justify-center relative">
      <div className='service-heading absolute'>
          <h4>Features That Keep You Hooked!</h4>
          <p>Meet, Chat, Share – Anytime, Anywhere!</p>
      </div>
      <div className='All-Cards'>
      <CardContext.Provider value={{CardData,setCardData}}>
         <Card/>
      </CardContext.Provider>
             
    </div>
  </div>
  )
}

export default Service;
