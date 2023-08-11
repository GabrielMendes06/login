function Title(props) {
  return (
    <>
      <h1 id={props.id}>
        {props.title}
      </h1>
    </>
  );
}

export default Title;
