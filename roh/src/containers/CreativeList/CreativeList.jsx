import React from "react";
import "./CreativeList.scss";

const CreativeList = ({ creatives }) => {
  return (
    <ul className="creative-list">
      {creatives.map((creative) => (
        <li key={creative.id}>
          {creative.attributes.role}: {creative.attributes.name}
        </li>
      ))}
    </ul>
  );
};

export default CreativeList;
