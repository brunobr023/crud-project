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
                    <a href="#home">Home</a>
                    <a href="#quem-somos">Quem Somos</a>
                    <a href="#suporte">Suporte</a>
                    <a href="#documentacao">Documentação</a>
                </div>
                <div className="authbar">
                    <a href="/Login">Login</a>
                    <a href="/Cadastro">Cadastro</a>
                </div>
            </div>

            <div className='base-principal'>
                {/* Separador visual */}
                <hr className="section-divider" id="home" />
                {/* Seção Home */}
                <div className="home_container" >
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

                {/* Separador visual */}
                <hr className="section-divider background-somos" id="quem-somos" />

                {/* Seção Quem Somos */}
                <div className="somos_container" >
                    <div className="esq_column_somos">
                        {/*Renderizando a animação no lado esquerdo */}
                        <Animations animations={animationsList} />
                    </div>
                    <div className="dir_column_somos">
                        {/*Renderizando a animação no lado direito */}
                        <h1>Quem Somos?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem, modi adipisci hic impedit
                            suscipit facilis porro voluptatem ex distinctio fugiat ipsum? Perferendis aspernatur consequuntus 
                            similique sunt nisi ex asperiores?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magnam delectus ipsa ex quas? Nisi, accusamus recusandae porro
                            hic molestias unde, ipsum deleniti rerum ab quo sed laboriosam
                            adipisci impedit beatae.</p>
                    </div>
                </div>

                {/* Separador visual */}
                <hr className="section-divider" id="suporte" />

                {/* Seção Suporte */}
                <div className="suporte_container" >
                    <div className="esq_column_suporte">
                        <h1>Suporte com a Aplicação</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem, modi adipisci hic impedit
                            suscipit facilis porro voluptatem ex distinctio fugiat ipsum? Perferendis aspernatur consequuntus 
                            similique sunt nisi ex asperiores?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magnam delectus ipsa ex quas? Nisi, accusamus recusandae porro
                            hic molestias unde, ipsum deleniti rerum ab quo sed laboriosam
                            adipisci impedit beatae.</p>
                    </div>
                    <div className="dir_column_suporte">
                        {/*Renderizando a animação no lado direito */}
                        <Animations animations={animationsList} />
                    </div>
                </div>

                {/* Separador visual */}
                <hr className="section-divider" id="documentacao" />

                {/* Seção Suporte */}
                <div className="doc_container" >
                    <div className="esq_column_doc">
                    {/*Renderizando a animação no lado direito */}
                        <Animations animations={animationsList} />
                    </div>
                    <div className="dir_column_doc">
                        <h1>Documentação e Desenvolvedor</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem, modi adipisci hic impedit
                            suscipit facilis porro voluptatem ex distinctio fugiat ipsum? Perferendis aspernatur consequuntus 
                            similique sunt nisi ex asperiores?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magnam delectus ipsa ex quas? Nisi, accusamus recusandae porro
                            hic molestias unde, ipsum deleniti rerum ab quo sed laboriosam
                            adipisci impedit beatae.</p>
                    </div>
                </div>

                {/* Separador visual */}
                <hr className="section-divider" />
                {/* Separador visual */}
                <hr className="section-divider" />
            </div>
            <footer>
                <p>© 2025 Minha Empresa. Todos os direitos reservados.</p>
                    <nav>
                        <a href="#quem-somos">Quem Somos</a>
                        <a href="#suporte">Suporte</a>
                        <a href="#contato">Contato</a>
                    </nav>
            </footer>
        </div>
    );
}

export default LandingPage;
