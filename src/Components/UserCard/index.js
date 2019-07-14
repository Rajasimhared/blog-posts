import React from "react";
import "./style.css";

const UserCard = ({ data, onClick, id }) => (
  <div className="usercard" onClick={() => onClick(id)}>
    <div>{data.name}</div>
    <div>{data.company.name}</div>
    <div>{data.website}</div>
  </div>
);

export default UserCard;
