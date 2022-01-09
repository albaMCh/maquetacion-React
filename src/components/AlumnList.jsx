import React from "react";

import AlumnListTable from "./AlumnList/AlumnListTable.jsx";

const AlumnList = () => {
  const searchInputStyle = {
    marginLeft: "15px",
    height: "30px",
    width: "200px",
    borderRadius: "4px",
    fontSize: "12px",
  };

  const addAlumnStyle = {
    float: "right",
    padding: "7px",
    margin: "10px 0",
    fontSize: "12px",
    borderRadius: "4px",
  };
  const studentStyle = {
    fontSize: "20px",
  };
  const headerStyle = {
    display: "inline",
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

      <h2 style={headerStyle}>
        Alumnos
        <input
          style={searchInputStyle}
          placeholder="Buscar por Nombre, Email o Palabra clave..."
        ></input>
        <button type="submit" style={addAlumnStyle}>
          + Añadir alumnos{" "}
        </button>
      </h2>

      <div className="page-container">
        <AlumnListTable></AlumnListTable>
      </div>
    </div>
  );
};

export default AlumnList;
