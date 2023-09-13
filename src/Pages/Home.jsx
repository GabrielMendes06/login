import Title from "../components/HomePage/Title";
import Submit from "../components/HomePage/Submit";

function Main() {

  return (
    <main>
      <section className="login">
        <div className="welcome">
          <Title title={"Welcome Back!"} id={"title-welcome"} />
          <p className="welcome-paragraph">
            You can sign in you acess with your existing account
          </p>
        </div>
        <div className="formulario">
          <Title title={"Sign In"} id={"title-sign"}/>
          <Submit />
        </div> 
      </section>
    </main>
  ); 
}

export default Main;
