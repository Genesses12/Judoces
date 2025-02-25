import "./MenuNav.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const MenuNav = () => {
  const whatsappNumber = "5511999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <nav className="menu-nav">
      <img src={Logo} alt="Logo da Empresa" className="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" aria-label="Ir para a página inicial">
            Início
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/produtos" aria-label="Ver os produtos">
            Produtos
          </Link>
        </li>
        <li className="nav-item">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
