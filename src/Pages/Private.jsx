import InteractionsButton from "../components/InteractionsButton";
import { useState, useEffect, useContext } from "react";
import Home from "../images/pagina-inicial.png"
import Help from "../images/ponto-de-interrogacao.png"
import Arrow from "../images/seta-direita.png"
import addMoney from "../images/colocar.png"
import Modal from "../components/Modal";
import AddBalance from "../components/AddBalance";
import { GetId } from "../context/GetId";
import { OpenModal } from "../context/OpenModal";
import axios from "axios";


function Private() {

  const [name, setName] = useState("")
  const [balance, setBalance] = useState(0)
  const {id, toggleId} = useContext(GetId)
  const {openModal, setModalOpen} = useContext(OpenModal)
  
  const getUser = (id) => {
    axios.get(`https://nodecruddeploy-api.onrender.com/api/users/getuser/${id}`)
    .then(function (response) {
      setBalance(response.data.balance)
      localStorage.setItem("balance", response.data.balance)
      localStorage.setItem("userId", response.data.id)
      localStorage.setItem("userName", response.data.name)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    let userName = localStorage.getItem("userName")
    let id = localStorage.getItem("userId")
    let balance = localStorage.getItem("balance")
    toggleId(id)
    setName(userName)
    setBalance(balance)
    getUser(id)
  },[openModal])

  return (
    <div className="container">
      <header className="header">
        <div className="icon-grid">
          <img src={Home} id="home-icon" className="icon" alt="home" />
          <img src={Help} id="help" className="icon" alt="?" />
        </div>
        <p className="header-paragraph">Welcome, {name}</p>
      </header>
      <div className="application-body">
        <InteractionsButton 
        modalFunction={() => setModalOpen(true)}
        image={addMoney}/>
        <Modal 
        isOpen={openModal}
        setModalOpen={setModalOpen}
        >
          <AddBalance />
        </Modal>
        <div className="container-balance">          
          <div className="content">            
            <div className="now-whrap-p">
              <p className="balance-paragraph">Balance: </p>
              <p className="balance-paragraph">R${balance}</p>
            </div>
            <div className="now-whrap-p border-top">
              <p className="balance-paragraph final-paragraph">Access extract</p>
              <img src={Arrow} alt="rigth arrow" className="arrow"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Private;
