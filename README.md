# 🚀 Projeto Full-Stack React + Spring Boot

## 📌 Descrição
Este projeto é uma aplicação **full-stack** composta por:
- **Frontend**: React + TypeScript + Vite, utilizando **Axios** para comunicação com a API.
- **Backend**: Java + Spring Boot, com persistência de dados em **MySQL**.

O objetivo é fornecer uma base sólida para aplicações modernas, escaláveis e seguras.

--- Feito por Bruno

## 🛠️ Tecnologias Utilizadas

### Frontend
- React
- TypeScript
- Vite
- Axios

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL

### Ferramentas de Desenvolvimento
- Git & GitHub
- VSCode
- Maven

---

## 📂 Estrutura do Projeto - Base
├── frontend/        # Aplicação React + TS + Vite
├── backend/         # API em Spring Boot
├── node_modules/    # Dependências do frontend
├── target/          # Build do backend
├── .gitignore
├── package.json
├── README.md
└── SECURITY.md


## ⚙️ Configuração do Banco de Dados

O backend utiliza **MySQL** como banco de dados relacional.  
É necessário configurar o arquivo `application.properties` ou `application.yml` com suas credenciais:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/nome_do_banco
spring.datasource.username=usuario
spring.datasource.password=senha

# Configurações JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
```

## ⚠️ Pré Requisitos
    - Node.js (>= 18)
    - Java (>= 17)
    - MySQL (>= 8)

## Executando o Front-end
cd frontend
npm install
npm run dev

## Executando o backend
cd backend
./mvnw spring-boot:run

## Comunicação do Fronend <-> Backend
O frontend consome os *endpoints expostos pelo backend via Axios*.
Exemplo de chamada:
```
    import axios from "axios";

    axios.get("http://localhost:8080/api/exemplo")
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
```
Consulte o arquivo `SECURITY.md` para detalhes sobre práticas de segurança e reporte de vulnerabilidades.
