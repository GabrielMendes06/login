function Title(props) {
  return (
    <>
      <h1 className="title" id={props.idname}>
        {props.title}
      </h1>
    </>
  );
}

export default Title;
