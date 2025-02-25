import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import ProdutoItens from "./components/Produtos/ProdutosItens";
import Footer from "./components/Footer/Footer";

import ProdutosListComplete from "./components/TodosOsProdutos/ProdutosListComplete";
import QuemSomos from "./components/QuemSomos/QuemSomos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/produtos" element={<ProdutosListComplete />} />
      </Routes>
      <ProdutoItens />
      <QuemSomos />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
