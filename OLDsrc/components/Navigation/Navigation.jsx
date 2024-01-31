import { Link, NavLink } from "react-router-dom";
import "./navigation.scss";

export default function Navigation(props) {
  return (
    <header>
      <nav className="header">
        
          <a href="/" title="Kasa" className="header__logo">
            <img src="/assets/kasa-logo.svg" alt="logo-kasa" />
          </a>
        
        <ul className="header__nav">
          <li className="header__nav--item">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="header__nav--item">
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
