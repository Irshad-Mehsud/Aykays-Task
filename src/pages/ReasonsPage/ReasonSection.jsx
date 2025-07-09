import React from "react";
import "./ReasonSection.css";
// import heartImg from "./assets/heart.png";
import phone1 from "../../assets/iPhone 14 Pro-half.png";
import phone2 from "../../assets/iPhone 14 Pro.png";

const ReasonSection = () => {
  return (
     <section className="reason-section bg-[#F2F2F2]">
      <div className="reason-content">
        <h1>
          Be the Reason <br /> Someone Smiles Today!
        </h1>
        <p>
          Your generosity can change lives every donation brings hope, support,
          and a brighter future. Give today and make a difference!
        </p>
        <div className="reason-description">
          <button className="donate-button">Donate Now</button>
        </div>
      </div>

      <div className="phone-preview">
       <img src={phone1} alt="Phone payment options" className="phone phone1" />
        <img src={phone2} alt="Thank you screen" className="phone phone2" />
             
      </div>
    </section>
  );
};

export default ReasonSection;