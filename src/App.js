import { Routes, Route } from "react-router-dom";
import "./css/Home.css";
import "./css/CreateAc.css";
import "./css/Private.css";
import "./css/ModalStyle.css";
import "./css/ModalBalance.css";
import Main from "./Pages/Home";
import Private from "./Pages/Private";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/private" element={<Private />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
