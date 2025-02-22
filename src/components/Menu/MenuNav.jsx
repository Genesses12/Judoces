import "./MenuNav.css";
import Logo from "../../assets/logo.png";
const MenuNav = () => {
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
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
