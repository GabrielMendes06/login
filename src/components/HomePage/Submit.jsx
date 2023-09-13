import { useNavigate } from "react-router-dom";
import InputText from "../Input-text";
import { useState} from "react";
import axios from "axios";
import Input from "../Input";


function Submit(props) {
  const submitLogin = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/users`, {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitLogin()
    }
  };

  return (
    <div className="content-inputs">
      <InputText
        description={"email"}
        id={"iemail"}
        placeHolder={"Type your email"}
        autoComplete={"email"}
        iconName={"person"}
        handleResult={updateResultEmail}
        onKeyPress={handleKeyPress}
      />
      <InputText
        description={"password"}
        id={"isen"}
        placeHolder={"Type your password"}
        autoComplete={"current-password"}
        iconName={"key"}
        handleResult={updateResultPassword}
        onKeyPress={handleKeyPress}
      />
      <p className="incorrect-user" style={{ opacity: iopacity }}>
        Incorrect email or password
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
 