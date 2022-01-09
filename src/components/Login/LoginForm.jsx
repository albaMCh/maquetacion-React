import React from "react";

import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form id="form_login">
      <div className="input">
        <span>Email</span>
        <input
          type="text"
          placeholder="Introduce tu correo"
          name=""
          id="email"
          className="usurario"
          required
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
        />
      </div>
      <div className="check line">
        <input type="checkbox" />
        <label> Recuérdame </label>
        <a href="#" class="login-forgot green">
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
