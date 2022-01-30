import React from "react";

import "./TagItem.css";

import { AVAILABLE_TAGS } from "../../utils";

const Tagitem = ({ tag, allowClose }) => {
  const getTagFromKey = (key) => {
    return AVAILABLE_TAGS.find((tag) => tag.key === key);
  };

  return (
    <span className="tag" key={tag}>
      {getTagFromKey(tag).label}
      {allowClose ? <span className="close">x</span> : null}
    </span>
  );
};

export default Tagitem;
