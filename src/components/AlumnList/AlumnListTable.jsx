import React, { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";

import { Modal, Button } from "react-bootstrap";

//import $ from 'jquery';
//import "https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js";

// import "https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css";
import "./AlumnListTable.css";

// var $ = require("jquery");
// require("datatables.net")(window, $);

import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

import AlumnItem from "./AlumnItem/AlumnItem";
import TagList from "../TagList/TagList";
import AlumnCreateCard from "../AlumnCreate/AlumnCreateCard";

import { AVAILABLE_TAGS } from "../../utils";

const AlumnListTable = (props) => {
  const [searchTitle, setSearchTitle] = useState("");

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPresence, setSelectedPresence] = useState("");
  const [selectedMove, setSelectedMove] = useState("");

  const [show, setShow] = useState(false);

  useEffect(() => {}, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    this.setSearchTitle(searchTitle);
  };

  const onChangeSelectedTags = (tags) => {
    debugger;
    setSelectedTags(tags);
    props.onChangeFilters({
      tags: tags.join(),
    });
  };

  const handleOnChangeCountry = (event) => {
    const country = event.target.value;
    onChangeSelectedCountry(country);
  };

  const onChangeSelectedCountry = (country) => {
    setSelectedCountry(country);
    props.onChangeFilters({
      country: country,
    });
  };

  const handleOnChangeCity = (event) => {
    const city = event.target.value;
    onChangeSelectedCity(city);
  };

  const onChangeSelectedCity = (city) => {
    setSelectedCity(city);
    props.onChangeFilters({
      city: city,
    });
  };

  const handleOnChangePresence = (event) => {
    debugger;
    const presence = event.target.value;
    onChangeSelectedPresence(presence);
  };

  const onChangeSelectedPresence = (presence) => {
    setSelectedPresence(presence);
    props.onChangeFilters({
      presence: presence,
    });
  };

  const handleOnChangeMove = (event) => {
    debugger;
    const move = event.target.value;
    onChangeSelectedMove(move);
  };

  const onChangeSelectedMove = (move) => {
    setSelectedMove(move);
    props.onChangeFilters({
      move: move,
    });
  };

  const resetFilters = () => {
    setSelectedTags([]);
    setSelectedCountry("");
    setSelectedCity("");
    setSelectedPresence("");
    document.getElementById("presence_presencial").checked = false;
    document.getElementById("presence_remote").checked = false;
    setSelectedMove("");
    document.getElementById("move_yes").checked = false;
    document.getElementById("move_no").checked = false;

    props.onChangeFilters({});
  };

  const columns = useMemo(
    () => [
      {
        Header: "NOMBRE",
        accessor: "name",
      },
      {
        Header: "CIUDAD",
        accessor: "city",
      },
      {
        Header: "PAIS",
        accessor: "country",
      },
      {
        Header: "TELEFONO",
        accessor: "phoneNumber",
      },
      {
        Header: "CORREO ELECTRÓNICO",
        accessor: "email",
      },
      {
        Header: "ETIQUETAS",
        accessor: "tags",
        Cell: (props) => {
          const tags = props.row.original.tags;
          return <TagList tags={tags} allowClose={false}></TagList>;
        },
      },
    ],
    []
  );

  const handleShowModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: props.students,
    });

  const headerStyle = {
    display: "inline",
  };
  const searchInputStyle = {
    marginLeft: "15px",
    height: "30px",
    width: "200px",
    borderRadius: "4px",
    fontSize: "12px",
    display: "inline",
  };

  const addAlumnStyle = {
    float: "right",
    padding: "7px",
    margin: "10px 0",
    fontSize: "12px",
    borderRadius: "4px",
  };

  return (
    <div>
      <div className="list row">
        <div className="col-md-8">
          <div className="mb-3">
            <h2 style={headerStyle}>
              Alumnos
              <input
                type="text"
                id="input-search"
                className="form-control"
                placeholder="Buscar por Nombre, Email o Palabra clave..."
                value={searchTitle}
                onChange={onChangeSearchTitle}
                style={searchInputStyle}
              />
              <button onClick={handleShowModal} style={addAlumnStyle}>
                + Añadir alumno
              </button>
            </h2>
          </div>
          <table
            id="alumnos"
            className="table table-striped table-bordered"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <AlumnItem
                    key={row.id}
                    allowClose={false}
                    row={row}
                  ></AlumnItem>
                );
              })}
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6}>No se encontraron resultados</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div id="filters-panel">
            <h2>
              Filtros de búsqueda
              <button onClick={resetFilters}>
                <i className="bi-trash" style={{ fontSize: "20px" }}></i>
              </button>
            </h2>
            SelectedTags: {selectedTags}
            <form>
              <div className="full-width">
                <label htmlFor="tags">Etiquetas</label>
                <DropdownMultiselect
                  id="tags"
                  placeholder="Escribe para buscar..."
                  options={AVAILABLE_TAGS}
                  selected={selectedTags}
                  name="available-tags"
                  handleOnChange={(selected) => {
                    debugger;
                    onChangeSelectedTags(selected);
                  }}
                />
              </div>
              <div id="tag-list" className="full-width">
                <TagList
                  id="tag-list"
                  tags={selectedTags}
                  allowClose={true}
                ></TagList>
              </div>
              <div className="block">
                <label htmlFor="country">País</label>

                <select
                  id="country"
                  name="pais"
                  value={selectedCountry}
                  onChange={handleOnChangeCountry}
                >
                  <option value="">Elige Pais</option>
                  <option value="AF">Afganistán</option>
                  <option value="AL">Albania</option>
                  <option value="DE">Alemania</option>
                  <option value="ES">España</option>
                </select>
              </div>
              <div className="block">
                <label htmlFor="city">Ciudad</label>

                <select
                  id="city"
                  name="city"
                  value={selectedCity}
                  onChange={handleOnChangeCity}
                >
                  <option value="">Elige Provincia</option>
                  <option value="Álava/Araba">Álava/Araba</option>
                  <option value="Albacete">Albacete</option>
                  <option value="Alicante">Alicante</option>
                  <option value="Almería">Almería</option>
                </select>
              </div>
              <div className="block">
                <label>Presencialidad / a distancia</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="presence"
                    value="SI"
                    id="presence_presencial"
                    onChange={handleOnChangePresence}
                    checked={selectedPresence === "SI"}
                  ></input>
                  <label
                    className="form-check-label"
                    htmlFor="presence_presencial"
                  >
                    Presencial
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="presence"
                    value="NO"
                    id="presence_remote"
                    onChange={handleOnChangePresence}
                    checked={selectedPresence === "NO"}
                  ></input>
                  <label className="form-check-label" htmlFor="presence_remote">
                    En remoto
                  </label>
                </div>
              </div>
              <div className="block">
                <label>Posibilidad traslado</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="move"
                    value="true"
                    id="move_yes"
                    onChange={handleOnChangeMove}
                    checked={selectedMove === "true"}
                  ></input>
                  <label className="form-check-label" htmlFor="move_yes">
                    Sí
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="move"
                    value="false"
                    id="move_no"
                    onChange={handleOnChangeMove}
                    checked={selectedMove === "false"}
                  ></input>
                  <label className="form-check-label" htmlFor="move_no">
                    No
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AlumnCreateCard
            handleCloseModal={handleCloseModal}
          ></AlumnCreateCard>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AlumnListTable;
