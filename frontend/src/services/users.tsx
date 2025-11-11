import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Função para obter a lista de usuários
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
}

// Função para atualizar um usuário
export const updateUser = async (id: number, usuario: Usuario) => {
  const response = await api.put(`/users/${id}`, usuario);
  return response.data;
}
// Função para criar um novo usuário
export const createUser = async (usuario: Usuario) => {
  const response = await api.post("/users", usuario);
  return response.data;
}
// Função para deletar um usuário
export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
}
export interface Usuario {
  id: number;
  nome: string;
  idade: number;
  email: string;
}

