import { Routes, Route } from "react-router-dom";

import "./css/Home.css";
import "./css/Statement.css"
import "./css/CreateAc.css";
import "./css/Private.css";
import "./css/ModalStyle.css";
import "./css/ModalBalance.css";
import "./css/Transfer.css"

import Main from "./Pages/Home";
import Private from "./Pages/Private";
import CreateAccount from "./Pages/CreateAccount";
import Statement from "./Pages/Statement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/statement" element={<Statement />}/>
        <Route path="/" element={<Main />} />
        <Route path="/private" element={<Private />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
