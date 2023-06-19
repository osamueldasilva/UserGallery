import { api } from "../../service/api";

import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import Background from "../../assets/image/Background.jpg";
import { useState } from "react";


function Login() {

  // VERIFICAÇÃO DE LOGIN
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const { data } = await  api.post("/user/login", {
        login, password
      })
      
      navigate('/galeria')
      console.log(data)
    } catch (error) {
      
    }
  }


  // FIM DA VERIFICAÇÃO DE LOGIN
  return (
    <section id="login">
      <img className="imageLogin" src={Background} alt="Imagem de login" />

      <div className="inputsLogin">
        <div className="loginUser">
          <h1>Entrar</h1>
          <label>
            <input
              name="login"
              type="text"
              placeholder="Digite seu Login"
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <nav>
              <button className="btnLogin"
                onClick={loginUser}
              >
                Acessar a plataforma
              </button>
            <NavLink to="/cadastro">
              {" "}
              <p>Cadastra-se</p>{" "}
            </NavLink>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Login;
