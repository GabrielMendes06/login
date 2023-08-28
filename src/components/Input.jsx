function Input(props) {
  return (
    <div className="">
      <label htmlFor={props.id} className={props.labelClass}>{props.labelValue}</label>
      <input
        step={props.step}
        type={props.type}
        value={props.value}
        className={props.className}
        id={props.id}
        onClick={props.onClick}
        onChange={props.onChange}
        defaultValue={props.defaltValue}
        onSelect={props.onSelect}
      ></input>
    </div>
  );
}

export default Input;
