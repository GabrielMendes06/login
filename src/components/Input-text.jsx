import { useState, useEffect } from "react";

function Inputs(props) {
  const [valor, setValor] = useState("");

  const handleChange = () => {
    props.handleResult(valor);
  };

  useEffect(() => {
    handleChange();
  }, [valor]);

  return (
    <div className="campo">
      <span className="material-symbols-outlined">{props.iconName}</span>
      <input
        type={props.description}
        name={props.description}
        id={props.id}
        placeholder={props.placeHolder}
        autoComplete={props.autoComplete}
        required
        className="inputs"
        onChange={(e) => {
          setValor(e.target.value);
        }}
        value={valor}
      ></input>

      <label htmlFor={props.id} className="inputs">
        {props.valor}
      </label>
    </div>
  );
}

export default Inputs;
