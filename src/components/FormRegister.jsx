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
      />
    </div>
  );
}

export default FormRegister;
