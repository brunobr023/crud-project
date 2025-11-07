import Aurora from '../components/Background';
import MenuBlock from '../components/MenuBlock';
import './css/Home.css';

// Lista de itens do menu com roles associadas
const menuItems = [
  { title: "Criar", path: "/create", role: ["admin"] },
  { title: "Visualizar", path: "/read", role: ["user", "admin"] },
  { title: "Atualizar", path: "/update", role: ["admin"] },
  { title: "Excluir", path: "/delete", role: ["admin"] }
];

// Simulação de papel do usuário (altere para "admin", "user", "guest", etc.)
const userRole = "admin";

// Função de verificação de papel (role) do usuário
const VerificationRole = async (roles: string[]) => {
  return roles.includes(userRole);
};

// Filtra os itens do menu com base na role do usuário
const filteredMenu = menuItems.filter(item => VerificationRole(item.role));



function Home() {
  return (
    <div className='background'>
      {/* Componente de fundo animado Aurora */}
      <Aurora
        ClassName="aurora-container"
        colorStops={["#B7E8E3", "#9DD8E8", "#B7E8D2"]}
        blend={0.7}
        amplitude={1.0}
        speed={0.5}
      />
      <div className='base-principal'>
        <h1 className='title'>Bem-vindo a criação de Usuários!</h1>
        {/* Blocos de menu para navegação CRUD */}
        <div className="menu-wrapper">
          {filteredMenu.map(item => (
            <MenuBlock key={item.path} title={item.title} path={item.path} />
          ))}
        </div>
        <div className='login-footer'>
          <button>teste</button>
        </div>
      </div> 
    </div>
  );
}
export default Home;