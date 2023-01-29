import React from "react";
import "./CastList.scss";

const CastList = ({ cast }) => {
  return (
    <ul className="cast-list">
      {cast.map((cast) => (
        <li key={cast.id}>
          {cast.attributes.role}: {cast.attributes.name}
        </li>
      ))}
    </ul>
  );
};

export default CastList;
