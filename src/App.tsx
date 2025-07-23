import Navbar from "./navbar";
import Home from "./Home";
import Mission from "./Mission";
import Data from "./Data";
import "./App.css";
import Outreach from "./Outreach";
import Contact from "./contact";
//To deploy run: npm run deploy
//To create deploy to localhost npm run dev
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="appDiv">
          <Home />
          <Mission />
          <Outreach />
          <Data />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
