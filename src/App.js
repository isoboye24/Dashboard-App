import React from "react";
import Block from "./Components/block";
import Resolution from "./Components/resolution";
import Steps from "./Components/steps";

function App() {
  return (
    <>
      <div className="bg">
        <div className="metrics-container">
          <div className="metrics-content">Main Metrics</div>
        </div>
        <Resolution />
        <Block />
        {/* <Steps /> */}
      </div>
    </>
  );
}

export default App;
