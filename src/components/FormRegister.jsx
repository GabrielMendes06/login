function FormRegister(props) {
  return (
    <div className="container-inputs">
      <input
        value={props.value}
        id={props.name}
        type={props.type}
        name="name"
        placeholder={props.placeholder}
        className={props.className}
        onClick={props.onClick}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

export default FormRegister;
