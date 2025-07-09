import React from 'react';
import './Aboutus.css';
import AboutusImg from '../../assets/aboutusimg.png';
import AboutCardContext from '../../components/context/AboutCardContext'; 
import AboutCard from './AboutCard';
import { useState } from 'react'; 

const Aboutus = () => {

   const [AboutCardData, setAboutCardData] = useState([
      { heading: "🎥 Short Videos & Reels", text: "Share engaging, bite-sized content that keeps everyone entertained." },
      { heading: "🔔 Smart Notifications", text: "Stay updated on what matters without the noise." },
      { heading: "👥 Interest-Based Communities", text: "Join groups and discussions that match your passion." }
    ]); 

  return (
    <div className="service w-full min-h-screen bg-[#F2F2F2] flex flex-col md:flex-row items-center justify-center relative">
      
      {/* Left Image Section */}
      <div className="Aboutus-left w-full md:w-1/2 min-h-screen md:min-h-screen flex items-center justify-center bg-[#F2F2F2] p-6 md:p-12">
       <img
  src={AboutusImg}
  alt="About Us"
  className="w-[84%] max-h-[600px] object-cover"
/>

      </div>

      {/* Right Content Section */}
      <div className="Aboutus-right w-full md:w-1/2 min-h-[300px] md:min-h-screen flex flex-col items-start justify-start bg-[#F2F2F2] p-6 md:p-12 pt-10">
  <div className="Aboutus-right-content w-full max-w-2xl text-center md:text-left">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Where Every Click <br/> Sparks a Connection!
    </h1>
    <p className="text-lg">
      A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
    </p>
  </div>
  <div className='aboutus-cards w-full flex flex-col flex-wrap justify-center mt-24'>
  <div className='All-About-Cards'>
   <AboutCardContext.Provider value={{ AboutCardData, setAboutCardData }}>
    <AboutCard/>
   </AboutCardContext.Provider>
   </div>  
  </div>
</div>

    </div>
  );
};

export default Aboutus;
