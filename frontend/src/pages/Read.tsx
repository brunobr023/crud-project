import React, { useEffect, useState } from 'react';
import './css/Read.css';
import Aurora from '../components/Background';
import {getUsers} from '../services/users';
import Toast from "../components/toast";

type Usuario = {
  id: number;
  nome: string;
  idade: number;
  email: string;
};

const Read: React.FC = () => {
  const [Usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [{/*loading*/}, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


    useEffect(() => {
    getUsers()
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar os usuários:", error);
        setErrorMessage("Não foi possível carregar os usuários.");
        setLoading(false);
      });
  }, []);


  return (
    <div className="read-background">
    <Aurora
      ClassName="aurora-container"
      colorStops={['#B7E8E3', '#9DD8E8', '#B7E8D2']}
      blend={0.7}
      amplitude={1.0}
      speed={0.5}
    />

  {/* Cabeçalho fixo no canto superior esquerdo */}
  <div className="read-header">
    <a href="\">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
    <h1>Visualização de Usuários</h1>
  </div>

  {/* Tabela centralizada */}
  <div className="read-table-container">
    <table className="read-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {Usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.idade}</td>
            <td>{usuario.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="toast-container">
      {/* Renderização do Toast */}
      {errorMessage && (
        <Toast
          message={errorMessage}
          type="success"
          onClose={() => setErrorMessage(null)}
        />
      )}
    </div>
  </div>
</div>
  );
};
export default Read;