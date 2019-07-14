import React from "react";
import "./style.css";

const LoadingCard = ({ style, count = 5 }) => (
  <>
    {[...Array(count).keys()].map(key => (
      <div className="loader" style={style} />
    ))}
  </>
);
export default LoadingCard;
