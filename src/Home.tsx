import React, { useEffect, useState } from "react";
import "./Home.css";
import "./Page.css";
import logoWithText from "./assets/largerNonprofitLogo.png";
import stockPhoto1 from "./assets/stockPhoto1.jpg";
import stockPhoto2 from "./assets/stockPhoto2.jpg";
import stockPhoto3 from "./assets/stockPhoto3.jpg";
const imageUrls: string[] = [
  logoWithText,
  stockPhoto1,
  stockPhoto2,
  stockPhoto3,
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Page" id="Home">
      <div id="imageContainer">
        <img id="image"
          src={imageUrls[currentIndex]}
          alt="The Clifton Unhoused Initiative Logo"
        />
      </div>
    </div>
  );
};
export default Home;
