import Back from "../../images/seta-esquerda.png";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input"

function HeaderStatement(props) {

    const navigate = useNavigate()
    const returnPage = () => {
        navigate("/private")
    }
    
  return (
    <header className="max-widh-parent">
      <div className="statement-header">
        <div className="content-image">
          <img src={Back} alt="" className="back" onClick={returnPage}/>
        </div>
        <div className="content-letter">
          <p className="moviments-letter" id="header-s">
            Movements
          </p>
        </div>
      </div>
      <div className="button-mid-content">
        {props.children1}
        {props.children2}
        {props.children3}
      </div>
    </header>
  );
}

export default HeaderStatement;
