import React, { useState } from "react";
import "./Data.css";
import "./Page.css";
import arrow from "./assets/right.png";

const FirstComponent: React.FC = () => (
  <div id="dataComponent">
    <p className="overallParagraph">
      Data suggests a notable increase in the unhoused population in Clifton,
      aligning with a larger trend of rising homelessness across Passaic County
      and New Jersey. This increase appears to be driven by a combination of
      factors including rising housing costs and insufficient affordable housing
      options. The number of people experiencing homelessness on a single night
      in 2024 was the highest ever recorded . A total of 771,480 people, or
      about 23 of every 10,000 people in the United States experienced
      homelessness.
    </p>
  </div>
);
const SecondComponent: React.FC = () => (
  <div id="dataComponent">
    <p className="overallParagraph">
      One in every three individuals experiencing homelessness reported having
      experienced chronic patterns of homelessness, or 152,585 . On the night of
      January 24, 2024 12,680 people were experiencing homelessness in the state
      of New Jersey, up 24% from 2023. Sady this population is growing.
      (Supported by Google search) These numbers are more than statistics, they
      represent human lives,each with a story, a struggle,and a need for
      support. These numbers are growing daily.
    </p>
  </div>
);
const ThirdComponent: React.FC = () => (
  <div id="dataComponent">
    <p className="overallParagraph">
      We believe that every person deserves safety, dignity, and hope—and that
      change starts with community. Whether through donations, volunteering, or
      advocacy, there is a role for everyone in this work. Together, with your
      help, we can shine a light on homelessness.{" "}
    </p>
  </div>
);

const components: React.FC[] = [
  FirstComponent,
  SecondComponent,
  ThirdComponent,
];

const Data: React.FC = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % components.length);
  };
  const handlePrev = () => {
    setIndex((prevIndex) => Math.abs((prevIndex - 1) % components.length));
  };

  const CurrentComponent = components[index];

  return (
    <div className="Page" id="Data">
      <div id="DataTitle">
        <p className="overallTitle">Data</p>
      </div>
      <div id="mainData">
        <div id="backArrowContainer" className="arrowContainer">
          <button onClick={handlePrev} className="arrowButton">
            <img id="prevArrow" className="arrow" src={arrow} alt="prev" />
          </button>
        </div>
        <div id="DataContainer" className="informationTile">
          <CurrentComponent />
        </div>
        <div id="forwardArrowContainer" className="arrowContainer">
          <button onClick={handleNext} className="arrowButton">
            <img id="nextArrow" className="arrow" src={arrow} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Data;
