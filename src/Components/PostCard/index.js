import React from "react";
import "./style.css";

const PostCard = ({ data, onClick, id }) => (
  <div className="postcard" onClick={() => onClick(id)}>
    <div>{data.title}</div>
  </div>
);

export default PostCard;
