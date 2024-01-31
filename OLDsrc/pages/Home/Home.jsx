import CardData from "../../components/Card/Card";
import "./home.scss";

export default function Home() {
  return (
    <section className="content__home">
      <div className="banner">
        <img
          src="assets\home-banner.png"
          alt="Accueil-banner"
          className="banner__image"
        />
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </div>

      <CardData />
    </section>
  );
}
