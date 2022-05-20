import React from "react";

const ContentItem = ({ description }) => {
  return (
    <li className="contentItem">
      <div className="content-info">
        <h3>{description}</h3>
      </div>
    </li>
  );
};

export default ContentItem;
