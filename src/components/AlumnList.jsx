import React, { useEffect, useState } from "react";

import AlumnListTable from "./AlumnList/AlumnListTable.jsx";

import StudentDataService from "../services/StudentDataService.js";

import { Student } from "../models/Student";

const AlumnList = (props) => {
  const [alumnList, setAlumnList] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    StudentDataService.getAll().then((data) => {
      setAlumnList(data);
    });
  }, []);

  const retrieveStudents = (newFilters) => {
    let updatedFilters;

    if (newFilters === null) {
      updatedFilters = {};
    } else {
      updatedFilters = {
        ...filters,
        ...newFilters,
      };
    }

    setFilters(updatedFilters);

    StudentDataService.getAll(updatedFilters)
      .then((data) => {
        setAlumnList(data);
      })
      .catch(() => {
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

        const data = [student2];
        setAlumnList(data);
      });
  };

  const studentStyle = {
    fontSize: "20px",
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h2>
        OpenBootcamp
        <span className="green" style={studentStyle}>
          | Alumnos
        </span>
      </h2>

      <div className="page-container">
        <AlumnListTable
          students={alumnList}
          onChangeFilters={retrieveStudents}
        ></AlumnListTable>
      </div>
    </div>
  );
};

export default AlumnList;
