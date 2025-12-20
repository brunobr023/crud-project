import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aurora from "../components/Background"; // mesmo Aurora
import Logo from "../assets/Logotipo01_a.svg"
import "./css/Auth.css"; // CSS unificado

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Novo usuário:", { name, email, password });
    alert(`Usuário ${name} cadastrado com sucesso!`);
    navigate("/login");
  };

  return (
    <div className="auth-container">
      {/* Aurora no fundo */}
      <Aurora
        ClassName="aurora-container"
        colorStops={["#7bcf36", "#5bac2b", "#5ad608"]}
        blend={0.7}
        amplitude={1.0}
        speed={0.5}
      />
        {/*Container PAI */}
        <div className="auth-container">
            {/* Card de cadastro */}
            <div className="auth-card">
                <img className="logotipo" src={Logo} alt="Logotipo"/>
                <h1>Cadastro</h1>
                <form onSubmit={handleRegister}>
                <label>Nome</label>
                <input value={name} onChange={e => setName(e.target.value)} required />
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <label>Senha</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Cadastrar</button>
                </form>

                <p className="auth-link">
                Já tem conta? <a href="/login">Voltar ao Login</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Cadastro;