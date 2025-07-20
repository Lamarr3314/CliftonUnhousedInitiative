import React from "react";
import "./Mission.css";
import "./Page.css";
import logoWithText from "./assets/logoWithText.png";
import logoNoText from "./assets/logoNoText.png";

const Mission: React.FC = () => {
  return (
    <div className="Page" id="Mission">
      <div id="missionTitle">
        <p className="overallTitle">Mission Statement</p>
      </div>
      <div id="textContainer" className="informationTile">
        <p id="missionStatement" className="overallParagraph">
          We are a 501(c)(3) nonprofit organization dedicated to supporting the
          unhoused members of our community with dignity, compassion, and
          urgency. Our mission is to address immediate needs while working
          toward more sustainable solutions. We partner with local agencies and
          community members to support existing services, distribute essential
          supplies, and advocate for long-term change.In addition, we support
          local programs.
        </p>
      </div>
      <div className = "informationTile" id="einContainer">
        <p className="overallParagraph">EIN: 33-4549965</p>
      </div>
    </div>
  );
};
export default Mission;
