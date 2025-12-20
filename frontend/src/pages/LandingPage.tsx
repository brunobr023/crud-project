import "./css/landingPage.css";
import Aurora from "../components/Background";
import Logotipo from "../assets/Logotipo01_a.svg";
import Animations from "../components/animations"
import animacaoBusiness from "../assets/animacaoBusiness.json"

function LandingPage (){

    //constante responsavel pela a escolha da animação
    const animationsList = [
    { id: 1, data: animacaoBusiness, style: { width: 300, height: 300 }, loop: true }
  ];

    return(
        <div className='background'>
              {/* Componente de fundo animado Aurora */}
              <Aurora
                ClassName="aurora-container"
                colorStops={["#B7E8E3", "#9DD8E8", "#B7E8D2"]}
                blend={0.7}
                amplitude={1.0}
                speed={0.5}
              />
            <div className="navbarLanding">
                <img src={Logotipo} alt="Logotipo"/>
                <div className="menubar">
                    <a href="">Home</a>
                    <a href="">Quem Somos</a>
                    <a href="">Suporte</a>
                    <a href="">Documentação</a>
                </div>
                <div className="authbar">
                    <a href="">Login</a>
                    <a href="">Cadastro</a>
                </div>
            </div>

            <div className='base-principal'>
                <div className="home_container">
                    <div className="esq_column_home">
                        <h1>Bem vindo ao SGP!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem, modi adipisci hic impedit
                        suscipit facilis porro voluptatem ex distinctio fugiat ipsum? Perferendis aspernatur consequuntus 
                        similique sunt nisi ex asperiores?</p>
                    </div>
                    <div className="dir_column_home">
                        {/*Renderizando a animação no lado direito */}
                         <Animations animations={animationsList} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;
