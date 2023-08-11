function Input(props) {
  return (
    <div className="">
      <input
        type="submit"
        value={props.value}
        className={props.className}
        id={props.id}
        onClick={props.function}
      ></input>
    </div>
  );
}

export default Input;
