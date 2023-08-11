import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./CreateAc.css";
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
