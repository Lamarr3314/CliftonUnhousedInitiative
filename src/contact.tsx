import React from "react";
import "./contact.css";
import "./Page.css";
import profile from "./assets/user.png";
import email from "./assets/mail.png";
import phone from "./assets/telephone.png";
import home from "./assets/home.png";
const Contact: React.FC = () => {
  return (
    <div className="Page" id="Contact">
      <div id="contactTitle">
        <p className="overallTitle">Contact</p>
      </div>
      <div id="purpleContactTile" className="informationTile">
        <div id="contactRow">
          <div id="contactIconDiv">
            <img id="contactIcon" src={profile} alt="Contact Icon" />
          </div>
          <div id="contactNameDiv">
            <p className="overallParagraph">Director: Margaret Curreri</p>
          </div>
          <div id="contactNameDiv">
            <p className="overallParagraph">Vice President: George Curreri</p>
          </div>
        </div>
      </div>
      <div id="centerContactTile" className="informationTile">
        <div id="contactRow">
          <div id="contactIconDiv">
            <img id="contactIcon" src={email} alt="Contact Icon" />
          </div>
          <div id="contactNameDiv">
            <p className="overallParagraph">
              Clifton.Unhoused.Initiative@gmail.com
            </p>
          </div>
        </div>
        <div id="contactRow">
          <div id="contactIconDiv">
            <img id="contactIcon" src={phone} alt="Contact Icon" />
          </div>
          <div id="contactNameDiv">
            <p className="overallParagraph"> 973.464.4380</p>
          </div>
        </div>
        <div id="contactRow">
          <div id="contactIconDiv">
            <img id="contactIcon" src={home} alt="Contact Icon" />
          </div>
          <div id="contactNameDiv">
            <p className="overallParagraph">
              70 Maple Place Clifton, NJ 07011{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="informationTile">
        <div id="contactNameDiv">
          <p className="overallParagraph">
            We are gratefully accepting donations. All contributions are tax
            deductible.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
