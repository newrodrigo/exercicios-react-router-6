import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-content-container container">
        <Link to="/">
          <h1 className="site-name">MeuSite</h1>
        </Link>
        <nav className="navbar">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            Início
          </NavLink>
          <NavLink
            to="/promotion"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            Promoção
          </NavLink>
          <NavLink
            to="sub"
            className={({ isActive }) => (isActive ? "menu-active" : "")}
          >
            Participar
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
