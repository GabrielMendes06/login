function Input(props) {
  return (
    <>
      <label htmlFor={props.id} className={props.labelClass}>{props.labelValue}</label>
      <input
        step={props.step}
        type={props.type}
        value={props.value}
        className={props.className}
        id={props.id}
        onClick={props.onClick}
        onChange={props.onChange}
        onSelect={props.onSelect}
      ></input>
    </>
  );
}

export default Input;
