import MenuBlock from '../components/MenuBlock';
import './Home.css'; // opcional para layout

function Home() {
  return (
    <div className="home-container">
      <MenuBlock title="Criar" path="/create" />
      <MenuBlock title="Visualizar" path="/read" />
      <MenuBlock title="Atualizar" path="/update" />
      <MenuBlock title="Excluir" path="/delete" />
    </div>
  );
}

export default Home;