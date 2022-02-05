import React from "react";

import "./TagItem.css";

import { getTagObjectFromKey } from "../../utils";

const Tagitem = ({ tag, allowClose }) => {
  return (
    <span className="tag" key={tag}>
      {getTagObjectFromKey(tag).label}
      {allowClose ? <span className="close">x</span> : null}
    </span>
  );
};

export default Tagitem;
