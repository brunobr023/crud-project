import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logotipo01_a.svg"
import Aurora from "../components/Background"; // seu componente Aurora
import "./css/Auth.css"; // CSS unificado

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("auth", "true"); // simulação de login
    navigate("/home");
  };

  return (
    <div className="auth-container">
      {/* Aurora no fundo */}
      <Aurora
        ClassName="aurora-container"
        colorStops={["#B7E8E3", "#9DD8E8", "#B7E8D2"]}
        blend={0.7}
        amplitude={1.0}
        speed={0.5}
      />
     {/*Container PAI */}
        <div className="auth-container">
            {/* Card de login */}
            <div className="auth-card">
              <a href="/">Voltar</a>
                <img className="logotipo" src={Logo} alt=""/>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" placeholder="Digite seu email" required />
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" required />
                <button type="submit">Entrar</button>
                </form>

                <p className="auth-link">
                Não tem conta? <a href="/cadastro">Cadastre-se</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Login;