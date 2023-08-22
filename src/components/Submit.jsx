import { useNavigate } from "react-router-dom";
import Inputs from "./Input-text";
import { useState, useContext } from "react";
import axios from "axios";
import Input from "./Input";
import { ThemeContext } from "../context/ThemeContext";

function Submit(props) {
  const submitLogin = () => {
    axios
      .post("https://nodecruddeploy-api.onrender.com/api/users", {
        email: resultEmail,
        password: resultPassword,
      })
      .then(function (response) {
        console.log(response);
        navigate("/private");
        toggleTheme(response.data.user.dataUser);
      })
      .catch(function (error) {
        setIopacity(1);
        console.log(error);
      });
  };

  const navigatePage = () => {
    navigate("/CreateAccount");
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
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
          function={submitLogin}
          value={"Sign in"}
          className={"esen"}
          id={"sign"}
        />
        <Input
          value={"Create account"}
          className={"esen"}
          function={navigatePage}
        />
      </div>
    </div>
  );
}

export default Submit;
