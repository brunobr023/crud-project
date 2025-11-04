import React, { useEffect, useState } from 'react';
import './css/Read.css';
import Aurora from '../components/Background';

type Usuario = {
  id: number;
  nome: string;
  idade: number;
  email: string;
};

const Read: React.FC = () => {
  const [Usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const dadosMock: Usuario[] = [
      { id: 1, nome: 'Bruno', idade: 35, email: 'bruno@email.com' },
      { id: 2, nome: 'Bianca', idade: 28, email: 'bianca@email.com' },
    ];
    setUsuarios(dadosMock);
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
    <h1>Formulário de Criação de Usuários</h1>
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
  </div>
</div>
  );
};

export default Read;