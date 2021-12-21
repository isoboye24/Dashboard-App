import React from "react";

const Shape = ({ icons }) => {
  return (
    <>
      {icons.map((item) => {
        const { icon1, icon2 } = item;
        return (
          <>
            <div className="col-1__oval">
              <div className="col-1__oval--icon">{icon1}</div>
            </div>
            <div className="col-1__line">{icon2}</div>
          </>
        );
      })}
    </>
  );
};
export default Shape;
