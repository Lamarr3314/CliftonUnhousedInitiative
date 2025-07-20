import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./navbar";
import Home from "./Home";
import Mission from "./Mission";
import Data from "./Data"
import "./App.css";
import Outreach from "./Outreach";
import Contact from "./contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className = "appDiv">
        <Navbar />
        <Home />
        <Mission />
        <Outreach />
        <Data />
        <Contact />
      </div>
      
    </>
  );
}

export default App;
