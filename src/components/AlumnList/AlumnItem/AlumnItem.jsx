import React from "react";

import "./AlumnItem.css";

import TagList from "../../TagList/TagList";

const Alumnitem = ({ student, allowClose }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.city}</td>
      <td>{student.country}</td>
      <td>{student.phone}</td>
      <td>{student.email}</td>
      <td>
        <TagList tags={student.tags} allowClose={false}></TagList>
      </td>
    </tr>
  );
};

export default Alumnitem;
