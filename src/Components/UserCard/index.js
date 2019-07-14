import React from "react";
import "./style.css";

const UserCard = ({ data, onClick }) => (
  <div className="usercard" onClick={() => onClick(data.id, data.name)}>
    <div>{data.name}</div>
    <div>{data.company.name}</div>
    <div>{data.website}</div>
  </div>
);

export default UserCard;
