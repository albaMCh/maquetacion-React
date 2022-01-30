import React from "react";

import TagItem from "../TagItem/TagItem";

const TagList = ({ tags, allowClose }) => {
  return tags.map((tag) => {
    return <TagItem key={tag} tag={tag} allowClose={allowClose}></TagItem>;
  });
};

export default TagList;
