import React, { useState } from "react";
import { steps } from "./../data";
import Shape from "./step-shape";
import Records from "./step-records";
import Descriptions from "./step-descriptions";

const Steps = () => {
  const [step, setStep] = useState(steps);

  return (
    <div className="steps__container">
      {step.map((item) => {
        const { id, row } = item;
        return (
          <div className="row" key={id}>
            {row.map((item) => {
              const { icons, contents } = item;
              return (
                <>
                  <div className="col-1">
                    <Shape icons={icons} />
                  </div>
                  <div className="col-2">
                    {contents.map((item) => {
                      const { records, descriptions } = item;

                      return (
                        <>
                          <div className="left-contents ">
                            <Records records={records} />
                          </div>
                          <div className="right-contents">
                            <Descriptions descriptions={descriptions} />
                          </div>
                        </>
                      );
                    })}
                    {/* <div className="bar"></div> */}
                  </div>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Steps;
