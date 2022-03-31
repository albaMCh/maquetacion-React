import React from "react";

import "./AlumnItem.css";

import {useNavigate} from "react-router-dom";

const Alumnitem = ({row, allowClose, onClickStudentRow}) => {
    const history = useNavigate();

    const goToStudentDetail = (row) => {
        history("/students/" + row.original.id);
    };

    return (
        <tr
            {...row.getRowProps()}
            key={row.id}
            onClick={() => goToStudentDetail(row)}
        >
            {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
        </tr>

        /* <tr>
          <td {...student.getCellProps()}>{student.render("Student")}</td>
          <td>{student.name}</td>
          <td>{student.city}</td>
          <td>{student.country}</td>
          <td>{student.phone}</td>
          <td>{student.email}</td>
          <td>
            <TagList tags={student.tags} allowClose={false}></TagList>
          </td>
        </tr> */
    );
};

export default Alumnitem;
