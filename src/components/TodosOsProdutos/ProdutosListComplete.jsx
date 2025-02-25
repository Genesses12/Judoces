import "./ProdutosListComplete.css";
import CardItens from "../CardItens/CardItens";
import Pudim from "../../assets/imgProdutos/pudim.jpg";
import Doces from "../../assets/imgProdutos/promo_doces.jpg";
import KiteFestas from "../../assets/imgProdutos/kitCompleto.jpg";
import KitCasal from "../../assets/imgProdutos/kitcasal.jpg";
import { Title } from "../title/Title";

const ProdutosListComplete = () => {
  const whatsappNumber = "5511999999999";
  return (
    <div>
      <Title title="Conheça todos os nossos Produtos" />
      <div className="Container_Itens">
        <CardItens
          img={KitCasal}
          texto="Kit Namorados"
          link={`https://wa.me/${whatsappNumber}`}
        />
        <CardItens
          img={Doces}
          texto="kit Doces"
          link={`https://wa.me/${whatsappNumber}`}
        />
        <CardItens
          img={KiteFestas}
          texto="Kit Combo"
          link={`https://wa.me/${whatsappNumber}`}
        />
        <CardItens
          img={Pudim}
          texto="Pudim"
          link={`https://wa.me/${whatsappNumber}`}
        />
      </div>
    </div>
  );
};

export default ProdutosListComplete;
