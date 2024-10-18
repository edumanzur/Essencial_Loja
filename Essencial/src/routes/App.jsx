import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';
import Cadastro from '../pages/Cadastro';
import Produtos from "../pages/Produtos";
import './App.css';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/"
              Component={MainPage}/>
              <Route path="/Cadastro"
              Component={Cadastro}/>
              <Route path="/Produtos"
              Component={Produtos}/>
          </Routes>
      </Router>
    </>
  );
}

export default App
