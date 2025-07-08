import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./Hero.css";
import MobileCover from "../../assets/MobileCover";

const Hero = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero w-full bg-[#F2F2F2] flex items-center justify-center">
      <div className="inner-hero w-full bg-[#FF5349] py-6 flex flex-col">
        {/* Navbar */}
        <div className="w-full h-[70px] flex items-center justify-center">
          <div className="text-white text-2xl font-bold flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            Mybindle
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-6 gap-10">
          {/* Left */}
          <div className="left-hero w-full md:w-1/2 flex flex-col justify-center">
            <div className="heading">
              <h4 className="text-[32px] md:text-[50px] leading-tight text-[#FAFAFA] font-bold">
                Stay Connected <br /> Stay Social <br /> Stay You!
              </h4>
            </div>
            <div className="Textbox mt-4 text-[#FAFAFA] text-[16px] md:text-[23px] leading-[28px] md:leading-[36px] font-[AvantGarde]">
              <p>
                A place where friendships grow, communities thrive, and moments
                turn into unforgettable experiences. Whether you're looking to
                reconnect with old friends, build new relationships, or share
                what matters most to you – MyBindle is your home on the
                internet.
              </p>
            </div>
            <div className="btn mt-6">
              <button className="bg-white text-[#FF5349] px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Right */}
          {showImage && (
            <div className="right-hero w-full md:w-1/2 flex items-center justify-center">
              <div className="image-container w-full max-w-[400px]">
                <MobileCover />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
