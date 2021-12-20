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
                      const { shape, content } = item;
                      return (
                        <>
                          <div className="shape">
                            {shape.map((item) => {
                              const { icon1, icon2 } = item;
                              return (
                                <>
                                  <div className="oval">{icon1}</div>
                                  <div className="line">{icon2}</div>
                                </>
                              );
                            })}
                          </div>
                          <div className="contents">
                            {content.map((item) => {
                              const { action, number1, number2 } = item;
                              return (
                                <>
                                  <div className="action">
                                    {action.map((item) => {
                                      const { actionValue, percent } = item;
                                      return (
                                        <>
                                          <div className="action__col1">
                                            {actionValue}
                                          </div>
                                          <div className="action__col2">
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
                                          <div className="number1__col1">
                                            {score}
                                          </div>
                                          <div className="number1__col2">
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
                                          <div className="number1__col1">
                                            {score}
                                          </div>
                                          <div className="number1__col2">
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
                        </>
                      );
                    })}
                  </div>
                  <div className="col-2">
                    {col2.map((item) => {
                      const { header, subHeader, statement, Help } = item;
                      return (
                        <>
                          <div className="col-2__header">{header}</div>
                          <div className="col-2__subHeader">{subHeader}</div>
                          <div className="col-2__statement">{statement}</div>
                          <div className="col-2__help">
                            Help:
                            {Help.map((item) => {
                              const { id, text } = item;
                              return (
                                <>
                                  <div className="col-2__help--text" key={id}>
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
        );
      })}
    </div>
  );
};
export default Steps;
