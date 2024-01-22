import Navigation from "../../components/Navigation/Navigation";
import Summary from "../../components/Summary/Summary";
import importInfoJs from "../../../src/assets/aboutInfo.json";


export default function About() {
  const readInfo = importInfoJs;

  console.log(readInfo);
  const title = readInfo[0].title;
  const details = readInfo[0].description;
  console.log( title, details)
  
  return (
    <>
    <Summary title="Fiabilité" details={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
	<Summary title="Respect" details={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
	<Summary title="Service" details={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
	<Summary title="Sécurité" details={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/></>
    
  );
  }