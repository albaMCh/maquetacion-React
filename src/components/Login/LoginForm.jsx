import React from "react";

import "./LoginForm.css";

import UserDataService from "../../services/UserDataService";

import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: "",
      },
      password: {
        value: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    debugger;

    this.setState({
      [event.target.id]: {
        value: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      email: this.state.email.value,
      password: this.state.password.value,
    };

    UserDataService.login(body)
      .then((data) => {
        const token = data.token;
        sessionStorage.setItem("token", token);

        axios.defaults.headers.common["Authorization"] = token;

        this.router.location("/list");
      })
      .catch(() => {
        window.alert("Credenciales erróneas");
      });
  }

  render() {
    return (
      <form id="form_login" onSubmit={this.handleSubmit}>
        <div className="input">
          <span>Email</span>
          <input
            type="text"
            placeholder="Introduce tu correo"
            name=""
            id="email"
            className="usurario"
            required
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </div>
        <div className="check line">
          <input type="checkbox" />
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
  }
}

export default LoginForm;
