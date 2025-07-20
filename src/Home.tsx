import React from "react";
import "./Home.css";
import "./Page.css"
import logoWithText from "./assets/logoWithText.png";
import logoNoText from "./assets/logoNoText.png";

const Home: React.FC = () => {
  return (
    <div className="Page" id="Home">
      <div id="imageContainer">
        <img src={logoWithText} alt="The Clifton Unhoused Initiative Logo" />
      </div>
    </div>
  );
};
export default Home;
