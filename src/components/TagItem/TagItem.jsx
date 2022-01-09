import React from "react";

import "./TagItem.css";

const Tagitem = ({ tag, allowClose }) => {
  return (
    <span className="tag" key={tag.key}>
      {tag.label}
      {allowClose ? <span className="close">x</span> : null}
    </span>
  );
};

export default Tagitem;
