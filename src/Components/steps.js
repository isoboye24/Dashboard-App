import React, { useState } from "react";
import { steps } from "./../data";

const Steps = () => {
  const [step, setStep] = useState(steps);
  return (
    <div className="steps__container">
      {step.map((item) => {
        const { id, row } = item;
        return (
          <div className="row" key={id}>
            {row.map((item) => {
              const { col1, col2 } = item;
              return (
                <>
                  <div className="col-1">
                    {col1.map((item) => {
                      const { icon1, icon2 } = item;
                      return (
                        <>
                          <div className="oval">{icon1}</div>
                          <div className="line">{icon2}</div>
                        </>
                      );
                    })}
                  </div>
                  <div className="col-2">
                    {col2.map((item) => {
                      const { left_contents, right_contents } = item;
                      return (
                        <>
                          <div className="left-contents ">
                            {left_contents.map((item) => {
                              const { action, number1, number2 } = item;
                              return (
                                <>
                                  <div className="action">
                                    {action.map((item) => {
                                      const { actionValue, percent } = item;
                                      return (
                                        <>
                                          <div className="action__actionValue">
                                            {actionValue}
                                          </div>
                                          <div className="action__percent">
                                            <div className="rectangle">
                                              <span className="text">
                                                {percent}
                                              </span>
                                            </div>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                  <div className="number1">
                                    {number1.map((item) => {
                                      const { score, yesterday } = item;
                                      return (
                                        <>
                                          <div className="number1__score">
                                            {score}
                                          </div>
                                          <div className="number1__text ">
                                            {yesterday}
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                  <div className="number2">
                                    {number2.map((item) => {
                                      const { score, lastFriday } = item;
                                      return (
                                        <>
                                          <div className="number2__score">
                                            {score}
                                          </div>
                                          <div className="number2__text ">
                                            {lastFriday}
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            })}
                          </div>
                          <div className="right-contents">
                            {right_contents.map((item) => {
                              const { header, subHeader, statement, Help } =
                                item;
                              return (
                                <>
                                  <div className="right-contents__header">
                                    {header}
                                  </div>
                                  <div className="right-contents__subHeader">
                                    {subHeader}
                                  </div>
                                  <div className="right-contents__statement">
                                    {statement}
                                  </div>
                                  <div className="right-contents__help">
                                    Help:
                                    {Help.map((item) => {
                                      const { id, text } = item;
                                      return (
                                        <>
                                          <div
                                            className="right-contents__help--text"
                                            key={id}
                                          >
                                            {text + ", "}
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
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
