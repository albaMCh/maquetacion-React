import React, { useEffect, useState } from "react";

import "./AlumnCreateCard.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

import TagList from "../TagList/TagList";

import StudentDataService from "../../services/StudentDataService";

import { AVAILABLE_TAGS } from "../../utils";

const AlumnCreateCard = (props) => {
  const [currentAlumn, setCurrentAlumn] = useState({
    tags: "",
  });

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    StudentDataService.create(currentAlumn).then(() =>
      props.handleCloseModal()
    );
  };

  const availableTags = AVAILABLE_TAGS;

  const handleOnChangeName = (event) => {
    const name = event.target.value;
    const updatedAlumn = {
      ...currentAlumn,
      name,
    };
    setCurrentAlumn(updatedAlumn);
  };

  const handleOnChangePhoneNumber = (event) => {
    const phoneNumber = event.target.value;
    const updatedAlumn = {
      ...currentAlumn,
      phoneNumber,
    };
    setCurrentAlumn(updatedAlumn);
  };

  const handleOnChangeEmail = (event) => {
    const email = event.target.value;
    const updatedAlumn = {
      ...currentAlumn,
      email,
    };
    setCurrentAlumn(updatedAlumn);
  };

  const handleOnChangeCountry = (event) => {
    const country = event.target.value;
    const updatedAlumn = {
      ...currentAlumn,
      country,
    };
    setCurrentAlumn(updatedAlumn);
  };

  const handleOnChangeCity = (event) => {
    const city = event.target.value;
    const updatedAlumn = {
      ...currentAlumn,
      city,
    };
    setCurrentAlumn(updatedAlumn);
  };

  const handleOnChangeMove = (event) => {
    const move = event.target.value;
    const updatedAlumn = {
      ...currentAlumn,
      move,
    };
    setCurrentAlumn(updatedAlumn);
  };

  const handleOnChangePresence = (event) => {
    const presence = event.target.value;
    const updatedAlumn = {
      ...currentAlumn,
      presence,
    };
    setCurrentAlumn(updatedAlumn);
  };

  return (
    <div>
      <section className="form-register">
        <form>
          <div className="list row">
            <div className="col-md-6">
              <div className="block">
                <label htmlFor="full-name">Nombre y Apellidos</label>
                <input
                  className="controls"
                  type="text"
                  name="full_name"
                  id="full-name"
                  placeholder="Nombre del alumno"
                  value={currentAlumn.name}
                  onChange={handleOnChangeName}
                />
              </div>
              <div className="block">
                <label htmlFor="phone-number">Nº Teléfono</label>
                <input
                  className="controls"
                  type="telefono"
                  name="phone_number"
                  id="phone-number"
                  placeholder="Número de telefono"
                  value={currentAlumn.phoneNumber}
                  onChange={handleOnChangePhoneNumber}
                />
              </div>
              <div className="block">
                <label htmlFor="email">Email</label>
                <input
                  className="controls"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={currentAlumn.email}
                  onChange={handleOnChangeEmail}
                />
              </div>

              <div className="block">
                <label htmlFor="country">País</label>

                <select
                  id="country"
                  name="pais"
                  value={currentAlumn.country}
                  onChange={handleOnChangeCountry}
                >
                  <option value="">Elige Pais</option>
                  <option value="AF">Afganistán</option>
                  <option value="AL">Albania</option>
                  <option value="DE">Alemania</option>
                  <option value="AD">Andorra</option>
                  <option value="ES">España</option>
                </select>
              </div>

              <div className="block">
                <label htmlFor="town">Ciudad</label>
                <select
                  required
                  name="Ciudad"
                  value={currentAlumn.city}
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
                </select>
              </div>

              <div className="block">
                <label htmlFor="transfer">Traslado</label>
                <select
                  name="Traslado"
                  value={currentAlumn.move}
                  onChange={handleOnChangeMove}
                >
                  <option value="">Elige una opción</option>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="block">
                <label htmlFor="presence">Presencialidad</label>
                <select
                  name="Presencialidad"
                  value={currentAlumn.presence}
                  onChange={handleOnChangePresence}
                >
                  <option value="">Elige una opción</option>
                  <option value="Presencial">Presencial</option>
                  <option value="En remoto">En remoto</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block full-width">
                <label htmlFor="Document CV">Foto de perfil</label>

                <button>
                  <i
                    className="bi bi-cloud-arrow-down"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Subir imagen
                </button>
                <label htmlFor="Document CV">Documento CV</label>
                <button>
                  <i
                    className="bi bi-cloud-arrow-down"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Subir documento PDF
                </button>
              </div>
              {/*<div className="full-width">
                <label htmlFor="tags">Etiquetas</label>
                <DropdownMultiselect
                  placeholder="Escribe para buscar..."
                  options={availableTags}
                  selected={currentAlumn.tags.trim().split(",")}
                  name="available-tags"
                  handleOnChange={(selected) => {
                    debugger;
                  }}
                />
              </div>
              {currentAlumn.tags.length > 0 && (
                <div id="tag-list" className="full-width">
                  <TagList
                    id="tag-list"
                    tags={currentAlumn.tags.trim().split(",")}
                    allowClose={true}
                  ></TagList>
                </div>
              )} */}
            </div>
          </div>
          <div id="modal-buttons">
            <button type="button" className="btn" onClick={handleSubmit}>
              Guardar
            </button>
            <button type="button" className="btn">
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AlumnCreateCard;
