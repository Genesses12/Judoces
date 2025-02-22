import "./produtosItens.css";
import CardItens from "../CardItens/CardItens";
import Bolos from "../../assets/imgProdutos/bg_bolos.png";
import Doces from "../../assets/imgProdutos/bg_doces.png";
import KiteFestas from "../../assets/imgProdutos/kit_festa.png";
import Salgados from "../../assets/imgProdutos/bg_salgados.png";

const ProdutoItens = () => {
  return (
    <div className="Container_Itens">
      <CardItens
        img={Bolos}
        texto="Bolos"
        link={"https://www.tudogostoso.com.br/receita/29124-bolo-simples.html"}
      />
      <CardItens
        img={Doces}
        texto="Doces"
        link={"https://www.tudogostoso.com.br/receita/29124-bolo-simples.html"}
      />
      <CardItens
        img={KiteFestas}
        texto="Kit festas"
        link={"https://www.tudogostoso.com.br/receita/29124-bolo-simples.html"}
      />
      <CardItens
        img={Salgados}
        texto="Salgados"
        link={"https://www.tudogostoso.com.br/receita/29124-bolo-simples.html"}
      />
    </div>
  );
};

export default ProdutoItens;
