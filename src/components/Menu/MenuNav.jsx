import "./MenuNav.css";
import Logo from "../../assets/logo.png";
const MenuNav = () => {
  const whatsappNumber = "5511999999999";
  return (
    <nav className="menu-nav">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <a href="./">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="">Produtos</a>
        </li>
        <li className="nav-item">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
