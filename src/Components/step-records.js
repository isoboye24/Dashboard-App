import React from "react";

const Records = ({ records }) => {
  return (
    <>
      {records.map((item) => {
        const { action, number1, number2 } = item;
        return (
          <>
            <div className="action">
              {action.map((item) => {
                const { actionValue, percent } = item;
                return (
                  <>
                    {percent > 0 ? (
                      <div className="action__actionValue ">{actionValue}</div>
                    ) : percent === 0 ? (
                      <div className="action__actionValue ">{actionValue}</div>
                    ) : (
                      <div className="action__actionValue action__actionValue-negative">
                        {actionValue}
                      </div>
                    )}

                    {percent === 0 ? (
                      ""
                    ) : (
                      <div className="action__percent">
                        {percent > 0 ? (
                          <div className="action__percent--rectangle action__percent--rectangle-positive">
                            <span className="action__percent--text">
                              +{percent}
                            </span>
                          </div>
                        ) : (
                          <div className="action__percent--rectangle action__percent--rectangle-negative">
                            <span className="action__percent--text">
                              {percent}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <div className="number1">
              {number1.map((item) => {
                const { score, yesterday } = item;
                return (
                  <>
                    <div className="number1__score">{score}</div>
                    <div className="number1__text ">{yesterday}</div>
                  </>
                );
              })}
            </div>
            <div className="number2">
              {number2.map((item) => {
                const { score, lastFriday } = item;
                return (
                  <>
                    <div className="number2__score">{score}</div>
                    <div className="number2__text ">{lastFriday}</div>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Records;
