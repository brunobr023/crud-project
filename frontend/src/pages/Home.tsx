import Aurora from '../components/Background';
import MenuBlock from '../components/MenuBlock';
import './css/Home.css';

const menuItems = [
  { title: "Criar", path: "/create" },
  { title: "Visualizar", path: "/read" },
  { title: "Atualizar", path: "/update" },
  { title: "Excluir", path: "/delete" }
];

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
          {menuItems.map(item => (
            <MenuBlock key={item.path} title={item.title} path={item.path} />
          ))}
        </div>
      </div> 
    </div>
  );
}
export default Home;