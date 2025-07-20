import React from "react";
import "./Outreach.css";
import "./Page.css";
import calendar from "./assets/calendar.png";
import collaboration from "./assets/collaboration.png";
import emergency from "./assets/emergency.png";

const Outreach: React.FC = () => {
  return (
    <div className="Page" id="Outreach">
      <div id="outreachTop">
        <div id="outreachTitle">
          <p className="overallTitle">Outreach</p>
        </div>
        <div id="outreachIntro" className="informationTile">
          <p className="overallParagraph">
            We actively assist established initiatives such as The Lauren Murphy
            Warming Center, which provides critical shelter during the coldest
            months of the year.{" "}
          </p>{" "}
        </div>
      </div>
      <div id="outreachContainer" className="informationTile">
        <div id="outreachTile">
          <div className="outreachTop">
            <div className="outreachIcon">
              <img src={emergency} alt="" />
            </div>
            <div className="outreachTitle">
              <p className="overallParagraph">
                Emergency Relief on Code Blue Nights
              </p>
            </div>
          </div>
          <div className="outreachDescription">
            {" "}
            <p className="overallParagraph">
              When temperatures drop and lives are at risk, we help coordinate
              and distribute cold-weather gear, blankets, food, and supplies to
              ensure no one is left behind.
            </p>
          </div>
        </div>
        <div id="outreachTile">
          <div className="outreachTop">
            <div className="outreachIcon">
              <img src={calendar} alt="" />
            </div>
            <div className="outreachTitle">
              <p className="overallParagraph">Year-Round Outreach</p>
            </div>{" "}
          </div>
          <div className="outreachDescription">
            {" "}
            <p className="overallParagraph">
              Homelessness does not end with winter. We are committed to
              continuous outreach—distributing food, clothing, hygiene items,
              and connecting individuals with local services to help reduce the
              daily stress of unhoused life.
            </p>
          </div>
        </div>
        <div id="outreachTile">
          <div className="outreachTop">
            <div className="outreachIcon">
              <img src={collaboration} alt="" />
            </div>
            <div className="outreachTitle">
              <p className="overallParagraph">Collaboration and Advocacy</p>
            </div>
          </div>
          <div className="outreachDescription">
            {" "}
            <p className="overallParagraph">
              We will work to strengthen the network of care by collaborating
              with service providers, community leaders, and everyday residents
              who want to make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Outreach;
