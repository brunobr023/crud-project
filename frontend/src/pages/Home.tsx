import Aurora from '../components/Background';
import MenuBlock from '../components/MenuBlock';
import './Home.css';

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
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.7}
        amplitude={1.0}
        speed={0.5}
      />
      <div className='base-principal'>
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