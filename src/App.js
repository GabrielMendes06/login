import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Home";
import Private from "./Pages/Private";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/private" element={<Private />}/>
    </Routes>
    </>
  );
}

export default App;
