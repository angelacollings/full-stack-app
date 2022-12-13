import React from "react";
import "./ContentItem.css";

const ContentItem = ({ description }) => {
  return (
    <li className="content-card">
      <div className="content-info">
        <h3>{description}</h3>
      </div>
    </li>
  );
};

export default ContentItem;
