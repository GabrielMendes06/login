import { useState, useEffect, useContext } from "react";
import axios from "axios";

//Contexts
import { GetId } from "../context/GetId";
import { OpenModal } from "../context/OpenModal";
import { OpenTransferModal } from "../context/OpenTransfer";

//Images
import Arrow from "../images/seta-direita.png"
import addMoney from "../images/colocar.png"
import Transfer from "../images/transferencia-bancaria.png"

//Components
import InteractionsButton from "../components/Deposit/InteractionsButton";
import Modal from "../components/Modal";
import AddBalance from "../components/Deposit/AddBalance";
import Header from "../components/PrivatePage/Header";
import Balance from "../components/PrivatePage/Balance";
import TransferValue from "../components/Transfer/TransferValue";

function Private() {

  const [name, setName] = useState("")
  const [balance, setBalance] = useState(0)
  const {toggleId} = useContext(GetId)
  const {openModal, setModalOpen} = useContext(OpenModal)
  const {openTransferModal, setTransferModalOpen} = useContext(OpenTransferModal)
  
  const getUser = (id) => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/getuser/${id}`)
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
  },[openTransferModal, openModal])

  return (
    <div className="container">
        <Header 
        userName={name}
        />
      <div className="application-body">
        <div className="buttons-grid">
          <InteractionsButton
          modalFunction={() => setModalOpen(true)}
          image={addMoney}
          text={"deposit money"}
          />
          <InteractionsButton
          modalFunction={() => setTransferModalOpen(true)}
          text={"Transfer"}
          image={Transfer}
          />
        </div>

          <Modal 
          isOpen={openTransferModal}
          setModalOpen={setTransferModalOpen}
          >
            <TransferValue />
          </Modal>

          <Modal 
          isOpen={openModal}
          setModalOpen={setModalOpen}
          >
            <AddBalance />
          </Modal>

        <Balance 
        imageArrow={Arrow}
        balance={balance}
        />
      </div>
    </div>    
  );
}

export default Private;
