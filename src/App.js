import React from "react";
import Block from "./Components/block";
import Resolution from "./Components/resolution";
import Steps from "./Components/steps";
// import { IconContext } from "react-icons";

function App() {
  // <IconContext.Provider value={{ color: "#ffffff", size: "2em" }}>
  return (
    <>
      <div className="bg">
        <div className="metrics-container">
          <div className="metrics-content">Main Metrics</div>
        </div>
        <Resolution />
        <Block />
        <Steps />
      </div>
    </>
  );
  // </IconContext.Provider>;
}

export default App;
