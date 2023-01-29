import React from "react";
import "./CreativeList.scss";

const CreativeList = ({ creatives }) => {
  return (
    <ul className="creative-list">
      <li>list item</li>
      <li>{creatives[0].type}</li>
    </ul>
  );
};

export default CreativeList;
