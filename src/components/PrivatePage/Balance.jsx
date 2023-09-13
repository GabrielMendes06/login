import { useNavigate } from "react-router-dom";

function Balance(props) {

    const navigate = useNavigate()

    const navigateStatement = () => {
      navigate("/statement")
    }

    return(
        <div className="container-balance">          
          <div className="content">            
            <div className="now-whrap-p">
              <p className="balance-paragraph">Balance: </p>
              <p className="balance-paragraph">R${props.balance}</p>
            </div>
            <div className="now-whrap-p border-top" onClick={navigateStatement}>
              <p className="balance-paragraph final-paragraph">Access statement</p>
              <img src={props.imageArrow} alt="rigth arrow" className="arrow"/>
            </div>
          </div>
        </div>
    )
}

export default Balance