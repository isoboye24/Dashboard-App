import React from "react";
import { blockTopValues, blockBottomValues } from "./../data";

const Block = () => {
  return (
    <>
      <div className="block">
        <div className=" block__top">
          {blockTopValues.map((values) => {
            const { id, topValue, bottomValue } = values;
            return (
              <div className="col" key={id}>
                <div className="check__icon"></div>
                <div className="texts">
                  <h3>{topValue}</h3>
                  <h4>{bottomValue}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="block__bottom">
          <div className="stroke">
            <div className="col col__1"></div>
            <div className="col col__2"></div>
            <div className="col col__3"></div>
            <div className="col col__4"></div>
          </div>
          <div className="bottom__content">
            {blockBottomValues.map((content) => {
              const { id, boxColor, contentValue } = content;
              return (
                <div className="content__container" key={id}>
                  <div
                    className="dot"
                    style={{ backgroundColor: `${boxColor}` }}
                  ></div>
                  <div className="content">{contentValue}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Block;
