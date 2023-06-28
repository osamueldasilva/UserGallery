import "./styles.css";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { api } from "../../service/api";

export function Cadastro() {
  // * Estados para realizar cadastro
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // * Função que faz o cadastro pra api
  const handleUserCreation = () => {
    const object = {
      name: name,
      login: login,
      password: password,
    };
    api
      .post("/user/register", object)
      .then((res) => {
        alert("Usuario cadastrado");
        navigate("/");
      })
      .catch((error) => {
        alert("Erro ao obter cadastro", error);
      });
    console.log(object);
  };

  return (
    <>
      <div className="cadastroUser">
        <label>Name:</label>
        <input
          className="inputCadastro"
          type="name"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Login:</label>
        <input
          className="inputCadastro"
          type="login"
          id="login"
          name="login"
          onChange={(e) => setLogin(e.target.value)}
        />

        <label>Senha:</label>
        <input
          className="inputCadastro"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleUserCreation}>Cadastrar</button>
      </div>
    </>
  );
}
