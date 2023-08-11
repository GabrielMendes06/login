import Title from "../components/Title";
import FormRegister from "../components/FormRegister";

function CreateAccount() {
  return (
    <div className="body-container">
      <div className="new-account-container">
        <Title title={"Create your account"} />
        <p>It's fast and easy</p>
        <form method="POST" className="form">
          <div className="block-name-register">
            <FormRegister
              placeholder={"Name"}
              type={"text"}
              className={"name-register"}
            />
            <FormRegister
              placeholder={"Surname"}
              type={"text"}
              className={"name-register"}
            />
          </div>
          <FormRegister
            type={"text"}
            placeholder={"E-mail"}
            className={"account-inputs"}
          />
          <FormRegister
            type={"password"}
            className={"account-inputs"}
            placeholder={"Password"}
          />
        </form>
        <p>
          Click register to create your registration within our database, it's
          simple, easy and free.
        </p>
        <FormRegister 
        type={"submit"}
        value={"Register"} 
        />
      </div>
    </div>
  );
}

export default CreateAccount;
