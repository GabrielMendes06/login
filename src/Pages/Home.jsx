import Title from "../components/Title"
import Inputs from "../components/Inputs"
import Submit from "../components/Submit"

function Main() {

    return(
        <main>
            <div className="header">
                <p>Email = bemvindo.visitante@outlook.com</p>
                <p>Senha = 123456</p>
            </div>
            <section className="login">
                <div className="imagem">
                </div>
                <div className="formulario">
                    <Title />
                    <form 
                    action="login.php" 
                    method="post" 
                    autoComplete="on">                      
                    </form>
                    <Submit 
                        value={"Entrar"}
                    />                    
                </div>
            </section>
        </main>
    )
}

export default Main