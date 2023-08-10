function Input(props) {
    return(
        <input
        type="submit"
        value={props.value}
        className={props.className}
        id={props.id}
        onClick={props.function}
      ></input>
    )
}

export default Input