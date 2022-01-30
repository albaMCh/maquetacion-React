import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./AlumnDetailCard.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

import TagList from "../TagList/TagList";

import StudentDataService from "../../services/StudentDataService";

import { AVAILABLE_TAGS } from "../../utils";

const AlumnDetailCard = (props) => {
  const [currentAlumn, setCurrentAlumn] = useState({
    tags: "",
  });

  const { id } = useParams();

  useEffect(() => {
    StudentDataService.get(id)
      .then((response) => response.json())
      .then((data) => {
        setCurrentAlumn(data);
      });
    /* .catch(() =>
        setCurrentAlumn({
          name: "Pepito",
          tags: "angular,hibernate",
        })
      )*/
  }, [id]);

  const availableTags = AVAILABLE_TAGS;

  if (currentAlumn.name) {
    return (
      <div>
        <div className="card">
          <div id="principal">
            <img
              id="user-image"
              alt="Avatar"
              src={currentAlumn.images}
              align="left"
            />
            <div id="user-info">
              <h2>{currentAlumn.name}</h2>
              <h3 id="location">
                <i className="bi-geo-alt" style={{ fontSize: "20px" }}></i>
                {currentAlumn.city} | {currentAlumn.country}
              </h3>
            </div>
          </div>
          <section className="form-register">
            <form>
              <div className="block">
                <label htmlFor="full-name">Nombre y Apellidos</label>
                <input
                  className="controls"
                  type="text"
                  name="full_name"
                  id="full-name"
                  placeholder="Nombre del alumno"
                  value={currentAlumn.name}
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
                />
              </div>

              <div className="block">
                <label htmlFor="country">País</label>

                <select id="country" name="pais" value={currentAlumn.country}>
                  <option value="">Elige Pais</option>
                  <option value="AF">Afganistán</option>
                  <option value="AL">Albania</option>
                  <option value="DE">Alemania</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antártida</option>
                  <option value="AG">Antigua y Barbuda</option>
                  <option value="AN">Antillas Holandesas</option>
                  <option value="SA">Arabia Saudí</option>
                  <option value="DZ">Argelia</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaiyán</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrein</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BE">Bélgica</option>
                  <option value="BZ">Belice</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermudas</option>
                  <option value="BY">Bielorrusia</option>
                  <option value="MM">Birmania</option>
                  <option value="BO">Bolivia</option>
                  <option value="BA">Bosnia y Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brasil</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="BT">Bután</option>
                  <option value="CV">Cabo Verde</option>
                  <option value="KH">Camboya</option>
                  <option value="CM">Camerún</option>
                  <option value="CA">Canadá</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CY">Chipre</option>
                  <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comores</option>
                  <option value="CG">Congo</option>
                  <option value="CD">Congo, República Democrática del</option>
                  <option value="KR">Corea</option>
                  <option value="KP">Corea del Norte</option>
                  <option value="CI">Costa de Marfíl</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croacia (Hrvatska)</option>
                  <option value="CU">Cuba</option>
                  <option value="DK">Dinamarca</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egipto</option>
                  <option value="SV">El Salvador</option>
                  <option value="AE">Emiratos Árabes Unidos</option>
                  <option value="ER">Eritrea</option>
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
                  <option value="GL">Groenlandia</option>
                  <option value="GP">Guadalupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GY">Guayana</option>
                  <option value="GF">Guayana Francesa</option>
                  <option value="GN">Guinea</option>
                  <option value="GQ">Guinea Ecuatorial</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="HT">Haití</option>
                  <option value="HN">Honduras</option>
                  <option value="HU">Hungría</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IQ">Irak</option>
                  <option value="IR">Irán</option>
                  <option value="IE">Irlanda</option>
                  <option value="BV">Isla Bouvet</option>
                  <option value="CX">Isla de Christmas</option>
                  <option value="IS">Islandia</option>
                  <option value="KY">Islas Caimán</option>
                  <option value="CK">Islas Cook</option>
                  <option value="CC">Islas de Cocos o Keeling</option>
                  <option value="FO">Islas Faroe</option>
                  <option value="HM">Islas Heard y McDonald</option>
                  <option value="FK">Islas Malvinas</option>
                  <option value="MP">Islas Marianas del Norte</option>
                  <option value="MH">Islas Marshall</option>
                  <option value="UM">Islas menores de Estados Unidos</option>
                  <option value="PW">Islas Palau</option>
                  <option value="SB">Islas Salomón</option>
                  <option value="SJ">Islas Svalbard y Jan Mayen</option>
                  <option value="TK">Islas Tokelau</option>
                  <option value="TC">Islas Turks y Caicos</option>
                  <option value="VI">Islas Vírgenes (EEUU)</option>
                  <option value="VG">Islas Vírgenes (Reino Unido)</option>
                  <option value="WF">Islas Wallis y Futuna</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italia</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japón</option>
                  <option value="JO">Jordania</option>
                  <option value="KZ">Kazajistán</option>
                  <option value="KE">Kenia</option>
                  <option value="KG">Kirguizistán</option>
                  <option value="KI">Kiribati</option>
                  <option value="KW">Kuwait</option>
                  <option value="LA">Laos</option>
                  <option value="LS">Lesotho</option>
                  <option value="LV">Letonia</option>
                  <option value="LB">Líbano</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libia</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lituania</option>
                  <option value="LU">Luxemburgo</option>
                  <option value="MK">
                    Macedonia, Ex-República Yugoslava de
                  </option>
                  <option value="MG">Madagascar</option>
                  <option value="MY">Malasia</option>
                  <option value="MW">Malawi</option>
                  <option value="MV">Maldivas</option>
                  <option value="ML">Malí</option>
                  <option value="MT">Malta</option>
                  <option value="MA">Marruecos</option>
                  <option value="MQ">Martinica</option>
                  <option value="MU">Mauricio</option>
                  <option value="MR">Mauritania</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">México</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldavia</option>
                  <option value="MC">Mónaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="MS">Montserrat</option>
                  <option value="MZ">Mozambique</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Níger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk</option>
                  <option value="NO">Noruega</option>
                  <option value="NC">Nueva Caledonia</option>
                  <option value="NZ">Nueva Zelanda</option>
                  <option value="OM">Omán</option>
                  <option value="NL">Países Bajos</option>
                  <option value="PA">Panamá</option>
                  <option value="PG">Papúa Nueva Guinea</option>
                  <option value="PK">Paquistán</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Perú</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PF">Polinesia Francesa</option>
                  <option value="PL">Polonia</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="UK">Reino Unido</option>
                  <option value="RE">Reunión</option>
                  <option value="RW">Ruanda</option>
                  <option value="RO">Rumania</option>
                  <option value="RU">Rusia</option>
                  <option value="SE">Suecia</option>
                  <option value="CH">Suiza</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="YE">Yemen</option>
                  <option value="YU">Yugoslavia</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabue</option>
                </select>
              </div>

              <div className="block">
                <label htmlFor="town">Ciudad</label>
                <select required name="Ciudad" value={currentAlumn.city}>
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
                <select name="Traslado" value={currentAlumn.move}>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="block">
                <label htmlFor="presence">Presencialidad</label>
                <select name="Presencialidad" value={currentAlumn.presence}>
                  <option value="Presencial">Presencial</option>
                  <option value="En remoto">En remoto</option>
                </select>
              </div>
              <div className="block full-width">
                <label htmlFor="Document CV">Documento CV</label>
                <button>
                  <i
                    className="bi bi-cloud-arrow-down"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Subir de nuevo
                </button>

                <button>
                  <i className="bi-trash" style={{ fontSize: "20px" }}></i>
                  Borrar
                </button>
              </div>
              <div className="full-width">
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
              <div id="tag-list" className="full-width">
                <TagList
                  id="tag-list"
                  tags={currentAlumn.tags.trim().split(",")}
                  allowClose={true}
                ></TagList>
              </div>

              {/* <TagList props={tags}>
              
            </TagList> */}

              {/* {props.tags.map((tag) => {
              return (
                <TagItem props={name: tag.name }></TagItem>
              )
            }} */}
            </form>
          </section>
        </div>
      </div>
    );
  } else {
    return <div>Cargando...</div>;
  }
};

export default AlumnDetailCard;
