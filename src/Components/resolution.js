import React, { useState } from "react";
import { resolutionData } from "./../data";

const Resolution = () => {
  const [time, setTime] = useState(resolutionData);
  const [currentKey, setCurrentKey] = useState(3);

  return (
    <>
      <div className="resolution">
        {time.map((item) => {
          const { id, resolutionValue } = item;
          return (
            <span className="resolution__box" key={id}>
              {currentKey === id ? (
                <div className="resolution__box--content resolution__active">
                  {resolutionValue}
                </div>
              ) : (
                <div className="resolution__box--content">
                  {resolutionValue}
                </div>
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};
export default Resolution;
