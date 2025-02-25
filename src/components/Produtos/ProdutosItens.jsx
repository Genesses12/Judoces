import "./produtosItens.css";
import CardItens from "../CardItens/CardItens";
import Bolos from "../../assets/imgProdutos/bg_bolos.png";
import Doces from "../../assets/imgProdutos/bg_doces.png";
import KiteFestas from "../../assets/imgProdutos/kit_festa.png";
import Salgados from "../../assets/imgProdutos/bg_salgados.png";

const ProdutoItens = () => {
  const whatsappNumber = "5511999999999";
  return (
    <div>
      <div className="Container_Itens">
        <CardItens
          img={Bolos}
          texto="Bolos"
          link={`https://wa.me/${whatsappNumber}`}
        />
        <CardItens
          img={Doces}
          texto="Doces"
          link={`https://wa.me/${whatsappNumber}`}
        />
        <CardItens
          img={KiteFestas}
          texto="Kit festas"
          link={`https://wa.me/${whatsappNumber}`}
        />
        <CardItens
          img={Salgados}
          texto="Salgados"
          link={`https://wa.me/${whatsappNumber}`}
        />
      </div>
    </div>
  );
};

export default ProdutoItens;
