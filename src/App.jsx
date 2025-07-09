import React from "react";
import Hero from "./pages/HeroPage/Hero";
import Service from "./pages/ServicePage/Service";
import "./App.css"; // Import your global styles here
import CardContext from "./components/context/CardContext"; // Import your context if needed
import Aboutus from "./pages/AboutusPage/Aboutus"; // Import the About Us page
import Working from "./pages/WorkingPage/Working"; // Import the Working page
import ReasonSection from "./pages/ReasonsPage/ReasonSection";
import UserReview from "./pages/UserReviewPage/UserReview";
import Footer from "./pages/FooterPage/Footer";
const App = () => {
  // Example state for card data
  return (
    <>
      <div className="App w-screen min-h-screen bg-[#F2F2F2]">
        <div className="flex flex-col items-center justify-center h-full bg-gray-100">
          <Hero />
        </div>
        <div className="flex flex-col items-center justify-center h-full bg-gray-100">
          <Service />
        </div>
        <div className="flex flex-col items-center justify-center h-full bg-gray-100">
          <Aboutus />
        </div>
        <div className="flex flex-col items-center justify-center h-full bg-gray-100">
          <Working />
        </div>
      </div>
      <div className="App section-2 w-screen min-h-screen bg-[#F2F2F2]">
        <ReasonSection />
        <UserReview />
        <Footer />
      </div>
    </>
  );
};

export default App;
