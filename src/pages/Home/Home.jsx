import CardData from "../../components/Card/Card";
import "./home.scss";

export default function Home() {
  return (
    <section className="home__content">
        
            <img
        src="assets\home-banner.png"
        alt="Accueil-banner"
        className="banner__image"
      />
      <h1 className="home__title">Chez vous, partout et ailleurs
      </h1>
      
      <CardData />
    </section>
  );
}
