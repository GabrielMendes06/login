import { useNavigate } from "react-router-dom";
import Inputs from "./Inputs";
import { useState, useEffect } from "react";
import axios from "axios";

function Submit(props) {

  const [data, setData] = useState([])

  const submitLogin = () => {
    axios.post('http://localhost:6590/api/users', {
      email: resultEmail, 
      password: resultPassword
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

    const [resultEmail, setResultEmail] = useState("")
    const [resultPassword, setResultPassword] = useState("")
    const [boolean, setBoolean] = useState()
    const navigate = useNavigate()
    const [iopacity, setIopacity] = useState(0)

    const updateResultEmail = (r) => {
        setResultEmail(r)
    }

    const updateResultPassword = (r) => {
        setResultPassword(r)
    }

  return (
    <div className="content-inputs">
      <Inputs
        description={"email"}
        id={"iemail"}
        placeHolder={"Type your email"}
        autoComplete={"email"}
        iconName={"person"}
        handleResult={updateResultEmail}
      />
      <Inputs
        description={"password"}
        id={"isen"}
        placeHolder={"Type your password"}
        autoComplete={"current-password"}
        iconName={"key"}
        handleResult={updateResultPassword}
      />
      <p className="incorrect-user" style={{opacity: iopacity}}>Email ou senha incorretos</p>
      <input
        type="submit"
        value={props.value}
        className={"esen"}
        id={props.id}
        onClick={submitLogin}
      ></input>
    </div>
  );
}

export default Submit;
