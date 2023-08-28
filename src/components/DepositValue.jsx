import React, { useState, useContext } from "react";
import Input from "./Input";
import { ThemeContext } from "../context/ThemeContext";
import { OpenModal } from "../context/OpenModal";

function DepositValue() {

  const {currentValue, setCurrentValue} = useContext(ThemeContext)

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value)
  }

  return (
    <div>
      <p>How much do you want to add to your balance?</p>
      <p className="incorrect-user" style={{padding: "0"}}>(We currently only accept integer values)</p>
      <div className="content-for-balance-value">
        <Input   
          onChange={handleInputChange}     
          type={"number"}
          className={"modal-input"}
          labelValue={"R$"}
          labelClass={"label-balance"}
          id={"number-input"}
          defaultValue={"0"}
        />
      </div>
    </div>
  );
}

export default DepositValue;





