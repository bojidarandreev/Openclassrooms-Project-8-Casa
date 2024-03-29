import { Link, NavLink } from "react-router-dom";
import "./navigation.scss";

export default function Navigation(props) {
  return (
    <header className="header">
      <nav>
        <div className="site-logo">
          <a href="/" title="Kasa">
            <img src="/assets/kasa-logo.svg" alt="logo-kasa" />
          </a>
        </div>
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
