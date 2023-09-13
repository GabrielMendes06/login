import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import CurrencyInput from "react-currency-masked-input";

function DepositValue() {

  const {currentValue, setCurrentValue} = useContext(ThemeContext)

  useEffect(() => {
    console.log(currentValue)
  },[currentValue])

  return (
    <div>
      <p className="paragraph">How much do you want to add to your balance?</p>
      <div className="content-for-balance-value">
        <p className="label-balance">R$</p>
        <CurrencyInput
          className={"modal-input"}
          id={"number-input"}
          type={"text"}
          defaultValue={0}
          onChange={(event, originalValue, maskedValue) => {
            setCurrentValue(originalValue);
          }}
          placeHolder={"0.00"}
        />

      </div>
    </div>
  );
}

export default DepositValue;





