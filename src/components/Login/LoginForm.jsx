import React from "react";

import "./LoginForm.css";

import UserDataService from "../../services/UserDataService";

import axios from "axios";

import {useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState({
        value: "",
    });
    const [password, setPassword] = useState({
        value: "",
    });

    const history = useNavigate();

    const handleChange = (event) => {
        const value = event.target.value;
        if (event.target.id === "email") {
            setEmail({
                value,
            });
        } else {
            setPassword({
                value,
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            email: email.value,
            password: password.value,
        };

        UserDataService.login(body)
            .then((response) => {
                debugger;
                const token = response.data.token;
                sessionStorage.setItem("token", token);

                axios.defaults.headers.common["Authorization"] = token;

                history("/list");
            })
            .catch(() => {
                window.alert("Credenciales erróneas");
            });
    };

    return (
        <form id="form_login" onSubmit={handleSubmit}>
            <div className="input">
                <span>Email</span>
                <input
                    type="text"
                    placeholder="Introduce tu correo"
                    name=""
                    id="email"
                    className="usurario"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="input">
                <span className="line">Contraseña</span>
                <input
                    type="password"
                    placeholder="Introduce tu contraseña"
                    name=""
                    id="password"
                    className="contrasenia"
                    onChange={handleChange}
                />
            </div>
            <div className="check line">
                <input type="checkbox"/>
                <label> Recuérdame </label>
                <a href="#" className="login-forgot green">
                    He olvidado la contraseña
                </a>
            </div>

            <div className="input">
                <button type="submit">
                    <div className="loader" id=""></div>
                    <span className="titulo_boton">Iniciar Sesión</span>
                </button>
            </div>

            <div id="footer">
                <p>Copyright © 2021 Bootcamp SL. Imagina Group</p>
                <p>Todos los derechos reservados</p>
                <p>Politica de Privacidad</p>
            </div>
        </form>
    );
};

export default LoginForm;
