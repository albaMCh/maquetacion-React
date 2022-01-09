import React, { useEffect, useState } from "react";
import { Student } from "../models/alumnClass";

//import $ from 'jquery';
//import "https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js";

// import "https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css";
import "./AlumnListTable.css";

// var $ = require("jquery");
// require("datatables.net")(window, $);

import AlumnItem from "./AlumnItem/AlumnItem";

const AlumnListTable = () => {
  const student1 = new Student(
    "Marta Luque Grande",
    "Madrid",
    "España",
    "634789654",
    "usuario1@usuario.es",
    [
      {
        key: "angular",
        label: "Angular",
      },
      {
        key: "hibernate",
        label: "Hibernate",
      },
    ]
  );
  const student2 = new Student(
    "Luis Medina Medina",
    "Córdoba",
    "España",
    "654356279",
    "usuario2@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );
  const student3 = new Student(
    "José Perea Ruiz",
    "Sevilla",
    "España",
    "673922904",
    "usuario3@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );
  const student4 = new Student(
    "Laura Monje García",
    "Barcelona",
    "España",
    "693489529",
    "usuario4@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );
  const student5 = new Student(
    "Juan García Murillo",
    "Madrid",
    "España",
    "613056154",
    "usuario5@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );
  const student6 = new Student(
    "Jesús Molina Diaz",
    "Córdoba",
    "España",
    "632622779",
    "usuario6@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );
  const student7 = new Student(
    "Jaime Campo Lopez",
    "Córdoba",
    "España",
    "652189404",
    "usuario7@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );
  const student8 = new Student(
    "Lucia García Gandara",
    "Sevilla",
    "España",
    "661756029",
    "usuario8@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );
  const student9 = new Student(
    "Paula Pizarro Gomez",
    "Sevilla",
    "España",
    "691322654",
    "usuario9@usuario.es",
    [
      {
        key: "java",
        label: "Java",
      },
    ]
  );

  const [students, setSudent] = useState([
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    student8,
    student9,
    student9,
  ]);

  const sortTable = ({ n }) => {};

  return (
    <div>
      <table id="alumnos">
        <thead>
          <tr>
            <th scope="col" onClick={() => sortTable(0)}>
              NOMBRE <i className="bi bi-arrow-down-up"></i>
            </th>
            <th scope="col" onClick={() => sortTable(1)}>
              CIUDAD <i className="bi bi-arrow-down-up"></i>
            </th>
            <th scope="col" onClick={() => sortTable(2)}>
              PAÍS <i className="bi bi-arrow-down-up"></i>
            </th>
            <th scope="col" onClick={() => sortTable(3)}>
              TELÉFONO
            </th>
            <th scope="col" onClick={() => sortTable(4)}>
              CORREO ELECTRÓNICO <i className="bi bi-arrow-down-up"></i>
            </th>
            <th scope="col" onClick={() => sortTable(5)}>
              ETIQUETAS <i className="bi bi-arrow-down-up"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <AlumnItem
                key={index}
                student={student}
                allowClose={false}
              ></AlumnItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AlumnListTable;
