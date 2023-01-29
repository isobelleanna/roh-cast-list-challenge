import React from "react";
import "./CastList.scss";

const CastList = ({ cast }) => {
  return (
    <ul className="cast-list">
      <li>list item</li>
      <li>{cast[0].type}</li>
    </ul>
  );
};

export default CastList;
