import { Link, NavLink } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

export default function Error404() {
  return (
    <div className="error404">
      <h1 className="error404__title">Erreur 404</h1>
      <p className="error404__info">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error404__btn">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}
