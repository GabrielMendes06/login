import Input from "./Input";
import DepositValue from "./DepositValue";
import { useContext } from "react";
import axios from "axios";
import { GetId } from "../context/GetId";
import { ThemeContext } from "../context/ThemeContext";
import { OpenModal } from "../context/OpenModal";

function AddBalance() {

  const {setModalOpen} = useContext(OpenModal)
  const {id, toggleId} = useContext(GetId)
  const {currentValue} = useContext(ThemeContext)

  const handleClick = () => {
    axios.put(`containers-us-west-61.railway.app/api/users/newbalance/${id}`, {
      balance: currentValue
    })
    .then(function (response) {
      console.log(response)
      setModalOpen(false)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <div className="container-for-balance">
      <DepositValue />
      <Input
        className={"esen"}
        type={"Submit"}
        value={"Add Balance"}
        onClick={handleClick}
      />
    </div>
  );
}

export default AddBalance;
