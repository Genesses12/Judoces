import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import ProdutoItens from "./components/Produtos/ProdutosItens";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <h1>Conheça todos os nossos sabores</h1>
      <ProdutoItens />
      <Footer />
    </>
  );
}

export default App;
