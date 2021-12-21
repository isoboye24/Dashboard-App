import React, { useState } from "react";
import { blockTopValues, blockBottomValues } from "./../data";

const Block = () => {
  // const [totalValue, setTotalValue] = useState(0);
  const totalValue = blockBottomValues.reduce(
    (tot, curr) => tot + curr.value,
    0
  );
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
            {blockBottomValues.map((item) => {
              const { id, boxColor, value } = item;
              return (
                <span
                  className="col"
                  key={id}
                  style={{
                    backgroundColor: `${boxColor}`,
                    width: `${(value / totalValue) * 60.8}rem`,
                  }}
                ></span>
              );
            })}
            {/* <span className="col col__1">{totalValue}</span>
            <span className="col col__2"></span>
            <span className="col col__3"></span>
            <span className="col col__4"></span> */}
          </div>
          <div className="bottom__content">
            {blockBottomValues.map((content) => {
              const { id, boxColor, text, value } = content;
              return (
                <div className="content__container" key={id}>
                  <div
                    className="dot"
                    style={{ backgroundColor: `${boxColor}` }}
                  ></div>
                  <div className="content">
                    <span className="content__text">{text}</span>
                    <span className="content__value">{value}</span>
                  </div>
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
