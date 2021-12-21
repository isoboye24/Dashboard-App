import React from "react";

const Descriptions = ({ descriptions }) => {
  return (
    <>
      {descriptions.map((item) => {
        const { header, subHeader, statement, Help } = item;
        return (
          <>
            <div className="right-contents__header ">{header}</div>
            <div className="right-contents__subHeader ">{subHeader}</div>
            <div className="right-contents__statement">{statement}</div>
            <div className="right-contents__help">
              Help:
              {Help.map((item) => {
                const { id, text } = item;
                return (
                  <>
                    <div className="right-contents__help--text" key={id}>
                      {text}
                    </div>
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
export default Descriptions;
