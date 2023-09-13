import Input from "../Input";
import DepositValue from "./DepositValue";
import { useContext, useEffect } from "react";
import axios from "axios";
import { GetId } from "../../context/GetId";
import { ThemeContext } from "../../context/ThemeContext";
import { OpenModal } from "../../context/OpenModal";

function AddBalance() {

  const {setModalOpen} = useContext(OpenModal)
  const {id} = useContext(GetId)
  const {currentValue} = useContext(ThemeContext)

  const handleClick = () => {
    axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/users/newbalance/${id}`, {
      balance: currentValue
    })
    .then((response) => {
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/getuser/${id}`)
    .then(function (response) {
      localStorage.setItem("balance", response.data.balance)
      localStorage.setItem("userId", response.data.id)
      localStorage.setItem("userName", response.data.name)
    })
    .catch(function (error) {
      console.log(error);
    });
      console.log(response)
      setModalOpen(false)
    })
    .catch((error) => {
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
