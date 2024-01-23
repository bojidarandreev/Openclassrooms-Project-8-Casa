import { Link, NavLink } from "react-router-dom";
import "./navigation.css";

export default function Navigation(props) {
  return (
    <header>
      <nav>
        <div className="site-logo">
          <a href="/" title="Kasa">
            <img src="/assets/kasa-logo.svg" alt="logo-kasa" />
          </a>
        </div>
        <ul className="navigation__menu">
          <li className="navigation__item">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
