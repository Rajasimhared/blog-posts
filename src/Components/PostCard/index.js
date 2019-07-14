import React from "react";
import "./style.css";

const PostCard = ({ data, onClick, id }) => (
  <div className="postcard" onClick={() => onClick(id)}>
    <div>Title:{data.title}</div>
    <br />
    <div>{data.body}</div>
  </div>
);

export default PostCard;
