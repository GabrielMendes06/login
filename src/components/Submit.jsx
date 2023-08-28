import { useNavigate } from "react-router-dom";
import Inputs from "./Input-text";
import { useState} from "react";
import axios from "axios";
import Input from "./Input";


function Submit(props) {
  const submitLogin = () => {
    axios
      .post("https://nodecruddeploy-api.onrender.com/api/users", {
        email: resultEmail,
        password: resultPassword,
      })
      .then(function (response) {
        localStorage.setItem("userName", response.data.user.dataUser.name)
        localStorage.setItem("userId", response.data.user.dataUser.id)
        localStorage.setItem("balance", response.data.user.dataUser.balance)
        navigate("/private");  
      })
      .catch(function (error) {
        setIopacity(1);
        console.log(error);
      });
  };

  const navigatePage = () => {
    navigate("/CreateAccount");
    console.log("clicou")
  };

  const [resultEmail, setResultEmail] = useState("");
  const [resultPassword, setResultPassword] = useState("");
  const navigate = useNavigate();
  const [iopacity, setIopacity] = useState(0);

  const updateResultEmail = (r) => {
    setResultEmail(r);
  };

  const updateResultPassword = (r) => {
    setResultPassword(r);
  };

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
      <p className="incorrect-user" style={{ opacity: iopacity }}>
        Email ou senha incorretos
      </p>
      <div className="box-inputs">
        <Input
          type={"Submit"}
          onClick={submitLogin}
          value={"Sign in"}
          className={"esen"}
          id={"sign"}
        />
        <Input
          type={"Submit"}
          value={"Create account"}
          className={"esen"}
          onClick={navigatePage}
        />
      </div>
    </div>
  );
}

export default Submit;
