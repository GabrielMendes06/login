import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input";
import Modal from "../Modal";
import { TransferValueModal } from "../../context/TransferValueModal";
import { GetId } from "../../context/GetId";
import { OpenTransferModal } from "../../context/OpenTransfer";
import CurrencyInput from "react-currency-masked-input";
import Person from "../../images/pessoas.png"
import Arrow from "../../images/seta-direita.png"

function TransferValue() {
  const { openTransferValue, setTransferModalValue } =
    useContext(TransferValueModal);
  const { id } = useContext(GetId);
  const { setTransferModalOpen } = useContext(OpenTransferModal)

  const [iopacity, setIopacity] = useState(0);
  const [usersList, setUsersList] = useState([]);
  const [value, setValue] = useState(0);
  const [userReceiveId, setUserReceiveId] = useState("");

  const getUsers = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/users/getallusers`)
      .then((response) => {
        setUsersList(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const commitTransfer = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/users/transferbalance`, {
        value: value,
        userId1: id,
        userId2: userReceiveId,
      })
      .then((response) => {
        setTransferModalValue(false);
        setTransferModalOpen(false)
      })
      .catch((error) => {
        console.log(error);
        setIopacity(1)
      });
  };

  const handleTransfer = (userId) => {
    setUserReceiveId(userId);
  };

  useEffect(() => {
    getUsers();
    console.log(value)
  }, [value]);

  return (
    <div className="content-parent" id="small-content">
      {usersList.map((user, index) => (
        <ul className="container-list">
          <img src={Person} className="icon-person" alt="" />
          <li key={user.id} className="list-flex">
            <div className="left-grid">
              <p className="list-type">{user.name}</p>
              <p className="list-value" id="color-black">{user.email}</p>
            </div>
          </li>
          <img src={Arrow} 
          className="arrow" 
          alt="right-arrow" 
          onClick={() => {
            setTransferModalValue(true);
            handleTransfer(user.id);
          }}/>
        </ul>
      ))}
      <Modal isOpen={openTransferValue} setModalOpen={setTransferModalValue}>
        <div className="container-to-modal-transfer">
          <p className="paragraph">Enter the amount you want to transfer</p>
          <div className="content-for-balance-value">
          <p className="label-balance">R$</p>
          <CurrencyInput
          className={"modal-input"}
          id={"number-input"}
          type={"text"}

          onChange={(event, originalValue, maskedValue) => {
            setValue(originalValue);
          }}
          placeholder={"0.00"}
        />
          </div>
          <p className="incorrect-user" style={{ opacity: iopacity }}>
            Insuficient balance
          </p>
          <Input
            className={"button-transfer"}
            type={"Submit"}
            value={"Transfer"}
            onClick={commitTransfer}
          />
        </div>
      </Modal>
    </div>
  );
}

export default TransferValue;
