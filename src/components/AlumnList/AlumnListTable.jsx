import React, {useEffect, useState, useMemo} from "react";
import {useTable, useSortBy} from "react-table";

import {Modal} from "react-bootstrap";

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

import {AVAILABLE_TAGS} from "../../utils";

const AlumnListTable = (props) => {
    const [searchTitle, setSearchTitle] = useState("");

    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedPresence, setSelectedPresence] = useState("");
    const [selectedMove, setSelectedMove] = useState("");

    const [show, setShow] = useState(false);

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
                disableSortBy: true,
            },
            {
                Header: "CORREO ELECTRÓNICO",
                accessor: "email",
            },
            {
                Header: "ETIQUETAS",
                accessor: "tags",
                disableSortBy: true,
                Cell: (props) => {
                    const tags = props.row.original.tags;
                    return <TagList tags={tags} allowClose={false}></TagList>;
                },
            },
        ],
        []
    );

    const showSortInfo = (column) => {
        if (column.canSort) {
            const res = (
                <span>
          {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                    <i className="bi bi-chevron-expand"></i>
        </span>
            );
            return res;
        }
    };

    const sortColumn = (column) => {
        let sortType;

        if (!column.isSorted || column.isSortedDesc) {
            sortType = "asc";
        } else {
            sortType = "desc";
        }

        /* props.onChangeFilters({
          sortProperty: column.id,
          sortType,
        }); */
    };

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable(
            {
                columns,
                data: props.students,
                sortColumn,
                manualPagination: true,
            },
            useSortBy
        );

    useEffect(() => {
    }, []);

    const handleOnChangeSearchTitle = (event) => {
        const search = event.target.value;
        onChangeSearchTitle(search);
    };

    const onChangeSearchTitle = (search) => {
        setSearchTitle(search);
        props.onChangeFilters({
            search,
        });
    };

    const onChangeSelectedTags = (tags) => {
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

        props.onChangeFilters(null);
    };

    const handleShowModal = () => {
        setShow(true);
    };

    const handleCloseModal = () => {
        setShow(false);
    };

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
                                onChange={handleOnChangeSearchTitle}
                                style={searchInputStyle}
                            />
                            <button onClick={handleShowModal} style={addAlumnStyle}>
                                + Añadir alumno
                            </button>
                        </h2>
                    </div>
                    <table
                        id="alumnos"
                        className="table table-bordered"
                        {...getTableProps()}
                    >
                        <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                    >
                      <span
                          onClick={() => {
                              if (column.canSort) {
                                  sortColumn(column);
                              }
                          }}
                      >
                        {column.render("Header")}
                          {showSortInfo(column)}
                      </span>
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
                                <i className="bi-trash" style={{fontSize: "20px"}}></i>
                            </button>
                        </h2>
                        {selectedTags}
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
                                    <option value="AD">Andorra</option>
                                    <option value="AQ">Antártida</option>
                                    <option value="SA">Arabia Saudí</option>
                                    <option value="DZ">Argelia</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BA">Bosnia y Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BR">Brasil</option>
                                    <option value="CA">Canadá</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CY">Chipre</option>
                                    <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="DK">Dinamarca</option>
                                    <option value="SI">Eslovenia</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Etiopía</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="PH">Filipinas</option>
                                    <option value="FI">Finlandia</option>
                                    <option value="FR">Francia</option>
                                    <option value="GA">Gabón</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GD">Granada</option>
                                    <option value="GR">Grecia</option>
                                    <option value="HU">Hungría</option>
                                    <option value="IN">India</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italia</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japón</option>
                                    <option value="JO">Jordania</option>
                                    <option value="NO">Noruega</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="UK">Reino Unido</option>
                                    <option value="RU">Rusia</option>
                                    <option value="SE">Suecia</option>
                                    <option value="CH">Suiza</option>
                                    <option value="VE">Venezuela</option>
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
                                    <option value="Asturias">Asturias</option>
                                    <option value="Ávila">Ávila</option>
                                    <option value="Badajoz">Badajoz</option>
                                    <option value="Baleares">Baleares</option>
                                    <option value="Barcelona">Barcelona</option>
                                    <option value="Burgos">Burgos</option>
                                    <option value="Cáceres">Cáceres</option>
                                    <option value="Cádiz">Cádiz</option>
                                    <option value="Cantabria">Cantabria</option>
                                    <option value="Castellón">Castellón</option>
                                    <option value="Ceuta">Ceuta</option>
                                    <option value="Ciudad Real">Ciudad Real</option>
                                    <option value="Córdoba">Córdoba</option>
                                    <option value="Cuenca">Cuenca</option>
                                    <option value="Gerona/Girona">Gerona/Girona</option>
                                    <option value="Granada">Granada</option>
                                    <option value="Guadalajara">Guadalajara</option>
                                    <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                                    <option value="Huelva">Huelva</option>
                                    <option value="Huesca">Huesca</option>
                                    <option value="Jaén">Jaén</option>
                                    <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
                                    <option value="La Rioja">La Rioja</option>
                                    <option value="Las Palmas">Las Palmas</option>
                                    <option value="León">León</option>
                                    <option value="Lérida/Lleida">Lérida/Lleida</option>
                                    <option value="Lugo">Lugo</option>
                                    <option value="Madrid">Madrid</option>
                                    <option value="Málaga">Málaga</option>
                                    <option value="Melilla">Melilla</option>
                                    <option value="Murcia">Murcia</option>
                                    <option value="Navarra">Navarra</option>
                                    <option value="Orense/Ourense">Orense/Ourense</option>
                                    <option value="Palencia">Palencia</option>
                                    <option value="Pontevedra">Pontevedra</option>
                                    <option value="Salamanca">Salamanca</option>
                                    <option value="Segovia">Segovia</option>
                                    <option value="Sevilla">Sevilla</option>
                                    <option value="Soria">Soria</option>
                                    <option value="Tarragona">Tarragona</option>
                                    <option value="Tenerife">Tenerife</option>
                                    <option value="Teruel">Teruel</option>
                                    <option value="Toledo">Toledo</option>
                                    <option value="Valencia">Valencia</option>
                                    <option value="Valladolid">Valladolid</option>
                                    <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
                                    <option value="Zamora">Zamora</option>
                                    <option value="Zaragoza">Zaragoza</option>
                                    n>
                                </select>
                            </div>
                            <div className="block">
                                <label>Presencialidad / a distancia</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="presence"
                                        value="Presencial"
                                        id="presence_presencial"
                                        onChange={handleOnChangePresence}
                                        checked={selectedPresence === "Presencial"}
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
                                        value="En remoto"
                                        id="presence_remote"
                                        onChange={handleOnChangePresence}
                                        checked={selectedPresence === "Em remoto"}
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
                                        value=""
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
