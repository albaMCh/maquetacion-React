import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import "./AlumnDetailCard.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

import TagList from "../TagList/TagList";

import StudentDataService from "../../services/StudentDataService";

import {AVAILABLE_TAGS} from "../../utils";

const AlumnDetailCard = (props) => {
    const [currentAlumn, setCurrentAlumn] = useState({
        name: "",
        city: "",
        country: "",
        phoneNumber: "",
        email: "",
        tags: [],
    });

    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        StudentDataService.get(id)
            .then((data) => {
                setCurrentAlumn(data);
            })
            .finally(() => setLoading(false));
    }, [id]);

    const availableTags = AVAILABLE_TAGS;

    if (loading) {
        return <div>Cargando...</div>;
    } else if (currentAlumn.name) {
        return (
            <div className="list row">
                <div className="col-sm-6">
                    <div className="card">
                        <div id="principal">
                            <img
                                id="user-image"
                                alt="Avatar"
                                src={currentAlumn.pathImage}
                                align="left"
                            />
                            <div id="user-info">
                                <h2>{currentAlumn.name}</h2>
                                <h3 id="location">
                                    <i className="bi-geo-alt" style={{fontSize: "20px"}}></i>
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
                                        readOnly
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
                                        readOnly
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
                                        readOnly
                                    />
                                </div>

                                <div className="block">
                                    <label htmlFor="country">País</label>

                                    <select
                                        id="country"
                                        name="pais"
                                        value={currentAlumn.country}
                                        disabled
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
                                    <label htmlFor="town">Ciudad</label>
                                    <select name="Ciudad" value={currentAlumn.city} disabled>
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
                                        <option value="Guipúzcoa/Gipuzkoa">
                                            Guipúzcoa/Gipuzkoa
                                        </option>
                                        <option value="Huelva">Huelva</option>
                                        <option value="Huesca">Huesca</option>
                                        <option value="Jaén">Jaén</option>
                                        <option value="La Coruña/A Coruña">
                                            La Coruña/A Coruña
                                        </option>
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
                                    <select name="Traslado" value={currentAlumn.move} disabled>
                                        <option value="true">Sí</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div className="block">
                                    <label htmlFor="presence">Presencialidad</label>
                                    <select
                                        name="Presencialidad"
                                        value={currentAlumn.presence}
                                        disabled
                                    >
                                        <option value="Presencial">Presencial</option>
                                        <option value="En remoto">En remoto</option>
                                    </select>
                                </div>
                                <div className="block full-width">
                                    <label htmlFor="Document CV">Documento CV</label>
                                    <button>
                                        <i
                                            className="bi bi-cloud-arrow-up"
                                            style={{fontSize: "20px"}}
                                        ></i>
                                        Subir de nuevo
                                    </button>

                                    <button>
                                        <i className="bi-trash" style={{fontSize: "20px"}}></i>
                                        Borrar
                                    </button>
                                </div>
                                <div className="full-width">
                                    <label htmlFor="tags">Etiquetas</label>
                                    <DropdownMultiselect
                                        placeholder="Escribe para buscar..."
                                        options={availableTags}
                                        selected={currentAlumn.tags}
                                        name="available-tags"
                                        disabled
                                    />
                                </div>
                                <div id="tag-list" className="full-width">
                                    <TagList
                                        id="tag-list"
                                        tags={currentAlumn.tags}
                                        allowClose={true}
                                    ></TagList>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
                <div className="col-sm-6">
                    <object
                        width="100%"
                        height="800"
                        data="http://www.africau.edu/images/default/sample.pdf"
                        type="application/pdf"
                    >
                        {" "}
                    </object>
                </div>
            </div>
        );
    } else {
        return <div>HUbo un error al cargar la página</div>;
    }
};

export default AlumnDetailCard;
