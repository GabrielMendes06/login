import Title from "../components/Title";
import FormRegister from "../components/FormRegister";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateAccount() {

  const navigate = useNavigate()
  const[name, setName] = useState("")
  const[surname, setSurname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerAccount = () => {
    axios.post("https://nodecruddeploy-api.onrender.com/api/new-user", {
      name: name + " " + surname,
      email: email,
      password: password
    })
    navigate("/")
  }

  return (
    <div className="body-container">
      <div className="new-account-container">
        <div className="titles-content">
          <Title title={"Create your account"} 
          id={"title-form"}/>
          <p className="p-form">It's fast and easy</p>
        </div>
        <form method="POST" className="form">
          <div className="block-name-register">
            <FormRegister
              placeholder={"Name"}
              type={"text"}
              className={"name-register all-inputs"}
              onChange={(e) => {
                setName(e.target.value)
                console.log(name)
              }}
            />
            <FormRegister
              placeholder={"Surname"}
              type={"text"}
              className={"name-register all-inputs"}
              onChange={(e) => {
                setSurname(e.target.value)
              }}
            />
          </div>
          <FormRegister
            type={"text"}
            placeholder={"E-mail"}
            className={"account-inputs all-inputs"}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <FormRegister
            type={"password"}
            className={"account-inputs all-inputs"}
            placeholder={"Password"}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </form>
        <p className="p-footer">
          Click register to create your registration within our database, it's
          simple, easy and free.
        </p>
        <FormRegister 
        type={"submit"}
        value={"Register"} 
        className={"button-register"}
        onClick={registerAccount}
        />
      </div>
    </div>
  );
}

export default CreateAccount;
