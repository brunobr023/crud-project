import React, { useState } from 'react';
import Aurora from '../components/Background';
import './css/Create.css';


interface FormData{
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  telefone: string;
  idade:  number | null;
}
const Create: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    idade: null
  });
// Função para prevenir XSS
  const xssPrevencion = (str: string) => {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  // Manipulador de mudança de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = name === 'nome' ? xssPrevencion(value) : value;

    setFormData(prevState => ({
      ...prevState,
      [name]: sanitizedValue
    }));
  };
  // Manipulador de submissão do formulário
  
  // Função para enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui é a lógica para enviar os dados ao servidor
  };

  return (
    <div className='background'> {/* Container de fundo */}
    {/* Componente de fundo animado Aurora */}
          <Aurora
            ClassName="aurora-container"
            colorStops={["#B7E8E3", "#9DD8E8", "#B7E8D2"]}
            blend={0.7}
            amplitude={1.0}
            speed={0.5}
          />
      <div className='base-Create'> {/* Container principal */}
        <form className='forms' onSubmit={handleSubmit}> {/* Formulário */}
          <div className="form-group"> {/* Grupo de formulário */}
            <div className='menu'> {/* Menu de navegação */}
              <a href="\"> {/* Voltar */}
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#000000ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <h1 className='Create_Title'>Formulário de Criação de Usuários</h1>
            </div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirme a senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade || ''}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Criar Usuário</button>
      </form>
    </div>
  </div>
);
}
export default Create;