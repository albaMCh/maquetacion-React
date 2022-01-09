import React from "react";

import LoginForm from "./Login/LoginForm.jsx";

const Login = () => {
  const studentStyle = {
    fontSize: "20px",
  };

  return (
    <div>
      <div className="contenedor_contenido">
        <div className="contenedor_formulario">
          <h2 className="line">
            OpenBootcamp |{" "}
            <span className="green" style={studentStyle}>
              Alumnos
            </span>
          </h2>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
